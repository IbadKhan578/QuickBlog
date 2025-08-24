import express from 'express'
import 'dotenv/config'
import cors from 'cors';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoute.js';

const app = express();
await connectDB();

// middlleware
app.use(cors());
app.use(express.json());

app.use('/api/admin',adminRouter)

app.get('/',(req,res)=>{

    res.send("server is working");
})

const PORT = process.env.PORT || 3000;


app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})

export default app;