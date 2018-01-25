/* eslint no-console: "off" */
const path = require('path');
const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');

const docsPath = path.resolve(__dirname, '../docs/js-docs.md');

jsdoc2md.render({
    files: [
        path.resolve(__dirname, '../src/**/*.js*')
    ]
}).then((data) => {
    fs.writeFile(docsPath, data, (err) => {
        if (err) {
            return console.log(err);
        }

        console.log(`JSDocs generated at ${docsPath}`);

        return true;
    });
});
