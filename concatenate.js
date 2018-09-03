const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/angular-element-input-text/runtime.js',
        './dist/angular-element-input-text/polyfills.js',
        // './dist/angular-element-input-text/scripts.js',
        './dist/angular-element-input-text/main.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/angular-element-input-text.js');
    await fs.copyFile('./dist/angular-element-input-text/styles.css', 'elements/styles.css')
    await fs.copy('./dist/angular-element-input-text/assets/', 'elements/assets/')
})()