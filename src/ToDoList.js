import React, { useState }  from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';


function ToDoList(props) {

    const [line, setLine] = useState(false)

    const cutIt = () => {
        setLine(true)
        if(line===true){
            setLine(false)
        }
    };

    return (
        <div>
            
            <li className="list" style={{ textDecoration: line ? "line-through" : null }}>
            <span onClick={cutIt}>
            {props.list.item} 
            </span>
            <Tooltip title="Delete" onClick={()=> {props.onSelect(props.id)}} >
            <IconButton aria-label="delete"  >
              <DeleteIcon  fontSize="small" className="button" />
            </IconButton>
            </Tooltip>
            </li>
           
        </div>
    );
}

export default ToDoList;