import serialize from 'form-serialize';
import React, { Component, PropTypes } from 'react';

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
        data.text = data.from_deg + '/' + data.from_vol + ' > ' + data.to_deg + '/' + data.to_vol;
        data.result = data.from_vol * (data.from_deg / data.to_deg + 1);
        return data;
    }

    handleChange() {
        var data = this.data();
        this.refs.result.innerHTML = data.result;
        this.setState(data);
    }

    handleSave(event) {
        event.preventDefault();

        var data = this.data();
        this.refs.result.innerHTML = data.result;
        this.props.saveCard(data);
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

                <input type="text" name="text" placeholder="Name" defaultValue={card.text}
                       className="mdl-textfield__input" onChange={::this.handleChange} />

                <div className="spacer">

                    <input type="text" name="from_deg" placeholder="90" defaultValue={card.from_deg}
                           className="mdl-textfield__input" onChange={::this.handleChange} />

                    <input type="text" name="from_vol" placeholder="220" defaultValue={card.from_vol}
                           className="mdl-textfield__input" onChange={::this.handleChange} />

                    <input type="text" name="to_deg" placeholder="40" defaultValue={card.to_deg}
                           className="mdl-textfield__input" onChange={::this.handleChange} />

                    <input type="text" name="to_vol" placeholder="500" defaultValue={card.to_vol}
                           className="mdl-textfield__input" onChange={::this.handleChange} />

                    <div className="result" ref="result"></div>

                </div>

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
            </form>
        );
    }

}