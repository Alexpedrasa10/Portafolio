import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{color: info.baseColor}}>about{firstName} <span
                className={Style.green} padding={'1rem'}>(main)</span> $ </span>
                {info.bio}
            </p>

            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                work_experience </p>
            <p><span style={{color: info.baseColor}}>work_experience <span
                className={Style.green} padding={'1rem'}>(main)</span> $ </span>
                {info.work_experience}
            </p>
        </>;
    }

/*     function experience() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                work_experience </p>
            <p><span style={{color: info.baseColor}}>work_experience <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    } */

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills
            </p>
            <p><span style={{color: info.baseColor}}>skills <span
                className={Style.green}>(develop)</span> $</span> ls</p>

            <p style={{color: info.baseColor}}> Principal</p>
            <ul className={Style.skills}>
                {info.skills.principal.map(proficiency => <li>{proficiency}</li>)}
            </ul>
            
            <p style={{color: info.baseColor}}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map(proficiency => <li>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Learning</p>
            <ul className={Style.skills}>
                {info.skills.learning.map(skill => <li>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map(hobby => (
                    <li><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}