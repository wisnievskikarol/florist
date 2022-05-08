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
        margin: props.size === "sm" ? "5px" : "5px",
        // marginLeft: "10px",
        // marginRight: "10px",
        // marginTop: "15px",
          fontSize : "10px",
        borderRadius: "20px",
        boxShadow: "none",
        maxWidth: props.size === "sm" ? "240px" : "260px",
        minWidth: "240px",
        backgroundColor: "#f3f3f3",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height={props.size === "sm" ? "140px" : "160px"}
          image={Photo}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" sx = {{minHeight : "65px"}} component="div">
            {props.name}
          </Typography>
          {/*<Typography variant="body2" color="text.secondary">*/}
          {/*  */}
          {/*</Typography>*/}
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
            alignSelf: "flex-end",
          alignItems: "center",
        }}
      >
          <Typography sx = {{marginLeft : "10px" , color : "black"}} variant="h5" color="text.secondary">{props.price} zł</Typography>
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
