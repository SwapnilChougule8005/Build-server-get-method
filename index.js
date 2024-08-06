import http from 'http'

const PORT = 3000;

const studentDataBase = [
    {
        id: 1,
        name:"swapnil",
        age:24,
        gender:"male",
        department:"Mechanical"
    },
    {
        id: 2,
        name:"vrushabh",
        age:25,
        gender:"Mechanical"
    },
    {
        id: 3,
        name:"nikhil",
        age:25,
        gender:"Mechanical"
    },
    {
        id: 4,
        name:"Akashay",
        age:25,
        gender:"Mechanical"
    },
];

const server = http.createServer((req, res) => {
    const path = req.url
    const method = req.method
    console.log(path,method);
    res.writeHead(200, {'Content-type': 'application/json'});

     if(path === "/students" || path.startsWith("/students/")){
        if(method === "GET"){
            let x = path.split("/")
            console.log(x)
         return res.end(JSON.stringify({message:"student get api called",data: studentDataBase[x[2]-1]}))
        }
        if(method === "POST"){
          return  res.end(JSON.stringify({message:"student post api called",data: null}))
        }
        if(method === "PUT"){
         return   res.end(JSON.stringify({message:"student put api called",data: null}))
        }
        if(method === "DELETE"){
            res.end(JSON.stringify({message:"student delete api called",data: null}))
        }
     }


     return res.end(JSON.stringify({
        data: "no student found ",
    }))
});

server.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}/`);
})