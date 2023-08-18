$(document).ready(function(){

    var EmailLogin;
    var PasswordLogin;
    var users;


    if(localStorage.users !=null){
        users = JSON.parse(localStorage.users);
    }else{
        var users=[];
    }
    
    $("#EmailLogin").keyup(function(){
        EmailLogin = $("#EmailLogin").val(); 
        if(EmailLogin ===''){
            $(".errorLogin").addClass("alert alert-danger");
            $(".errorLogin p").html("* please Enter your Data"); 
            // document.getElementById("error").innerHTML = "* please Enter your Data";
        }else{
            $(".errorLogin").removeClass("alert alert-danger");
            $(".errorLogin p").html("");
            // document.getElementById("error").innerHTML = "";
            return true;
        }
    })
    $("#PasswordLogin").keyup(function(){
        PasswordLogin = $("#PasswordLogin").val();
        if(PasswordLogin.value ===''){
            $(".errorLogin").addClass("alert alert-danger");
            $(".errorLogin p").html("* please Enter your Data"); 
            // document.getElementById("error").innerHTML = "* please Enter your Data";
        }else{
            $(".errorLogin").removeClass("alert alert-danger");
            $(".errorLogin p").html("");
            // document.getElementById("error").innerHTML = "";
            return true;
        }
    })
    
    
    function checkUser(){
        for(var i =0 ;i <users.length ; i++){
            if(users[i].email === EmailLogin && users[i].password === PasswordLogin ){
                // alert("done");
                // localStorage.setItem("sessionusername" ,users[i].userName);
                $(".errorLogin").removeClass("alert alert-danger");
                $(".errorLogin").addClass("alert alert-success");
                $(".errorLogin p").html("Welcome " + users[i].userName); 
                location.href="./index.html";
                // document.getElementById("error").style.color="green";
                // document.getElementById("error").innerHTML= "Done";
            }else{
                $(".errorLogin").addClass("alert alert-danger");
                $(".errorLogin p").html("*incorrect email or password"); 
                    // document.getElementById("error").innerHTML= "*incorrect email or password";
            }
        }
    
    }
    
    $("#SubmitLogin").on("click" ,function(){
        checkUser();
    })


})