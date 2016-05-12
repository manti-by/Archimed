import React, { Component, PropTypes } from 'react'

export default class NumberInput extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string
    };

    handleChange(event) {
        this.setState({ text: event.currentTarget.value });
        this.props.onChange();
    }

    render() {
        const { placeholder, name, value } = this.props;
        return (
            <input type="text" name={name} defaultValue={value} placeholder={placeholder}
                   className="mdl-textfield__input" onChange={::this.handleChange} />
        )
    }
}
