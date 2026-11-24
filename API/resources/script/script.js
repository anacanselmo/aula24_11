 async function load () {
    const API = await fetch("https://jsonplaceholder.typecode.com/users");
     console.log(API)
 }

// objeto e JSON, qual a diferença?

let json = [
    {
      "nome": "ana",
      "idade": 19
    },
    {
      "nome": "ana maria",
      "idade": 22
    },
    {
      "nome": "matheus",
      "idade": 55
    }
]
console.log(json[0].nome99)