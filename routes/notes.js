const n = require('express').Router();
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');

// get for notes
n.get('/',(req,res) =>
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

n.post('/',(req,res) => {
    const {title,text} = req.body;
    if(title && text){
        const newNote ={
            title,
            text
        }
        readAndAppend(newNote,'./db/db.json');
    }else{
        res.json("Error")
    }
})
module.exports = n;