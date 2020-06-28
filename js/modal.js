function modal() {
    // Save all modals and buttons 
    let modals = Array.from(document.querySelectorAll('.modal')),
        btnModal = Array.from(document.querySelectorAll('.btn--modal'))
    ligthbox = document.querySelector('.lightbox');

    listenClick()

    // Listen click event in element with class 'btn--modal' to open modal 
    function listenClick() {
        btnModal.forEach(dataBtn => {
            dataBtn.addEventListener('click', () => {
                filterModals(dataBtn.dataset.modal)
            })
        })
    }

    // Filter modals array
    function filterModals(modal) {
        let [open] = modals.filter(e => e.dataset.modal == modal)
        openModal(open)
    }

    // Add class open in modal and lightbox
    function openModal(modal) {
        modal.classList.add('modal--open')
        ligthbox.classList.add('lightbox--open')
        lightboxCloseModal(modal)
    }

    //Remove class open in modal and lightbox
    function closeModal(modal) {
        modal.classList.remove('modal--open')
        ligthbox.classList.remove('lightbox--open')
    }

    //Listen event click to remove class open in modal and lightbox
    function lightboxCloseModal(modal) {
        ligthbox.addEventListener('click', () => {
            modal.classList.remove('modal--open')
            ligthbox.classList.remove('lightbox--open')
        })
    }
}

modal()