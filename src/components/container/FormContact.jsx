import React from 'react';
import { 
    Box, 
    makeStyles, 
    Paper,
    Typography, 
    TextField,
    Button,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginLeft:'38%',
        marginTop: '10%',
        [theme.breakpoints.down('sm')]: {
            margin: 0,
            justifyContent: 'center',
        },
    },
    fromContent: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '10px 10px 40px',
    },
    btnContact: {
        marginTop: '10px',
    },
  }));

const FormContact = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Paper 
                className={classes.fromContent}
                elevation={10}
            >
                <Box mt={4} >
                    <Typography variant='h3'>
                        Contact Us 
                    </Typography>
                </Box>
                <from >
                    <TextField
                        id="txtName"
                        placeholder="name *"
                        fullWidth
                        margin="dense"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="txtEmail"
                        placeholder="email *"
                        fullWidth
                        margin="dense"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="txtPhone"
                        placeholder="phone *"
                        fullWidth
                        margin="dense"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="txtWeb"
                        placeholder="web site *"
                        fullWidth
                        margin="dense"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="txtCompany"
                        placeholder="company *"
                        fullWidth
                        margin="dense"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </from>
                <Button 
                    fullWidth 
                    color='primary' 
                    variant='contained'
                    className={classes.btnContact}
                >
                    Get Free Report
                </Button>
            </Paper>
        </Box>
    )
}

export default FormContact;
