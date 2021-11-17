import { useState, React, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
import {cityD} from "../data/cityD"

export default function Landing() {
  const history = useHistory();

  // key  -> City Name, Value-> [[NO, NO2, NH3, CO, SO2], imageURL, Description]
  useEffect(() => {
    console.log(cityD);
  })
  const [CityData, setCityData] = useState({
    Ahemdabad: [[50, 40, 1.2, 0.2, 4, 3, 4, 2, 2.2, 3], "https://images.citizenmatters.in/wp-content/uploads/sites/2/2020/04/29111342/Ahmedabad.jpg", "The distinguished city of Delhi is blessed with several gardens and botanical houses which are again one of the features that Delhi is famous for. The Garden of Five senses, the Lodi Gardens, the Buddha Jayanti Park and Nehru Park are some of these gardens which have made Delhi famous among nature lovers."],
    Delhi: [[0.5, 1, 1.2, 0.2, 4, 3, 4, 2, 2.2, 3], "https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg", "The distinguished city of Delhi is blessed with several gardens and botanical houses which are again one of the features that Delhi is famous for. The Garden of Five senses, the Lodi Gardens, the Buddha Jayanti Park and Nehru Park are some of these gardens which have made Delhi famous among nature lovers."],
    Mumbai: [[0.5, 1, 1.2, 0.2, 4, 3, 4, 2, 2.2, 3], "https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg", "The distinguished city of Delhi is blessed with several gardens and botanical houses which are again one of the features that Delhi is famous for. The Garden of Five senses, the Lodi Gardens, the Buddha Jayanti Park and Nehru Park are some of these gardens which have made Delhi famous among nature lovers."],
    Jaipur: [[0.5, 1, 1.2, 0.2, 4, 3, 4, 2, 2.2, 3], "https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg", "The distinguished city of Delhi is blessed with several gardens and botanical houses which are again one of the features that Delhi is famous for. The Garden of Five senses, the Lodi Gardens, the Buddha Jayanti Park and Nehru Park are some of these gardens which have made Delhi famous among nature lovers."],
    askdnj: [[0.5, 1, 1.2, 0.2, 4, 3, 4, 2, 2.2, 3], "https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg", "The distinguished city of Delhi is blessed with several gardens and botanical houses which are again one of the features that Delhi is famous for. The Garden of Five senses, the Lodi Gardens, the Buddha Jayanti Park and Nehru Park are some of these gardens which have made Delhi famous among nature lovers."],
    aaa: [[0.5, 1, 1.2, 0.2, 4, 3, 4, 2, 2.2, 3], "https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg", "The distinguished city of Delhi is blessed with several gardens and botanical houses which are again one of the features that Delhi is famous for. The Garden of Five senses, the Lodi Gardens, the Buddha Jayanti Park and Nehru Park are some of these gardens which have made Delhi famous among nature lovers."],
    gEAD: [[0.5, 1, 1.2, 0.2, 4, 3, 4, 2, 2.2, 3], "https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg", "The distinguished city of Delhi is blessed with several gardens and botanical houses which are again one of the features that Delhi is famous for. The Garden of Five senses, the Lodi Gardens, the Buddha Jayanti Park and Nehru Park are some of these gardens which have made Delhi famous among nature lovers."],
    KLsasd: [[0.5, 1, 1.2, 0.2, 4, 3, 4, 2, 2.2, 3], "https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg", "The distinguished city of Delhi is blessed with several gardens and botanical houses which are again one of the features that Delhi is famous for. The Garden of Five senses, the Lodi Gardens, the Buddha Jayanti Park and Nehru Park are some of these gardens which have made Delhi famous among nature lovers."],
    Nfi: [[0.5, 1, 1.2, 0.2, 4, 3, 4, 2, 2.2, 3], "https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg", "The distinguished city of Delhi is blessed with several gardens and botanical houses which are again one of the features that Delhi is famous for. The Garden of Five senses, the Lodi Gardens, the Buddha Jayanti Park and Nehru Park are some of these gardens which have made Delhi famous among nature lovers."],
  });

  const handleClick = (item) => {
    history.push(item["city_name"], item)
    console.log(item)
  }

  return (
    <div >
      <Grid container spacing={2}>
        {cityD.map((item) => (
          <Grid item xs={3} style={{marginTop:"50px", marginBottom: "50px"}}>
            <div key={item["city_name"]}>
              <Card sx={{ maxWidth: 345 }} style={{marginLeft: "auto", marginRight: "auto", cursor: "pointer"}} onClick={() => handleClick(item)}>
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={item["city_name"]}
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={item["image"]}
                  alt={item["image"]}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <p style={{overflow: "hidden", height:"100px"}}>
                      {item["desc"]}
                    </p>
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
                </CardActions>
              </Card>
            </div>
          </Grid>
      ))};
      </Grid>
    </div>
  );
}
