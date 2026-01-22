const moduleOneButton = document.getElementById('button1');
const moduleOneTable = document.getElementById('module1')

const moduleTwoButton = document.getElementById('button2')
const moduleTwoTable = document.getElementById('module2')

const moduleThreeButton = document.getElementById('button3')
const moduleThreeTable = document.getElementById('module3')


moduleOneButton.addEventListener('click', () => {
    if (moduleOneTable.style.display !== 'block') {
        moduleOneTable.style.display = 'block';
        moduleTwoTable.style.display = 'none';
        moduleThreeTable.style.display = 'none';

        if (moduleThreeButton.classList.contains('active')) {
            moduleThreeButton.classList.remove('active');
        }

        if (moduleTwoButton.classList.contains('active')) {
            moduleTwoButton.classList.remove('active');
        }

        moduleOneButton.classList.add('active');
    }
});

moduleTwoButton.addEventListener('click', () => {
    if (moduleTwoTable.style.display !== 'block') {
        moduleTwoTable.style.display = 'block';
        moduleOneTable.style.display = 'none';
        moduleThreeTable.style.display = 'none';

        if (moduleOneButton.classList.contains('active')) {
            moduleOneButton.classList.remove('active');
        }

        if (moduleThreeButton.classList.contains('active')) {
            moduleThreeButton.classList.remove('active');
        }

        moduleTwoButton.classList.add('active');
    }
});

moduleThreeButton.addEventListener('click', () => {
    if (moduleThreeTable.style.display !== 'block') {
        moduleThreeTable.style.display = 'block';
        moduleOneTable.style.display = 'none';
        moduleTwoTable.style.display = 'none';

        if (moduleOneButton.classList.contains('active')) {
            moduleOneButton.classList.remove('active');
        }

        if (moduleTwoButton.classList.contains('active')) {
            moduleTwoButton.classList.remove('active');
        }

        moduleThreeButton.classList.add('active');
    }
});


