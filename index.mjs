import fs from 'fs';
import http from 'http';
import { resolve } from 'path';

http.createServer(function(req, res){
const baseURL =`http://${req.headers.host}`;
const q= new URL(req.url, baseURL);
const pathname=q.pathname;

const pathToFile={
    '/':'./index.html',
    '/about':'./about.html',
    '/contact-me':'./contact-me.html',
    };

const filename=pathToFile[pathname]? resolve(pathToFile[pathname]):'./404.html';

fs.readFile(filename, function myFunc(err, data){
    if(err){
        res.writeHead(500, {'Content-Type':'text/html'});
        return res.end("Server error");
    }
    const resCode= (filename.includes('404.html'))?404:200;
    res.writeHead(resCode, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
});

}).listen(8080);

