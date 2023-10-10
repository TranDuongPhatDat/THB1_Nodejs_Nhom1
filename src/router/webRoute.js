import express from "express"
import getHomePage from "../controllers/HomeController"
import aboutPage from "../controllers/AboutController"
import userPage from "../controllers/UserController"
const router = express.Router()
const initWebRoutes = (app) => {
    router.get('/', getHomePage)
    router.get('/about', aboutPage)
    router.get('/newUser', userPage.userPage)
    router.get('/listUser', userPage.getAllUser)
    router.get('/login', userPage.login)
    router.get('/detailUser/:username', userPage.detailUser)
    router.get('/edituser/:username', userPage.editView)
    router.post('/edituser', userPage.editUser)
    router.post('/delete-user', userPage.deleteUser)
    return app.use('/', router)
}
export default  initWebRoutes