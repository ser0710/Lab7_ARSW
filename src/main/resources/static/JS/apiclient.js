var apiclient = (function(){
    return {
        getBlueprintsByAuthor: function(author, callback){
        callback(
            JSON.parse($.ajax({type: 'GET', url: 'blueprints/' + author, async: false}).responseText)
        )},

        getBlueprintByAuthorAndName: function(author, bpname, callback){
        var link = author + "/" + bpname;
        callback(
            JSON.parse($.ajax({type: 'GET', url: 'blueprints/' + link, async: false}).responseText)
        )},

        addPoints: function(x, y, author,bpname, callback){
        var link = author + "/" + bpname;
        var datos = JSON.stringify({author:author,"points":[{"x":x,"y":y}],"name":bpname});
        $.ajax({
            url: "blueprints/"+link,
            type: 'PUT',
            data: datos,
            contentType: "application/json"
        });
        callback();
        },

        deleteBp: function(author, blueprintName, callback){
            var link = author + "/" + blueprintName;
            $.ajax({
                url: "blueprints/"+link,
                type: 'DELETE'

            });
            callback();
        },

        createBp: function(author, bpName, callback){
            var link = author;
            var datos = JSON.stringify({author:author,"points":[{"x": 0, "y": 0}],"name":bpName});
            console.log(datos);
            $.ajax({
                url: "blueprints/"+link,
                type: "POST",
                data: datos,
                contentType: "application/json"
            })
            callback();
        }
    }
})();
