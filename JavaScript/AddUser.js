// Add User JavaScript: allows the admin to add a new user account.

function addUser() {
    fname=document.getElementById('fname');
    lname=document.getElementById('lname');
    pwd=document.getElementById('pwd');
    email=document.getElementById('email');
    pcode=document.getElementById('pcode');
    check=false;

    if (fname.value.search(/^[A-Za-z]+$/)==-1 || lname.value.search(/^[A-Za-z]+$/)==-1 || pwd.value.search(/^[a-zA-Z0-9!@#$%^&*]{8,20}$/)==-1 || email.value.search(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)==-1|| pcode.value.search(/^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/)==-1){
        check=false;
        alert("Please Edit the file again, you entered invalid data!");
        
        if(fname.value.search(/^[A-Za-z]+$/)==-1 ){
            var changeFirstName=document.getElementById('newFirstName');
            changeFirstName.innerHTML="Invalid first name";
            changeFirstName.style.color="red";
        }

        if (lname.value.search(/^[A-Za-z]+$/)==-1){
            var changeLastName=document.getElementById('newLastName');
            changeLastName.innerHTML="Invalid last name";
            changeLastName.style.color="red";
        }

        if(pwd.value.search(/^[a-zA-Z0-9!@#$%^&*]{8,32}$/)==-1 ){
            var changePassword=document.getElementById('newPassword');
            changePassword.innerHTML="Invalid password";
            changePassword.style.color="red";
        }
    
        if(email.value.search(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)==-1){
            var changeEmail=document.getElementById('newEmail');
            changeEmail.innerHTML="Invalid email address";
            changeEmail.style.color="red";
        }

        if(pcode.value.search(/^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/)==-1){
            var changePostalCode=document.getElementById('newPostalCode');
            changePostalCode.innerHTML="Invalid postal code";
            changePostalCode.style.color="red";
        }
    }

    if(fname.value.search(/^[A-Za-z]+$/)==0 && lname.value.search(/^[A-Za-z]+$/)==0 && email.value.search(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)==0 && pwd.value.search(/^[a-zA-Z0-9!@#$%^&*]{8,20}$/)==0 && pcode.value.search(/^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/)==0){
        check=true;
    }

    if (fname.value.search(/^[A-Za-z]+$/)==0){
        var changeFirstName=document.getElementById('newFirstName');
        changeFirstName.innerHTML="";
    }

    if (lname.value.search(/^[A-Za-z]+$/)==0){
        var changeLastName=document.getElementById('newLastName');
        changeLastName.innerHTML = "";
    }

    if(pwd.value.search(/^[a-zA-Z0-9!@#$%^&*]{8,20}$/)==0 ){
        var changePassword=document.getElementById('newPassword');
        changePassword.innerHTML="";
    }

    if(email.value.search(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)==0){
        var changeEmail=document.getElementById('newEmail');
        changeEmail.innerHTML="";
    }

    if(pcode.value.search(/^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/)==0){
        var changePostalCode=document.getElementById('newPostalCode');
        changePostalCode.innerHTML="";
    }

    if (check) {
        alert("The new user account was successfully added!");
    }
} // end of addUser function
