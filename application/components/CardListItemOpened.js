import serialize from 'form-serialize';
import React, { Component, PropTypes } from 'react';
import NumberInput from './NumberInput'
import { getCardResult, getCardLabel } from '../actions/CardActions';

export default class CardListItem extends Component {

    static propTypes = {
        card: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = this.props.card;
    }

    data() {
        var data = serialize(this.refs.form, { hash: true });
        data.result = getCardResult(data);
        data.text = getCardLabel(data);
        return data;
    }

    handleChange() {
        this.setState(this.data());
    }

    handleSave(event) {
        event.preventDefault();
        this.props.saveCard(this.data());
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.saveCard(this.props.card);
    }

    render () {
        const {card} = this.props;

        return (
            <form ref="form">
                <input type="hidden" name="id" defaultValue={card.id} />

                <div className="mdl-textfield mdl-js-textfield">
                    <input type="text" name="text" placeholder="Name" defaultValue={card.text}
                           className="mdl-textfield__input" onChange={::this.handleChange} />
                </div>

                <div className="calc mdl-textfield mdl-js-textfield">
                    <NumberInput name="from_deg" value={card.from_deg} placeholder="90" onChange={::this.handleChange} />
                    <NumberInput name="from_vol" value={card.from_vol} placeholder="220" onChange={::this.handleChange} />
                    <NumberInput name="to_deg" value={card.to_deg} placeholder="40" onChange={::this.handleChange} />
                    <NumberInput name="to_vol" value={card.to_vol} placeholder="500" onChange={::this.handleChange} />

                    <div className="result">{card.result}</div>
                </div>

                <div className="card-actions">
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--primary"
                            onClick={::this.handleSave}>
                        {__('Update')}
                    </button>
                    <button className="mdl-button mdl-js-button mdl-button--raised"
                            onClick={::this.handleCancel}>
                        {__('Cancel')}
                    </button>
                </div>
            </form>
        );
    }

}