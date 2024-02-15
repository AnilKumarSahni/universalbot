const util = require('../controllers/util');
const apis = require('../services/api_services');
const getCards = (req) => {
    let session = req.body.sessionInfo.session;
    let parameters={ 'product_list': apis.getCustomerProducts(req), 'mobileCheck':'Ok' } ;
    return util.textResponseForDialogflow(
        [],
        {
            session:session,
            parameters:parameters
        },
        '',
        ''
    );
};
module.exports = getCards;