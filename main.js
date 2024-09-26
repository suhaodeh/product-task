var registerform = document.querySelector(".registerform");
var productnameinput = document.querySelector("#productname");
var discriptioninput = document.querySelector("#discription");

var priceinput = document.querySelector("#price");
var products = [];
registerform.onsubmit = function (e) {
    e.preventDefault();
    var product = {
        productName: productnameinput.value,
        discription: discriptioninput.value,
        price: priceinput.value,
    };

    products.push(product);
    console.log(products);
    printdata();
}

function printdata() {
    var data = ``;
    for (var i = 0; i < products.length; i++) {
        data += `
   <tr>
   <td>${products[i].productName} </td>
   <td>${products[i].discription}</td>
   <td>${products[i].price}</td>
   </tr>
    ` ;

    }

    document.querySelector("tbody").innerHTML = data;
}
