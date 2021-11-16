import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Chartdata from './chartdata';


// Linear Regression Function - 
function linearRegression(y, x) {
  var lr = {};
  var n = y.length;
  var sum_x = 0;
  var sum_y = 0;
  var sum_xy = 0;
  var sum_xx = 0;
  var sum_yy = 0;

  for (var i = 0; i < y.length; i++) {
    sum_x += x[i];
    sum_y += y[i];
    sum_xy += x[i] * y[i];
    sum_xx += x[i] * x[i];
    sum_yy += y[i] * y[i];
  }

  lr['slope'] = (n * sum_xy - sum_x * sum_y) / (n * sum_xx - sum_x * sum_x);
  lr['intercept'] = (sum_y - lr.slope * sum_x) / n;
  lr['r2'] = Math.pow(
    (n * sum_xy - sum_x * sum_y) /
      Math.sqrt((n * sum_xx - sum_x * sum_x) * (n * sum_yy - sum_y * sum_y)),
    2
  );

  return lr;
}

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
        <Chartdata details={city.value} linearRegression={linearRegression}/>
        </div>
      </Container>
      <Container fluid style={{marginBottom:"200px"}}>
        <h1>Conclusion & Preventive measures - </h1>
        <p>Give the predicted quality measures and the ratings we can have some security measures and take some precations to avoid poor air quality. Given below are certain steps and techniques for the same problem - </p>
      </Container>
    </div>
  )
}
