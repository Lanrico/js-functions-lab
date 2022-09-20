fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(json => {
    const uncompletedNumberList = json.reduce((uncompletedNumber, todo) =>{
        todo.completed? (uncompletedNumber[todo.userId] != undefined? uncompletedNumber[todo.userId] += 1 : uncompletedNumber[todo.userId] = 1) : uncompletedNumber;
        return uncompletedNumber
    }, {})
    console.log(uncompletedNumberList)
})