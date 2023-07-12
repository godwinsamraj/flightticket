var flightId=localStorage.getItem('key');
var count=0;
fetch("http://localhost:8080/api/v2/flight/bookedTickets/"+flightId)
    .then(res=>{
        return res.json();
    }).then(data=>{
        data.forEach(user=>{
            const markup=
            `<tr>
                <th>${user.name}</th><th>${user.age}</th><th>${user.phone}</th><th>${user.email}</th>
            </tr>`;
            document.querySelector('table').insertAdjacentHTML('beforeend',markup);
        })
})
.catch(error=>console.log(error));