import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  Button,
} from "@mui/material";

interface ExplorationCardProps {
  city: string;
  progress: number;
  icon: JSX.Element;
  onDetailsClick: () => void;
  image: string;
}

const ExplorationCard: React.FC<ExplorationCardProps> = ({
  city,
  progress,
  icon,
  onDetailsClick,
  image,
}) => {
  return (
    <Card
      sx={{
        width: "345",
        height: "345",
        display: "flex",
        flexDirection: "column",
        //width: "90%",
        margin: 1,
        flex: "0 0 100%",
        //minWidth: "100vw",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "30%",
          overflow: "hidden",
          borderRadius: "6px 6px 0 0",
        }}
      >
        <img
          src={image}
          alt={`${city}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          {city}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {icon}
          <Typography
            variant="body2"
            sx={{
              marginLeft: "5px",
              fontSize: "1rem",
            }}
          >
            Key Milestones
          </Typography>
        </Box>
        <Box sx={{ my: 2 }}>
          <LinearProgress
            variant="determinate"
            value={progress * 100}
            sx={{ height: 10, borderRadius: 4 }}
          />
          <Typography variant="body2" align="right" sx={{ mt: 1 }}>
            {Math.round(progress * 100)}% Complete
          </Typography>
        </Box>
        <Button variant="contained" onClick={onDetailsClick} fullWidth sx={{backgroundcolor:'#5e5cfd'}}>
          View Progress Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ExplorationCard;
