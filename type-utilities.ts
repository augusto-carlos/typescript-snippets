type Todo = {
    task: string,
    description: string
    completed: boolean
}

//* make all properties in Todo just readeable
const todo: Readonly<Todo> = {
    task: 'Play a game',
    description: 'just to do something new',
    completed: false
}

//* make optional all properties in Todo
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate }
}

const todo2: Todo = updateTodo(todo, { completed: true })

//* make a new type picking some properties from Todo
type TodoPreview = Pick<Todo, 'task' | 'completed'>

const todo3: TodoPreview = {
    task: 'End the last game',
    completed: false
}

//* make a new type omiting some properties from Todo.
type TodoPreview2 = Omit<Todo, 'completed'>
const todo4: TodoPreview2 = {
    task: 'Buy a computer',
    description: 'my old computer is very slow'
}  
