
import { ArrowCircleLeft } from "phosphor-react";
import styles from "./Header.module.css"
import { useState } from "react";
export type Task = {
    task:string ;
    
}
export type HeaderProps = {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}
export function Header({tasks, setTasks}:HeaderProps){
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true);
        console.log('true')
      };
      const closeModal = () => {
        setShowModal(false);
        console.log('false')
      };
      const [textInput, setTextInput] = useState('');
      
      const saveAndClose = () => {
        
        closeModal();
        const inputText = textInput
        setTasks([...tasks,{task: inputText}])
        setTextInput('')
        
      };
      const newtaskempty = textInput.length == 0
      
    return(
    <div className={styles.header}>
        <div className={styles.title}  >
            <h1>
            Task List
            </h1>
        </div>
         
               
        <div>
             <button onClick={openModal}  type="submit" className={styles.button}>New task</button>

        </div>


        <div className={showModal ? styles.popup : styles.popuphidden} id="myModal">
            <p className={styles.texttask}>What will be your task?</p>
            <form>
                <input  required maxLength={45} placeholder="New task" type="text"className={styles.textinput}  value={textInput} onChange={(e) => setTextInput(e.target.value)}/>
                </form>
           <div className={styles.divaddtask}> 
                <ArrowCircleLeft className={styles.arrowleft} size={32} onClick={closeModal}/>
                <button className={styles.addtask} type="submit"onClick={saveAndClose} disabled={newtaskempty}>Add Task</button>

           </div>
        </div>

            
           

        
    </div>)
}