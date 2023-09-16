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
        </Container>
    
}

export default Tour;