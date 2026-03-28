const buttons = document.querySelectorAll('[data-dialog]');
const dialogs = document.querySelectorAll('dialog');

// listener for each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let modal = document.querySelector(`#${button.dataset.dialog}`);
        modal.showModal();
    });
});

// close modal

dialogs.forEach(dialog => {
    let closeButton = dialog.querySelector('.close');

    closeButton.addEventListener('click', () => {
        dialog.close();
    });
});