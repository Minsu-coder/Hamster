const btn = document.getElementById('nextbutton');
const box = document.getElementById('list-slide');

btn.addEventListener('click', () => {
    box.classList.toggle('active');
});


function addlist() {
    const input = document.getElementById('list');
    const value = input.value.trim();
    if (value === '') return;

    const ul = document.getElementById('card-2');
    
    const li = document.createElement('li');
    li.textContent = value;


    const delBtn = document.createElement('addlist');
    delBtn.textContent = '';
    delBtn.addEventListener('click', () =>  li.remove());


    li.appendChild(delBtn);
    ul.appendChild(li);


    input.value = '';
}
