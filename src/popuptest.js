import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';




export default function Popup(){
    const [open, setOpen] = React.useState(false);
    const [roles, setRoles] = React.useState();
    const [names, setNames] = React.useState();
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () =>{
        setOpen(false);
    }
    const teamRoles = [
        {
            value: 'Multiple Incident Customer',
            label: 'Multi IC'
        },
        {
            value: 'Single Incident Customer',
            label: 'Single IC'
        }
    ]
    const teamNames =[
        {
            value: 'Name',
            label: 'tazhnae'
        }
    ]
    const handleChange = event =>{
        setRoles(event.target.value);
        setNames(event.target.value);

    }
    const useStyles = makeStyles(theme => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
          },
        },
      }));
      const classes = useStyles();
      

    return(
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}> open</Button>
            <Dialog open={open} onClose={handleClose}> 
                <DialogTitle> shift schedule</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        schedule here
                    </DialogContentText>
                    <form className={classes.root} noValidate autoComplete="off">
                    <TextField 
                    autoFocus
                    id="teamroles"
                    select
                    label="select"
                    value={roles}
                    onClick={handleChange}
                    > 
                    {teamRoles.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                    ))}</TextField>
                    <TextField  id="time-input" label="time" type="search"/>
                    <TextField 
                    autoFocus
                    id="name"
                    select
                    label="name"
                    value={names}
                    onClick={handleChange}
                    >
                    {teamNames.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                    ))}</TextField>
                    

                    </form>
                </DialogContent>  
                <DialogActions>
                    <Button onClick={handleClose}> cancel</Button>
                    <Button onClick={handleClose}> submit</Button>
                </DialogActions>    
            </Dialog>
        </div>
    )
}
