import express from 'express'
import 'dotenv/config'
import cors from 'cors';

const app = express();

// middlleware
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{

    res.send("server is working");
})

const PORT = process.env.PORT || 3000;


app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})

export default app;