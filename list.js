document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleBtn');
    const toggleBtn2 = document.getElementById('toggleBtn2');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');

    toggleBtn.addEventListener('click', () => {
        page1.classList.toggle('active');
        page2.classList.toggle('active');
    });
    toggleBtn2.addEventListener('click', () => {
        page2.classList.toggle('active');
        page1.classList.toggle('active');
    });
});



const input = document.getElementById('list');
const addBtn = document.getElementById('addlist');
const ul = document.getElementById('card-2');

addBtn.addEventListener('click', addItem); // + button darahad //


input.addEventListener('keydown', (e) => { // enter darahad nemegdene //
    if (e.key === 'Enter') {
        e.preventDefault();
        addItem();
    }
});

function addItem() {

    const value = input.value.trim();
    if (value === '') return;
    const li = document.createElement('li');

    li.textContent = value;


    const delBtn = document.createElement('addlist');
    delBtn.textContent = '';
    delBtn.addEventListener('click', () =>  li.remove());


    li.appendChild(delBtn);



    li.textContent = value + '';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '-'; // nemssen - button ingej haragdna //
    deleteBtn.type = 'button';
    deleteBtn.classList.add('deleteBtn');

    deleteBtn.addEventListener('click', () => {
        li.remove(); //darahad remove hiine gj bgan hha //
    });



    li.appendChild(deleteBtn);

    ul.appendChild(li);


    input.value = '';
}

