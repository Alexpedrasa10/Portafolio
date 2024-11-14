import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio() {
    return (
        <Box>
            <Grid container justifyContent="center" spacing={2}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} sm={10} md={8} key={index}>
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
}
