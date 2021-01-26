import React from 'react';

import { 
    AppBar, 
    Box, 
    Hidden, 
    IconButton, 
    makeStyles, 
    Toolbar, 
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ListMenu from 'components/layout/ListMenu';

import logo from 'assets/img/logo.png';

const useStyles = makeStyles(theme => ({
  
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    appBar: {
        backgroundColor: 'black',
        color: 'white',
    },
    content:{
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-between',
    },
    logo: {
        width: '60px',
        height:'60px',
    },
    mainImg:{
        backgroundColor: 'red',
    },
    iconSize: {
        fontSize: '40px',
    },
}));


function NavMenu(props) {

    const classes = useStyles();

    return (
        <div>
             <AppBar className={classes.appBar}>
                 <Toolbar className={classes.content}>
                    <IconButton 
                        className={classes.menuButton} 
                        color="inherit" 
                        aria-label="Menu" 
                        onClick={() => props.actionOpen()}
                    >
                        <MenuIcon  className={classes.iconSize} />
                    </IconButton>
                    <Box>
                        <img src={logo} className={classes.logo} alt="logo" />
                    </Box>
                     <Hidden smDown>
                        <ListMenu />
                     </Hidden>
                 </Toolbar>
             </AppBar>
        </div>
    )
}

export default NavMenu;
