import { makeStyles } from "@mui/material";


export default makeStyles((theme) => ({
    appBar: {
        position: "relative",
    },
layout: {
    with: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        with: 600,
        marginLeft: "auto",
        marginRight: "auto",
    },
},
paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
    },
},
stepper: {
    padding: theme.spacing(3, 0, 5),
},
buttons: {
    display: "flex",
    justifyContent: "flex-end",
},
button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1), 
 },
}));