import serialize from 'form-serialize';
import React, { Component, PropTypes } from 'react';
import { Button, Textfield, ListItem, Card, CardTitle, CardText, CardActions, Tabs, Tab } from 'react-mdl';
import { CardBasicFields, CardAdvancedFields } from '../components/CardFields';
import { getCardResult, getCardFullVolume, getCardLabel } from '../actions/CalcActions';
import { forecastSolutionVolume } from '../actions/FetmanForecast';


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
        data.tab_id = parseInt(data.tab_id);
        data.result = getCardResult(data);
        data.to_vol = getCardFullVolume(data);
        data.text = data.text ? data.text : getCardLabel(data);
        
        data.forecast_vol = forecastSolutionVolume(
            data.result, data.water_temp, data.from_vol, data.spirit_temp, data.from_deg, data.to_deg
        );
        return data;
    }

    handleChange() {
        this.setState(this.data());
    }

    handleTab(tab_id) {
        var data = this.data();
        data.tab_id = parseInt(tab_id);
        this.setState(data);
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
        const content = card.tab_id ? <CardAdvancedFields card={card} /> : <CardBasicFields card={card} />;

        return (
            <ListItem>
                <form ref="form" onChange={::this.handleChange}>
                    <input type="hidden" name="_id" value={card._id} />
                    <input type="hidden" name="tab_id" value={card.tab_id} />

                    <Card>
                        <CardTitle>
                            <Textfield label={__('Name')} name="name" value={card.text} onChange={() => {}}
                                       autoComplete="off" floatingLabel />
                        </CardTitle>

                        <CardText>
                            <Tabs activeTab={card.tab_id} onChange={(tab_id) => this.handleTab(tab_id)} ripple>
                                <Tab>{__('Basic params')}</Tab>
                                <Tab>{__('Advanced')}</Tab>
                            </Tabs>

                            <section>{content}</section>

                            <div className="result">{__('Thinner volume, ml')}: <b>{card.result}</b></div>
                            <div className="volume">{__('Summary volume, ml')}: <b>{card.to_vol}</b></div>
                            <div className="forecast">{__('Forecasted volume, ml')}: <b>{card.forecast_vol}</b></div>
                        </CardText>

                        <CardActions border>

                            <Button raised colored onClick={::this.handleSave}>{__('Save')}</Button>
                            <Button raised onClick={::this.handleCancel}>{__('Cancel')}</Button>

                        </CardActions>
                    </Card>
                </form>
            </ListItem>
        );
    }

}