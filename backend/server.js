import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';

import authRouter from './routes/auth.route.js';
import messageRouter from './routes/message.route.js'
import userRouter from './routes/user.route.js'

import { connectToDatabase } from './db/connectDB.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// app.get('/', (req, res) => res.send("<h1>Hello World</h1>"))

app.use(express.json())
app.use(cookieParser())


app.use('/api/auth', authRouter);
app.use('/api/message', messageRouter);
app.use('/api/user', userRouter);

app.listen(port, () => {
    connectToDatabase()
    console.log(`App listeing on port ${port}`)
})