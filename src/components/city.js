import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Chartdata from './chartdata';


// Weighted Average
function weightedAverage(x) {
  const cityArray = x;
  var final = 0;
  var div = 0;
  var i = 1;
  for(i; i< cityArray.length; i++){
    final += cityArray[i-1]*i;
    div += i;
  }
  return (final/div)
}

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
  const history = useHistory();
  console.log(history.location.state)
  const [item, setItem] = useState(history.location.state); 

  return (
    <div style={{backgroundColor:"white"}}>
      <Container fluid>
        <Row className="pt-5">
          <Col xs={6} style={{}}>
            <CardMedia
              component="img"
              height="550"
              image={item["image"]}
              alt={item["image"]}
            />
          </Col>
          <Col xs={5}>
            <h1>
              {item["city_name"]}
            </h1>
            <p>
              {item["desc"]}
            </p>
            <p>
              Given below are the <b>threshold</b> in ug/m3 for each gas present in atmosphere - <br /><br/>
              <li>Nitric Oxide - 50ug/m3</li>
              <li>Nitrogen DiOxide - 20ug/m3</li>
              <li>Ammonia - 3.5ug/m3</li>
              <li>Carbon Mono-Oxide - 14ug/m3</li>
              <li>Sulphur DiOxide - 20ug/m3</li>
            </p>
          </Col>
        </Row>
        <div>
        <Chartdata 
          cityDetail={item} 
          linearRegression={linearRegression}
          weightedAverage={weightedAverage}
        />
        </div>
      </Container>





      <Container fluid style={{marginBottom:"50px"}}>
        <h1>Conclusion & Preventive measures - </h1>
        <p>Give the predicted quality measures and the ratings we can have some security measures and take some precations to avoid poor air quality. Given below are certain steps and techniques for the same problem - </p>
        
        <h4 style={{marginTop: "40px"}}>Nitrogen Mono-Oxide (NO level in this item)</h4> 
        <p>
          <li> Use less product in which nitric oxide is used. <br /></li>
          <li> Plant tree species of Carpinus betulus, Fraxinus ornus, Fraxinus pennsylvanica and Ostrya carpinifolia, to control and balance the gases in the environment.</li>
        </p>
        
        <h4>Nitrogen Di-Oxide (NO2 level in this item)</h4> 
        <p>
          <li> It is important to keep gas stoves and heaters in good repair so they are not polluting extra NO2. <br /></li>
          <li> 2015 International Residential Code that requires that vent hoods are used for all stoves and set standards for residential buildings. This requires that all range hoods have a vent that discharges outside. <br /></li>
          <li> You can also prevent NO2 exposure by avoiding cigarette smoking and not idling your car whenever possible.</li>
        </p>
        
        <h4>Ammonia  (NH3 level in this item)</h4> 
        <p>
          <li> Reduce ammonia emissions from livestock production have focused primarily on preventing ammonia formation and volatilization, or downwind transport of ammonia after it is volatilized.</li>
        </p>
        
        <h4>Carbon Mono-oxide (CO level in this item)</h4> 
        <p>
          <li> Use portable gas camp stoves outdoors only. Use fuel-burning space heaters only when someone is awake to monitor them and doors or windows are open to provide fresh air. Don’t run a generator in an enclosed space, such as the basement or garage.<br /></li>
          <li> install carbon monoxide detector put one in the hallway near each sleeping area in your house. Check the batteries every time you check your smoke detector batteries at least twice a year. If the alarm sounds, leave the house and call the fire department. Carbon monoxide detectors are also available for motor homes and boats.</li>
        </p>
        
        <h4>Sulphur Di-Oxide (SO2 level in this item)</h4>  
        <p>
        <li> Sulphur emissions are proportional to the sulfur content of the fuel, an effective means of reducing SO2 emissions is to burn low-sulfur fuel such as natural gas, low-sulfur oil, or low-sulfur coal</li>
        <li> The most significant option for reducing the sulfur content of fuel is called beneficiation. Up to 70% of the sulfur in high-sulfur coal is in pyritic or mineral sulfate form, not chemically bonded to the coal. Coal beneficiation can remove 50% of pyritic sulfur and 20–30% of total sulphur</li>
        <li> Processes using fluidized-bed combustion (FBC) reduce air emissions of sulfur oxides. A lime or dolomite bed in the combustion chamber absorbs the sulfur oxides that are generated.</li>

        </p>
      </Container>
    </div>
  )
}
