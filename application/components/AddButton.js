import React, { Component, PropTypes } from 'react'

export default class AddButton extends Component {

    static propTypes = {
        text: PropTypes.text.isRequired,
        onClick: PropTypes.func.isRequired
    };

    getClass() {
        return 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent';
    }

    render() {
        const { text, onClick } = this.props;
        return (
            <AddButton onClick={onClick} className={this.getClass()}>
                {text}
            </AddButton>
        )
    }
}
