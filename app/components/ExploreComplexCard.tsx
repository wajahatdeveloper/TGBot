import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

interface ExploreComplexesCardProps {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
}

const ExploreComplexesCard: React.FC<ExploreComplexesCardProps> = ({
  title,
  description,
  image,
  onClick,
}) => {
  return (
    <Card
      sx={{
        width: 345, // Fixed width
        height: 345, // Fixed height to make the card square
        //maxWidth:'75%',
        backgroundColor: '#fff',
        color: 'black',
        borderRadius: '12px',
        // alignContent:'center',
        cursor: onClick ? 'pointer' : 'default',
        '&:hover': onClick ? { transform: 'scale(1.05)', transition: '0.3s' } : undefined,
        position: 'relative', // Ensure card content is positioned relative to the card
      }}
      onClick={onClick}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          borderRadius: 1,
          padding: '0px',
          objectFit: 'cover',
          height:"100%"
        }}
      />
      {/* Overlay content */}
      <CardContent
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black background
          padding: '16px',
          color: '#fff', // White text color
          borderRadius: '2px',
          width:'100%'
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: 'bold',
            fontSize: '2rem', // Adjust font size
            // textTransform:'capitalize',
            paddingBottom:'10px'
          }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '1rem' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ExploreComplexesCard;
