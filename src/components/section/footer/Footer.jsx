import React from 'react'
import { 
    Box,
    Divider,
    Grid,
    IconButton,
    List,
    ListItem,
    makeStyles,
    Typography,
} from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import wrraperFooter from 'assets/img/maps.png';
import logo from 'assets/img/logo.png';

const useStyles = makeStyles(theme => ({
    imgWrraper:{
        background: '#0d235e',
        backgroundImage:`url(${wrraperFooter})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: '30px 0',
    },
    imgLogo: {
        width: '100px',
    },
    iconBackground: {
        width: '35px',
        height: '35px',
        marginRight:'8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        color: '#0d235e',
        background: 'white',
        transition: 'all 0.3s',
    },
    iconFaceIn:{
        '&:hover':{
            background: 'blue',
            color: 'white',
        },
    },
    iconTwiter:{
        '&:hover':{
            background: '#23bbf9',
            color: 'white',
        },
    },
    iconInstragran:{
        '&:hover':{
            background: '#cf57a4',
            color: 'white',
        },   
    },
    iconEmail:{
        '&:hover':{
            background: 'red',
            color: 'white',
        },   
    },
    iconWhatsapp:{
        '&:hover':{
            background: 'green',
            color: 'white',
        },   
    },
    dividerColor:{
        backgroundColor: 'white',
    },
    itemLink:{
        transition: 'all 0.3s',
        '&:hover':{
            color: 'orange',
        }
    },
}));

const arrayServices = [
    {
        items: [
            {
                title: 'Search Engine Marketing',
                href: '',
            },
            {
                title: 'Search Engine Optimisation',
                href: '',
            },
            {
                title: 'Pay Per Click',
                href: '',
            },
            {
                title: 'Social Media',
                href: '',
            },
            {
                title: 'Technical SEO Audit',
                href: '',
            },
            {
                title: 'Content Marketing',
                href: '',
            },
        ],
    },
];

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

function Footer(props) {

    const classes = useStyles();

    return (
        <Box className={classes.imgWrraper}>
            <Box className={props.content} color='white'>
                <Grid container spacing={4}>
                    <Grid item container spacing={3} xs={12} md={4} >
                        <Grid item xs={12}>
                            <Box display='flex' alignItems='center'>
                                <img 
                                    alt='logo'
                                    src={`${logo}`}
                                    className={classes.imgLogo}
                                />
                                <Box >
                                    <Typography variant='h4'>
                                        CodDev
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box lineHeight='1.5'>
                                <Typography variant='p'>
                                    Seofy have much planned for the future, working with great clients and continued software development. If you'd like to join our team, then we'd also love to hear from you.        
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box display='flex' mb={4}>
                                <IconButton 
                                    className={`
                                        ${classes.iconBackground} 
                                        ${classes.iconFaceIn}`}
                                    >
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton className={`
                                    ${classes.iconBackground} 
                                    ${classes.iconTwiter}`}
                                >
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton className={`
                                    ${classes.iconBackground} 
                                    ${classes.iconInstragran}`}
                                >
                                    <InstagramIcon />
                                </IconButton>
                                <IconButton className={`
                                    ${classes.iconBackground} 
                                    ${classes.iconFaceIn}`}
                                >
                                    <LinkedInIcon />    
                                </IconButton>
                                <IconButton className={`
                                    ${classes.iconBackground} 
                                    ${classes.iconEmail}`}
                                >
                                    <EmailIcon  />
                                </IconButton>
                                <IconButton className={`
                                    ${classes.iconBackground} 
                                    ${classes.iconWhatsapp}`}
                                >
                                    <WhatsAppIcon />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <Box mt={4}>
                            <Typography variant='h5' >
                                Services
                            </Typography>
                        </Box>
                        <Box>
                            {arrayServices.map((config) => (
                                <List>
                                    {config.items.map((item) => (
                                        <ListItemLink 
                                            href={item.href} 
                                            className={classes.itemLink}
                                        >
                                            <Typography variant='p'>
                                                {item.title}
                                            </Typography>
                                        </ListItemLink>
                                    ))}
                                </List>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box mt={4}>
                            <Typography variant='h5' >
                                Contacts
                            </Typography>
                        </Box>
                        <Box>
                            <List>
                                <ListItem>
                                    <Box lineHeight='1.8'>
                                        <Typography variant='p'>
                                            Adress: 27 Division St, New York, NY 10002, United States of America
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Typography variant='p'>
                                        Website:
                                    </Typography>
                                    <ListItemLink 
                                        href='' 
                                        className={classes.itemLink}
                                    >
                                        codDev.com
                                    </ListItemLink>
                                </ListItem>
                                <ListItem>
                                    <Typography variant='p'>
                                        Email:
                                    </Typography>
                                    <ListItemLink 
                                        href='' 
                                        className={classes.itemLink}
                                    >
                                        codDev@dev.com
                                    </ListItemLink>
                                </ListItem>
                                <ListItem>
                                    <Typography variant='p'>
                                        Phone:
                                    </Typography>
                                    <ListItemLink 
                                        href='' 
                                        className={classes.itemLink}
                                    >
                                        +505 1234 5678
                                    </ListItemLink>
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>
                </Grid>
                <Divider className={classes.dividerColor}/>
            </Box>
        </Box>
    )
}

export default Footer;
