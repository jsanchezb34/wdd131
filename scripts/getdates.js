document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.createElement('span');
    yearSpan.textContent = new Date().getFullYear();
    const lastModifiedSpan = document.createElement('span');
    lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;

    const dateInfoElement = document.getElementById('date-info');
    dateInfoElement.textContent = `Last Modified: ${document.lastModified}`;
});
