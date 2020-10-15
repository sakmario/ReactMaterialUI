import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';


const NavBar = () => {
    return (
        <div>
        <AppBar position= "static">
                <Toolbar>
                
                     <Typography variant="title" color="inherit">
                            Drilltimer
                    </Typography>
                </Toolbar>
                    <Button variant="contained" color="primary">
                        HOME
                    </Button>
                    <Button variant="contained" color="primary">
                        DRILLING IN MY HOUSE
                    </Button>
                    <Button variant="contained" color="primary">
                        COMMENTS
                    </Button>
                    <Button variant="contained" color="primary">
                        CONTACT
                    </Button>

        </AppBar>
        </div>
    )
}
export default NavBar;