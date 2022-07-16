import React, {useState} from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import logo from '../img/logo.svg';
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import {info} from "../info/Info";

const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'About Me',
        to: '/about',
        active: 'about'
    },
    {
        name: 'Portfolio',
        to: '/portfolio',
        active: 'portfolio'
    }
]

export default function Navbar({darkMode, handleClick}) {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '2rem', md: '8rem'}}
                 fontSize={'1rem'} padding={{md:'1rem', xs:'1rem'}}>
                    <Link to="/" onClick={() => setActive(links[0].active)}>
                        <Box  component={'img'} src={logo} width={{xs: '1rem', md: '6rem'}}
                    height={{xs: '1rem', md: '6rem'}}  p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>     
                   </Link>
                {links.map(link => (
                    <Link to={link.to} onClick={() => setActive(link.active)}>
                        <Box component={'li'} className={(link.active === active && !link.type) && Style.active} sx={{borderImageSource: info.gradient }}>
                            {!link.type && <p style={{paddingBottom: '0.5rem'}}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Box>
                    </Link>
                ))}
                <Toggler darkMode={darkMode} handleClick={handleClick}/>
            </Box>
        </Box>
    )
}