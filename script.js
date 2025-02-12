let calendar;

// async function init() {
//     try {
//         const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(".json")}`);
//     } catch (error) {
//         console.error("Error:", error);
//     }
//     const responseData = await response.text();
//     const data = responseData.split("var confData =")[1].split("]}]};")[0]+"]}]}"
//     calendar = JSON.parse(data).calendar;
// }

async function getCalendar() {
    try {
        const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent("https://mawaqit.net/fr/mosquee-91240-saint-michel-sur-orge")}`);
    } catch (error) {
        console.error("Error:", error);
    }
    const responseData = await response.text();
    const data = responseData.split("var confData =")[1].split("]}]};")[0]+"]}]}"
    calendar = JSON.parse(data).calendar;
}

async function getCalendar2() {

    console.log(calendar);
    // console.log(data);
    const date = new Date();
    const month = date.getMonth();
    console.log("test2");
    // console.log(month);
    // console.log(calendar[month]);
    // console.log(calendar[month].length);
    for (let i = 1; i <= 29; i++) {
        addTime(i, calendar, month);
    }
}


async function addTime(day, calendar, month) {
    let prayerTimeElement = document.getElementById("prayer-times");
    let newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${day}</td><td>${calendar[month][day][0]}</td><td>${calendar[month][day][2]}</td><td>${calendar[month][day][3]}</td><td>${calendar[month][day][4]}</td><td>${calendar[month][day][5]}</td><td class="chourouk">${calendar[month][day][1]}</td><td class="jumua"></td>`;
    console.log(calendar[0][1][0]);
    console.log(month);
    console.log(day);
    prayerTimeElement.appendChild(newRow);
}

// init();
getCalendar();
getCalendar2();
console.log("test");
