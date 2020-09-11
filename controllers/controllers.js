'use strict';

const express = require("express");
const router = express.Router();

var total_word = 0		// global variable to increment total number of words
var process_id = new Set();	// HashSet table to check duplicated id

// count message
exports.count = (req, res) => {
    //check if json request is empty or missing any required keys (id and message)
    let req_keys = Object.keys(req.body);
    if (req_keys.length === 0 || !req_keys.includes("id") || !req_keys.includes("message")) {
        res.json({'message': 'Invalid Request Data'});
    }
    else {
        let id = req.body.id;
        let message = req.body.message;
        // this condition returns true if there is no duplication or false if there is duplication
        if (!(process_id.has(id))) {
            process_id.add(id);
            total_word += message.split(" ").length;
            res.json({'count': total_word});
        }
        else {
            // return duplication error message if id is processed multiple times
            res.json({'message': 'Duplicated ID'});
        }
    }
};
