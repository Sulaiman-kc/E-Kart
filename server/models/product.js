const mongoose = require('mongoose');


var Product = mongoose.model('product',{
     // laptop and computer

     name: {type:String},
     URL: {type:String},
     Cost: {type:String},
     Number_Item:{type:String},
     Discount: {type:String},
     Brand: {type:String},
     model_no: {type:String},
     Sales_Package: {type:String},
     Model_Number: {type:String},
     HDD_Capacity: {type:String},
     Series: {type:String},
     Color: {type:String},
     Type: {type:String},
     RAM: {type:String},
     Battery_Backup: {type:String},
     Processor_Generation: {type:String},
     Processor_Name: {type:String},


     // mobile

     Operating_System: {type:String},
     Internal_Storage: {type:String},
     Expandable_Storage: {type:String},

    
},'Product');

module.exports = { Product };