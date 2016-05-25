export function getCardResult(card) {
    return Math.round(card.from_vol * (card.from_deg / card.to_deg - 1));
}

export function getCardFullVolume(card) {
    return parseInt(card.from_vol) + parseInt(card.result);
}

export function getCardLabel(card) {
    return card.from_deg + '% / ' + card.from_vol + 'ml' +
        ' > ' + card.to_deg + '% / ' + card.to_vol + 'ml';
}
