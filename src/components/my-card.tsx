import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

export default function MyCard() {
    return (
        <Card className='my-card-container' sx={{ maxWidth: 345 }}>
            <CardHeader
             title="My card"
            />
            <CardMedia
                component="img"
                image="https://loremflickr.com/320/240/landscape/?random=255"
                alt="landscape" />
            <CardContent>df</CardContent>
        </Card>
    )
}