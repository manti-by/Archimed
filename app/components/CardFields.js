import React, { Component, PropTypes } from 'react';
import { Textfield } from 'react-mdl';


export class CardBasicFields extends Component {

    static propTypes = {
        card: PropTypes.object.isRequired
    };

    onTextfieldChange (event) {
        !event.currentTarget.value && this.setState({ value: 0 });
    }

    render () {
        const card = this.props.card;
        const num_error = __('Input is not a number!');

        return (
            <section>
                <input type="hidden" name="water_temp" value={card.water_temp} />
                <input type="hidden" name="spirit_temp" value={card.spirit_temp} />

                <Textfield label={__('Original %')} name="from_deg" value={card.from_deg}
                           onChange={::this.onTextfieldChange} pattern="-?[0-9]*(\.[0-9]+)?" error={num_error}
                           autoComplete="off" floatingLabel required />

                <Textfield label={__('Original volume, ml')} name="from_vol" value={card.from_vol}
                           onChange={::this.onTextfieldChange} pattern="-?[0-9]*(\.[0-9]+)?" error={num_error}
                           autoComplete="off" floatingLabel required />

                <Textfield label={__('Summary %')} name="to_deg" value={card.to_deg}
                           onChange={::this.onTextfieldChange} pattern="-?[0-9]*(\.[0-9]+)?" error={num_error}
                           autoComplete="off" floatingLabel required />
            </section>
        );
    }

}

export class CardAdvancedFields extends Component {

    static propTypes = {
        card: PropTypes.object.isRequired
    };

    onTextfieldChange (event) {
        !event.currentTarget.value && this.setState({ value: 0 });
    }

    render () {
        const card = this.props.card;
        const num_error = __('Input is not a number!');

        return (
            <section>
                <input type="hidden" name="from_deg" value={card.from_deg} />
                <input type="hidden" name="from_vol" value={card.from_vol} />
                <input type="hidden" name="to_deg" value={card.to_deg} />

                <Textfield label={__('Water temp, *C')} name="water_temp" value={card.water_temp}
                           onChange={::this.onTextfieldChange} pattern="-?[0-9]*(\.[0-9]+)?" error={num_error}
                           autoComplete="off" floatingLabel required />

                <Textfield label={__('Spirit temp, *C')} name="spirit_temp" value={card.spirit_temp}
                           onChange={::this.onTextfieldChange} pattern="-?[0-9]*(\.[0-9]+)?" error={num_error}
                           autoComplete="off" floatingLabel required />
            </section>
        );
    }

}