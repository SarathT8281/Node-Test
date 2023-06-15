
//  const interval= setInterval (()=>{
//     console.log("Running");
// },1000
// )

// setTimeout (()=>{
//     // console.log("Running...");
//     clearInterval(interval)
// },3000)

// console.log(global);


//  const http = require ('http');
//  const Server = http.createServer ((req,res)=>{
//     res.write("The Website is Processing")
//     console.log(req.url);
//     res.end();
//  })
//  Port = process.env.Port || 3750 ;
//  Server.listen(Port,()=>console.log(`The Server is Runnung ${Port}`));


// "What is fs= file system"
 const { error } = require('console');
// const fs = require ('fs')
//  console.log(fs);

//  fs.writeFile('Sample.html',"Hai everyone Good AfterNoon",(err)=>{
//    if (err) throw err
//  })
//  fs.writeFile('Sample.html'," Hai ",(err)=>{
//    if (err) throw err
//  })
//  fs.writeFile('Sample.html',"Hello",(err)=>{
//    if (err) throw err
//  })
// const fs = require ('fs')
// console.log(fs);
// fs.appendFile('Sample.html',"Hai", (err)=>{
//    if (err) throw err
// } )
// fs.appendFile('Sample.html',"Goodmorning boss", (err)=>{
//    if (err) throw err
// } )
//  fs.readFile ('Sample.html',"utf-8", (err,data)=>{
//    console.log(data);
//  })
const path =require ('path')
const fs = require ('fs')
fs.mkdir(path.join(__dirname,"/hey12.html"),{},(err)=>{
   if (err) throw err
})
fs.rmdir(path.join(__dirname,"/hey12.html"),{},(err)=>{
   if (err) throw err
})

