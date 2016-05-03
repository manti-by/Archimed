import React, { Component, PropTypes } from 'react';

export default class CardListItem extends Component {

    static propTypes = {
        card: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = this.props.card;
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    handleSave() {
        this.props.saveCard(this.props.card.id, this.state.text);
    }

    handleCancel() {
        this.props.saveCard(this.props.card.id, this.props.card.text);
    }

    render () {
        const {card} = this.props;

        return (
            <div>
                <input type="text" name="text" placeholder="Name" defaultValue={card.text}
                       className="mdl-textfield__input" onChange={::this.handleChange} />

                <div className="card-actions">
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--primary"
                            onClick={::this.handleSave}>
                        Update
                    </button>
                    <button className="mdl-button mdl-js-button mdl-button--raised"
                            onClick={::this.handleCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        );
    }

}