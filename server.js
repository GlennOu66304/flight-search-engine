var travelpayoutsAPI = require('travelpayouts');
var tapi = travelpayoutsAPI({ token: '8da77b63275b296939eef9f6e8addf54' });
tapi.prices.latest({
    currency: 'rub',
    period_type: 'year',
    page: 1,
    limit: 30,
    show_to_affiliates: true,
    sorting: 'price',
    trip_class: 0
}, function (err, result) {
    if (err) throw err;
    console.log(result);
});