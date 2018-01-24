import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from '../jsx/ReactModal';

/**
 * @class Modal
 * @classdesc Implements a modal class as a promise
 */
export class Modal {
    /**
     * Modal constructor
     */
    constructor() {
        /**
         * @type {ReactModal|null}
         * @private
         */
        this._modal = null;

        /**
         * @type {HTMLElement|null}
         * @private
         */
        this._container = null;
    }

    /**
     * Renders the modal
     *
     * @param {HTMLElement} container
     * @memberOf Modal
     * @instance
     */
    render(container) {
        this._container = container;
        this._modal = ReactDOM.render(<ReactModal { ...this.props } />, container);
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

            this._modal.setState(options);

            this._container.style.left = ((window.innerWidth - this._container.offsetWidth) / 2) + 'px';
            this._container.style.top = ((window.innerHeight - this._container.offsetHeight) / 2) + 'px';
        });
    }
}

/**
 * Creates a Ok button template
 * @return {ModalButton}
 * @memberOf Modal
 * @static
 */
Modal.getOkButton = () => {
    return {
        key: 'ok',
        label: 'Ok',
        success: true,
        className: 'button button-action'
    }
};

/**
 * Creates a Yes button template
 * @return {ModalButton}
 * @memberOf Modal
 * @static
 */
Modal.getYesButton = () => {
    return {
        key: 'yes',
        label: 'Yes',
        success: true,
        className: 'button button-action'
    }
};

/**
 * Creates a No button template
 * @return {ModalButton}
 * @memberOf Modal
 * @static
 */
Modal.getNoButton = () => {
    return {
        key: 'no',
        label: 'No',
        success: false,
        className: 'button button-cancel'
    }
};
