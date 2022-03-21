import React from "react";
import Photo from "../../img/photo.jpg";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export function ProductCard(props) {
  return (
    <Card
      sx={{
        margin: "15px",
        // marginLeft: "10px",
        // marginRight: "10px",
        // marginTop: "15px",
        borderRadius: "20px",
        boxShadow: "none",
        maxWidth: "300px",
        backgroundColor: "#f3f3f3",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={Photo}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Button
          size="small"
          sx={{
            color: "black",
            backgroundColor: "white",
            borderRadius: "30px",
            padding: "10px 25px",
          }}
        >
          Dodaj
        </Button>
      </CardActions>
    </Card>
  );
}
