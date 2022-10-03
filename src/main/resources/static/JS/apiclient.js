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

        addPoints: function(author,bpname,points){
        var link = author + "/" + bpname;
        $.ajax({
            url: "blueprints/"+link,
            type: 'PUT',
            data: '{"prop1":1000,"prop2":"papas"}',
            contentType: "application/json"
        });
        }
    }
})();