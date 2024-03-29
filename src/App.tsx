
import { useState } from 'react';
import styles from './App.module.css'
import { Header } from "./components/Header";
import {Task} from './components/Header'
import {XCircle} from 'phosphor-react'
export function App(){
 
  const [tasks, setTasks]= useState<Task[]>([
    {task:'Eureka 15'},
    {task: 'Eureka 16'}
  ])
  function finishtask(taskstodelete: Task){
    const taskdelete =tasks.filter(tasks =>{
      
      return tasks != taskstodelete ;
    })
    console.log(taskdelete)
    setTasks(taskdelete)
    
  }
  function handlefinishtask(task : Task){
    
    finishtask(task)
    console.log('1')
  }
  return(
  <div>
    <Header tasks={tasks} setTasks={setTasks}/>
 
    <main>
      {tasks.map(tasks => {
        return(
        <div className={styles.everytask}>
          <div >
          <p className={styles.texttask}>Task: {tasks.task}</p>
          
          </div>
          <div>
          <XCircle className={styles.circleX} size={32} onClick={() => handlefinishtask(tasks)} />
         </div>
        </div>)
      })}

    </main>
  </div>
  )
}

  