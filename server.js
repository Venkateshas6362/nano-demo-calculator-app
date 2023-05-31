const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('hello world!');
});

baseRouter.post('/add', (req, res) => {
   const {first,second}=req.body;
    res.json({ result:Number(first)+Number(second) });
});


baseRouter.post('/subtract', (req, res) => {
   const {first,second}=req.body;
    res.json({ result:Number(first)-Number(second) });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});