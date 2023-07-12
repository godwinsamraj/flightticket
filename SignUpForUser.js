function handleSubmit(){
    var name=document.getElementById("username").value;
    var age=document.getElementById("age").value;
    var phone=document.getElementById("phone").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if(username==="") alert("Enter username");
    else if(age=="") alert("Enter age");
    else if(phone==="") alert("Enter phone");
    else if(email==="") alert("Enter email");
    else if(password==="") alert("Enter password");
    else{
        const admin={name,age,phone,email,password};
        fetch("http://localhost:8080/api/v3/user/add",{method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(admin)})
        window.location="LoginForUser.html";
    }
}