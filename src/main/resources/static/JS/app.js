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
             //$("#user-points").empty();
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
                     "</td><td>" + "<button  id=" + elementos.name + ">open</button>" + "</td>"));
             });

             const totalPuntos = datanew.reduce((suma, {puntos}) => suma + puntos, 0);

             $("#points").text(totalPuntos);
            }
         }

     return{
        getNameAuthorBlueprints: getNameAuthorBlueprints
     }
})();