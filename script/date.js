function date() {
    let today = new Date();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"]
    let day= days[today.getDay()];
    let date = today.getDate();
    let month = today.toLocaleString('en-US', { month: 'short' }); 
    let year = today.getFullYear();

    let dayText = `${month} ${date} ${year}`;

    document.getElementById("day").innerText = day; 
    document.getElementById("date").innerText = dayText;
}
 
window.onload = function() {
    date(); 
};