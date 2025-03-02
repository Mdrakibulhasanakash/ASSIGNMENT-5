let buttons = document.getElementsByClassName("complete-btn");
let totalbuttons=buttons.length;
let clickedButton=0;
for (const completeButton of buttons) {
  completeButton.addEventListener("click", function (event) {
    alert("Board Updated Successfully");
    const remove = document.getElementById("remove-btn");

    if (remove.innerText <= 0) {
      alert("No Task Yet");
      return;
    } else {
      const value = (remove.innerText = remove.innerText - 1);
    }
    const added = document.getElementById("added-btn");

    const totalAdded = added.innerText = parseInt(added.innerText) + 1;

    event.target.disabled = true;

    clickedButton++;

    const card = event.target.parentNode.parentNode;

    const titles = document.getElementsByClassName("card-title");
    let titleText = "";

    function title() {
      for (let i = 0; i < titles.length; i++) {
        if (card.contains(titles[i])) {
          titleText = titles[i].innerText;
          break;
        }
      }
    }
    title();
    
    // const titlle= card.query

    // date and time

    let today = new Date();
    let hour = today.getHours();
    hour=hour%12||12
    let minute = today.getMinutes();
    let second= today.getSeconds();
    let amPm = today.getHours() >= 12 ? "PM" : "AM";
    let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
    let day = days[today.getDay()];
    let date = today.getDate();
    let month = today.toLocaleString("en-US", { month: "short" });
    let year = today.getFullYear();

    let time = `${hour}:${minute}:${second} ${amPm}  `;
    let dayText = `${month} ${date} ${year}`;

    // console.log(time)
    const fixContainer = document.getElementById("fix-release");

    const p = document.createElement("p");
    p.innerText = ` ${titleText} is completed at ${time}`;
    p.classList.add(
      "bg-[#F4F7FF]",
      "m-2",
      "p-1",
      "rounded-xl",
      "text-sm",
      "text-center"
    );

    fixContainer.appendChild(p);

    if(clickedButton === totalbuttons){
      alert("All task Completed")
    }
  });
  
}