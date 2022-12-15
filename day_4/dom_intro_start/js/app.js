console.log('app loaded', window);

document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('h1');
    title.textContent = "JavaScript sez yer da sells Avon";

    const command = document.querySelector('#welcome-paragraph');
    command.textContent = "Code what we TELL YOU!!!";
    // console.dir(command);

    const redElement = document.querySelector('li.red');
    // console.log(redElement);
    redElement.textContent = 'RID!';
    redElement.classList.add('bold');

    const allReds = document.querySelectorAll('.red');
    // console.log(allReds);

    const allLis = document.querySelectorAll('li');
    // console.log(allLis);

    const newListItem = document.createElement('li');
    newListItem.textContent = 'Purrple';
    newListItem.classList.add('purple');
    const list = document.querySelector('ul');
    list.appendChild(newListItem);
});

