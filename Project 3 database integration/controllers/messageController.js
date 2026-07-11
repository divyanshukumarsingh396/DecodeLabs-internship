const Message=require("../models/Message");

// GET ALL

exports.getMessages=async(req,res)=>{

try{

const messages=await Message.find();

res.status(200).json(messages);

}catch(error){

res.status(500).json({
success:false,
message:error.message
});

}

};

// GET ONE

exports.getMessage=async(req,res)=>{

try{

const message=await Message.findById(req.params.id);

if(!message){

return res.status(404).json({
message:"Message Not Found"
});

}

res.json(message);

}catch(error){

res.status(500).json({
message:error.message
});

}

};

// CREATE

exports.createMessage=async(req,res)=>{

try{

const message=await Message.create(req.body);

res.status(201).json(message);

}catch(error){

res.status(400).json({
message:error.message
});

}

};

// UPDATE

exports.updateMessage=async(req,res)=>{

try{

const message=await Message.findByIdAndUpdate(

req.params.id,

req.body,

{
new:true,
runValidators:true
}

);

if(!message){

return res.status(404).json({
message:"Message Not Found"
});

}

res.json(message);

}catch(error){

res.status(400).json({
message:error.message
});

}

};

// DELETE

exports.deleteMessage=async(req,res)=>{

try{

const message=await Message.findByIdAndDelete(req.params.id);

if(!message){

return res.status(404).json({
message:"Message Not Found"
});

}

res.json({

success:true,
message:"Deleted Successfully"

});

}catch(error){

res.status(500).json({
message:error.message
});

}

};
