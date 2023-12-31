import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} onClick={() => props.onClick(props.body.id)}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.body.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.body.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
