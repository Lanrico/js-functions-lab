fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completed = json.filter((todo, index) => {
      if(todo.completed){
        console.log(`${todo.title} - ${todo.completed}`)
      }
    }) // Complete this code
  })
  .catch(function (err) {
    console.log(err);
  });