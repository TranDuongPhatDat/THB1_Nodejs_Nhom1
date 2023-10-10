import express from "express"
import userModel from "../services/userModel"
const userPage=(req,res)=>{
    return res.render("home",{data: {title:'Tao tai khoan',  page:'newUser'}})
}
// const listuser=(req,res)=>{
//     return res.render("home",{data: {title:'Danh sách tài khoản',  page:'listUser'}})
// }
const login=(req,res)=>{
    return res.render("home",{data: {title:'Đăng nhập',  page:'login'}})
}
const getAllUser=async (req,res)=>{
    let userList = await userModel.getAllUser()
    res.render("home",{data: {title:'List User',  page:'listUser', rows: userList}})
}
const createNewUser=(req,res)=>{
    res.render("home",{data: {title:'Creat New User',  page:'creatNewUser'}})
}
const detailUser = async (req, res) => {
        let user = req.params.username
        let dataUser = await userModel.detailUser(user)
        res.render("home",{data: {title:'Detail User',  page:'detailUser',rows: dataUser}})
    
}
const editView = async (req, res) => {
        let user = req.params.username
        let dataUser = await userModel.detailUser(user)
        res.render("home",{data: {title:'Edit User',  page:'edituser',rows: dataUser}})
}
const editUser = async (req, res) => {
    console.log(req.body)
    let groupid = 0
    let {name, pass, fullname, address, sex, email} = req.body
    if ('groupid' in req.body)
        groupid=1
        await userModel.updateUser(name, pass, fullname, address, sex, email, groupid)
        res.redirect("/listuser")
}
const deleteUser = async (req, res) => {
    let {username} = req.body
    await userModel.detailUser(username)
    res.redirect("/listuser")
}

export default {getAllUser,createNewUser,login,userPage,detailUser,editUser,editView,deleteUser}