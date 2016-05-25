import React, { Component, PropTypes } from 'react';
import { IconButton, ListItem, ListItemContent, ListItemAction } from 'react-mdl';


export default class CardListItemClosed extends Component {

    static propTypes = {
        card: PropTypes.object.isRequired,
        editCard: PropTypes.func.isRequired,
        deleteCard: PropTypes.func.isRequired
    };

    render () {
        const { card, editCard, deleteCard } = this.props;

        return (
            <ListItem className="mdl-shadow--2dp">
                <ListItemContent onClick={() => editCard(card.id)}>
                    { card.text }
                </ListItemContent>

                <ListItemAction>
                    <IconButton name="mode_edit" onClick={() => editCard(card.id)} />
                </ListItemAction>

                <ListItemAction>
                    <IconButton name="delete" onClick={() => deleteCard(card.id)} />
                </ListItemAction>
            </ListItem>
        );
    }

}