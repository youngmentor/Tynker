import React from "react"
import { useState } from 'react'

const LandingPage = () => {
const [showList,setShowList] = useState ([]);
const [addTask,setAddTask] = useState ("");

const handleChange = (evert) => {
   setAddTask(evert.target.value)
}

const deleteTask = (taskName) => {
  const newList = showList.filter((task) =>{
    return task === !taskName
  })
setShowList(newList)
}
  return (
    <div>
      <div>
        <input onChange={handleChange}/>
        <button onClick={() =>(
          setShowList([...showList,addTask])
        )}>add task</button>
      </div>
      <div>
        {showList.map((task) =>{
          return <div>
             <h1>{task}</h1>
             <button onClick={() => deleteTask(task)}>delete</button>
          </div>
        })}

      </div>
    </div>
  )
}

export default LandingPage                                                                                                                                                   