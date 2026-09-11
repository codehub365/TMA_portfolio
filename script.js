const resumeDialog = document.querySelector('#resume-dialog');
const resumeTriggers = document.querySelectorAll('.resume-download-trigger');

if (resumeDialog) {
    const cancelButton = resumeDialog.querySelector('.resume-dialog__cancel');

    const closeResumeDialog = () => resumeDialog.close();

    resumeTriggers.forEach((trigger) => {
        trigger.addEventListener('click', (event) => {
            event.preventDefault();
            resumeDialog.showModal();
        });
    });

    cancelButton.addEventListener('click', closeResumeDialog);

    resumeDialog.addEventListener('click', (event) => {
        if (event.target === resumeDialog) {
            closeResumeDialog();
        }
    });
}
