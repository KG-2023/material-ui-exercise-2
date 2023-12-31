import BottomNavigation from '@mui/material/BottomNavigation'
import Container from '@mui/material/Container';
import { Typography } from '@mui/material/';
import Box from '@mui/material/Box';
import ImageItems from "../components/ImageItems";
import CustomizedAccordions from "../components/Accordion";
import Paper from '@mui/material/Paper';
const Tour = () => {
    return <Container sx={{width: 900}}>
            <Typography variant="h3" component="h1" marginTop={3}>
                Explore the Rice Terraces

            </Typography>
            <Box marginTop={3} 
                sx={{display: "flex"}}
            >
                <ImageItems />  
                <img src="https://raw.githubusercontent.com/KG-2023/Activity-Images-2023/ec633589ea59e21cc1d3aca3e84cc9ab7a7ce0ba/pexels-rennon-kiefer-2412711.jpg"  alt="Rice Terraces" height="325" width="500"/>
            </Box>
            <Box >
                <Typography variant="h5" component="h3" marginTop={3}>TOUR TRIVIA</Typography>
                <Typography variant="paragraph" component="p" marginTop={3}>
                    Trivia information about the Rice Terraces, among the wonders of the world. Some of the wonders of the world were created out of slavery. 
                    The Rice terraces was created out of collaboration and creativity.
                </Typography>

                
            </Box>
            <Box marginBottom={15} >
                <Typography variant="h5" component="h3" marginTop={3} marginBottom={2}>
                    Frequently Asked Questions
                </Typography>
            <CustomizedAccordions />
            </Box>
            <Paper sx={{position:'fixed', bottom:0, left:0, right:0,backgroundColor:"blue"}} elevation={0} variant="outlined" square={false}>
            <BottomNavigation showLabels sx={{backgroundColor:"blue"}} ></BottomNavigation>
            </Paper>

        </Container>
    
}

export default Tour;