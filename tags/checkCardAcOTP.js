
const util = require('../controllers/util');
const apis = require('../services/api_services');

const checkCardAcOTP = (req) => {
    let otp=req.body.sessionInfo.parameters['otp'];
    let motp=req.body.sessionInfo.parameters['MOTP'];
    let session = req.body.sessionInfo.session;
    if (otp===motp){
        let parameters={ 'CardAcCheck':'Ok' } ;
        return util.textResponseForDialogflow(
            [],
            {
                session:session,
                parameters:parameters
            },
            '',
            ''
        );}
    else{    
        let ss= req.body.sessionInfo;
        ss.parameters['otp'] = null
        parameters=ss.parameters;
    
        return util.textResponseForDialogflow(
            ['Invalid OTP entered!'],
            {
                session:session,
                parameters:parameters
            },
            '',
            ''
        );  
    }
};
module.exports = checkCardAcOTP;