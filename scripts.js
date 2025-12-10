const moduleOneButton = document.getElementById('button1');
const moduleOneTable = document.getElementById('module1')

const moduleTwoButton = document.getElementById('button2')
const moduleTwoTable = document.getElementById('module2')


console.log(moduleOneButton);
console.log(moduleTwoButton);

console.log(moduleOneTable);
console.log(moduleTwoTable);


moduleOneButton.addEventListener('click', () => {
    if (moduleOneTable.style.display !== 'block') {
        moduleOneTable.style.display = 'block';
        moduleTwoTable.style.display = 'none';

        moduleOneButton.classList.add('active');
        moduleTwoButton.classList.remove('active');
    }
});

moduleTwoButton.addEventListener('click', () => {
    if (moduleTwoTable.style.display !== 'block') {
        moduleTwoTable.style.display = 'block';
        moduleOneTable.style.display = 'none';

        moduleOneButton.classList.remove('active');
        moduleTwoButton.classList.add('active');
    }
});


