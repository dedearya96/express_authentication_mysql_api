import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import db from "./config/Database.js";
import router from "./routes/index.js";
dotenv.config();
const app = express();
const port = 5000;

(async () => {
    await db.sync();
})();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
    return res.status(200).send('Hello')
})

app.listen(port, () => {
    console.log('App running on http://localhost:' + port);
});