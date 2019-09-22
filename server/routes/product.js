const express = require('express');
const router = express.Router();
const { mongoose } = require('../db');
var { Product } = require('../models/product')




router.get('/showlaptop',(req,res) =>{
    Product.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }else{
            console.log(err);
        }
    })
})

router.get('/list/:id',(req,res) =>{
    Product.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log(err);
            
        }
    })
})

router.post('/addlaptop',(req,res) =>{
    var product = new Product({
        name: req.body.name,
        Cost: req.body.Cost,
        Discount: req.body.Discount,
        Brand: req.body.Brand,
        model_no: req.body.model_no,
        Sales_Package: req.body.Sales_Package,
        Model_Number: req.body.Model_Number,
        Part_Number: req.body.Part_Number,
        Series: req.body.Series,
        Color: req.body.Color,
        Type: req.body.Type,
        Suitable_For: req.body.Suitable_For,
        Battery_Backup: req.body.Battery_Backup,
        Battery_Cell: req.body.Battery_Cell,
        MS_Office_Provided: req.body.MS_Office_Provided,

        Processor_Brand: req.body.Processor_Brand,
        Processor_Name: req.body.Processor_Name,
        Processor_Generation: req.body.Processor_Generation,
        SSD: req.body.SSD,
        RAM: req.body.RAM,
        RAM_Type: req.body.RAM_Type,
        HDD_Capacity: req.body.HDD_Capacity,
        Processor_Variant: req.body.Processor_Variant,
        Clock_Speed: req.body.Clock_Speed,
        Expandable_Memory: req.body.Expandable_Memory,
        RAM_Frequency: req.body.RAM_Frequency,
        Cache: req.body.Cache,
        RPM: req.body.RPM,
        Graphic_Processor: req.body.Graphic_Processor,
        Number_of_Cores: req.body.Number_of_Cores,

        OS_Architecture: req.body.OS_Architecture,
        Operating_System: req.body.Operating_System,
        System_Architecture: req.body.System_Architecture,

        Mic_In: req.body.Mic_In,
        RJ45: req.body.RJ45,
        USB_Port: req.body.USB_Port,
        HDMI_Port: req.body.HDMI_Port,
        Multi_Card_Slot: req.body.Multi_Card_Slot,

        Touchscreen: req.body.Touchscreen,
        Screen_Size: req.body.Screen_Size,
        Screen_Resolution: req.body.Screen_Resolution,
        Screen_Type: req.body.Screen_Type,
        Speakers: req.body.Speakers,
        Internal_Mic: req.body.Internal_Mic,

        Wireless_LAN: req.body.Wireless_LAN,
        Bluetooth: req.body.Bluetooth,
        Ethernet : req.body.Ethernet,

        Dimensions: req.body.Dimensions,
        Weight: req.body.Weight,

        Disk_Drive: req.body.Disk_Drive,
        Web_Camera: req.body.Web_Camera,
        Read_Write_Speed: req.body.Read_Write_Speed,
        Keyboard: req.body.Keyboard,
        Pointer_Device: req.body.Pointer_Device,
        Additional_Features :req.body.Additional_Features,
        Other_Accessories: req.body.Other_Accessories,

        Warranty_Summary: req.body.Warranty_Summary,
        Warranty_Service_Type: req.body.Warranty_Service_Type,
        Covered_in_Warranty: req.body.Covered_in_Warranty,
        Not_Covered_in_Warranty: req.body.Not_Covered_in_Warranty,
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
        name: req.body.name,
        Cost: req.body.Cost,
        Discount: req.body.Discount,
        Brand: req.body.Brand,
        model_no: req.body.model_no,
        Sales_Package: req.body.Sales_Package,
        Model_Number: req.body.Model_Number,
        Part_Number: req.body.Part_Number,
        Series: req.body.Series,
        Color: req.body.Color,
        Type: req.body.Type,
        Suitable_For: req.body.Suitable_For,
        Battery_Backup: req.body.Battery_Backup,
        Battery_Cell: req.body.Battery_Cell,
        MS_Office_Provided: req.body.MS_Office_Provided,

        Processor_Brand: req.body.Processor_Brand,
        Processor_Name: req.body.Processor_Name,
        Processor_Generation: req.body.Processor_Generation,
        SSD: req.body.SSD,
        RAM: req.body.RAM,
        RAM_Type: req.body.RAM_Type,
        HDD_Capacity: req.body.HDD_Capacity,
        Processor_Variant: req.body.Processor_Variant,
        Clock_Speed: req.body.Clock_Speed,
        Expandable_Memory: req.body.Expandable_Memory,
        RAM_Frequency: req.body.RAM_Frequency,
        Cache: req.body.Cache,
        RPM: req.body.RPM,
        Graphic_Processor: req.body.Graphic_Processor,
        Number_of_Cores: req.body.Number_of_Cores,

        OS_Architecture: req.body.OS_Architecture,
        Operating_System: req.body.Operating_System,
        System_Architecture: req.body.System_Architecture,

        Mic_In: req.body.Mic_In,
        RJ45: req.body.RJ45,
        USB_Port: req.body.USB_Port,
        HDMI_Port: req.body.HDMI_Port,
        Multi_Card_Slot: req.body.Multi_Card_Slot,

        Touchscreen: req.body.Touchscreen,
        Screen_Size: req.body.Screen_Size,
        Screen_Resolution: req.body.Screen_Resolution,
        Screen_Type: req.body.Screen_Type,
        Speakers: req.body.Speakers,
        Internal_Mic: req.body.Internal_Mic,

        Wireless_LAN: req.body.Wireless_LAN,
        Bluetooth: req.body.Bluetooth,
        Ethernet : req.body.Ethernet,

        Dimensions: req.body.Dimensions,
        Weight: req.body.Weight,

        Disk_Drive: req.body.Disk_Drive,
        Web_Camera: req.body.Web_Camera,
        Read_Write_Speed: req.body.Read_Write_Speed,
        Keyboard: req.body.Keyboard,
        Pointer_Device: req.body.Pointer_Device,
        Additional_Features :req.body.Additional_Features,
        Other_Accessories: req.body.Other_Accessories,

        Warranty_Summary: req.body.Warranty_Summary,
        Warranty_Service_Type: req.body.Warranty_Service_Type,
        Covered_in_Warranty: req.body.Covered_in_Warranty,
        Not_Covered_in_Warranty: req.body.Not_Covered_in_Warranty,
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


module.exports = router;