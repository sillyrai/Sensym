import express from "express";
import dotenv from "dotenv";

dotenv.config({path: ".env", quiet: true});

let app = express();

app.use(express.static("public"))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {});
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})
