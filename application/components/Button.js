import React, { Component, PropTypes } from 'react'

export default class Button extends Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    };

    getClass() {
        return 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent';
    }

    render() {
        const { text, onClick } = this.props;
        return (
            <Button onClick={onClick} className={this.getClass()}>
                {text}
            </Button>
        )
    }
}
