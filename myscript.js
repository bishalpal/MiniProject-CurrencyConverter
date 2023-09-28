console.log("Script running okay!");

const url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_sGXjfx1tGzZRGVtZ8bZM3c4rdeelCGgZGYjWYIY1";

let mybtn = document.querySelector("button");
mybtn.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("button is clicked !");
});


let tablebody1 = document.getElementById("table1");
tablebody1.innerHTML = `
<tr>
<td>data 1</td>
<td>data 2</td>
</tr>
`;