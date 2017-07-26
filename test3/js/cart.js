'use strict';
subscribeItems();
showMore.addEventListener('click', subscribeItems);

function subscribeItems(){
    let addBtns = document.querySelectorAll('.items-list .add-to-cart');
    Array.from(addBtns).forEach(item => {
        item.addEventListener('click', handleClick)
    });
}

function handleClick(event){
    addToCart(event.target.dataset);
}