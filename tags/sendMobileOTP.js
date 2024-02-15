const util = require('../controllers/util');
const apis = require('../services/api_services');

const sendMobileOTP = (req) => {
    let session = req.body.sessionInfo.session;
    let parameters = {
        'MOTP': util.generateRandom6DigitNumber().toString()
    };
    return util.textResponseForDialogflow(
        ['OTP Sent!'],
        {
            session:session,
            parameters:parameters
        },
        '',
        ''
    );
};

module.exports = sendMobileOTP;