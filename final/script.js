//Логика переключения графиков
let select = document.getElementById('select');
let block = document.querySelectorAll('.d');
let lastIndex = 0;
select.addEventListener('click', function() {
    block[lastIndex].style.display = "none";
    let index = select.selectedIndex;
    block[index].style.display = "block";
    lastIndex = index; // Обновить сохраненный индекс.
});

let select1 = document.getElementById('select1');
let block1 = document.querySelectorAll('.k');
let lastIndex1 = 0;
select1.addEventListener('click', function() {
    block1[lastIndex1].style.display = "none";
    let index1 = select1.selectedIndex;
    block1[index1].style.display = "block";
    lastIndex1 = index1; // Обновить сохраненный индекс.
});