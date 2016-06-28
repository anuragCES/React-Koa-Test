
const todos = [
    {id: "1", value: "Todo 1"},
    {id: "2", value: "Todo 2"}
];

class Api
{
    static getAllTodos(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], todos));
            }, 1000);
        });
    }

    static addTodo(todo){
        todo = Object.assign({}, todo);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                todo.id = todos.length + 1;
                todos.push(todo);
                resolve(Object.assign({}, todo));
            }, 1000);
        });
    }
}

export default Api;