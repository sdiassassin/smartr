function login(){

      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
   
        $.ajax({
                type:   "POST",
                url:    "./backend/login.php",
                headers: {
                    "Access-Control-Allow-Origin":"*"
                    // Access-Control-Allow-Origin
                    //"Access-Control-Allow-Headers" : "Content-Type"

                },
                data:   {
                   email: email,
                   password: password
                },
                dataType: 'JSON',
                success: function (response){
                	if(response[0].email == email && response[0].password == password)
	                	{
	                		
	                		location.href = 'first.html';
	                	}
                  
                },
                error: function () {
                    console.log ("ERROR:");
                }
            });
   

}