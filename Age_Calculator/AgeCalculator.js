let btn = document.getElementById("btn");
let userinnput = document.getElementById("date");
let msg = document.getElementById("msg");

userinnput.max = new Date().toISOString().split("T")[0];

function CalculateAge() {

    let BirthDate = new Date(userinnput.value);

    let d1 = BirthDate.getDate();
    let m1 = BirthDate.getMonth() + 1; 3
    let y1 = BirthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;////returns the month (0-11) plus one to convert it to a 1-12 range
    let y2 = today.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;//// Calculates the initial year difference (2024 - 1990 = 34).


    if (m2 >= m1) {
        m3 = m2 - m1;
    }
    else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    }

    else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    //// console.log(y3,m3,d3);
    msg.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;
}



function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

btn.addEventListener("click", CalculateAge);
