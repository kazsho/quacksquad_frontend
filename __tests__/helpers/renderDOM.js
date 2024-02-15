const path = require('path')
const { JSDOM } = require('jsdom')

/**
 * Renders a DOM from a given HTML file.
 * @param {string} filename - The path to the HTML file to be rendered.
 * @returns {Promise<JSDOM>} A promise that resolves with the JSDOM object once the DOM is fully loaded.
 */
const renderDOM = async (filename) => {
    const filePath = path.resolve(__dirname, '..', filename)
    const dom = await JSDOM.fromFile(filePath, {
        runScripts: 'dangerously',
        resources: 'usable',
    });

    return new Promise((resolve, reject) => {
        dom.window.document.addEventListener('DOMContentLoaded', () => resolve(dom))
        dom.window.addEventListener('error', (error) => reject(error))
    });
};

module.exports = renderDOM