let cart = new Array(50).fill(0);
let items = 0;

function red_it(x) {
    let a = document.getElementById(`nav-item-${x}`);
    a.classList.add('menu-active');
}

function un_red_it(x) {
    let a = document.getElementById(`nav-item-${x}`);
    a.classList.remove('menu-active');
}

function Add_check(x) {
    let c = document.getElementById("cart-counts");
    let a = document.getElementById(`check-not-check-${x}`);
    if (cart[x] % 2 == 0) {
        a.classList.remove('bi-plus-lg');
        a.classList.add('bi-check2');
        cart[x]++;
        items++;
        c.innerHTML = items;
    } else {
        a.classList.remove('bi-check2');
        a.classList.add('bi-plus-lg');
        cart[x]--;
        items--;
        c.innerHTML = items;
    }
}