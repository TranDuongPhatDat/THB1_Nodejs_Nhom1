import express from "express"
import getHomePage from "../controllers/HomeController"
import aboutPage from "../controllers/AboutController"
import userPage from "../controllers/UserController"
const router = express.Router()
const initWebRoutes = (app) => {
    router.get('/', getHomePage)
    router.get('/about', aboutPage)
    router.get('/newUser', userPage.userPage)
    router.get('/listUser', userPage.listuser)
    router.get('/login', userPage.login)
    return app.use('/', router)
}
export default  initWebRoutes