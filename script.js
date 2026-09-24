let selectedProduct = "";

function selectProduct(product){
    selectedProduct = product;

    document
    .getElementById("orderForm")
    .scrollIntoView({
        behavior:"smooth"
    });
}

document.getElementById("orderForm")
.addEventListener("submit",function(e){

e.preventDefault();

let name =
document.getElementById("name").value;

let po =
document.getElementById("po").value;

let number1 =
document.getElementById("number1").value;

let number2 =
document.getElementById("number2").value;

let landmark =
document.getElementById("landmark").value;

let address =
document.getElementById("address").value;

let message =
`🛒 NEW ORDER

Product: ${selectedProduct}

Name: ${name}

Post Office: ${po}

Mobile 1: ${number1}

Mobile 2: ${number2}

Landmark: ${landmark}

Address:
${address}
`;

let whatsappURL =
`https://wa.me/917012426685?text=${encodeURIComponent(message)}`;

window.open(
whatsappURL,
"_blank"
);

});
