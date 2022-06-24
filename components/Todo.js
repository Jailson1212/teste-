import { ListItemText } from "@mui/material"
import { ListItem } from "@mui/material"
import moment from "moment"

const Todo = ({id,timestamp,title,details}) => {
    return(
        <ListItem
        sx = {{mt:3, boxShadow: 3}}
        style = {{backgroundColor: '#FAFAFA'}}
        >
            <ListItemText
                primary = {title}
                secondary = {moment(timestamp.format("MM do, yyyy"))}
            />
        </ListItem>
    )
}

export default Todo