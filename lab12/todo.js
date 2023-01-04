// Hiển thị danh sách công việc và số lượng 
co
function createId() {
    let id = Math.floor(Math.random() * 10000);
    return id;
}

let todos = [
    {
        id : createId(),
        title: "làm bài tập",
        status:true,
    },
    {
        id: createId(),
        title : "Chơi với bạn bè",
        status: false,
    },
    {
        id: createId(),
        title : "sang nhà chị thăm người ốm",
        status : true,
    },
]
    
function createTodoItem(todo) {
    const div = document.createElement("div");
    div.className = todo.status ? "todo-item comleted": "todo-item";

    const checkbox = document.createElement("input")

    title.className
};
function render(){
    todos.forEach(function (todo) {
        const item = createTodoItem(todo);
        todoList.prepend(Item);
    
    });
};