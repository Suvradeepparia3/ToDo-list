import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { Grid, Box } from '@material-ui/core';
import ToDoList from './ToDoList';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 200,
    minHeight: 480,
  },
  header: {
    fontFamily: 'Caveat, cursive',
    fontWeight: 700,
    fontSize: 40,
  },

  pos: {
    marginBottom: 13,
  },
  text: {
    width: 164,
    border: 'transparent',
    borderBottom: '2px solid blue',
    outline: 'none',
  }
}));

 function OutlinedCard() {
  const classes = useStyles();

  const [ item, setItem ] = useState('');
  const [ updateList, setUpdateList ] = useState([]);

  const newItem = e => {
    setItem(e.target.value)
  }

  
    const getNewItem = (e) => {
        setUpdateList([...updateList, {item}])
      setItem("")
    }
  
  
  const deleteItem = (id) => {
    setUpdateList((oldItems) => {
      return oldItems.filter((updateList,index) => {
        return index !== id ;
      })
    })
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container justify="center">
            <Box>
            <Typography variant="h4" component="h4" className={classes.header} >
                <b>To-do list</b>
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Make future better
            </Typography>
            </Box>
        <Grid container >
            <Box component="span" mt={3} ml={1} xs={4} mb={3}>
            <input className={classes.text} type="text" placeholder="Add Item" value={item} onChange={newItem} required />
            </Box>
            <Box component="span" xs={1} mb={3}>
            <CardActions>
            <Tooltip title="Add" aria-label="add" onClick={getNewItem}>
                <Fab color="primary" size="small" >
                    <AddIcon />
                </Fab>
            </Tooltip>
            </CardActions>
            </Box>
          </Grid>
        </Grid>
    
      
          {updateList.map((toDo,index) => (
           <ToDoList key={index} list={toDo} id={index} onSelect={deleteItem} /> 
        )) }
          
    
      </CardContent>
      
    </Card>
  );
}

export default OutlinedCard;
