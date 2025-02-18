const express=require("express");
const URL = require("../model/url");
const User = require("../model/user");

const router = express.Router();

router.get("/",async(req,res)=>{
    try {
        const allUrls = await URL.find({});
        return res.render("home", {
          urls: allUrls,
        });
      } catch (err) {
        console.error("Error fetching URLs:", err);
        return res.status(500).send("Internal Server Error");
      }
    
});

router.get('/user',(res,rep)=>{
  return res.render("user")
});

module.exports = router;