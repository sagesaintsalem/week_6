document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const handleInput = function(event){
      const changeInput = document.querySelector('#input-result')
      changeInput.textContent = "You have typed " + event.target.value;
    }

    const textInput = document.querySelector('#input')
    textInput.addEventListener('input', handleInput);

    




})


