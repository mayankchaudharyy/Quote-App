let ele = document.getElementById("quote");
let btn = document.getElementById("quoteBtn");
let author = document.getElementById("author");

ele.innerText = "";

get_quote();

function change_quote(val,aut) {
    ele.innerText = val;
    author.innerText = `--${aut}`;
}

function get_quote(){
    const data = fetch("https://type.fit/api/quotes");
    let val;
    data.then((response)=>{
        return response.json();
    }).then((users)=>{
        let r = Math.floor(Math.random() * users.length);
        val = users[r]["text"];
        let aut = users[r]["author"];
        change_quote(val,aut);
    });
}


btn.addEventListener("click",()=>{
    get_quote();
})