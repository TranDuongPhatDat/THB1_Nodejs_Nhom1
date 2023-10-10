import pool from './../configs/connectDB'
const getAllUser = async () => {
    const [rows, fields] =await pool.execute('SELECT * FROM `user`')
    return rows
}
const createNewUser = () =>{}
const detailUser = async (user) => {
    const [rows, fields] =await pool.execute('SELECT * FROM `user` where username=?',[user])
    return rows[0]
}
const updateUser = async (name, pass, fullname, address, sex, email, groupid, use) => {
    await pool.execute('UPDATE user SET username=?, password=?, fullname=?, address=?, sex=?, email=?, groupid=? WHERE username=?',[name, pass, fullname, address, sex, email, groupid, use])
}
const deleteUser = async (user) => {
    await pool.execute ("delete from user where username=?", [user])
}
export default {getAllUser,createNewUser,detailUser,updateUser,deleteUser}