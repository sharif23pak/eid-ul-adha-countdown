
function updateCountdown() {

    var currentDate = new Date();

    var eidUlAzhaDate = new Date(2024, 5, 16);
    var timeDifference = eidUlAzhaDate.getTime() - currentDate.getTime();

    var secondsRemaining = Math.floor(timeDifference / 1000);
    var minutesRemaining = Math.floor(secondsRemaining / 60);
    var hoursRemaining = Math.floor(minutesRemaining / 60);
    var daysRemaining = Math.floor(hoursRemaining / 24);

    hoursRemaining %= 24;
    minutesRemaining %= 60;
    secondsRemaining %= 60;

    var countdownElement = document.getElementById("countdown");
    countdownElement.textContent = "Eid ul Azha tak " + daysRemaining + " din, " + hoursRemaining + " ghante, " + minutesRemaining + " minute aur " + secondsRemaining + " seconds bache hain.";
}

setInterval(updateCountdown, 1000);

updateCountdown();
