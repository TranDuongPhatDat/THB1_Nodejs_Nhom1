import express from "express"
const getHomePage=(req,res)=>{
    return res.render("home",{data: {title:'About website', page:'main'}})
}
export default getHomePage