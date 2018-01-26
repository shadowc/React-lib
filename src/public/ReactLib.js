import Grid from '../es6/Grid';
import Modal from '../es6/Modal';
import TagsManager from '../es6/TagsManager';

if (typeof window.ReactLib === 'undefined') {
    window.ReactLib = {};
}

window.ReactLib.Grid = Grid;
window.ReactLib.Modal = Modal;
window.ReactLib.TagsManager = TagsManager;
