import { 
    Typography,
    withWidth,
    Hidden,
    Button,
} from '@material-ui/core';
import React from 'react';

const Oculto = (props) => {
    return (
        <div>
            <Typography variant="h6" color="inherit">
                Ancho: {props.width}
            </Typography>
            <Hidden xsDown>
                <Button variant="contained" color="primary">    
                    xs
                </Button>
            </Hidden>
            <Hidden only={["lg","md"]}>
                <Button variant="contained" color="primary">    
                    Lg
                </Button>
            </Hidden>
        </div>
    );
}

export default withWidth()(Oculto);
