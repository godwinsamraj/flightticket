var userEmail=localStorage.getItem('key');
var count=0;
fetch("http://localhost:8080/api/v3/user/bookedTickets/"+userEmail)
    .then(res=>{
        return res.json();
    }).then(data=>{
        data.forEach(flight=>{
            const markup=
            `<tr>
                <th>${flight.name}</th><th>${flight.arrivalHour}:${flight.arrivalMinute}</th>
                <th>${flight.arrivalDate}-${flight.arrivalMonth}-${flight.arrivalYear}</th>
                <th>${flight.arrivalLocation}</th><th>${flight.depatureHour}:${flight.depatureMinute}</th>
                <th>${flight.depatureDate}-${flight.depatureMonth}-${flight.depatureYear}</th>
                <th>${flight.depatureLocation}</th><th id="avltck">ticket no ${++count}</th>
            </tr>`;
            document.querySelector('table').insertAdjacentHTML('beforeend',markup);
        })
})
.catch(error=>console.log(error));