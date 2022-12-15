// Which element will be dispatchng the event?
  // e.g. document
// Which event should we listen for?
  // e.g. 'DOMContentLoaded'
// Which piece of code should run when the event is dispatched?
  // e.g. callback

document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript has loaded');

    const handleButtonClick = function(){
      const changeButtResult = document.querySelector('#button-result');
      changeButtResult.textContent = "It clicked";
    }

    const button = document.querySelector('#button');
    button.addEventListener('click', handleButtonClick);



    const handleInput = function(event){
      const changeInput = document.querySelector('#input-result')
      changeInput.textContent = "You have typed " + event.target.value;
    }

    const textInput = document.querySelector('#input')
    textInput.addEventListener('input', handleInput);



    const handleSelectChange = function(event){
      const chosenOne = document.querySelector('#select-result')
      chosenOne.textContent = `You have chosen ${event.target.value}`;
    }

    const select = document.querySelector('#select');
    select.addEventListener('change', handleSelectChange);


    const handleFormSubmit = function(event){
      event.preventDefault();
      const fullName = `${event.target.first_name.value} ${event.target.last_name.value}`;
      const declareName = document.querySelector('#form-result')
      declareName.textContent = `Your name is ${fullName}`;
      
    }

    const form = document.querySelector('#form');
    form.addEventListener('submit', handleFormSubmit);

  });


  