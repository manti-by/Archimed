import React, { Component, PropTypes } from 'react'

class Button extends Component {

    getClass() {
        return 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent';
    }

    render() {
        const { text, onClick } = this.props;
        return (
            <button onClick={onClick} className={this.getClass()}>
                {text}
            </button>
        )
    }
}

Button.propTypes = {
    text: PropTypes.text.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button
