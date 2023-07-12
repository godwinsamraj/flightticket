function handleSubmit(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if(email==="") alert("Enter email");
    else if(password==="") alert("Enter password");
    else{
        fetch("http://localhost:8080/api/v1/admin/loginAdmin/"+email+"/"+password,{method:"POST"})
        .then((data)=>{return data.json()})
        .then((evt)=>{
            if(evt){
                localStorage.setItem('key',email);
                window.location="Admin.html";
            }
            else alert("Username or Password is incorrect");
        })
    }
}