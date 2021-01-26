import React from 'react';

import {
    Hidden,
    makeStyles,
} from "@material-ui/core";
import NavMenu from './NavMenu';

import DrawerContent from 'components/container/DrawerContent';
import Home from 'components/section/home/Home';
import Service from 'components/section/services/Service';
import Technology from 'components/section/technology/Technology';
import Contact from 'components/section/contact/Contact';
import Footer from 'components/section/footer/Footer';
import Team from 'components/section/team/Team';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    content: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    contentWidth: {
        width: '100%',
    },
    toolbar: theme.mixins.toolbar,
    
}));

function BaseLayaout() {

    const classes = useStyles();
    const content = classes.content;
    const [open, setOpen] = React.useState(false);

    const actionOpen = () => {
        setOpen(!open)
    }

    return (
        <div className={classes.contentWidth}>
            <NavMenu actionOpen={actionOpen} />
            <Hidden mdUp>
                <DrawerContent
                    variant="temporary"
                    open={open}
                    actionOpen={actionOpen}
                />
            </Hidden>
            <div>
                <div className={classes.toolbar}></div>
                <Home  content={content}/>
                <Service content={content}/>
                <Technology content={content}/>
                <Team content={content}/>
                <Contact content={content} />
                <Footer content={content} />
            </div>
        </div>
    );
}

export default BaseLayaout;
