let model = require('../../models/transactions')
const APIError = require('../../constants/APIError');


class TransactionService {

    constructor() {
    }

    async filter_by_date(request) {
        console.log(request);
        console.log(new Date(request.from_date));
        console.log(new Date(request.to_date));
        let transactions = await model.find({date_of_invoice: {$gte: new Date(request.from_date), $lte:new Date(request.to_date)}});
        return transactions;
    }

    async fix_date_of_transaction() {
        let transactions = await model.find({})
        console.log(transactions);
        for (let i=0;i < transactions.length; i++) {
            transactions[i]['date_of_invoice'] = (new Date(transactions[i]['date_of_invoice'])).valueOf();
            console.log(transactions[i]);
            await transactions[i].save()
        }
        let data = await model.find({});
        return data;
    }

}

module.exports = TransactionService;


