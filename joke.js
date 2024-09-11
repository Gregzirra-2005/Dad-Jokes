document.getElementById("btn").addEventListener("click", random);
async function random() {

    let config = {
        headers:{
            Accept: "application/json",
        },
    };
    let a = await fetch("https://icanhazdadjoke.com/", config);
    let b = await a.json();

    document.getElementById("content").innerHTML = b.joke;
} 