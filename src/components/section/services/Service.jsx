import React from 'react';
import { 
    Box,  
    Typography,
    Grid,
} from '@material-ui/core';

import Cards from 'components/container/Cards';

// importamos service json
import Data from 'components/section/services/dataService.json';


const confiData = Data.items;

function Service(props){
    
    return (
        <Box 
             id='service'
            className={props.content}  
            padding='80px 0'
        >
            <Box mb={4}>
                <Typography variant='h3' align='center'>
                    Services
                </Typography>
            </Box>
            
            <Grid container spacing={3}>
                {confiData.map((item) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <Cards 
                            title={item.title}
                            image={item.image}
                            description={item.description}
                            nameBtn={item.nameBtn}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Service;
