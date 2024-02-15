const util = require('../controllers/util');
const apis = require('../services/api_services');
 
const checkMobile = (req) => {
    //console.log(req.body);
    console.log("Task ok")
    let session = req.body.sessionInfo.session;
    let parameters = {
        'intent_page': req.body.pageInfo.currentPage
    };
    targetPage='projects/customsearchapi-401819/locations/asia-south1/agents/00fff5b9-1858-4068-a660-f55edb38945f/flows/00000000-0000-0000-0000-000000000000/pages/527e82f3-d38d-4756-a669-ad48fafc0f10';
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
module.exports = checkMobile;