const http = require('http');


// Import the custom module
//const getCurrentDateTime = require('./currentDateTime');

// Call the function and log the result
console.log(getCurrentDateTime());


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('New Second Hello World\n');
});

const membervalue = [10,20,30,40,50,60,70,80,90];

//const res = membervalue.reduce((max, num)=>num>max?max=num:num, membervalue[0]);
const resone = membervalue.reduce((min, num) => num<min ? min=num : num , membervalue[0]);


console.log(resone);

const PORT = 8081; // Use a different port
server.listen(PORT, () => {con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
let a = {
  
    addTwo:(a,b) =>{
        console.log(a+b);
    },
    averageTwo : (a,b)=>{

        console.log((a+b)/100);
    }

}

a.addTwo(10,20);
a.averageTwo(40,80); 





var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//Parse the address:
var q = url.parse(adr, true);

/*The parse method returns an object containing url properties*/
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

/*The query property returns an object with all the querystring parameters as properties:*/
var qdata = q.query;
console.log(qdata.month);

const { error } = require('console');
const fsmethod = require('fs');

fsmethod.readFile('demo.txt','utf-8',(err,data)=>{
  if(err){
    //throw error(err);
    console.error(err);
    //return;
  }
  console.log(data);
})

fsmethod.appendFile('demo.txt', 'Hello Node', (err,data)=>{
  if(err){
    console.error(err);
  }
  console.log('saved');
})

const fsfileopen = require('fs');
fsfileopen.open('newop.txt','r', (err,fdsyst)=>{
    if(err){
      console.error(err);
      return;
    }
    console.log('File open successfully :', fdsyst);
})

fsfileopen.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 

fsfileopen.appendFile('mynewfile3.txt', ' This is my updated text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
}); 

fsfileopen.writeFile('mynewfile3.txt', 'This is my updated text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});

fsfileopen.unlink('mynewfile3.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
}); 

fsfileopen.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
}); 


var formidable = require('formidable');

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Webgarh@123",
  database: "secondnodedb"
});

con.connect(function(err){
  if(err){
    console.log(err);
  }
  console.log("connected");
  // con.query('INSERT INTO users (name, address) VALUES("Webgarh", "Mohali cp 67")', function(err,result){
  //   if(err){
  //     console.log(err);
  //   }
  //   console.log('Data Inserted SuccessFully');
  // })

  con.query("SELECT * FROM users", (err, result, fields) => {
    if (err) throw err;
    console.log(result);
  });

})


var http = require('http');
var fs =  require('fs');
var url = require('url');

const server = http.createServer((req,res)=>{
    var reqst =  req.url;
    var parse_url = url.parse(reqst,true);
    var filename = "." + parse_url.pathname;
    fs.readFile(filename,(err,data)=>{
        if(err){
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })

})


let http = require('http');
var formidable = require('formidable');
let fs = require('fs');

http.createServer((req, res)=>{
  if(req.url == '/fileupload'){
     var form = new formidable.IncomingForm();
     form.parse(req,(err,fields,files)=>{
      var oldpath = files.filetoupload.filepath;
      var newpath = './' + files.filetoupload.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
     })
  }else{
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  }
  return res.end();
}).listen(3030);


//Upload file on local computer

let http = require('http');
let formidable = require('formidable');
let fs = require('fs');



http.createServer((req, res) => {
  if (req.url == '/fileupload' && req.method.toLowerCase() === 'post') {
    var form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Error parsing the form.');
        return res.end();
      }

      console.log('Files:', files); // Debugging step to inspect files object

      // Check if filetoupload exists and is an array with at least one element
      const uploadedFile = Array.isArray(files.filetoupload) ? files.filetoupload[0] : files.filetoupload;

      if (!uploadedFile || !uploadedFile.filepath) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.write('No file uploaded or invalid file.');
        return res.end();
      }

      var oldpath = uploadedFile.filepath;
      var newpath = '.' + uploadedFile.originalFilename;

      fs.rename(oldpath, newpath, function (err) {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.write('Error moving the file.');
          return res.end();
        }
        res.write('File uploaded and moved!');
        res.end();
      });
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(3030);




//Send Emial 

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rustam@cwebconsultants.com',
    pass: 'Rustam@987'
  }
});


const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);

//API
// const express = require(‘express’);
// const app = express ();
// app.use(express.json());

