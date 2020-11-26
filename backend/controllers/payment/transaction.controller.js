const TransactionService = require('../../services/payment/transaction.service');
const utils = require('../../utils/utils');
const APIError = require('../../constants/APIError');
let transactionService = new TransactionService();

class TransactionController {
    constructor() {

    }


    async filter_by_date(req, res, next) {
        try {
            if (!utils.hasParams(req.query, ['from_date', 'to_date'])){
                throw APIError.MissingParams;
            }
            let request = utils.pick(req.query, ['from_date', 'to_date']);
            let response = await transactionService.filter_by_date(request);
            res.json(response);
        } catch (err) {
            next(err);
        }

    }

    async fix_date_of_transaction(req, res, next) {
        try {
            let response = await transactionService.fix_date_of_transaction();
            res.send(response);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = TransactionController;