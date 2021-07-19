// Update Copyright Year on page load

const yearSpan = document.querySelector("#currentYear");
const currentYear = new Date();
yearSpan.innerText = currentYear.getFullYear();


