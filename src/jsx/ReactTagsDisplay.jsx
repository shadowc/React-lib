import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * @typedef {object} TagEntity
 * @property {number|null} id
 * @property {string|null} tagId
 * @property {string} text
 */

/**
 * @typedef {object} TagsState
 * @property {TagEntity[]} tags
 * @property {TagEntity[]} suggestions
 */

/**
 * @class ReactTagsDisplay
 * @classdesc Display class for tag elements
 * @extends React.Component
 */
export default class ReactTagsDisplay extends React.Component {
    constructor(props) {
        super(props);

        /**
         *
         * @type TagsState
         */
        this.state = {
            tags: [],
            suggestions: []
        };

        /**
         * @type {HTMLElement|null}
         */
        this.input = null;

        /**
         * @type {Element}
         */
        this.body = document.getElementsByTagName('body')[0];

        /**
         * @type {HTMLElement[]}
         */
        this.hiddenTags = this.props.hiddenFieldsContainer.children;

        /**
         * The tagIndex to set for the new hidden elements in the form
         *
         * @type {number}
         */
        this.newTagIndex = this.hiddenTags.length / 2;

        /**
         * Placeholder for the suggestions box timeout
         *
         * @type {number|null}
         */
        this.suggestionTimeout = null;

        /**
         * Cache for the previous value before keyUp
         *
         * @type {string}
         */
        this.prevInputValue = '';

        $(document).on('click', this.clearSuggestions.bind(this));
    }

    /**
     * Renders the tag component
     *
     * @memberOf ReactTagsDisplay
     * @instance
     * @returns {HTMLElement}
     */
    render() {
        return (
            <div
                className="tag-list"
                onClick={this.handleFocus.bind(this)}
            >
                {this.state.tags.map(this.renderTag.bind(this))}
                <input
                    ref={(input) => { this.input = input; }}
                    type="text"
                    className="transparent"
                    id={this.props.tagsTextLabel ? this.props.tagsTextLabel : 'tags'}
                    name={this.props.tagsTextLabel ? this.props.tagsTextLabel : 'tags'}
                    onKeyPress={this.onKeyPress.bind(this)}
                    onKeyUp={this.onKeyUp.bind(this)}
                />
                {this.state.suggestions.length ?
                    <div
                        className="tag_suggestions"
                    >
                        {this.state.suggestions.map(this.renderSuggestion.bind(this))}
                    </div> :
                    ''
                }
            </div>
        );
    }

    /**
     * Renders a single tag
     *
     * @memberOf ReactTagsDisplay
     * @instance
     * @param {TagEntity} tag
     * @returns {HTMLElement}
     */
    renderTag(tag) {
        return (
            <span
                key={tag.text}
            >
                {tag.text} <a href="#" onClick={this.removeTag.bind(this, tag)}>x</a>
            </span>
        );
    }

    /**
     * Renders a tag suggestion
     *
     * @memberOf ReactTagsDisplay
     * @instance
     * @param {TagEntity} tag
     * @returns {HTMLElement}
     */
    renderSuggestion(tag) {
        const tagRegExp = new RegExp(`^(.*)(${this.input.value})(.*)$`, 'i');
        const tagParts = tag.text.match(tagRegExp);
        let innerTag = tag.text;

        if (tagParts !== null && tagParts.length === 4) {
            const preTag = tagParts[1];
            const tagText = tagParts[2];
            const postTag = tagParts[3];

            innerTag = (<span>{preTag}<strong>{tagText}</strong>{postTag}</span>);
        } else {
            innerTag = <span>{tag.text}</span>;
        }

        return (
            <a href="#" key={tag.text} onClick={this.onSuggestionClick.bind(this, tag)}>{innerTag}</a>
        );
    }

    /**
     * Adds a tag by text only (new tag)
     *
     * @memberOf ReactTagsDisplay
     * @instance
     * @param {string} tagText
     */
    addTag(tagText) {
        // trim and remove trailing semicolons
        tagText = tagText.trim();

        if (tagText.endsWith(',')) {
            tagText = tagText.substr(0, tagText.length - 1);
        }

        // avoid empty tags
        if (tagText === '') {
            this.setState({
                suggestions: []
            });

            return;
        }

        // avoid repeated tags
        for (let i = 0; i < this.state.tags.length; i++) {
            if (this.state.tags[i].text === tagText) {
                this.setState({
                    suggestions: []
                });

                return;
            }
        }

        // try to get tag id from suggestions
        let tagIdFromSuggestions = 0;
        for (let i = 0; i < this.state.suggestions.length; i++) {
            const suggestion = this.state.suggestions[i];

            if (suggestion.text.toLowerCase() === tagText.toLowerCase()) {
                tagIdFromSuggestions = suggestion.id;
                tagText = suggestion.text;
                break;
            }
        }

        const newFieldTemplate = this.props.hiddenFieldsContainer
            .getAttribute('data-prototype')
            .replace(/__name__/g, this.newTagIndex.toString(10));

        this.newTagIndex += 1;

        $(this.props.hiddenFieldsContainer).append(newFieldTemplate);
        this.hiddenTags[this.hiddenTags.length - 2].value = tagIdFromSuggestions;
        this.hiddenTags[this.hiddenTags.length - 1].value = tagText;

        const newTagIds =
            `${this.hiddenTags[this.hiddenTags.length - 2].id}|${this.hiddenTags[this.hiddenTags.length - 1].id}`;

        this.state.tags.push({
            id: null,
            tagId: newTagIds,
            text: tagText
        });

        this.setState({
            tags: this.state.tags,
            suggestions: []
        });

        this.input.focus();
    }

