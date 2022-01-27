const express = require("express");
const app = express();
const path = require("path");

const publicPath=path.resolve(__dirname,"./public")
console.log(__dirname)

app.use(express.static(publicPath));

app.listen(3035, () => {
    console.log("Servidor corriendo")
});

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"./views/home.html"))
});

app.get("/signIn", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/signIn.html"))
});

app.get("/registro", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/registro.html"))
});




