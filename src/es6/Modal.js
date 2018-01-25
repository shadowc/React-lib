import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from '../jsx/ReactModal';

/**
 * @class Modal
 * @classdesc Implements a modal class as a promise
 */
export default class Modal {
    /**
     * Modal constructor
     */
    constructor() {
        /**
         * @type {ReactModal|null}
         * @private
         */
        this.modal = null;

        /**
         * @type {HTMLElement|null}
         * @private
         */
        this.container = null;
    }

    /**
     * Renders the modal
     *
     * @param {HTMLElement} container
     * @memberOf Modal
     * @instance
     */
    render(container) {
        this.container = container;
        this.modal = ReactDOM.render(React.createElement(ReactModal, { ...this.props }), container);
    }

    /**
     * Shows a modal as promise
     *
     * @param {ModalState} options
     * @return {Promise}
     * @memberOf Modal
     * @instance
     */
    show(options) {
        return new Promise((success, reject) => {
            options.visible = true;
            options.onSuccess = success;
            options.onReject = reject;

            this.modal.setState(options);

            this.container.style.left = `${(window.innerWidth - this.container.offsetWidth) / 2}px`;
            this.container.style.top = `${(window.innerHeight - this.container.offsetHeight) / 2}px`;
        });
    }
}

/**
 * Creates a Ok button template
 * @return {ModalButton}
 * @memberOf Modal
 * @static
 */
Modal.getOkButton = () => ({
    key: 'ok',
    label: 'Ok',
    success: true,
    className: 'button button-action'
});

/**
 * Creates a Yes button template
 * @return {ModalButton}
 * @memberOf Modal
 * @static
 */
Modal.getYesButton = () => ({
    key: 'yes',
    label: 'Yes',
    success: true,
    className: 'button button-action'
});

/**
 * Creates a No button template
 * @return {ModalButton}
 * @memberOf Modal
 * @static
 */
Modal.getNoButton = () => ({
    key: 'no',
    label: 'No',
    success: false,
    className: 'button button-cancel'
});
