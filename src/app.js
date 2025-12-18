import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
const app=express();
//always for middle wares we use .use method
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
//konsa data kitne diff format me aa raha hai
app.use(express.json({limit:"18kb"}))
//diff type of url ko encode karte hai kahi data aayega kahi diff space aayega
app.use(express.urlencoded({limit:"18kb",extended:true}))
//koi diff data hua like image assets ko appan public file mw rakh lete hai
app.use(express.static("public"))
//me jo mere server  se user ki browser ki  cokkie asses kar pau aur uski cooki set bhi kar pau
app.use(cookieParser());
export {app}
