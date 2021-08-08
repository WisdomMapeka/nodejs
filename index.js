const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // if(req.url == '/'){

    //     fs.readFile(path.join(__dirname, "public", "index.html"),
    //        (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, {"Content-type":"text/html"});
    //         res.end(content);
    //     })
       
    // };

    // if(req.url == '/about'){

    //     fs.readFile(path.join(__dirname, "public", "about.html"),
    //        (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, {"Content-type":"text/html"});
    //         res.end(content);
    //     })
       
    // };
    // if(req.url == '/api/users'){

    //         const users = [
    //             {"Name":"Bob smith", "age":30, "job":"Dev"},
    //             {"Name":"Bob smith", "age":30, "job":"Dev"},
    //         ]
    //         res.writeHead(200, {"Content-type":"application/json"});
    //         res.end(JSON.stringify(users));

       
    // }



    // building a dynamic path


    const filepath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url+".html");

    // extentinon of the file to be served
    const extname = path.extname(filepath);


    // intitial contentype
    const contentype = "text/html";

    // check extention and set contenttype

    switch(extname){
        case '.js':
            contentype = 'text/javascript';
            break;

        case '.css':
            contentype = 'text/css';
            break;

        case '.json':
            contentype = 'application/json';
            break;

        case '.png':
            contentype = 'image/png';
            break;

        case '.jpg':
            contentype = 'image/jpg';
            break;
    };

    // console.log(filepath);
    // res.end();
    fs.readFile(filepath, (err, content) => {
         if (err) {
             if (err.code == 'ENOENT') {
                //  page not found error
                fs.readFile(path.join(__dirname, "public", "404.html"), (err, content) => {
                    res.writeHead(200, {"Content-Type":"text/html"});
                    res.end(content, "utf8");
                })
             }else{
                 res.writeHead(500);
                 res.end(`Server error: ${err.code}`);
             }
         }else{
            res.writeHead(200, {"Content-Type":contentype});
            res.end(content, "utf8");
         }
    })
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=>console.log(`Server running on port:${PORT}`));

