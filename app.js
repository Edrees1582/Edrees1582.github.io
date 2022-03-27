const noteTitle = document.querySelector('#noteTitle');
const noteInput = document.querySelector('#noteInput');
const addBtn = document.querySelector('#addBtn');
const notes = document.querySelector('#notes');
const popUpDiv = document.querySelector('#pop-upDiv');

addBtn.addEventListener('click', () => {
    if (noteTitle.value === '' || noteInput.value === '') return;

    const newDIV = document.createElement('div');
    const newH3 = document.createElement('h3');
    const newP = document.createElement('p');
    const newBtn = document.createElement('button');
    const newRemoveBtn = document.createElement('button');

    let newStr;
    let newTempStr;

    newDIV.classList.add('note');

    if (noteInput.value.length > 60) {
        newTempStr = noteInput.value.slice(0, 60) + '...';
        newP.textContent = newTempStr;
        newStr = noteInput.value;
    } else {
        newP.textContent = noteInput.value;
        newStr = newP.textContent;
    }

    newBtn.addEventListener('click', e => {
        const newPopUpDiv = document.createElement('div');
        const newContentDiv = document.createElement('div');
        const newCloseBtn = document.createElement('i');
        const newNoteContentH3 = document.createElement('h3');
        const newNoteContentP = document.createElement('p');

        newPopUpDiv.classList.add('pop-up');
        newContentDiv.classList.add('content');
        newCloseBtn.classList.add('fas', 'fa-times');

        newNoteContentH3.textContent = newH3.textContent;
        newNoteContentP.textContent = newStr;

        newCloseBtn.addEventListener('click', () => {
            popUpDiv.removeChild(newPopUpDiv);
        });

        newContentDiv.append(newCloseBtn, newNoteContentH3, newNoteContentP);
        newPopUpDiv.append(newContentDiv);
        popUpDiv.append(newPopUpDiv);
    });

    newRemoveBtn.addEventListener('click', () => {
        notes.removeChild(newDIV);
    });

    newH3.textContent = noteTitle.value;
    newBtn.textContent = 'View Details';
    newRemoveBtn.textContent = 'Remove';

    noteTitle.value = '';
    noteInput.value = '';

    newDIV.append(newH3, newP, newBtn, newRemoveBtn);
    notes.append(newDIV);
});