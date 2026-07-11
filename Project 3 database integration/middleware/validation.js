module.exports=(req,res,next)=>{

const{name,email,message}=req.body;

if(!name||!email||!message){

return res.status(400).json({

success:false,

message:"All Fields Required"

});

}

next();

};
