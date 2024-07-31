// Show Months Countdown
// Define a function called diff_months that calculates the difference in months between two given dates (dt2 and dt1).
function monthsDiff(dt2, dt1) {
    let diff =(dt2.getTime() - dt1.getTime()) / 1000; // Calculate the difference in milliseconds between the two dates.
    diff /= (60 * 60 * 24 * 7 * 4.345);   // Convert the difference from milliseconds to months by dividing it by the number of milliseconds in an hour, a day, a week, and the average of weeks in a month per year.
    return Math.abs(Math.round(diff)); // Round the result to the nearest integer using Math.round().
}

// Integrate Weather API//
async function getData() {
    try {
        const date = document.getElementById("weddingdate").value;
        //const endDate = new Date(date)  
        //const startdate = date.setDate(date.getDate() - 1);
        //console.log(startdate);
        console.log(date);
        
        const response = await fetch(`https://api.weatherbit.io/v2.0/history/daily?postal_code=40503&country=US&start_date=2024-07-29&end_date=${date}&key=0a9210a60976482a9a681ce70f7e4ac7&units=I`);
        const data = await response.json();
        console.log(data);
    } 
    catch (err) {
        console.log('uh oh');
    }
  }

// Validate Date Input//
function validateDate() {
    const date = document.getElementById("weddingdate").value;
    const formattedDate = new Date(date);
    const today = new Date();
    const errorMessageElem = document.getElementById("errorMessage");
    const monthsElem = document.getElementById("monthsMessage");

    if (formattedDate > today){
        errorMessageElem.style.display = "none";
        const months = monthsDiff(today, formattedDate)
        monthsElem.innerHTML = months + " Months Until Your \"I Do\" Day!";
        getData();

    } else {
        errorMessageElem.style.display = "block"; 
    }
}