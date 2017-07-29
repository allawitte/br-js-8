'use strict';
let itemsBlock = document.querySelector('.items-list');
subscribeItems();
showMore.addEventListener('click', subscribeItems);

function subscribeItems() {
    itemsBlock.addEventListener('click', handleClick);
}

function handleClick(event) {
    if (event.target.tagName == 'A' && event.target.className == 'add-to-cart') {
        addToCart(event.target.dataset);
    }
}