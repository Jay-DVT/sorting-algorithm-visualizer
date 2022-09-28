let randomize = document.getElementById("randomize");
let bubbleButton = document.getElementById("bubble");
let container = document.getElementById("container-bars");
let stop = document.getElementById("stop");
let minRange = 1;
let maxRange = 50;
const numBar = 30;
let factor = 17;
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
    for (let i = 0; i < numBar; i++) {
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

// TODO
stop.addEventListener("click", () => {
    randomize.disabled = false;
    bubbleButton.disabled = false;
    return
})

async function bubble(arr) {
    lastVal = numBar
    console.log(lastVal)
    bubbleButton.disabled = true;
    randomize.disabled = true;
    let bars = document.getElementsByClassName("bar")
    for (let i = 0; i < numBar; i++) {
        bars[0].style.backgroundColor = "crimson";
        bars[1].style.backgroundColor = "blue";
        await sleep(500)
        for (let j = 0; j < numBar - i - 1; j++) {
            for(let k = 0; k < numBar - i; k++) {
                bars[k].style.backgroundColor = "white";
            }
            bars[j].style.backgroundColor = "crimson";
            bars[j + 1].style.backgroundColor = "blue";
            await sleep(50)
            if(arr[j] > arr [j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                //bars[j].innerText = arr[j];
                bars[j].style.height = arr[j] * factor + "px";
                console.log(arr[j] * factor + "px")
                // bars[j].style.backgroundColor = "red";
                // bars[j + 1].innerText = arr[j+1];unsorted
                bars[j + 1].style.height = arr[j+1] * factor + "px";
                
                console.log("a")
                await sleep(100)
            }
        }
        for(let k = 0; k < numBar - i - 1; k++) {
            bars[k].style.backgroundColor = "white";
        }
        await sleep(500)
    }
    for(let i = 0; i < numBar; i++){
        bars[i].style.backgroundColor = "green";
        await sleep(50)
    }
    await sleep(500)
    randomize.disabled = false;
    bubbleButton.disabled = false;
    return;
}
// stop.addEventListener("click", ()stop.addEventListener("click", () => {
//     window.stop();
// })


bubbleButton.addEventListener("click", () => {
    
    let sorted = bubble(unsorted)
    
    console.log(sorted)
});