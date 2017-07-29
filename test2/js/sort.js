'use strict';
const headers = document.querySelectorAll('table th');
for (let i = 0; i < headers.length; i++) {
    headers[i].addEventListener('click', handleTableClick);
    //headers[i].setAttribute('data-dir', 1);
}

function handleTableClick(event) {
    let field = event.target.dataset.propName;
    event.stopPropagation();
    let direction = event.target.dataset.dir ? -1*event.target.dataset.dir : 1;
    event.target.dataset.dir = direction;
    table.setAttribute('data-sort-by', field);
    sortTable(field, direction)
}

