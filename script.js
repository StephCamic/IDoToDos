// Validate Date Input

function validateDate() {
    const date = document.getElementById("weddingdate").value;
    const formattedDate = new Date(date);
    const today = new Date();

    const errorMessageElem = document.getElementById("errorMessage");

    if (formattedDate > today){
        errorMessageElem.style.display = "none";
    } else {
        errorMessageElem.style.display = "block"; 
    }
}
