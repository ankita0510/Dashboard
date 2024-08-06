import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { green } from "@mui/material/colors";
import PropTypes from "prop-types";

const CardComponent = ({ icon, title, value, percentage, trendIcon }) => {
  return (
    <Card
      sx={{
        minWidth: 120,
        maxHeight: 120,
        color: "black",
      }}
    >
      <CardContent>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="left"
          textAlign="left"
        >
          {icon}
          <Typography variant="caption" sx={{ mt: 0.5, fontSize: "0.75rem" }}>
            {title}
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography variant="h6" component="div" sx={{ mt: 0.5 }}>
              {value}
            </Typography>
            <Box display="flex" alignItems="center" sx={{ mt: 0.5 }}>
              {trendIcon}
              <Typography
                sx={{ color: green[500], fontSize: "0.6rem", ml: 0.5 }}
              >
                {percentage}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
