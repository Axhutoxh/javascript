function fetchData(url){
    return fetch(url).then(res=>res.json())
}

Promise.race([fetchData('https://jsonplaceholder.typicode.com/todos/1'),fetchData('https://jsonplaceholder.typicode.com/users')])
.then((data)=>{console.log(data)})
.catch((e)=>{console.log(e)})