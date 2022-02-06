import {useState,useEffect} from "react";

export const ToDoInput = ({setDatafunc})=>{
   const [text,setText] = useState("");
   const [title,setTitle] = useState("");
    return (
        <div>
            <input className="inputTitle" value={title} type="text" onChange={
                (e)=>{
                    setTitle(e.target.value);
                }
            }/>
            <input className="inputBody"  type="text" placeholder="Add Task..." onChange={
                (e)=>{
                    setText(e.target.value);
                }
            }/>
            <button className="addBtn" onClick={()=>{
                console.log(text);
                        setDatafunc(title,text)
            } }>Add</button>
        </div>
    );
}