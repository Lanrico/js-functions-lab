fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(json => {
    const uncompleted = json.reduce((uncompletedList, todo) =>{
        !todo.completed? uncompletedList.push({
            userId: todo.userId,
            title: todo.title
        }) : uncompletedList;
        return uncompletedList
    }, [])
    console.log(uncompleted)
})