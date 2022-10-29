const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.post('/', (req, res) => {
    let newFeedback = req.body;
    console.log('post test');
    let sqlText = `INSERT INTO "feedback" (
                    "feeling",
                    "understanding",
                    "support",
                    "comments"
                    
                    ) 
                    VALUES ($1, $2, $3, $4)`
    let sqlParams = [
        newFeedback.feeling,
        newFeedback.understanding,
        newFeedback.support,
        newFeedback.comments,
        // newFeedback.flagged,
        // newFeedback.date
    ]
    pool.query(sqlText, sqlParams)
        .then(result => {
            res.sendStatus(201);
        }).catch((err) => {
            console.log('error in adding feedback', err);
            res.sendStatus(500);
        })
})


module.exports = router;