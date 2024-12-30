import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  Button,
  Icon,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"; // Trophy icon
import CelebrationIcon from "@mui/icons-material/Celebration"; // Confetti icon

const SquareCard: React.FC = () => {
  return (
    <Card
      sx={{
        width: 300,
        height: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#ffffff",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background confetti */}
      <Icon
        component={CelebrationIcon}
        sx={{
          fontSize: 120,
          color: "rgba(255, 223, 186, 0.4)", // Soft golden confetti effect
          position: "absolute",
          top: -30,
          right: -30,
          zIndex: 0,
        }}
      />

      {/* Trophy Icon */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #FFD700, #FFB800)",
          borderRadius: "0px 0px 50% 50%",
          padding: "16px 0",
        }}
      >
        <EmojiEventsIcon
          sx={{
            fontSize: 60,
            color: "white",
            zIndex: 1,
          }}
        />
      </Box>

      {/* Card Content */}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        {/* Progress Section */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: "8px" }}
        >
          Challenge Progress
        </Typography>
        <LinearProgress
          variant="determinate"
          value={75} // Example progress value
          sx={{
            width: "80%",
            height: 10,
            borderRadius: 5,
            backgroundColor: "#f0f0f0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#FFD700", // Gold progress bar
            },
          }}
        />
        <Typography
          variant="body2"
          sx={{ marginTop: "8px", color: "#666666", textAlign: "center" }}
        >
          75% Complete
        </Typography>
      </CardContent>

      {/* Footer Section */}
      <Box
        sx={{
          width: "100%",
          padding: "8px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          borderTop: "1px solid #f0f0f0",
        }}
      >
        {/* Badges */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            Badges
          </Typography>
          <Typography variant="body2">3 Earned</Typography>
        </Box>

        {/* Coins */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            Coins
          </Typography>
          <Typography variant="body2">150</Typography>
        </Box>
      </Box>

      {/* Call-to-Action Button */}
      <Button
        variant="contained"
        color="primary"
        sx={{
          width: "80%",
          margin: "8px auto",
          borderRadius: "20px",
          textTransform: "capitalize",
          zIndex: 1,
        }}
      >
        Claim Reward
      </Button>
    </Card>
  );
};

export default SquareCard;
