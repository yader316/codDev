import React from 'react';
import {
    Avatar,
    Box, 
    Button, 
    Card, 
    CardActions, 
    CardContent, 
    Divider,
    makeStyles,
    Typography,
} from '@material-ui/core';

import WebIcon from '@material-ui/icons/Web';

const useStyles = makeStyles(theme => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    cardTeamContent:{
        position:'relative',
        padding: '15px',
    },
    photoContent: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(1),
        },
        position: 'absolute',
        top: 0,
        left: 0,
    },
    iconTeam:{
        fontSize:'50px',
        color: 'blue',
    },
    marginCard: {
        margin:'10px',
    },
}));


function CardTeam({name, specialty, urlPhoto, infoPersonal, btnUrl}) {

    const classes = useStyles();

    return (
        <Box className={classes.cardTeamContent}>
            <Box className={classes.photoContent}>
                <Avatar
                    alt={`${name}`}
                    src={`${urlPhoto}` ? `${urlPhoto}` : 'Y'}
                    className={classes.large}
                />              
            </Box>
            <Card className={classes.marginCard}>
                <CardContent>
                    <Box 
                        display='flex' 
                        justifyContent='space-between'
                        mt={5}
                        mb={4}
                    >
                        <Box>
                            <Typography variant='h5'>
                                {name}
                            </Typography>
                            <Typography 
                                variant='p' 
                                color='textSecondary'
                            >
                               {specialty}
                            </Typography>
                        </Box>
                        <WebIcon  className={classes.iconTeam}/>
                    </Box>
                    <Divider />
                    <Box mt={3}>
                        <Typography 
                            variant='p' 
                            color='textSecondary'
                        >
                            {infoPersonal ? 
                            infoPersonal : 
                                '“Belonging to Team CodDev excellent results. We enjoy working with them and we are one of the best”'
                            }
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions>
                    <Box mb={1}>
                        <Button
                            variant="contained" 
                            color="primary"
                            href={btnUrl}
                        >
                            See more
                        </Button>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    )
}

export default CardTeam;
