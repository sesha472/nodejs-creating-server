// const http = require("http");
// http
//   .createServer((req, res) => {
//     res.write("hellow sesha ");       
//     res.end();
//     console.log("server running...");
//   })
//   .listen(4040);

// displaying path url in page 
// const http = require("http");
// http
//   .createServer((req, res) => {
//     res.write(req.url);
//     res.end();
//     console.log("server running...");
//   })
//   .listen(4040);


// reading file
// const http = require("http");
// var fs = require("fs");
// http
//   .createServer((req, res) => {
//     fs.readFile("txtfile.txt", (err, data) => {
//       res.write(data);
//       res.end();
//     })
//     console.log("server runnig..");
//   })
//   .listen(4040);

// adding extra content to file
// const http = require("http");
// var fs = require("fs");
// http
//   .createServer((req, res) => {
//     fs.appendFile(
//       "txtfile2.txt",
//       "this is second file creating using node this /n is second file creating using node ",
//       (err, data) => {
//         res.write(data);
//         res.end();
//       }
//     );

//     console.log("server runnig..");
//   })
//   .listen(4040);

// ovver riding file text uuna text ni replace cheysthundi
// const http = require("http");
// var fs = require("fs");
// http
//   .createServer((req, res) => {
//     fs.writeFile("txtfile2.txt", " js", (err, data) => {
//       res.write(data);
//       res.end();
//     });

//     console.log("server runnig..");
//   })
//   .listen(4040);

// deleting file
const http = require("http");
var fs = require("fs");
http.createServer((req, res) => {
    fs.unlink('txtfile2.txt', (err) => {
      if (err) throw err;
    console.log("file delted..");

    });

  })
  .listen(4040);
