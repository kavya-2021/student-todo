export const ToDoItem = ({id,status,task,title,deleteFunc})=>{

    return (
        <div className="todoItem" >
               <span> {title} - {task} - {status?"Yes":"No"} <button onClick={()=>{
                   deleteFunc(id)
               }}>Delete</button>  </span> 
        </div>
    );
}