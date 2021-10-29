let bookNowBtn = document.getElementById("bookNow")
bookNowBtn.addEventListener("click", function () {
    let userName = document.getElementById("userName")
    let userNameVal = userName.value

    let userEmail = document.getElementById("userEmail")
    let userEmailVal = userEmail.value

    let roomType = document.getElementById("roomType")
    let roomTypeVal = roomType.value

    let aDate = document.getElementById("aDate")
    let aDateVal = aDate.value

    let dDate = document.getElementById("dDate")
    let dDateVal = dDate.value

    let sRequest = document.getElementById("sRequest")
    let sRequestVal = sRequest.value

    BookNow(userNameVal, userEmailVal, roomTypeVal, aDateVal, dDateVal, sRequestVal)
})

function BookNow(userName, userEmail, roomType, aDate, dDate, sRequest) {
    let url = 'https://api.sheety.co/b0388b3fdb8e9911c2bc43abcb013008/bookingApp/bookings';
    let body = {
        booking: {
            name: userName,
            email: userEmail,
            roomtype: roomType,
            arrivaldate: aDate,
            departuredate: dDate,
            specialRequest: sRequest
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            // Do something with object
            console.log(json.booking);
            alert(json.booking.name + " added in the list!")
        });
}