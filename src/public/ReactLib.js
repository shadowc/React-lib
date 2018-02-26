import Grid from '../es6/Grid';
import Tree from '../es6/Tree';
import Modal from '../es6/Modal';
import TagsManager from '../es6/TagsManager';
import ReactGrid from '../jsx/ReactGrid';
import ReactTree from '../jsx/ReactTree';
import ReactModal from '../jsx/ReactModal';
import ReactTagsDisplay from '../jsx/ReactTagsDisplay';

if (typeof window.ReactLib === 'undefined') {
    window.ReactLib = {
        Grid,
        Modal,
        Tree,
        TagsManager,
        ReactGrid,
        ReactTree,
        ReactModal,
        ReactTagsDisplay
    };
}
