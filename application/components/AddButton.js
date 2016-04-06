import React from 'react'
import Button from './Button'

export default class AddButton extends Button {

    getClass() {
        return 'archimed-add-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored';
    }

    render() {
        const { text, onClick } = this.props;
        return (
            <button onClick={onClick} className={this.getClass()}>
                <i className={'material-icons'}>{'add'}</i>
            </button>
        )
    }
}
