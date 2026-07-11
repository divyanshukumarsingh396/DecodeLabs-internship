const express=require("express");

const router=express.Router();

const{

getMessages,
getMessage,
createMessage,
updateMessage,
deleteMessage

}=require("../controllers/messageController");

router.get("/",getMessages);

router.get("/:id",getMessage);

router.post("/",createMessage);

router.put("/:id",updateMessage);

router.delete("/:id",deleteMessage);

module.exports=router;
