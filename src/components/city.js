import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import { CardHeader, IconButton } from '@mui/material';
import Chartdata from './chartdata';


export default function City() {

  // city[0] = data
  // city[1] = imageURL
  // city[2] = description
  const history = useHistory();
  const [city, setCity] = useState(history.location.state); 

  
  // Weighted Average
  useEffect(() => {
    const cityArray = city["value"][0];
    console.log(cityArray)
    var final = 0;
    var div = 0;
    var i = 1;
    for(i; i< cityArray.length; i++){
      final += cityArray[i-1]*i;
      div += i;
    }
    console.log(final/div)
  }, [city]);

  // Linear Regression
  useEffect(() => {

  }, [])

  return (
    <div style={{backgroundColor:"white"}}>
      <Container fluid>
        <Row className="pt-5">
          <Col xs={6} style={{}}>
            <CardMedia
              component="img"
              height="550"
              image={city.value[1]}
              alt={city.value[1]}
            />
          </Col>
          <Col xs={5}>
            <h1>
              {city.key}
            </h1>
            <p>
              {city.value[2]}
            </p>
          </Col>
        </Row>
        <div>
        <Chartdata />
        </div>
        
      </Container>
    </div>
  )
}
