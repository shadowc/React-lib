import React from 'react';

/**
 * @typedef {Object} ModalState
 * @property {ModalButton[]} buttons
 * @property {string} title
 * @property {string} message
 * @property {boolean} [visible]
 * @property {boolean} closable
 * @property {ModalCloseCallback} [onSuccess]
 * @property {ModalCloseCallback} [onReject]
 */

/**
 * Callback for modal close events
 *
 * @callback ModalCloseCallback
 * @param {string} buttonPressed
 * @param {boolean} success
 */

/**
 * @typedef {Object} ModalButton
 * @property {string} key
 * @property {string} label
 * @property {boolean} success
 * @property {string} className
 */

/**
 * @class ReactModal
 * @classdesc React Component for a modal dialog
 * @extends React.Component
 */
export default class ReactModal extends React.Component {
    /**
     * ReactModal constructor
     */
    constructor() {
        super();

        /**
         * @type {ModalState}
         */
        this.state = {
            title: 'Alert',
            message: 'Alert message',
            visible: false,
            closable: false,
            buttons: [
                {
                    key: 'close',
                    label: 'Close',
                    success: true,
                    className: 'button action'
                }
            ],
            onSuccess() {},
            onReject() {}
        };
    }

    /**
     * Render the modal
     *
     * @memberOf ReactModal
     * @instance
     * @returns {XML}
     */
    render() {
        const className = `modal ${this.state.visible ? 'visible' : ''}`;
        return (
            <div className={className}>
                <h2>
                    {this.state.title}
                    {
                        this.state.closable ?
                            <span className="close" onClick={this.onModalClose.bind(this)}> x </span> :
                            null
                    }
                </h2>
                <p>{this.state.message}</p>
                <div className="buttons">
                    {this.state.buttons.map(this.renderButton.bind(this))}
                </div>
            </div>
        );
    }

    /**
     * Renders a modal button
     *
     * @memberOf ReactModal
     * @instance
     * @param {ModalButton} button
     */
    renderButton(button) {
        return (
            <button
                key={button.key}
                className={button.className}
                onClick={this.onModalButtonPressed.bind(this, button)}
            >
                {button.label}
            </button>
        );
    }

    /**
     * Called when clicked on the close modal
     *
     * @memberOf ReactModal
     * @instance
     * @param {Event} event
     */
    onModalClose(event) {
        event.preventDefault();
        event.stopPropagation();

        this.state.onReject('close-button', false);

        this.setState({
            visible: false
        });
    }

    /**
     * Called when clicked on a modal button
     *
     * @memberOf ReactModal
     * @instance
     * @param {Event} event
     * @param {ModalButton} button
     */
    onModalButtonPressed(button, event) {
        event.preventDefault();
        event.stopPropagation();

        if (button.success) {
            this.state.onSuccess(button.key, true);
        } else {
            this.state.onReject(button.key, false);
        }

        this.setState({
            visible: false
        });
    }
}
