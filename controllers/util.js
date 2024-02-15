const textResponseForDialogflow = (texts, sessionInfo, targetFlow, targetPage) => {

    messages = []

    texts.forEach(text => {
        messages.push(
            {
                text: {
                    text: [text],
                    redactedText: [text]
                },
                responseType: 'HANDLER_PROMPT',
                source: 'VIRTUAL_AGENT'
            }
        );
    });

    let responseData = {
        fulfillment_response: {
            messages: messages
        }
    };

    if (sessionInfo !== '') {
        responseData['sessionInfo'] = sessionInfo;
    }

    if (targetFlow !== '') {
        responseData['targetFlow'] = targetFlow;
    }

    if (targetPage !== '') {
        responseData['targetPage'] = targetPage;
    }

    return responseData
};

const getErrorMessage = () => {

    return textResponseForDialogflow(
        [
            'We are facing a technical issue.',
            'Please try after sometime'
        ],
        '',
        '',
        ''
    );
};
function generateRandom6DigitNumber() {
    // Generate a random number between 1000 and 9999 (inclusive)
    const randomNumber = Math.floor(Math.random() * 900000) + 100000;
    return randomNumber;
}
module.exports = {
    textResponseForDialogflow,
    getErrorMessage,
    generateRandom6DigitNumber
};