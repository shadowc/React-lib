import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTagsDisplay from '../jsx/ReactTagsDisplay';

/**
 * TagsManager Constructor - Loads the tags present in the form
 *
 * @param {HTMLElement} hiddenFieldsContainer - The container for the hidden fields
 * @param {HTMLElement} tagsContainer - The container where the tags will be rendered
 * @param {string} tagFieldNamePrefix - The field name of the hidden tag fields
 * @param {string} tagsTextLabel - The for attribute for the tags label
 * @param {function} hxrRouteCallback - The route to the xhr API call to bring suggestions
 *
 * @class TagsManager
 * @classdesc Manager for tag editing in posts
 */
export default class TagsManager {
    constructor(hiddenFieldsContainer, tagsContainer, tagFieldNamePrefix, tagsTextLabel, xhrRouteCallback) {
        /**
         * @type {TagEntity[]}
         */
        const tags = [];

        // Process existing form fields
        const tagFields = $.find('input[type=hidden]');

        let currentTagId = 0;
        let currentTag = {};

        tagFields.forEach((field) => {
            const tagRegExp = new RegExp(`^${tagFieldNamePrefix}\\_(\\d+)\\_(id|text)$`);
            const [label, tagId, tagField] = field.id.match(tagRegExp);

            if (Number(tagId) !== currentTagId) {
                tags.push(currentTag);
                currentTagId = Number(tagId);
                currentTag = {};
            }

            currentTag.tagId = currentTag.tagId ?
                `${currentTag.tagId}|${label}` :
                label;

            currentTag[tagField] = field.value;
        });

        if (currentTag.id && currentTag.text) {
            tags.push(currentTag);
        }

        this.tagsDisplay = ReactDOM.render(React.createElement(ReactTagsDisplay, {
            hiddenFieldsContainer,
            tagsTextLabel,
            xhrRouteCallback
        }), tagsContainer);

        this.tagsDisplay.setState({
            tags
        });
    }
}
