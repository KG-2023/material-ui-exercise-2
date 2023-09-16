import {Container} from '@mui/material'
import { Typography } from '@mui/material/';
import Box from '@mui/material/Box';
import ImageItems from "../components/ImageItems";
const Tour = () => {
    return <Container>
            <Typography variant="h3" component="h1" marginTop={3}>
                Explore the Rice Terraces

            </Typography>
            <Box marginTop={3} 
                sx={{display: "flex"}}
            >
                <ImageItems />  
            </Box>
            <Box >
                <Typography variant="paragraph" component="p" marginTop={3}>
                    Trivia information about the Rice Terraces, among the wonders of the world. Some of the wonders of the world were created out of slavery. 
                    The Rice terraces was created out of collaboration and creativity.
                </Typography>
            </Box>
        </Container>
    
}

export default Tour;