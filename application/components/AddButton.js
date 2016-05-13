import React, { Component, PropTypes } from 'react';
import { FABButton, Icon } from 'react-mdl';


export default class AddButton extends Component {

    render() {
        const { onClick } = this.props;
        return (
            <FABButton className="archimed-add-button" onClick={onClick} colored>
                <Icon name="add" />
            </FABButton>
        )
    }
}
