import profilepic from "../images/bitmoji.png";
import realpic from "../images/realpic.png";
import html from "../images/html-icon.png";
import css from "../images/css-icon.png";
import javascript from "../images/js-icon.png";
import react from "../images/react.js-icon.png";
import mongodb from "../images/mongodb-icon.png";
import java from "../images/java-icon.png";
import python from "../images/python-icon.png";
import c from "../images/c-icon.png";
import React from "react";
import Typewriter from 'typewriter-effect';
import github from '../images/github.png';
import linkedin from '../images/linkedin.jpeg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import pathfinding from '../images/pathfinding.png';
import facebook from '../images/facebook.png';
import cl from '../images/cl.png';
import { CardActionArea } from '@mui/material';


export function Home(){
    return(
            <div className="front-page-wrapper">
                <div className="home-title">
                <Typewriter 
                onInit={(typewriter) => {
                    typewriter.typeString("Hi, my name is Michael!").start().pauseFor(5000).deleteAll()
                    .typeString("I like to code minimal").start().pauseFor(1000).deleteChars(7)
                    .typeString(" beautiful things.").start().pauseFor(1000).deleteAll()
                    .typeString("Please, stay awhile :)").start();
                }}/>
                </div>
                <div className="projects">
                    <h1>About Me</h1>
                    <div className="project-cards">
                        <img src={realpic} alt="" width={275}></img>
                        <div className="bio">
                            <p className="bio-text">
                                Hi! My name is Michael! I'm not one for long introductions, but here are some things you should know about me:
                            </p>
                            <ul>
                                <li>I'm from Roanoke, Virginia</li>
                                <li>I went to Hidden Valley High School</li>
                                <li>I am studing CS at Virginia Tech (3.8/4.0 GPA)</li>
                                <li>My hobbies consist of: Rock Climbing, Hiking, Drinking Coffee, Hanging Out with Friends, and Coding!</li>
                                <li>I want to pursue a career in either Full Stack/Front-End/Back-End Development, Mobile App Development,
                                    or Machine Learning!
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="projects">
                    <h1>Projects</h1>
                    <div className="project-cards">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea href="https://github.com/m0cah/FacebookScraper">
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={facebook}
                                    alt="Image"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">Facebook Scraper</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        A scraper built using Selenium, Jyupiter Notebook, and Python to detect impersonators.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea href="https://github.com/m0cah/algorithm-visualizer">
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={pathfinding}
                                    alt="Image"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">Pathfinding Visualizer</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Visualizes the A*, DFS, BFS, and Deijkstra Pathingfinding Algorithms.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea href="https://github.com/WebJamApps/CollegeLutheran">
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={cl}
                                    alt="Image"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">College Lutheran Website</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Website used by College Luther Church in Roanoke Virginia. Attracts 100+ views monthly.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
                <footer className="footer">
                    <div className="footer-container">
                        Made with ♡ by Michael Neal<br/>©️ twentytwentythree
                    </div>
                    <div className="icons-list">
                        <a href="https://www.linkedin.com/"><img src={linkedin} alt="linkedin" className="linkedin"></img></a>
                        <a href="https://www.github.com/"><img src={github} alt="github" className="github"></img></a>
                    </div>
                </footer>
            </div>
    );
}