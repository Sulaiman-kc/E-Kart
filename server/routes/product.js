const express = require('express');
const router = express.Router();
var multer = require('multer');
const { mongoose } = require('../db');
var { Product } = require('../models/product')
const { Cart } = require('../models/cart');
const { Order } = require('../models/order');

var quantity=1;


// var upload = multer({storage: multer.diskStorage({

//     destination: function (req, file, callback) 
//     { callback(null, './uploads');},
//     filename: function (req, file, callback) 
//     { callback(null, file.fieldname +'-' + Date.now()+path.extname(file.originalname));}
  
//   }),
  
//   fileFilter: function(req, file, callback) {
//     var ext = path.extname(file.originalname)
//     if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
//       return callback(/*res.end('Only images are allowed')*/ null, false)
//     }
//     callback(null, true)
//   }
//   });


router.get('/showlaptop',(req,res) =>{
    Product.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }else{
            console.log(err);
        }
    })
})

router.get('/showlaptop/:id',(req,res) =>{
    Product.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log(err);
            
        }
    })
})

router.post('/addlaptop', (req,res) =>{
    var product = new Product({

        // laptop and computer

        name: req.body.name,
        URL: req.body.URL,
        Cost: req.body.Cost,
        Number_Item:req.body.Number_Item,
        Discount: req.body.Discount,
        Brand: req.body.Brand,
        model_no: req.body.model_no,
        Sales_Package: req.body.Sales_Package,
        Model_Number: req.body.Model_Number,
        HDD_Capacity: req.body.HDD_Capacity,
        Series: req.body.Series,
        Color: req.body.Color,
        Type: req.body.Type,
        RAM: req.body.RAM,
        Battery_Backup: req.body.Battery_Backup,
        Processor_Generation: req.body.Processor_Generation,
        Processor_Name: req.body.Processor_Name,


        // mobile

        Operating_System: req.body.Operating_System,
        Internal_Storage: req.body.Internal_Storage,
        Expandable_Storage: req.body.Expandable_Storage,


    })
    product.save((err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log(err);
        }
    })
})


router.put('/updatelaptop/:id',(req,res) =>{ 
    var product = {
        // laptop and computer

        name: req.body.name,
        URL: req.body.URL,
        Cost: req.body.Cost,
        Number_Item:req.body.Number_Item,
        Discount: req.body.Discount,
        Brand: req.body.Brand,
        model_no: req.body.model_no,
        Sales_Package: req.body.Sales_Package,
        Model_Number: req.body.Model_Number,
        HDD_Capacity: req.body.HDD_Capacity,
        Series: req.body.Series,
        Color: req.body.Color,
        Type: req.body.Type,
        RAM: req.body.RAM,
        Battery_Backup: req.body.Battery_Backup,
        Processor_Generation: req.body.Processor_Generation,
        Processor_Name: req.body.Processor_Name,


        // mobile

        Operating_System: req.body.Operating_System,
        Internal_Storage: req.body.Internal_Storage,
        Expandable_Storage: req.body.Expandable_Storage,

        
    }
    Product.findByIdAndUpdate(req.params.id,{$set: product},{new:true},(err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log(err);
        }
    })
})


router.delete('/deletelaptop/:id',(req,res)=>{
    Product.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log(err);
        }
    })
})

router.post('/addcart/:id',(req,res)=>{
    const user_id = req.body.userId.userId;
    const p_id = req.params.id;
    console.log(" user "+user_id)
    Cart.findOne({userId :user_id},(err,doc)=>{
        if(!doc){
            console.log("add ");
            var cart = new Cart({
                userId : user_id
            })
            cart.product.push({
                productId : p_id,
                quantity : 1
            })
            cart.save((err,doc)=>{
                if(!err){
                    res.send(doc);
                    console.log('done');
                    
                }else{
                    console.log(err);
                }
            })
        }else{
            console.log("update");
            console.log(p_id);
            Cart.findOne({$and :[ {userId: user_id},{product: {$elemMatch:{productId:p_id}}}]},(err,doc)=>{
            if(doc){
                console.log('exist')
            Cart.update({$and :[ {userId: user_id},{product: {$elemMatch:{productId:p_id}}}]},{$inc: {"product.$.quantity" :1}},(err,doc)=>{
                        if(!err){
                            console.log('quan updated')
                            res.send(doc);
                        }else{
                            console.log(err);
                        }
                    })
                }else{
            var product={
                    productId : p_id,
                    quantity : 1
                }
            Cart.update({userId:user_id},{"$push" :{"product" :product}},(err,doc)=>{
                if(!err){
                    res.send(doc);
                }else{
                    console.log(err);
                }
            })
        }
        })

        }
    })
});

router.post('/getcart/',(req,res)=>{
    const user_id = req.body.userId.userId;
    const p_id = req.body.userId.userId;
    console.log(" user "+user_id)
    Cart.findOne({userId :user_id},(err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log(err);
        }
    })
})

router.delete('/deletecart/:id',(req,res)=>{
    Cart.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log(err);
        }
    })
})


router.put('/updatecart/:id',(req,res) =>{ 
    var cart = {
       quantity: req.body.quantity,
       productId: req.body.productId,
       userId: req.body.userId,
    }
    Cart.findByIdAndUpdate(req.params.id,{$set: cart},{new:true},(err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log(err);
        }
    })
})

module.exports = router;