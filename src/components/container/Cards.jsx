import React from 'react';
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    textCenter: {
        textAlign: 'center',
    },
    marginCard: {
        margin:'10px',
    },
}));

const Cards = ({ title, image, description, nameBtn }) => {

    const classes = useStyles();

    return (
        <Card className={classes.marginCard}>
            <CardActionArea className={classes.textCenter}> 
                <CardMedia
                    component='img'
                    height='140'
                    width= '100%'
                    image={`${image}`}
                    title={`${title}`}
                />
                <CardContent>
                    <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="h2"
                    >
                        {title}
                    </Typography>
                    <Typography 
                        variant="body2" 
                        color="textSecondary" 
                        component="p"
                    >
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {
                    nameBtn ? 
                        <Button 
                            size="small" 
                            variant="outlined" 
                            color="primary"
                        >
                            {nameBtn}
                        </Button> 
                    : null
                }
            </CardActions>                
        </Card>
    )
}

export default Cards;
