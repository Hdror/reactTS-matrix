import { useState } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component'; 
import { Card, CardHeader, CardMedia, CardContent, Typography } from '@mui/material'; 

// Define the CardProps interface to specify the props the component accepts
interface CardProps {
    cardTitle?: string;
    cardDesc?: string;
}

const defaultCardTitle = "My card"
const defaultCardDesc = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ex assumenda reprehenderit"

export default function MyCard({
    cardTitle = defaultCardTitle, // Default title if no cardTitle prop is passed
    cardDesc = defaultCardDesc// Default description if no cardDesc prop is passed
}: CardProps) {
    
    // State to track if the image has loaded
    const [imgLoaded, setImgLoaded] = useState(false);

    // Handler to set the image loaded state to true
    const handleImgLoad = () => {
        setImgLoaded(true);
    };

    return (
        <Card className='my-card-container' sx={{ maxWidth: 345 }}>
            {/* CardHeader displays the card title */}
            <CardHeader title={cardTitle} />
            <CardContent sx={{ minHeight: '200px', padding: 0 }}>
                {/* LazyLoadComponent for lazy loading the image */}
                <LazyLoadComponent>
                    {/* CardMedia for displaying the image, hidden until it loads */}
                    <CardMedia
                        sx={{ display: !imgLoaded ? 'none' : 'block' }}
                        onLoad={handleImgLoad} // Call handleImgLoad when the image loads
                        component="img"
                        image="https://loremflickr.com/320/240/landscape/?random=255" // Image URL
                        alt="landscape"
                    />
                </LazyLoadComponent>
                {/* Placeholder content shown while the image is loading */}
                {!imgLoaded && (
                    <CardContent sx={{ display: 'inherit' }}>loading..</CardContent>
                )}
            </CardContent>
            {/* CardContent for the description text */}
            <CardContent>
                <Typography variant="body1" color="text.secondary">
                    {cardDesc} {/* Display the card description */}
                </Typography>
            </CardContent>
        </Card>
    );
}
