// Show Months Countdown
// Define a function called diff_months that calculates the difference in months between two given dates (dt2 and dt1).
function monthsDiff(dt2, dt1) {
    let diff =(dt2.getTime() - dt1.getTime()) / 1000; // Calculate the difference in milliseconds between the two dates.
    diff /= (60 * 60 * 24 * 7 * 4.345);   // Convert the difference from milliseconds to months by dividing it by the number of milliseconds in an hour, a day, a week, and the average of weeks in a month per year.
    return Math.abs(Math.round(diff)); // Round the result to the nearest integer using Math.round().
}

//Get Formatted Date for API Requirement
function getFormattedDate(date) {
    let year = date.toLocaleString("default", { year: "numeric" });
    let month = date.toLocaleString("default", { month: "2-digit" });
    let day = date.toLocaleString("default", { day: "2-digit" });

    let formattedDate = year + "-" + month + "-" + day; // Generate yyyy-mm-dd date string
    return formattedDate;
}

// Integrate Weather API for API Requirement--I'm SURE there's a better way to do this, but this worked at least.
async function getData() {
    try {
        const date = document.getElementById("weddingdate").value;
        const newdate = new Date(date);
        const finaldate = new Date(date);
        const enddate = new Date(newdate.setFullYear(newdate.getFullYear() - 1));
        const date2 = new Date(finaldate.setFullYear(finaldate.getFullYear() - 1));   
        const startdate = new Date(date2.setDate(date2.getDate() - 1));
        const startDate = getFormattedDate(startdate);
        const endDate = getFormattedDate(enddate);
       
        console.log(date);
        console.log(startDate);
        console.log(endDate);
        
        const response = await fetch(`https://api.weatherbit.io/v2.0/history/daily?postal_code=40503&country=US&start_date=${startDate}&end_date=${endDate}&key=0a9210a60976482a9a681ce70f7e4ac7&units=I`);
        const data = await response.json();
        console.log(data);
        const tempElem = document.getElementById("temperature");
        tempElem.innerHTML = data.data[0].temp;
    } 
    catch (err) {
        console.log('uh oh');
    }
  }

// Validate Date Input
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