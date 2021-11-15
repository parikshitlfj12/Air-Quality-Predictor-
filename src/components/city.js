import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import { CardHeader, IconButton } from '@mui/material';


export default function City() {

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
          <Col xs={5}  style={{}}>
            <h1>
              Delhi
            </h1>
            <p>
              The distinguished city of Delhi is blessed with several gardens and botanical houses which are again one of the features that Delhi is famous for.
              The Garden of Five senses, the Lodi Gardens, the Buddha Jayanti Park and Nehru Park are some of these gardens which have made Delhi famous among nature lovers.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
