let btn = document.querySelector(".btn")


async function getData(){
    let url = "https://jsonplaceholder.typicode.com/todos/1"

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
}



btn.addEventListener("Click", () => {
    console.log("Hey")
})