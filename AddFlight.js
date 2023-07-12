function handleSubmit(){
    var name=document.getElementById("name").value;
    var arrivaltime=document.getElementById("arrivaltime").value.split(":");
    var arrivalHour=arrivaltime[0];
    var arrivalMinute=arrivaltime[1];
    var arrivalday=document.getElementById("arrivaldate").value.split("-");
    var arrivalDate=arrivalday[0];
    var arrivalMonth=arrivalday[1];
    var arrivalYear=arrivalday[2];
    var arrivalLocation=document.getElementById("arrivallocation").value;
    var depaturetime=document.getElementById("depaturetime").value.split(":");
    var depatureHour=depaturetime[0];
    var depatureMinute=depaturetime[1];
    var depatureday=document.getElementById("depaturedate").value.split("-");
    var depatureDate=depatureday[0];
    var depatureMonth=depatureday[1];
    var depatureYear=depatureday[2];
    var depatureLocation=document.getElementById("depaturelocation").value;
    if(name==="") alert("Enter Name");
    else if(arrivaltime.length===0) alert("Enter ArrivalTime");
    else if(arrivaldate.length===0) alert("Enter ArrivalDate");
    else if(arrivalLocation==="") alert("Enter ArrivalLocation");
    else if(depaturetime.length===0) alert("Enter DepatureTime");
    else if(depaturedate.length===0) alert("Enter depatureDate");
    else if(depatureLocation==="") alert("Enter depatureLocation");
    else{
        const flight={name,arrivalHour,arrivalMinute,arrivalDate,arrivalMonth,arrivalYear,arrivalLocation,depatureHour,depatureMinute,depatureDate,depatureMonth,depatureYear,depatureLocation};
        fetch("http://localhost:8080/api/v2/flight/add",{method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(flight)})
        window.location="Admin.html";
    }
}