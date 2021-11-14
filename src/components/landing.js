import { useState, React, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {Container, Row, Col} from "react-bootstrap";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Landing() {
  const [expanded, setExpanded] = useState(false);
  const [CityData, setCityData] = useState({
    Ahemdabad: [0.5, 1, 1.2, 0.2, 4, 3, 4, 2, 2.2],
    Delhi: [0.5, 1, 1.2, 0.2, 4, 3, 4, 2, 2.2],
    Mumbai: [0.5, 1, 1.2, 0.2, 4, 3, 4, 2, 2.2],
    Jaipur: [0.5, 1, 1.2, 0.2, 4, 3, 4, 2, 2.2],
    askdnj: [0.5, 1, 1.2, 0.2, 4, 3, 4, 2, 2.2],
    aaa: [0.5, 1, 1.2, 0.2, 4, 3, 4, 2, 2.2],
    gEAD: [0.5, 1, 1.2, 0.2, 4, 3, 4, 2, 2.2],
    KLsasd: [0.5, 1, 1.2, 0.2, 4, 3, 4, 2, 2.2],
    Nfi: [0.5, 1, 1.2, 0.2, 4, 3, 4, 2, 2.2],
  });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>          
      <Grid container spacing={2}>
        {Object.entries(CityData).map(([key, value]) => (
          <Grid item xs={3} style={{marginTop:"50px"}}>
            <div key={key}>
              <Card sx={{ maxWidth: 345 }} style={{marginLeft: "auto", marginRight: "auto"}}>
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="https://mui.com/static/images/cards/paella.jpg"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                  </Typography>
                </CardContent>
                {/* Like, Share Icons */}
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>



                  {/* Expanding */}
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Current Condition:</Typography>
                    <Typography paragraph>
                      The city is under extereme condition of SO2 and NO2. Needs to be fixed
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </div>
          </Grid>
      ))};
      </Grid>
      


      
    </div>
  );
}