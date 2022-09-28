let randomize = document.getElementById("randomize");
let bubbleButton = document.getElementById("bubble");
let container = document.getElementById("container-bars")
let minRange = 1;
let maxRange = 20;
let numBar = 30;
let factor = 40
let unsorted = new Array(numBar);


function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandom() {
    for (let i = 0; i < numBar; i++) {
        unsorted[i] = random(maxRange, minRange)
    }
}

function createBars(arr) {
    for (let i = 0; i < arr.length; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = arr[i] * factor + "px";
        container.appendChild(bar);
    }

}
function refreshBars() {
    createRandom();
    container.innerHTML = "";
    createBars(unsorted);
    console.log("wtf?")
}


document.addEventListener("DOMContentLoaded", refreshBars);
randomize.addEventListener("click", refreshBars);

async function bubble(arr) {
    bubbleButton.disabled = true;
    let bars = document.getElementsByClassName("bar")
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            bars[j + 1].style.backgroundColor = "crimson";
            if(arr[j] > arr [j + 1]) {
                
                for (let k = 0; k < arr.length - i; k++) {
                    if(k !== j && k !== j + 1){
                        bars[k].style.backgroundColor = "white";
                    }
                }
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                //bars[j].innerText = arr[j];
                bars[j].style.height = arr[j] * factor + "px";
                console.log(arr[j] * factor + "px")
                bars[j].style.backgroundColor = "red";
                // bars[j + 1].innerText = arr[j+1];unsorted
                bars[j + 1].style.height = arr[j+1] * factor + "px";
                
                console.log("a")
                await sleep(80)
            }
        }
        await sleep(100)
    }
    for(let i = 0; i < arr.length; i++){
        bars[i].style.backgroundColor = "green";
        await sleep(50)
    }
    await sleep(1000)
    bubbleButton.disabled = false;
    return;
}

bubbleButton.addEventListener("click", () => {
    
    let sorted = bubble(unsorted)
    
    console.log(sorted)
});