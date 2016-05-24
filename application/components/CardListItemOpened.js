import serialize from 'form-serialize';
import React, { Component, PropTypes } from 'react';
import { Button, Textfield } from 'react-mdl';
import { getCardResult, getCardFullVolume, getCardLabel } from '../actions/CardActions';


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
        data.to_vol = getCardFullVolume(data);
        data.text = data.text ? data.text : getCardLabel(data);
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
        const card = this.state ? this.state : this.props.card;
        var num_error = __('Input is not a number!');

        return (
            <form ref="form" onChange={::this.handleChange}>
                <input type="hidden" name="id" defaultValue={card.id} />

                <Textfield label={__('Name')} name="name" value={card.text} onChange={() => {}} floatingLabel />

                <Textfield label={__('Original %')} name="from_deg" value={card.from_deg} onChange={() => {}}
                           pattern="-?[0-9]*(\.[0-9]+)?" error={num_error} floatingLabel required />

                <Textfield label={__('Original volume, ml')} name="from_vol" value={card.from_vol} onChange={() => {}}
                           pattern="-?[0-9]*(\.[0-9]+)?" error={num_error} floatingLabel required />

                <Textfield label={__('Summary %')} name="to_deg" value={card.to_deg} onChange={() => {}}
                           pattern="-?[0-9]*(\.[0-9]+)?" error={num_error} floatingLabel required />

                <Textfield label={__('Summary volume, ml')} name="to_vol" value={card.to_vol} onChange={() => {}}
                           pattern="-?[0-9]*(\.[0-9]+)?" error={num_error} floatingLabel required />

                <div className="result">{__('Thinner volume, ml')}: <b>{card.result}</b></div>

                <div className="card-actions">
                    <Button raised colored onClick={::this.handleSave}>{__('Save')}</Button>
                    <Button raised onClick={::this.handleCancel}>{__('Cancel')}</Button>
                </div>
            </form>
        );
    }

}