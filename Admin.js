function deleteFlight(flightId){
    fetch("http://localhost:8080/api/v2/flight/delete/"+flightId,{method:"DELETE"})
    .then((data)=>{return data.json()})
    .then((evt)=>{console.log(evt)})
    window.location.reload();
}
function getPassengers(flightId){
    localStorage.setItem('key',flightId);
    window.location="Passengers.html";
}
fetch("http://localhost:8080/api/v2/flight")
.then(res=>{
    return res.json();
}).then(data=>{
    data.forEach(flight=>{
        const markup=
        `<tr>
            <th onclick="getPassengers(${flight.id})">${flight.name}</th><th>${flight.arrivalHour}:${flight.arrivalMinute}</th>
            <th>${flight.arrivalDate}-${flight.arrivalMonth}-${flight.arrivalYear}</th>
            <th>${flight.arrivalLocation}</th><th>${flight.depatureHour}:${flight.depatureMinute}</th>
            <th>${flight.depatureDate}-${flight.depatureMonth}-${flight.depatureYear}</th>
            <th>${flight.depatureLocation}</th><th onclick="deleteFlight(${flight.id})">REMOVE</th>
            <th id="avltck">avl tck: ${flight.bookedTickets===null ? 60 : 60-flight.bookedTickets.split("-").length}</th>
        </tr>`;
        document.querySelector('table').insertAdjacentHTML('beforeend',markup);
    });
})
.catch(error=>console.log(error));