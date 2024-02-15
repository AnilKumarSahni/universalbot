const tagMapper = {
    'checkMobile': '../tags/checkMobile.js',
    'sendMobileOTP': '../tags/sendMobileOTP.js',
    'checkMobileOTP': '../tags/checkMobileOTP.js',
    'checkCardAc': '../tags/checkCardAc.js',
    'sendCardAcOTP': '../tags/sendCardAcOTP.js',
    'checkCardAcOTP': '../tags/checkCardAcOTP.js',
    'checkEmail': '../tags/getCards.js'
};
function getMappingForTag(tag) {
    if (tag in tagMapper) {
        return tagMapper[tag];
    } else {
        return null;
    }
}
module.exports = {
    getMappingForTag
};
