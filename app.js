// ================ For Memory , Storage & Delivery button Function ================ //

function totalCost(product, product1, product2, price) {
    const cost = document.getElementById(product + '-cost');
    document.getElementById('best-price');
    document.getElementById('total-cost');
    document.getElementById(product1 + '-cost');
    document.getElementById(product2 + '-cost');
    cost.innerText = price;
    total();
}

function total(){
    const bestPrice = document.getElementById('best-price');
    const memoryPrice = document.getElementById('memory-cost');
    const storagePrice = document.getElementById('storage-cost');
    const deliveryPrice = document.getElementById('delivery-cost');
    const totalPrice = document.getElementById('total-cost');
    const total = document.getElementById('total'); 
    totalPrice.innerText = parseInt(bestPrice.innerText)+parseInt(memoryPrice.innerText)+parseInt(storagePrice.innerText)+parseInt(deliveryPrice.innerText);
    total.innerText = totalPrice.innerText;

}

// ============= Memory Button Event ===============//

document.getElementById('memory-8gb').addEventListener('click', function () {
    totalCost('memory', 'storage','delivery', 0);
})

document.getElementById('memory-16gb').addEventListener('click', function () {
    totalCost('memory', 'storage','delivery', 180);
})

// =============== Storage Button Event ============== //

document.getElementById('storage-256gb').addEventListener('click', function () {
    totalCost('storage', 'memory','delivery', 0);
})

document.getElementById('storage-512gb').addEventListener('click', function () {
    totalCost('storage', 'memory','delivery', 100);
})

document.getElementById('storage-1tb').addEventListener('click', function () {
    totalCost('storage', 'memory','delivery', 180);
})

// ================ Delivery Button Event ============== //

document.getElementById('delivery-free').addEventListener('click', function () {
    totalCost( 'delivery','storage', 'memory', 0);
})

document.getElementById('delivery-pay').addEventListener('click', function () {
    totalCost( 'delivery','storage', 'memory', 20);
})

// ================= Promo Button Event ==============//

document.getElementById('apply-promo').addEventListener('click', function () {
    const code = document.getElementById('promo-code')
    if(code.value == 'stevekaku'){
        const total = document.getElementById('total');
    total.innerText = parseInt(total.innerText) -(parseInt(total.innerText)/5);
    }
    code.value = '';
})


// ================== optional ======================//

function color(images,names){
    const image = document.getElementById('image');
    const name = document.getElementById('name');
    image.src = 'images/'+images+'.jpeg';
    name.innerText = names;
}

document.getElementById('green').addEventListener('click',function(){
    color('green','Green')
})
document.getElementById('blue').addEventListener('click',function(){
    color('blue','Blue')
})
document.getElementById('pink').addEventListener('click',function(){
    color('pink','Pink')
})
document.getElementById('yellow').addEventListener('click',function(){
    color('yellow','Yellow')
})
document.getElementById('silver').addEventListener('click',function(){
    color('silver','Silver')
})
