
// rmb  转  $

let rate;
function rmbToDollar(rmb){
    return rmb/rate;
}

module.exports = function (R){
    rate = R
    return {rmbToDollar}
}