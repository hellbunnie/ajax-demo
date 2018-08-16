
$('#contactform').on("submit", function (ev) {
    ev.preventDefault();
    $.ajax({url: "http://localhost:8082/send-email", method: "post",
        success: function(result){
            console.log(result);
            for (row in result) {
                $("#content").append("<tr><td>"+result[row].id+"</td><td>"+result[row].name+"</td></tr>");
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            alert("Status: " + textStatus); alert("Error: " + errorThrown); 
        }
    });
 return false;
});

