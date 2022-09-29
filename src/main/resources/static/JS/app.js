var apimock = apimock;
var app = (function (){
    var author;
    var blueprintName;

    function getName() {
            $("#name").text(author + "'s " + "blueprints:");
        }

     function getNameAuthorBlueprints() {
        author = $("#author").val();
        if (author === "") {
            alert("Debe ingresar un nombre");
        } else {
            apimock.getBlueprintsByAuthor(author,parceroData);
        }
     }

     var parceroData = function( data) {
         $("#table tbody").empty();
         if (data === undefined) {
             alert("No existe el autor");
             $("#name").empty();
             $("#points").text("Total Points");
         } else {
             getName();
             const datanew = data.map((elemento) => {
                 return {
                     name: elemento.name,
                     puntos: elemento.points.length
                 }
             });

             datanew.map((elementos) => {
                 $("#table > tbody:last").append($("<tr><td>" + elementos.name + "</td><td>" + elementos.puntos.toString() +
                     "</td><td>" + "<button  id=" + elementos.name + " onclick=app.getBlueprintByAuthorAndName(this)>open</button>" + "</td>"));
             });

             const totalPuntos = datanew.reduce((suma, {puntos}) => suma + puntos, 0);

             $("#points").text(totalPuntos);
            }
         }
         function getBlueprintByAuthorAndName(data) {
                 author = $("#author").val();
                 blueprintName = data.id;
                 apimock.getBlueprintsByNameAndAuthor(blueprintName, author, pintaparcero);
             }
         function pintaparcero(data) {
         console.log("messichikito");
//                 getBluePrintName();
                 const puntos = data.points;
                 var c = document.getElementById("myCanvas");
                 var ctx = c.getContext("2d");
                 ctx.clearRect(0, 0, c.width, c.height);
                 ctx.restore();
                 ctx.beginPath();
                 for (let i = 1; i < puntos.length; i++) {
                     ctx.moveTo(puntos[i - 1].x, puntos[i - 1].y);
                     ctx.lineTo(puntos[i].x, puntos[i].y);
                     if (i === puntos.length - 1) {
                         ctx.moveTo(puntos[i].x, puntos[i].y);
                         ctx.lineTo(puntos[0].x, puntos[0].y);
                     }
                 }
                 ctx.stroke();
             }

     return{
        getBlueprintByAuthorAndName:getBlueprintByAuthorAndName,
        getNameAuthorBlueprints: getNameAuthorBlueprints
     }
})();