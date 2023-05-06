const submitButton = document.querySelector('.submit');
const scoreButtons = document.querySelectorAll('.score');
const rateContainer = document.querySelector('#rate');
const resultContainer = document.querySelector('#result');
const selectedScore = document.querySelector('#selected-score');


submitButton.addEventListener('click', function(e){
    e.preventDefault();
    for(let button of scoreButtons){
        if(button.checked){
            selectedScore.innerHTML= button.value;
            rateContainer.classList.add('not-displayed');
            resultContainer.classList.remove('not-displayed');
        }
    }
})

