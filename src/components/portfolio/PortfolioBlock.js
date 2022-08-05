import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button, ButtonGroup } from '@mui/material';

function PortfolioBlock(props) {
   const {image, live, source, title, description, items} = props;

   return (
      <Box display={'flex'} flexDirection={'column'} p={5} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'}/>
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
         <p style={{fontSize: '1rem'}}> {description} </p>
         <List>
            {items.map(item => (
                  <ListItem disablePadding>
                     <ListItemIcon>
                        <CheckCircleIcon style={{color: '#93291E'}}/>
                     </ListItemIcon>
                     <ListItemButton>
                        <ListItemText primary={item} />
                     </ListItemButton>
                  </ListItem>
            ))}
        </List>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <ButtonGroup color="error" aria-label="medium secondary button group">
               <Button>
                  <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
               </Button>
               <Button>
                  <IconLink link={source} title={'Source'} icon={'fa fa-code'}/>
               </Button>
            </ButtonGroup>
            {/* <Box p={1} border={'2px solid black'} borderRadius={'25px'} >
               <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
            </Box> */}
         </Box>
      </Box>
   );
}

export default PortfolioBlock;