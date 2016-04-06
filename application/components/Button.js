import React, { Component, PropTypes } from 'react'

export default class Button extends Component {

    static propTypes = {
        text: PropTypes.string,
        onClick: PropTypes.func.isRequired
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            text: this.props.text || ''
        };
    }

    getClass() {
        return 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent';
    }

    render() {
        const { text, onClick } = this.props;
        return (
            <button onClick={onClick} className={this.getClass()}>{text}</button>
        )
    }
}
