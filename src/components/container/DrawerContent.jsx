import React from 'react';

import {
    Drawer,
    Divider,
    makeStyles,
    IconButton,
} from "@material-ui/core";

import ListMenu from 'components/layout/ListMenu';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles(theme => ({
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    toolbar: theme.mixins.toolbar,
    iconClose: {
        fontSize: '40px',
    },
}));

function DrawerContent(props){

    const classes = useStyles();
        
      return (
        <Drawer
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor= "left"
            variant= {props.variant}
            open={props.open}
            onClose={props.actionOpen}
        >
            <div className={classes.drawerHeader}>         
                <IconButton onClick={props.actionOpen} color="inherit">
                    <ChevronLeftIcon  className={classes.iconClose} />
                    {console.log('actionClose')}
                </IconButton>
            </div>
            <Divider />
            <ListMenu />
        </Drawer>
    );
}

export default DrawerContent;
