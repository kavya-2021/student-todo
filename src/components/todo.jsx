import {useState,useEffect} from "react";
import { ToDoInput } from "./todoInput";
import { ToDoItem } from "./todoItem";


export const ToDo = ()=>{
    const [page,setPage] = useState(1)
    const [data,setData] = useState([]);

    useEffect(()=>{
        getData();
    },[page])

    const setDatafunc = (title,text)=>{
        fetch('http://localhost:3002/todos', {
            method: 'POST', 
            headers: {
                     'Content-Type': 'application/json',
                     },
            body: JSON.stringify({
                title: title,
                task:text,
                status: false,
            }),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
   getData();
})
}


const deleteFunc = (id)=>{
    fetch(`http://localhost:3002/todos/${id}`, {
        method: 'DELETE', 
        headers: {
                 'Content-Type': 'application/json',
                 },
        // body: JSON.stringify({
        //     title: data,
        //     status: false,
        // }),
})
.then(response => response.json())
.then(data => {
console.log('Success:', data);
getData();
})
}

const getData = ()=>{
    fetch(`http://localhost:3002/todos?_page=${page}&_limit=2`)
  .then(response => response.json())
  .then(data => setData(data));
}

    return (
        <div>

        <ToDoInput setDatafunc={setDatafunc}/>
        <h2>List of ToDo's</h2>

        <div >   

        {data.map((e)=>{
            return  <ToDoItem key={e.id} id={e.id} task={e.task} title={e.title} status={e.status} deleteFunc={deleteFunc}/>
        })}

        </div>
       
       
        <button disabled ={page==1} className="prev" onClick={()=>{
            setPage(page-1);
        }}>Prev</button>

        <button className="btnpage" onClick={()=>{
            setPage(page+1);
        }}>NEXT</button>

        </div>
       
    );
}