import { TextField } from "@mui/material"
import { Button } from "@mui/material"

const Todoform = () =>{
    return(
        <div>
            <TextField fullWidth label="title" margin="normal"/>
            <TextField fullWidth label="details" multiline maxRows={4}/>
            <Button variant="contained" sx={{mt : 3}}>Adiciona nova atividade</Button>
        </div>
    )
}

export default Todoform