// 1Uzduotis
//
var price;
var notaNumber = false;

while(!notaNumber){
    var priceNumber = prompt("Iveskite prekes kaina")
    price = parseFloat(priceNumber);

    if(isNaN(price)){
        alert('Blogai ivesta kaina.')
    }else{
        notaNumber = true;
    }

}
var supvm = price+price/100*21
var bepvm = price-price/100*21
var pvm = price/100*21
console.log('Kaina su PVM: ' + supvm.toFixed(2), "€")
console.log('PVM: ' + pvm.toFixed(2), "€")
console.log('Kaina be PVM: ' + bepvm.toFixed(2), "€")



//2 Uzduotis
var price;
var notaNumber = false;

while(!notaNumber){
    var priceNumber = prompt("Iveskite prekes kaina: ")
    price = parseFloat(priceNumber)
    if(isNaN(price)){
        alert("Blogai ivesta kaina.")
    }else{
        notaNumber = true;
    }
}
var delivery = confirm("Ar reikalingas pristatymas?")
if(delivery == true){
    var city = prompt("Miesto pavadinimas?");
    var deliveryPrice = (price >= 50 || city.toLowerCase() === "vilnius") ? 0 : 20;

    console.log("Prekes kaina: " + price.toFixed(2) + " €");
    console.log("Pristatymas: " + deliveryPrice.toFixed(2) + " €");
    console.log("Is viso: " + (price + deliveryPrice).toFixed(2) + " €");
    console.log("Preke pristatysime i " + city + " per 1-3 dienas.");
}else{
    console.log("Prekes kaina: " + price.toFixed(2) + " €");
    console.log("Preke galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a");
}




