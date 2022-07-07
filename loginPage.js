var uservalidate=false;
var passvalidate=false;
function validation(){
this.userValidation()
 this.passwordValidation()
 if(uservalidate==true && passvalidate==true){
    window.location.href="sample.html"
 }
}
function userValidation(){
    var userlength =document.getElementById("username").value.length;

    if((userlength < 3 && userlength>0) || (userlength > 10)){
        document.getElementById("usercheck").style.display='block'
        document.getElementById("usercheck-none").style.display='none'
        }
        else if(userlength > 2 && userlength < 11){  
            uservalidate =true;
        }
        else { 
            document.getElementById("usercheck-none").style.display='block'
            document.getElementById("usercheck").style.display='none'
        }
}
function passwordValidation(){
    var passlength =document.getElementById("password").value.length;
     if((passlength < 5 && passlength>0)|| (passlength > 12)){
        document.getElementById("passcheck").style.display='block'
        document.getElementById("passcheck-none").style.display='none'
        }
        else if(passlength > 4 && passlength < 13){  
            passvalidate =true;
        }
        else { 
            document.getElementById("passcheck-none").style.display='block'
            document.getElementById("passcheck").style.display='none'
        }
}
