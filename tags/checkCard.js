const util = require('../controllers/util');
const apis = require('../services/api_services');

const checkCardAc = (req) => {
    //console.log(req.body);
    let session = req.body.sessionInfo.session;
    let parameters = {
        'intent_page': req.body.pageInfo.currentPage
    };
    targetPage='projects/customsearchapi-401819/locations/asia-south1/agents/00fff5b9-1858-4068-a660-f55edb38945f/flows/00000000-0000-0000-0000-000000000000/pages/dc78d29d-edf7-498e-add5-da756ff5e457';
    return util.textResponseForDialogflow(
        [],
        {
            session:session,
            parameters:parameters
        },
        '',
        targetPage
    );
};
module.exports = checkCardAc;