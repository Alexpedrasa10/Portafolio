import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map(project => (
                   <Grid item xs={12} md={8}>
                       <PortfolioBlock 
                            image={project.image} 
                            live={project.live} 
                            source={project.source} 
                            title={project.title} 
                            description={project.description} 
                            items={project.items}
                            technologies={project.technologies}/>
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};