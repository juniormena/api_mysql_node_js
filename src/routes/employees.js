const express = require('express');
const router  = express.Router();
const mysqlConnection = require('../database');

router.get('/',(req,res)=>{
    mysqlConnection.query('select * from employee',(err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }
        else{
            console.log(err)
        }
    });
});

router.get('/:id',(req,res)=>{
    const {id} = req.params;
    mysqlConnection.query('select * from employee where id=?',[id],(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }
        else{
            console.log(err);
        }
    });
});

router.post('/',(req,res)=>{
    const query = `
        CALL employeeAddOrEdit(?,?,?);
    `
    const {id,name,salary} = req.body;
    mysqlConnection.query(query, [id,name,salary],(err,rows,fields)=>{
        if(!error){
            res.json({status:'Employeed Saved'});
        }
        else{
            console.log(err);
        }
    });
});

router.put('/:id',(req,res)=>{
    const {name,salary} = req.body;
    const {id} = req.params;

    const query = `CALL employeeAddOrEdit(?,?,?)`;

    mysqlConnection.query(query,(err,rows,fields)=>{
        if(!err){
            res.json({status:'Employeed Actualizado'})
        }
        else{
            console.log(err);
        }
    });
    
});

router.delete('/:id',(req,res)=>{
    const {id} = req.params;

    mysqlConnection.query('delete from employee where id = ?',[id],(err,rows,fields)=>{
        if(!err){
            res.json({status:'Employeed Eliminado'})
        }
        else{
            console.log(err);
        }

    })
})


module.exports = router;