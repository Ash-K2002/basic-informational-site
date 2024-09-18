import express from 'express';
import path from 'path';

const app=express();
const DIRNAME=path.resolve(path.dirname(''));

function sendHtmlFiles(res, filename){
    res.sendFile(filename, {root:DIRNAME});
}

app.get("/", (req, res)=>{
   sendHtmlFiles(res, "index.html");
});
app.get("/contact-me", (req, res)=>{
    sendHtmlFiles(res, 'contact-me.html');
});
app.get("/about", (req, res)=>{
    sendHtmlFiles(res, 'about.html');
});

app.use(
    (req, res)=>{
        res.status(404).sendFile("404.html", {root:DIRNAME});
    }
)


const PORT = 8080;
app.listen(PORT, ()=>{console.log(`Listening to port ${PORT}`)});