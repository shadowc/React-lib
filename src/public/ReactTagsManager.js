import TagsManager from '../es6/TagsManager';
import ReactTagsDisplay from '../jsx/ReactTagsDisplay';

if (typeof window.ReactLib === 'undefined') {
    window.ReactLib = {};
}

window.ReactLib.ReactTagsDisplay = ReactTagsDisplay;
window.ReactLib.TagsManager = TagsManager;
