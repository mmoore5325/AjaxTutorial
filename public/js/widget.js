var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        // console.log(xhr.responseText);
        // console.log(typeof xhr.responseText);
        var employees = JSON.parse(xhr.responseText);
        // console.log(typeof employees);
        var statusHTML = '<ul class="bulleted">';
        for (var i = 0; i < employees.length; i++) {
            if (employees[i].inoffice == true) {
                statusHTML += '<li class="in">';
            } else {
                statusHTML += '<li class="out">';
            };
            statusHTML += employees[i].name;
            statusHTML += '</li>'
        }
        statusHTML += '</ul>';
        document.getElementById("employeeList").innerHTML = statusHTML;
    }
};
xhr.open('GET', '../data/employee.json')
xhr.send();

var openRooms = new XMLHttpRequest();

openRooms.onreadystatechange = function() {
    if (openRooms.readyState === 4) {
        console.log("OPEN rOOMS")
        var rooms = JSON.parse(openRooms.responseText);
        var roomStatus = "<ul class='rooms'>";
        for (var k = 0; k < rooms.length; k++) {
            if (rooms[k].availables == true) {
                roomStatus += "<li class='full'>";
                console.log(rooms[k].availables + " " + rooms[k].room)
            } else {
                roomStatus += "<li class='empty'>";
            }
            roomStatus += rooms[k].room;
            roomStatus += "</li>";

        };
        roomStatus += "</ul>";
        document.getElementById("roomList").innerHTML = roomStatus;
    }
}
openRooms.open('GET', '../data/rooms.json');
openRooms.send();