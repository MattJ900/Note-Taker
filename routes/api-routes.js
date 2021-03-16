const router = require("express").Router();
const fs = require("fs");

router.get("/api/notes",(req,res)=>{
fs.readFile('./db/db.json', 'utf8', (error, data) =>{
if (error) throw error 
const notes = JSON.parse(data);
res.json(notes);
});
  
})

router.post("/api/notes",(req,res)=>{
fs.readFile('./db/db.json', 'utf8', (error, data) =>{
if (error) throw error 
const notes = JSON.parse(data);
const newNote = req.body;
notes .push(newNote)
fs.writeFile('./db/db.json', JSON.stringify(notes), (err) =>{
if (error) throw error 
res.json(newNote)
});
});    
})











module.exports=router