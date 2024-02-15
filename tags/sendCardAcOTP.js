const util = require('../controllers/util');
const apis = require('../services/api_services');
const sendCardAcOTP = (req) => {
    const product_list = apis.getCustomerProducts(req);
    const last4digit = req.body.sessionInfo.parameters['last4digit'].toString();
    const session = req.body.sessionInfo.session;

    if (product_list[last4digit]) {
        const { Status, Product_Type } = product_list[last4digit];

        if (Status !== 'Active') {
            req.body.sessionInfo.parameters['last4digit'] = null;
            const parameters = req.body.sessionInfo.parameters;

            return util.textResponseForDialogflow(
                [`Your request could not be processed due to the status "${Status}" of your ${Product_Type}.`],
                { session, parameters },
                '',
                ''
            );
        }
    } else {
        req.body.sessionInfo.parameters['last4digit'] = null;
        const parameters = req.body.sessionInfo.parameters;

        return util.textResponseForDialogflow(
            [`Your request could not be processed due to invalid input: ${last4digit}`],
            { session, parameters },
            '',
            ''
        );
    }

    const parameters = { 'MOTP': util.generateRandom6DigitNumber().toString() };
    return util.textResponseForDialogflow(
        ['OTP Sent!'],
        { session, parameters },
        '',
        ''
    );
};

module.exports = sendCardAcOTP;