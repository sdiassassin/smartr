function send_term(){
      //var data = document.getElementById('editor').value;
    var data = CKEDITOR.instances.editor.getData();
    var name = 'term';
      console.log(data);
      console.log(name);
        $.ajax({
                type:   "POST",
                url:    "./backend/term.php",
                headers: {
                    "Access-Control-Allow-Origin":"*" ,
                },
                data:   {
                  "data": data,
                  "name": name
                },
                dataType: 'JSON',
                success: function(res){
                    alert(res.data);
                },
                error: function (err) {
                    alert("ERROR:");
                    console.log ("ERROR:");
                }
            });
       }

function init_term(){

  $.ajax({
            type:   "POST",
            url:    "./backend/term.php",
            headers: {
                "Access-Control-Allow-Origin":"*" ,
                // Access-Control-Allow-Origin
                //"Access-Control-Allow-Headers" : "Content-Type"

            },
            data:   {
            },
            dataType: 'JSON',
            success: function(response){
                CKEDITOR.instances.editor.setData(response[0].content);
            },
            error: function(response){
                console.log ("ERROR:"+response);
            }
        });
}

function home_term(){

    $.ajax({
        type:   "POST",
        url:    "./backend/term.php",
        headers: {
            "Access-Control-Allow-Origin":"*" ,
            // Access-Control-Allow-Origin
            //"Access-Control-Allow-Headers" : "Content-Type"

        },
        data:   {
        },
        dataType: 'JSON',
        success: function(response){
            document.getElementById("term").innerHTML = response[0].content;
            //CKEDITOR.instances.editor.setData(response[0].content);
        },
        error: function(response){
            console.log ("ERROR:"+response);
        }
    });
}