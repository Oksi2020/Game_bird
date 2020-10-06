window.onload = function() {
    //var fieldParams = getComputedStyle(document.querySelector('.container'));
    var field = document.querySelector('.container');
    var fieldParams = field.getBoundingClientRect();
    var duck = document.querySelector('#duck');
    var counter = document.querySelector('#counter');
    var gameOver = document.querySelector('#game-over')

    function getRadomCoords(min,max) {
        return Math.floor(Math.random() * (max - min) + min); 
    }

    field.addEventListener('click', setDuck);
    field.addEventListener('click',checkDuck);

    function setDuck() {
        var verticalPosition = getRadomCoords(1, fieldParams.height-60);
        var horizontalPosition = getRadomCoords(1, fieldParams.width-60);
        duck.style.top = verticalPosition + 'px';
        duck.style.left = horizontalPosition + 'px';
    }

    function checkDuck(e) {
        var target = e.target;
        if(target.parentElement.id === 'duck') { /////target.localName === 'img'    target.parentElement.id === 'duck'
            counter.innerHTML = parseInt(counter.innerHTML) + 1;
        } else {
            gameOver.classList.toggle('appear');
            counter.innerHTML = '0';
        }
    }
}