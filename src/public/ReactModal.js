import Modal from '../es6/Modal';
import ReactModal from '../jsx/ReactModal';

if (typeof window.ReactLib === 'undefined') {
    window.ReactLib = {};
}

window.ReactLib.ReactModal = ReactModal;
window.ReactLib.Modal = Modal;
