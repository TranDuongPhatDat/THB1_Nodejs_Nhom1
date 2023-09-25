import express from "express"
const userPage=(req,res)=>{
    return res.render("home",{data: {title:'Tao tai khoan',  page:'newUser'}})
}
const listuser=(req,res)=>{
    return res.render("home",{data: {title:'Danh sách tài khoản',  page:'listUser'}})
}
const login=(req,res)=>{
    return res.render("home",{data: {title:'Đăng nhập',  page:'login'}})
}
export default {userPage,listuser,login}