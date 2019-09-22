const mongoose = require('mongoose');


var Product = mongoose.model('product',{
    name: { type: String },
    model_no: {type: String },
    Cost: {type:String},
    Discount: {type:String},
    Brand: {type:String},
    Sales_Package: {type:String},
    Model_Number: {type:String},
    Part_Number: {type:String},
    Series: {type:String},
    Color: {type:String},
    Type: {type:String},
    Suitable_For: {type:String},
    Battery_Backup: {type:String},
    Battery_Cell: {type:String},
    MS_Office_Provided: {type:String},

    Processor_Brand: {type:String},
    Processor_Name: {type:String},
    Processor_Generation: {type:String},
    SSD: {type:String},
    RAM: {type:String},
    RAM_Type: {type:String},
    HDD_Capacity: {type:String},
    Processor_Variant: {type:String},
    Clock_Speed: {type:String},
    Expandable_Memory: {type:String},
    RAM_Frequency: {type:String},
    Cache: {type:String},
    RPM: {type:String},
    Graphic_Processor: {type:String},
    Number_of_Cores: {type:String},

    OS_Architecture: {type:String},
    Operating_System: {type:String},
    System_Architecture: {type:String},

    Mic_In: {type:String},
    RJ45: {type:String},
    USB_Port: {type:String},
    HDMI_Port: {type:String},
    Multi_Card_Slot: {type:String},

    Touchscreen: {type:String},
    Screen_Size: {type:String},
    Screen_Resolution: {type:String},
    Screen_Type: {type:String},
    Speakers: {type:String},
    Internal_Mic: {type:String},

    Wireless_LAN: {type:String},
    Bluetooth: {type:String},
    Ethernet : {type:String},

    Dimensions: {type:String},
    Weight: {type:String},

    Disk_Drive: {type:String},
    Web_Camera: {type:String},
    Read_Write_Speed: {type:String},
    Keyboard: {type:String},
    Pointer_Device: {type:String},
    Additional_Features :{type:String},
    Other_Accessories: {type:String},

    Warranty_Summary: {type:String},
    Warranty_Service_Type: {type:String},
    Covered_in_Warranty: {type:String},
    Not_Covered_in_Warranty: {type:String},

    image1:{type:String},
	image2:{type:String},
    image3:{type:String},
    image2:{type:String},
    image3:{type:String},
},'laptops');

module.exports = { Product };