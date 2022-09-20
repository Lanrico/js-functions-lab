fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(json => {
    const numberOfCompleted = json.reduce((sum, todo) =>{
        // if (todo.completed) sum + 1;
        return todo.completed? sum + 1 : sum;
    }, 0)
    console.log(numberOfCompleted)
})