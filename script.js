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
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://mawaqit.net/fr/mosquee-91240-saint-michel-sur-orge`);
        const responseData = await response.text();
        const data = responseData.split("var confData =")[1].split("]}]};")[0] + "]}]}";

        const calendar = JSON.parse(data).calendar;
        console.log("Structure complète de calendar :", calendar);

        const date = new Date();
        let month = date.getMonth(); // Vérifie si +1 est nécessaire
        month += 1;
        
        const moisElement = document.getElementById("mois");

        console.log("Mois actuel :", month);
        console.log("Données du mois :", calendar[month]);

        if (month == 0) {
            moisElement.innerText = "Janvier";
        } else if (month == 1) {
            moisElement.innerText = "Février";
        } else if (month == 2) {
            moisElement.innerText = "Mars";
        } else if (month == 3) {
            moisElement.innerText = "Avril";
        } else if (month == 4) {
            moisElement.innerText = "Mai";
        } else if (month == 5) {
            moisElement.innerText = "Juin";
        } else if (month == 6) {
            moisElement.innerText = "Juillet";
        } else if (month == 7) {
            moisElement.innerText = "Ao t";
        } else if (month == 8) {
            moisElement.innerText = "Septembre";
        } else if (month == 9) {
            moisElement.innerText = "Octobre";
        } else if (month == 10) {
            moisElement.innerText = "Novembre";
        } else if (month == 11) {
            moisElement.innerText = "Décembre";
        }

        if (!calendar[month]) {
            console.error("calendar[month] est indéfini !");
            return;
        }

        if (typeof calendar[month] !== "object") {
            console.error("calendar[month] n'est ni un objet ni un tableau :", typeof calendar[month]);
            return;
        }

        // Convertir l'objet en tableau
        const daysArray = Object.values(calendar[month]);
        console.log("Nombre de jours :", daysArray.length);

        for (let i = 1; i <= daysArray.length; i++) {
            addTime(i, calendar, month);
        }

    } catch (error) {
        console.error("Error:", error);
    }
}




async function addTime(day, calendar, month) {
    let prayerTimeElement = document.getElementById("prayer-times");
    let newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${day}</td><td>${calendar[month][day][0]}</td><td>${calendar[month][day][2]}</td><td>${calendar[month][day][3]}</td><td>${calendar[month][day][4]}</td><td>${calendar[month][day][5]}</td><td class="chourouk">${calendar[month][day][1]}</td><td class="jumua"></td>`;
    // console.log(calendar[0][1][0]);
    // console.log(month);
    // console.log(day);
    prayerTimeElement.appendChild(newRow);
}

// init();
getCalendar();