    /**
     * Removes a tag from the collection
     *
     * @memberOf ReactTagsDisplay
     * @instance
     * @param {TagEntity} tag
     * @param {Event|null} event
     */
    removeTag(tag, event) {
        if (event) {
            event.preventDefault();
        }

        const formFields = tag.tagId.split('|');

        formFields.forEach((fieldId) => {
            const field = document.getElementById(fieldId);
            field.parentNode.removeChild(field);
        });

        for (let i = 0; i < this.state.tags.length; i++) {
            const stateTag = this.state.tags[i];

            if (stateTag.text === tag.text) {
                this.state.tags.splice(i, 1);
                break;
            }
        }

        this.setState({
            tags: this.state.tags
        });
    }

    /**
     * Resets the suggestions timeout handler
     *
     * @memberOf ReactTagsDisplay
     * @instance
     */
    resetSuggestionsTimeout() {
        if (this.suggestionTimeout !== null) {
            clearTimeout(this.suggestionTimeout);
            this.suggestionTimeout = null;
        }
    }

    /**
     * Makes a call to suggestions and updates the set
     *
     * @memberOf ReactTagsDisplay
     * @instance
     */
    updateSuggestions() {
        if (this.input.value !== '') {
            this.resetSuggestionsTimeout();

            this.suggestionTimeout = setTimeout(() => {
                const tagRoute = `${this.props.xhrRoute}/${this.input.value}`;

                $.ajax(tagRoute, {
                    method: 'GET'
                }).then((data) => {
                    const tags = JSON.parse(data);
                    if (typeof tags.map === 'function') {
                        this.setState({
                            suggestions: tags
                        });
                    }
                });
            }, 200);
        } else {
            this.resetSuggestionsTimeout();

            this.setState({
                suggestions: []
            });
        }
    }
    /**
     * Reacts to key presses on tags input
     *
     * @memberOf ReactTagsDisplay
     * @instance
     * @param {Event} event
     */
    onKeyUp(event) {
        /**
         * We need to look at the value that was on the input BEFORE onKeyUp updates the
         * input value, because we only want to delete the previous tag if the input WAS
         * empty before pressing Backspace
         */
        if (event.key === 'Backspace' && this.prevInputValue === '') {
            if (this.state.tags.length) {
                this.state.tags.splice(this.state.tags.length - 1, 1);
                this.setState({
                    tags: this.state.tags
                });
            }
        }

        const span = document.createElement('span');
        span.style.fontSize = '16px';
        span.innerHTML = this.input.value.replace(/\s/g, '&nbsp;');
        this.body.appendChild(span);
        this.input.style.width = `${span.offsetWidth}px`;
        this.body.removeChild(span);

        this.prevInputValue = this.input.value;
        this.updateSuggestions();
    }

    /**
     * KeyPress event handler
     *
     * @memberOf ReactTagsDisplay
     * @instance
     * @param {Event} event
     */
    onKeyPress(event) {
        const evtKey = event.key;

        switch (evtKey) {
        case (','):
        case ('Enter'):
            this.addTag(this.input.value);
            this.input.value = '';
            this.prevInputValue = '';
            this.input.style.width = '5px';

            event.preventDefault();
            break;
        default:
            break;
        }
    }

    /**
     * Reacts to clicks on the tags input
     *
     * @memberOf ReactTagsDisplay
     * @instance
     * @param {Event} event
     */
    handleFocus(event) {
        event.preventDefault();

        this.input.focus();
        this.updateSuggestions();
    }

    /**
     * Inserts a suggested tag
     *
     * @memberOf ReactTagsDisplay
     * @instance
     * @param {TagEntity} tag
     * @param {Event} event
     */
    onSuggestionClick(tag, event) {
        event.preventDefault();
        event.stopPropagation();

        this.addTag(tag.text);
        this.input.value = '';
        this.prevInputValue = '';
    }

    /**
     * Clear suggestions on document click
     *
     * @memberOf ReactTagsDisplay
     * @instance
     * @param {Event} event
     */
    clearSuggestions(event) {
        let currentTarget = event.target;

        while (currentTarget !== null) {
            if (currentTarget.className === 'tag_suggestions') {
                return;
            }

            currentTarget = currentTarget.parentNode;
        }

        this.setState({
            suggestions: []
        });
    }
}

ReactTagsDisplay.propTypes = {
    hiddenFieldsContainer: PropTypes.instanceOf(HTMLElement).isRequired,
    tagsTextLabel: PropTypes.string,
    xhrRoute: PropTypes.string.isRequired
};

ReactTagsDisplay.defaultProps = {
    tagsTextLabel: 'text'
};
