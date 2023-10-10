import dotenv from "dotenv"
import express from "express"
import configViewEngine from "./configs/viewEngine"
import initWebRoutes from "./router/webRoute"
import path from 'path'
import bodyParser from "body-parser"
const app = express()
dotenv.config()
const port = process.env.PORT || 4444
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
configViewEngine(app)
initWebRoutes(app)
app.use('/static', express.static(path.join(__dirname, 'public')))
app.listen(port, () => {
 console.log(`Server is running at http://localhost:${port}`)
})