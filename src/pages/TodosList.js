import React,{useEffect,useState} from 'react';


const TodosList = () => {
    const [todos,setTodos] = useState([]);
    const [term , setTerm] = useState("")
    useEffect(() => {
        const fetchTodos=async()=>{
            const  res = await fetch("https://jsonplaceholder.typicode.com/todos")
            const json = await res.json();
            setTodos(json)
        };
        fetchTodos();
        
    }, []);

    let filterUser = users.filter(({name})=>{
        return name.indexOf(term)>=0;
    }).map(user=>
        <p key ={user.id}>{user.name} {user.email}</p>
        )
        
    
    return (
        <div>
            <h3> list of Reviews</h3>
            <input type="text" value={term} onChange={(e)=>setTerm(e.target.value)} placeholder="search" />
            {users.map(user=>
        <p key ={user.id}>{user.name} {user.email}</p>
        )}
        </div>
    );
};

export default TodosList;