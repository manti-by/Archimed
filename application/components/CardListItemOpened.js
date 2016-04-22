import React, { Component, PropTypes } from 'react';

export default class CardListItem extends Component {

    static propTypes = {
        card: PropTypes.object.isRequired,
        saveCard: PropTypes.func.isRequired
    };

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    render () {
        const {card, saveCard} = this.props;

        return (
            <span>
                <input type="text" name="text" value={ card.text } placeholder="Name"
                       className="mdl-textfield__input" onChange={::this.handleChange} />
                <button className="mdl-button mdl-js-button mdl-button--raised"
                        onClick={() => saveCard()}>
                    Save
                </button>
            </span>
        );
    }

}