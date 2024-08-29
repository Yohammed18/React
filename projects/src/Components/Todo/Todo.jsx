import React, { useEffect, useState } from 'react'
import data from './todo.json'


function Todo() {
    const [todos,setTodos] = useState([])
    const [title,setTitle] = useState('')
    const [count, setCount] = useState(todos.length)
    const [comment, setComment] = useState('')
    const [error, setError] = useState('');

    
    useEffect(() =>{
        setTodos(data)
    }, [])


    const submit = async () =>{
        if (title.trim() === "") {
            setError('Title cannot be empty. Please enter a valid todo.');
            return
        }else if(comment.trim() === ""){
            setError('Todo cannot be empty. Please enter a valid todo.');
            return
        }

        setTodos((todos) => [
            ...todos,
            {
                id: count,
                title: title,
                text: comment,
            },
            ]);
        
        setTitle(''); // Clear title field
        setComment('');// Clear the text field
        setCount(count + 1); // Update the count for the next todo
        setError(''); // Clear any previous errors
    }

    const clear = () =>{
        //reset t
        setTodos([]) //reset to dos
        setCount(1)
    }


  return (
    <div className='container'>
      <h1 className="text-center">Todos App</h1>
      <div className="container text-center mt-4">
        <div className="row">
            <div className="col">
                <input type="text" className='form-control' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
                

                {/* Text area */}
                <textarea name="" id="" className="form-control mt-3"
                value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Write ToDo's" style={{height: '100px'}}
                ></textarea>
                
                <button className="btn btn-success mt-3 me-3" onClick={submit}>Submit</button>
                <button className="btn btn-danger mt-3 " onClick={clear}>Clear</button>
                {error && <p className="text-danger mt-2">{error}</p>} {/* Display error message */}
            </div>



            <div className="col">
                {todos.map(({id, title, text}) => {
                    return ( <div className="card" style={{width:   "18rem", marginBottom: "5px", border: "2px solid black"}} key={id}>
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{text}.</p>
                                </div>
                            </div>
                            )
                })}
            </div>
        </div>
      </div>
      <hr className='mt-5'/>
    </div>
  )
}

export default Todo
