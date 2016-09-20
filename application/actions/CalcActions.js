export function getCardResult(card) {
    return card.from_vol * (card.from_deg / card.to_deg - 1);
}

export function getCardFullVolume(card) {
    return card.from_vol + card.result;
}

export function getCardLabel(card) {
    return parseInt(card.from_deg) + '% / ' + card.from_vol.toFixed(2) + 'ml' +
        ' > ' + parseInt(card.to_deg) + '% / ' + card.to_vol.toFixed(2) + 'ml';
}
