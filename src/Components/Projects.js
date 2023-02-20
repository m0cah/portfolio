import { Card, CardActionArea, CardMedia, CardContent, Typography, Box } from "@mui/material";
import icon from "../images/icon.jpeg";
import icon2 from "../images/tictactoe.png";
import icon3 from "../images/twitterscraper.png";

export function Projects(){
    return(
        <div className='projects-container'>
            <h1 className="projects-title">Recent Work</h1>
            <p className="projects-subheading">Here are some of my recent proejcts. Want to see more? 
                <a href="mailto:mjn@vt.edu" className="email-me"> Email Me! </a>
            </p>
            <Box
                display={"flex"}
                flexDirection={"row"}
                alignItems="center"
                justifyContent="center"
                gap={5}
                className="projects-cards">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea href="https://github.com/m0cah/Angular.js-TicTacToe">
                            <CardMedia
                            component="img"
                            width={200}
                            image={icon2}
                            alt="icon"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Tic-Tac-Toe
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea href="https://github.com/m0cah/algorithm-visualizer">
                            <CardMedia
                            component="img"
                            width={200}
                            image={icon}
                            alt="icon"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                A* Pathfinding Visualization
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea href="https://github.com/m0cah/DigitalImposterProject">
                            <CardMedia
                            component="img"
                            width={200}
                            image={icon3}
                            alt="icon"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Twitter Scraper
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Box>
        </div>
    );
}