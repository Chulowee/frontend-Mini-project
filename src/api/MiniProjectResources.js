export default {
    createBoking: (booking) => fetch(
        "http://localhost:8080/api/booking", {
            mode: 'cors',
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(booking)
        })

}