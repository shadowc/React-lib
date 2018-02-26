import Tree from '../es6/Tree';
import ReactTree from '../jsx/ReactTree';

if (typeof window.ReactLib === 'undefined') {
    window.ReactLib = {};
}

window.ReactLib.ReactTree = ReactTree;
window.ReactLib.Tree = Tree;
