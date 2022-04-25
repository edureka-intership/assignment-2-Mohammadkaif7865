let cart = new Array(50).fill(0);

function Add_check(x) {
    let a = document.getElementById(`check-not-check-${x}`);
    if (cart[x] % 2 == 0) {
        a.classList.remove('bi-plus-lg');
        a.classList.add('bi-check2');
        cart[x]++;
    } else {
        a.classList.remove('bi-check2');
        a.classList.add('bi-plus-lg');
        cart[x]--;
    }
}