// Set initial count
let count = 0;

// Select value & buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//console.log(btns);

// Select every button
btns.forEach(function(btn) {
    // For each button adds eventlistener
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }

        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count === 0){
            value.style.color = "#222";
        }
        value.textContent = count;
    });
});