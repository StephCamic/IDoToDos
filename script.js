// Show Months Countdown
// Define a function called diff_months that calculates the difference in months between two given dates (dt2 and dt1).
function monthsDiff(dt2, dt1) {
    var diff =(dt2.getTime() - dt1.getTime()) / 1000; // Calculate the difference in milliseconds between the two dates.
    diff /= (60 * 60 * 24 * 7 * 4);   // Convert the difference from milliseconds to months by dividing it by the number of milliseconds in an hour, a day, a week, and approximately 4 weeks in a month.
    return Math.abs(Math.round(diff)); // Round the result to the nearest integer using Math.round().
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
        //console.log(months) KEEPING SO WE CAN FIGURE OUT WHY DEC-JAN ADDS A MONTH
        monthsElem.innerHTML = months + "Months Until Your \"I Do\" Day!";
        monthsElem.style.display = "block";

    } else {
        errorMessageElem.style.display = "block"; 
    }
}