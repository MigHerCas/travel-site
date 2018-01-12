import $ from 'jquery';

class Modal {
	constructor() {
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events();
	}


	events() {
		// Clicking the open modal button
		this.openModalButton.click(this.openModal.bind(this));

		// Clicking the x close modal button
		this.closeModalButton.click(this.closeModal.bind(this))

		// User pushes any key
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) {
		// Only if the ESC key was pressed, we call the closeModal() method
		if(e.keyCode == 27) {
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass('modal--is-visible');
		return false;	// We prevent the default behavior of scrolling up
	}

	closeModal() {
		this.modal.removeClass('modal--is-visible');
	}
}

export default Modal;