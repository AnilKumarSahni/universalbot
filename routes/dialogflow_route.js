const express = require('express');
const router = express.Router();
const tagMapper = require('../tagmapper/tagmapper.js');
const util = require('../controllers/util');
 
router.post('/dialogflow', async (req, res) => {
    const starttime=new Date().toISOString();
    let tag=null;
    try {
        tag = req.body.fulfillmentInfo.tag;
        const targetFunctionPath = tagMapper.getMappingForTag(tag);
        if (targetFunctionPath) {
            const targetFunction = require(targetFunctionPath);
            const responseData = await targetFunction(req, res);
            res.send(responseData);
            console.log(`info|StartTime: ${starttime}|EndTime: ${new Date().toISOString()}|tag: ${tag}`);
        } else {
            console.log(`error|StartTime: ${starttime}|EndTime: ${new Date().toISOString()}|Tag not found: ${tag}`);
            res.send(util.getErrorMessage());
        }
    } catch (error) {
        console.log(`error|StartTime: ${starttime}|EndTime: ${new Date().toISOString()}|error: ${error.message}`);
        res.send(util.getErrorMessage());
    }
});
 
module.exports = {
    router
};