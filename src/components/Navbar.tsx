import React from 'react';
//import { Link } from 'react-router-dom'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';

// material ui styling information for nav bar
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        Button: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

/**
 * Navigation bar
 * @constructor
 */
const Navbar = () =>{
    const classes = useStyles();
    // nav bar component information using material-ui.
    return(
        <nav>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>Vet Radar Product Shopping</Typography>
                    <Button color="inherit" className={classes.Button}>Products</Button>
                    <Button color="inherit" className={classes.Button}>My cart</Button>
                </Toolbar>
            </AppBar>
        </nav>
    )
}

export default Navbar;