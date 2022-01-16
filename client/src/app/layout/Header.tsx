import { AddShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";

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

const navStyles = {
    color: 'inherit',
    textDecoration: 'none',
    typography: 'h6',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    }
}

function CustomLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            style={{
                textDecoration: match ? "underline" : "none",
                color: match ? 'black' : 'inherit'
            }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
}

export default function Header({ darkMode, handleThemeChange }: Props) {

    return (

        <AppBar position='static' sx={{ mb: 4 }} >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box display='flex' alignItems='center'>
                    <Typography variant='h5'>
                        <CustomLink
                            to='/'

                        >
                            RE-STORE
                        </CustomLink>
                    </Typography>

                    <Switch color='secondary' onChange={handleThemeChange} />
                </Box>

                <List sx={{ display: 'flex' }}>
                    {midLinks.map(({ title, path }) => (
                        <ListItem
                            key={path}
                            sx={navStyles}>
                            <CustomLink to={path}>
                                {title.toUpperCase()}
                            </CustomLink>
                        </ListItem>
                    ))}

                </List>

                <Box display='flex' alignItems='center'>
                    <IconButton size='large' sx={navStyles}>

                        <Badge badgeContent={4} color='error'>
                            <AddShoppingCart />
                        </Badge>


                    </IconButton>
                    <List sx={{ display: 'flex' }}>
                        {rightLinks.map(({ title, path }) => (
                            <ListItem
                                key={path}
                                sx={navStyles}>
                                <CustomLink to={path}>
                                    {title.toUpperCase()}
                                </CustomLink>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </AppBar >

    )

};


