$('#search').autocomplete({
    source: function(req,res) {
        $.ajax({
            url: "http://localhost:7000/autocomplete/"+req.term,
            dataType: "jsonp",
            type: "GET",
            data: {
                term: req.term
            },
            success: function(data) {
                res($.map(data, function(item) {
                    return {
                        label: item.text,//text comes from a collection of mongo
                        value: item.text
                    };
                }));
            },
            error: function(xhr) {
                alert(xhr.status + ' : ' + xhr.statusText);
            }
        });
    },
    select: function(event, ui) {

    }
});