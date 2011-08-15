function pad(n, digits) {
    n = n.toString();
    numZeroes = digits - n.length;
    for (i = 0; i < numZeroes; i++) {
        n = '0' + n;
    }

    return n;
}

function GetTimeAsString(currentTime) {
    var month = currentTime.getMonth() + 1;
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var ampm = "AM";

    if (hours > 11) {
        ampm = "PM";
        hours -= 12;
    } else if (hours == 0) {
        hours = 12;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    output = month + "/" + day + "/" + year + " " + hours + ":" + minutes + ":"
        + seconds + " " + ampm;

    return output;
}

function UpdateCurrentTime() {
    dateNow = new Date();
    var timeString = GetTimeAsString(dateNow);
    delete dateNow;

    document.getElementById("currenttime").innerHTML = "<b>Current Time</b>: "
        + timeString;
    setTimeout(UpdateCurrentTime, 1000);
}

function Countdown(eventName, endYear, endMonth, endDay, endHour, endMinute,
                   endSecond, divID){
    // Subtract one from month to be zero-indexed
    endMonth = endMonth - 1;
    dateFuture = new Date(endYear,endMonth,endDay,endHour,endMinute,endSecond);

    //grab current date
    dateNow = new Date();

    //calc milliseconds between dates
    amount = dateFuture.getTime() - dateNow.getTime();

    days=0;
    hours=0;
    mins=0;
    secs=0;

    if (amount >= 0) {
        amount = Math.floor(amount/1000);

        days=Math.floor(amount/86400);
        amount=amount%86400;

        hours=Math.floor(amount/3600);
        amount=amount%3600;

        mins=Math.floor(amount/60);
        amount=amount%60;

        secs=Math.floor(amount);

        countdownTimeString = pad(days, 2) + ":" + pad(hours, 2) + ":" +
            pad(mins, 2) + ":" + pad(secs, 2);

        out  = "<table border=\"0\">";
        out += "  <tr><td colspan=\"4\" class=\"eventName\">" + eventName +
            "</td></tr>";
        out += "        <tr><td colspan=\"4\" class=\"futuredate\">" +
            GetTimeAsString(dateFuture) + "</td></tr>";
        out += "        <tr class=\"timer\"><td>" + pad(days, 2) + "</td><td>" +
            pad(hours, 2) + "</td><td>" + pad(mins, 2) + "</td><td>" +
            pad(secs, 2) + "</td></tr>";
        out += "        <tr class=\"labels\"><td>Days</td><td>Hours</td>" +
            "<td>Min</td><td>Sec</td></tr>";
        out += "    </table>";

        document.getElementById(divID).innerHTML=out;

        endMonth = endMonth + 1;
        setTimeout(function() {UpdateCurrentTime(); Countdown(
            eventName, endYear, endMonth, endDay, endHour, endMinute, endSecond,
            divID)}, 1000);
    }

    delete dateNow;
    delete dateFuture;
}
