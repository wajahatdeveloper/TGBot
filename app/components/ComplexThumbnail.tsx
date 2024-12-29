import React, { useState, useCallback } from 'react';
import Image, { StaticImageData } from 'next/image'; // Import Image from next/image
import { Box, Card, CardContent, Typography } from '@mui/material';

import "@fontsource/roboto-condensed"; // Import all weights


// Define the props interface with StaticImageData support for Next.js
interface ComplexThumbnailProps {
  src: string | StaticImageData;
  alt: string;
  onClick: () => void;
  label: string;
  description: string;
}

const ComplexThumbnail = ({
  src,
  alt,
  onClick,
  label,
  description,
}: ComplexThumbnailProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Memoize hover handlers
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <Card
      sx={{
        cursor: 'pointer',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none', // Shadow on hover
        transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Scale on hover
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out', // Smooth transitions
        position: 'relative',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <Image
        src={src}
        alt={alt}
        width={300}
        height={169}
        style={{ objectFit: 'cover' }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 50,
          left: 0,
          right: 0,
          padding: '8px',
          textAlign: 'center',
          color: '#fff',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
          transition: 'opacity 0.2s ease-in-out',
          opacity: isHovered ? 1 : 0.7, // Opacity change on hover
        }}
      >
        <Typography variant="body2">{description}</Typography>
      </Box>
      <CardContent sx={{ padding: '8px', textAlign: 'center' }}>
        <Typography variant="h6">{label}</Typography>
      </CardContent>
    </Card>
  );
};

export default ComplexThumbnail;
