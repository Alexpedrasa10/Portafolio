import React from 'react';
import IconLink from "./IconLink";
import {Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Button, ButtonGroup} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { iconsMap } from '../Icon';

function PortfolioBlock(props) {
   const {image, live, source, title, description, items, technologies} = props;

   return (
      <Box 
          display="flex" 
          flexDirection="column" 
          p={{ xs: 2, md: 5 }} 
          justifyContent="center" 
          alignItems="center"
          sx={{
              textAlign: { xs: 'center', md: 'left' },
              width: '100%',
          }}
      >
         <Box 
            component="img" 
            src={image} 
            alt="mockup" 
            sx={{
                maxWidth: '100%', 
                height: 'auto', 
                mb: 2
            }}
         />
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
         <p style={{fontSize: '1rem'}}> {description} </p>
         <List>
            {items.map((item, index) => (
                  <ListItem key={index} disablePadding>
                     <ListItemIcon>
                        <CheckCircleIcon style={{color: '#93291E'}}/>
                     </ListItemIcon>
                     <ListItemButton>
                        <ListItemText primary={item} />
                     </ListItemButton>
                  </ListItem>
            ))}
        </List>
        <Box 
            display="flex" 
            gap="1rem" 
            mt="1rem"
            sx={{
                flexWrap: 'wrap',
                justifyContent: 'center',
            }}
        >
            {technologies.map((tech, index) => (
               <Box key={index} display="flex" alignItems="center" sx={{ fontSize: '0.9rem' }}>
                  {iconsMap[tech]}
                  <span style={{ marginLeft: '0.5rem' }}>{tech}</span>
               </Box>
            ))}
         </Box>
         <Box display="flex" flexDirection="column" alignItems="center" py="2rem">
            <ButtonGroup color="error" aria-label="medium secondary button group">
               <Button>
                  <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
               </Button>
               <Button>
                  <IconLink link={source} title={'Source'} icon={'fa fa-code'}/>
               </Button>
            </ButtonGroup>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;
