console.log("Script running okay!");

const populate = async(base, value) =>{
    const url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_sGXjfx1tGzZRGVtZ8bZM3c4rdeelCGgZGYjWYIY1&base_currency=" + base;
    
    let response = await fetch(url);
    let rjson = await response.json();
    console.log(rjson);

    for(let key in Object.keys(rjson["data"])) {
        
    }
    
    let tablebody1 = document.getElementById("table1");
    tablebody1.innerHTML = `
    <tr>
    <td>data 1</td>
    <td>data 2</td>
    </tr>
    `;
    
};

let mybtn = document.querySelector("button");
mybtn.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("button is clicked !");
    const value = parseInt(document.querySelector("input[name='amount']").value);
    const base_currency = document.querySelector("select[name='currency_base']").value;

    populate(base_currency, value);
});
