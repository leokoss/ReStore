import { AppBar, Switch, Toolbar, Typography } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
import App from "./App";

interface Props{

}

export default function Header() {

    return (

        <AppBar position='static' sx={{ mb: 4 }} >
            <Toolbar >
                <Typography variant='h5'>RE-STORE</Typography>
                <Switch color="secondary"/>
            </Toolbar>
        </AppBar >
    )

}


