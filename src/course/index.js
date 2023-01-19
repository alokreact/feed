import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";

const Course = ({ courses }) => {
  return (
    <React.Fragment>
      {/* <Card sx={{ maxWidth: 345 }}>
       <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {courses.attributes.descrption} 

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> */}
          <Grid container>
            <Grid item xs={2}>
            {courses.map((value) => {
        return (
      
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                  ></Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >

{value.attributes.descrption} 

                  </Typography>
                </CardContent>
              </Card>
                );
            })}
            </Grid>
          </Grid>
      
    </React.Fragment>
  );
};

export default Course;
