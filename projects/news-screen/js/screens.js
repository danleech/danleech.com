function setDateAndTime() {
    var today = new Date();
    var y = today.getFullYear();
    var mo = today.getMonth() + 1;
    switch (mo) {
        case 1:
            mo = "January";
            break;
        case 2:
            mo = "February";
            break;
        case 3:
            mo = "March";
            break;
        case 4:
            mo = "April";
            break;
        case 5:
            mo = "May";
            break;
        case 6:
            mo = "June";
            break;
        case 7:
            mo = "July";
            break;
        case 8:
            mo = "August";
            break;
        case 9:
            mo = "September";
            break;
        case 10:
            mo = "October";
            break;
        case 11:
            mo = "November";
            break;
        case 12:
            mo = "December";
            break;
        default:
            mo = "Unknown";
    }
    var d = today.getDate();
    switch (d) {
        case 1:
        case 21:
        case 31:
            d = d + "st";
            break;
        case 2:
        case 22:
            d = d + "nd";
            break;
        case 3:
        case 23:
            d = d + "rd";
            break;
        default:
            d = d + "th";
    }
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById("date").innerHTML = d + " " + mo + " " + y;
    document.getElementById("time").innerHTML = h + ":" + m;
    t = setTimeout("setDateAndTime()", 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function screens() {
    setDateAndTime();
}