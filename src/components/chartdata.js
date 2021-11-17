import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Chartdata(
  {
    cityDetail, 
    linearRegression,
    weightedAverage
  }
  ) {

  const [predictedData, setPredictedData] = useState({});
  var known_x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17,18,19,20];
  useEffect(() => {
    var predictedNO = linearRegression(cityDetail["nitric_oxide"], known_x);
    var predictedNO2 = linearRegression(cityDetail["nitric_dioxide"], known_x);
    var predictedNH3 = linearRegression(cityDetail["ammonia"], known_x);
    var predictedCO = linearRegression(cityDetail["carbon_monoxide"], known_x);
    var predictedSO2 = linearRegression(cityDetail["sulphur_dioxide"], known_x);

    setPredictedData({
      NO: isNaN(predictedNO) ? weightedAverage(cityDetail["nitric_oxide"]).toFixed(2) : (predictedNO.intercept + predictedNO.slope * 21),
      NO2: isNaN(predictedNO2) ? weightedAverage(cityDetail["nitric_dioxide"]).toFixed(2) : (predictedNO2.intercept + predictedNO2.slope * 21),
      NH3: isNaN(predictedNH3) ? weightedAverage(cityDetail["ammonia"]).toFixed(2) : (predictedNH3.intercept + predictedNH3.slope * 21),
      CO: isNaN(predictedNH3) ? weightedAverage(cityDetail["carbon_monoxide"]).toFixed(2) : (predictedCO.intercept + predictedCO.slope * 21),
      SO2: isNaN(predictedNH3) ? weightedAverage(cityDetail["sulphur_dioxide"]).toFixed(2) : (predictedSO2.intercept + predictedSO2.slope * 21),
    })
  }, []);

  const dataNO = {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    datasets: [
      {
        label: "Air Quality Measures for NO",
        data: cityDetail["nitric_oxide"],
      }
    ],
  };

  const dataNO2 = {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    datasets: [
      {
        label: "Air Quality Measures for NO2 ",
        data: cityDetail["nitric_dioxide"],
      }
    ],
  };

  const dataNH3 = {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    datasets: [
      {
        label: "Air Quality Measures for NH3",
        data: cityDetail["ammonia"],
      }
    ],
  };

  const dataCO = {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    datasets: [
      {
        label: "Air Quality Measures for SO2",
        data: cityDetail["carbon_monoxide"]
      }
    ],
  };

  const dataSO2 = {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    datasets: [
      {
        label: "Air Quality Measures for CO",
        data: cityDetail["sulphur_dioxide"]
      }
    ],
  };


  return (
    <div>
      <Container fluid style={{marginBottom:"100px", marginTop:"50px"}}>
        <h1 className="mb-5">Air-Quality-Analysis <small style={{fontSize:"18px"}}>(Charts and Patterns) - </small></h1>
        <Row>
          <Col xs={4}>
            <Line data={dataNO} />
          </Col>
          <Col xs={1}>
            <span style={{position:"absolute", top:"40%"}}><ArrowForwardIcon style={{fontSize: "30px"}} /></span>
          </Col>
          <Col xs={6} style={{marginTop: "20px"}}>
          Nitric oxide reacts with the hydroperoxy radical (HO2) to form nitrogen dioxide (NO2), which then can react with a hydroxyl radical (OH) to produce nitric acid (HNO3):
          Nitric acid, along with sulphuric acid, contributes to acid rain deposition.
          <br />The Given condition predicts the upcomming air quality for <b>Nitric Oxide</b> to be <b>{predictedData["NO"]} ug/m3</b>. <br/>
          </Col>
        </Row>
        <Row style={{marginTop:"50px"}}>
          <Col xs={4}>
            <Line data={dataNO2} />
          </Col>
          <Col xs={1}>
            <span style={{position:"absolute", top:"40%"}}><ArrowForwardIcon style={{fontSize: "30px"}} /></span>
          </Col>
          <Col xs={6} style={{marginTop: "20px"}}>
          Even small day-to-day variations in NO2 can cause changes in lung function.Chronic exposure to NO2 can cause respiratory effects including airway inflammation in healthy people and increased 
          respiratory symptoms in people with asthma.NO2 creates ozone which causes eye irritation and exacerbates respiratory conditions, leading to increased visits to emergency departments and hospital
          admissions for respiratory issues, especially asthma.
          <br />The Given condition predicts the upcomming air quality for <b>Nitrogen Di-oxide</b> to be <b>{predictedData["NO2"]} ug/m3</b>. <br/>
          </Col>
        </Row>
        <Row style={{marginTop:"50px"}}>
          <Col xs={4}>
            <Line data={dataNH3} />
          </Col>
          <Col xs={1}>
            <span style={{position:"absolute", top:"40%"}}><ArrowForwardIcon style={{fontSize: "30px"}} /></span>
          </Col>
          <Col xs={6} style={{marginTop: "20px"}}>
          Ammonia is also a common pollutant because it is relatively abundant but can be toxic, causing lower reproduction and growth, or death. The neutral, un-ionized form of ammonia in water (NH3) is highly toxic to fish and other aquatic life.
          Ammonia gas is a corrosive gas and may be fatal if inhaled. Ammonia gas may cause lung injury, and the liquefied gas can cause frostbite and corrosive injury to eyes and skin. Ammonia gas is a severe respiratory tract irritant.
          Ammonia can transform into ammonium when it comes in contact with moisture and is a key component of nitrogen deposition that can impact the environment
            <br />The Given condition predicts the upcomming air quality for <b>Ammonia</b> to be <b>{predictedData["NH3"]} ug/m3</b>. <br/>
          </Col>
        </Row>
        <Row style={{marginTop:"50px"}}>
          <Col xs={4}>
            <Line data={dataSO2} />
          </Col>
          <Col xs={1}>
            <span style={{position:"absolute", top:"40%"}}><ArrowForwardIcon style={{fontSize: "30px"}} /></span>
          </Col>
          <Col xs={6} style={{marginTop: "20px"}}>
          Carbon monoxide poisoning occurs when carbon monoxide builds up in your bloodstream. When too much carbon monoxide is in the air, your body replaces the oxygen in your red blood cells with carbon monoxide. This can lead to serious tissue damage, or even death.
          Carbon monoxide poisoning can be particularly dangerous for people who are sleeping or intoxicated. People may have irreversible brain damage or even die before anyone realizes there’s a problem
            <br />The Given condition predicts the upcomming air quality for <b>Carbon Mono-Oxide</b> to be <b>{predictedData["CO"]} ug/m3</b>. <br/>
          </Col>
        </Row>
        <Row style={{marginTop:"50px"}}>
          <Col xs={4}>
            <Line data={dataCO} />
          </Col>
          <Col xs={1}>
            <span style={{position:"absolute", top:"40%"}}><ArrowForwardIcon style={{fontSize: "30px"}} /></span>
          </Col>
          <Col xs={6} style={{marginTop: "20px"}}>
          Sulfur dioxide is a major air pollutant and has significant impacts upon human health. In addition, the concentration of sulfur dioxide in the atmosphere can influence the habitat suitability for plant communities, as well as animal life. Sulfur dioxide emissions are a precursor to acid rain and atmospheric particulates.

          <br />The Given condition predicts the upcomming air quality for <b>Sulphur Dioxide</b> to be <b>{predictedData["SO2"]} ug/m3</b>. <br/>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}
