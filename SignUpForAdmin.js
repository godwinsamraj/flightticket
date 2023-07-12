function handleSubmit(){
    var name=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var admincode=document.getElementById("admincode").value;
    if(username==="") alert("Enter username");
    else if(email==="") alert("Enter email");
    else if(password==="") alert("Enter password");
    else if(admincode==="") alert("Enter admincode");
    else{
        const admin={name,email,password,admincode};
        fetch("http://localhost:8080/api/v1/admin/add",{method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(admin)})
        window.location="LoginForAdmin.html";
    }
}