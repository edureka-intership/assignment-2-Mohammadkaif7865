let cart = 0;

function Add_check() {
    let a = document.getElementById('check-not-check');
    if (cart % 2 == 0) {
        a.classList.remove('bi-plus-lg');
        a.classList.add('bi-check2');
        cart++;
    } else {
        a.classList.remove('bi-check2');
        a.classList.add('bi-plus-lg');
        cart++;
    }
}