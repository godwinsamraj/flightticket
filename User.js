var userEmail;
window.onload=function(){userEmail=localStorage.getItem('key');}
function addFlightToUser(flightId){
    if(document.getElementById("avltck").value==0) alert("No Tickets Available");
    else{
        fetch("http://localhost:8080/api/v3/user/bookticket/"+userEmail+"/"+flightId,{method:"PUT"})
        window.location.reload();
    }
}
function searchFlight() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName("demo");
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="";           
        }
    }
}
function showTickets(){
    localStorage.setItem('key',userEmail);
    window.location="MyBooking.html";
}
fetch("http://localhost:8080/api/v2/flight")
.then(res=>{
    return res.json();
}).then(data=>{
    data.forEach(flight=>{
        const markup=
        `<tr class="demo">
            <th>${flight.name}</th><th>${flight.arrivalHour}:${flight.arrivalMinute}</th>
            <th>${flight.arrivalDate}-${flight.arrivalMonth}-${flight.arrivalYear}</th>
            <th>${flight.arrivalLocation}</th><th>${flight.depatureHour}:${flight.depatureMinute}</th>
            <th>${flight.depatureDate}-${flight.depatureMonth}-${flight.depatureYear}</th>
            <th>${flight.depatureLocation}</th><th onclick="addFlightToUser(${flight.id})">ADD</th>
            <th id="avltck">avl tck: ${flight.bookedTickets===null ? 60 : 60-flight.bookedTickets.split("-").length}</th>
        </tr>`;
        document.querySelector('table').insertAdjacentHTML('beforeend',markup);
    });
})
.catch(error=>console.log(error));