let MessageModel = require('../models/appMessage.model');

let searchMessage = (searchKey, cb) => {
    MessageModel.find({
        "$or": [
            { 'name': { $regex: searchKey, $options: "i" } },
            { 'message.english': { $regex: searchKey, $options: "i" } },
            { 'message.spanish': { $regex: searchKey, $options: "i" } },
            { 'message.russian': { $regex: searchKey, $options: "i" } },
            { appCode: { $regex: searchKey, $options: "i" } },
        ]
    }, (error, result) => {
        if (error) cb(error, null);
        else cb(null, result || []);
    });
}

let getMessage = (obj, cb) => {
    let { appCode, sortBy, ord } = obj;
    let sortObj = {};
    sortObj[sortBy] = ord;
    MessageModel.find({
        appCode
    }, {}, {
            sort: sortObj
        }, (error, result) => {
            if (error) cb(error, null);
            else cb(null, result || []);
        });
};

let updateMessage = (obj, cb) => {
    let { appCode, name } = obj;
    MessageModel.updateOne({
        name, appCode
    }, {
            $set: obj
        }, {
            upsert: true
        }, (error, result) => {
            console.log(result);
            if (error) cb(error, null);
            else cb(null, result || []);
        });
}

module.exports = {
    getMessage,
    updateMessage,
    searchMessage
};