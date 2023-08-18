$(document).ready(function(){
    var  Name ;
    var  Email;
    var  Password;
    var  PasswordCon;
    var users;
if(localStorage.users !=null){
    users = JSON.parse(localStorage.users);
}else{
    var users=[];
}
$("#NameSignUp").keyup(function (){
            Name = $("#NameSignUp").val();
            let re=/[0-9]/;
                    if(Name === '' || Name === null){
                        $(".error").addClass("alert alert-danger");
                        $(".error p").html("*Enter your name")
                    }else if( Name.match(re)){
                        $(".error").addClass("alert alert-danger");
                        $(".error p").html("*Enter your name string")
                    }else{
                        $(".error").removeClass("alert alert-danger");
                        $(".error p").html("")
                    }
    })
    $("#EmailSignUp").keyup(function (){
            Email = $("#EmailSignUp").val();
            if(Email === '' || Email=== null){
                $(".error").addClass("alert alert-danger");
                $(".error p").html("**Enter your email")
            }else if(!Email.includes("@")){
                $(".error").addClass("alert alert-danger");
                $(".error p").html("*Email not valid");
            }else{
                $(".error").removeClass("alert alert-danger");
                $(".error p").html("")
                
            }
    })    

    $("#PasswordSignUp").keyup(function (){
        Password = $("#PasswordSignUp").val();
        if(Password === '' || Password === null){
            $(".error").addClass("alert alert-danger");
            $(".error p").html("*Enter your password"); 
        }else if(Password.length < 6 ){
            $(".error").addClass("alert alert-danger");
            $(".error p").html("*password must be greater than 6 numbers")
            d
        }else{
            $(".error").removeClass("alert alert-danger");
            $(".error p").html("")
        }
    }   )  

    $("#PasswordConSignUp").keyup(function (){
        PasswordCon = $("#PasswordConSignUp").val();
        if(PasswordCon  === '' || PasswordCon  === null){
            $(".error").addClass("alert alert-danger");
            $(".error p").html("*Enter your Confirm password"); 
        }else if(PasswordCon .trim() !== Password.trim() ){
            $(".error").addClass("alert alert-danger");
            $(".error p").html("*password must be confirm"); 
        }else if(PasswordCon .length < 6 ){
            $(".error").addClass("alert alert-danger");
            $(".error p").html("*password must be greater than 6 numbers"); 
        }else{
            $(".error").removeClass("alert alert-danger");
            $(".error p").html("")
        }
    })    

    function createData(){
        if( Name && Email && Password !=''){
            var user={
                userName : Name,
                email : Email,
                password : Password,
            }
            users.push(user);
            localStorage.setItem('users' , JSON.stringify(users));
            // location.assign("#LoginModel")
        }else{
            $(".error").addClass("alert alert-danger");
            $(".error p").html("*please Enter Your Data"); 
            
        }
    }


$("#SubmitSignUp").on("click" ,function(){
    createData();
})


})