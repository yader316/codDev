import React from 'react';
import {
    List,
    ListItem,
    ListItemText,
    makeStyles,
} from '@material-ui/core';

import { Link } from "react-scroll";


const useStyle = makeStyles((theme) => ({
    dFlex: {
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        }
    },   
    animationBoderBottoms: {
        border: 'none',
        outline: 'none',
        position: 'relative',
        '&::after , ::before': {
            content: `''`,
            position: 'absolute',
            border: '0 solid transparent',
            transition: 'all 0.3s',
            height: '0',
            width: '0',
        },
        '&::after': {
            borderBottom: '2px solid blue',
            bottom: '-4px',
            left: 0,
        },
        '&:hover::after':{
            width: '100%',
        },
    },
}));

const ListConfig = [
    {
        items: [
            {
                title: 'Home',
                to: 'home',
            },
            {
                title: 'Service',
                to: 'service',
            },
            {
                title: 'Technology',
                to: 'technology',
            },
            {
                title: 'Team',
                to: 'team',
            },
            {
                title: 'Contacs',
                to: 'contacts',
            },
        ],
    },
];


function ListMenu() {
    const classes = useStyle();

    return (
        <div>
            {ListConfig.map((config) => (
                <List className={classes.dFlex}>
                    {config.items.map((item) => (
                        <Link
                            activeClass="active"
                            to={item.to}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <ListItem 
                                button 
                                component='a'
                            >
                                <ListItemText 
                                    className={classes.animationBoderBottoms}
                                >
                                    {item.title}
                                </ListItemText>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            ))}
        </div>
    );
}

export default ListMenu;
