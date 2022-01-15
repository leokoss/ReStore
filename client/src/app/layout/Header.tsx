import { AppBar, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' }
]

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },

]

export default function Header({ darkMode, handleThemeChange }: Props) {

    return (

        <AppBar position='static' sx={{ mb: 4 }} >
            <Toolbar >
                <Typography variant='h5' sx={{color:'black'}}>RE-STORE</Typography>
                <Switch color='secondary' onChange={handleThemeChange} />
                <List sx={{display: 'flex'}}>
                    {midLinks.map(({ title, path }) => (
                      <ListItem sx={{color: 'black', typography: 'h6'}}>
                          <Link 
                          to={path}
                          key={path}>
                          {title.toUpperCase()}
                          </Link>
                          </ListItem>
                    ))}

                </List>
                <List sx={{display: 'flex', align: 'center'}}>
                    {rightLinks.map(({ title, path }) => (
                      <ListItem sx={{color: 'black', typography: 'h6'}}>
                          <Link 
                          to={path}
                          key={path}>
                          {title.toUpperCase()}
                          </Link>
                          </ListItem>
                    ))}

                </List>
            </Toolbar>
        </AppBar >

    )

};


