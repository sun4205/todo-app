type Props = {
    todos:string[];
    removeTodo:(index:number) => void;
};

export default function Todolist({todos,removeTodo}:Props){
    return (
        <ul>
            {todos.map((todo,index)=> (
                <li key ={index}>
                    {todo} <button onClick={()=> removeTodo(index)}>❌</button>
                </li>
            ))}
        </ul>
    )
}