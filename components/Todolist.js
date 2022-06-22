import { collection, doc, onSnapshot, orderBy, query, QuerySnapshot, Timestamp } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"

const Todolist = () => {
    const [todos, setTodos] = useState(initialState)
    
    useEffect = (() => {
    const collectionRef = collection(db,"todos")
    
    const q = query(collectionRef, orderBy("timestamp,desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        setTodos(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id, timestamp : doc.data().
            timestamp?.ToDate().getTime() })))
    }); 
    return unsubscribe;
}, []);
    return(
        <div>
            {todos.map(todo=><div key={todo.title} >{todo.title}</div>)}

        </div>
    )
}
export default Todolist