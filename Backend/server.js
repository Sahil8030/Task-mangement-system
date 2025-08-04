import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoute.js'
import taskRouter from './routes/task.route.js';
const app = express();
const port = process.env.PORT || 4000;

//MIDDLEWARE
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:true}));

//DB connect
connectDB();

//Route
app.use("/api/tasks",taskRouter)
app.use("/api/user",userRouter)

app.get('/',(req,res)=>{
    res.send('API Working');
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})