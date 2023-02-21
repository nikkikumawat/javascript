
const para = document.querySelector('#wrapper p')

setInterval(() => {
    let dt = new Date()

    let day = dayname(dt.getDay())
    let date = dt.getDate()
    let month = monthname(dt.getMonth() + 1)
    let year = dt.getFullYear()
    let hours = dt.getHours()
    let minutes = dt.getMinutes()
    let seconds = dt.getSeconds()

    if (seconds < 10) {
        seconds = '0' + seconds
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (hours < 10) {
        hours = '0' + hours
    }

    let output = day + "," + date + "/" + month + "/" + year + "/" + hours + ":" + minutes + ":" + seconds

    para.innerHTML = output


}, 1000)

function dayname(day) {
    switch (day) {
        case 1: return 'Monday';
            break;
        case 2: return 'Tuesday';
            break;
        case 3: return 'Wednesday';
            break;
        case 4: return 'Thursday';
            break;
        case 5: return 'Friday';
            break;
        case 6: return 'Saturday';
            break;
        case 7: return 'Sunday';
            break;
        default: 'ERROR';
    }
}
function monthname(month) {
    switch (month) {
        case 1: return 'january';
            break;
        case 2: return 'February';
            break;
        case 3: return 'March';
            break;
        case 4: return 'April';
            break;
        case 5: return 'May';
            break;
        case 6: return 'june';
            break;
        case 7: return 'July';
            break;
        case 8: return 'August';
            break;
        case 9: return 'September';
            break;
        case 10: return 'October';
            break;
        case 11: return 'November';
            break;
        case 12: return 'December'
        default: 'ERROR';
    }

}


