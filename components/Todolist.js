import { collection, onSnapshot, orderBy, query} from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"

const Todolist = () => {
    const [todos, setTodo] = useState([])
    
    useEffect = (() => {
    const collectionRef = collection( db ,"todos")
    
    const q = query(collectionRef, orderBy("timestamp,desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        setTodo(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id, timestamp : doc.data().
            timestamp?.ToDate().getTime() })))
    }); 
    return unsubscribe;
}, []);
    return(
        <div>
            {todos.map(todo=><Todo key={todo.title}
                title={todo.title}
                detail={todo.detail}
                timestamp={todo.timestamp}
            />)}
        </div>
    )
}
export default Todolist