import React from 'react';
import PropTypes from 'prop-types';
import 'assets/style/index.css';
import {  
    makeStyles,
    useScrollTrigger,
    Fab,
    Zoom,
} from '@material-ui/core';

import BaseLayaout from 'components/layout/BaseLayaout';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import hexagon from 'assets/img/slider-hexagon-bg.png';



const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    mainWrapper: {
      position: 'relative',
      backgroundImage: `url(${hexagon})`,
      backgroundRepeat: 'no-repeat',
      [theme.breakpoints.up('xs')]: {
        backgroundSize: '100%',
        backgroundPosition: '20px -25px',
      },
      [theme.breakpoints.up('md')]: {
        backgroundSize: '100%',
        backgroundPosition: '50px -15%',
      },
      [theme.breakpoints.up('lg')]: {
        backgroundSize: '60%',
        backgroundPosition: '600px -10%',
      },
    },
}));

const ScrollTop = (props) => {
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
  
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
  }
  
ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};
  

function App(props) {

  const classes = useStyles();

    return (
        <main className={classes.mainWrapper}>
            <div id="back-to-top-anchor" />
            <BaseLayaout />
            <ScrollTop {...props}>
                <Fab 
                  color="primary" 
                  size="small" 
                  aria-label="scroll back to top"
                >
                  <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </main>
    )
}

export default App;