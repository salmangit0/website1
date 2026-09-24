function changeImage(src){
document.getElementById("mainImage").src = src;
}

document
.getElementById("orderForm")
.addEventListener("submit",function(e){

e.preventDefault();

const phone = "917012426685";

const msg =
`🛒 NEW ORDER

Product: Wireless Earbuds Pro

Name: ${name.value}

Phone: ${phone.value}

Alternative Number: ${altphone.value}

Post Office: ${po.value}

Landmark: ${landmark.value}

Address:
${address.value}
`;

window.open(
`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,
"_blank"
);

});
