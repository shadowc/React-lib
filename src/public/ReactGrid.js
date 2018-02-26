import ReactGrid from '../jsx/ReactGrid';
import Grid from '../es6/Grid';

if (typeof window.ReactLib === 'undefined') {
    window.ReactLib = {};
}

window.ReactLib.ReactGrid = ReactGrid;
window.ReactLib.Grid = Grid;
