fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(json => {
    const uncompleted = json.filter(todo =>{
        if (!todo.completed) return todo;
    })
    .map(todo => {
        return {
            userId: todo.userId,
            title: todo.title
        }
    })
    console.log(uncompleted)
})