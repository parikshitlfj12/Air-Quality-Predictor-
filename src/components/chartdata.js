import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



export default function Chartdata() {
  const dataNO = {
    labels: ["Jan", "Feb", "Mar", "Jun", "Jul"],
    datasets: [
      {
        label: "Air Quality Measures for NO",
        data: [3, 2, 4, 5, 6],
      }
    ],
  };

  const dataNO2 = {
    labels: ["Jan", "Feb", "Mar", "Jun", "Jul"],
    datasets: [
      {
        label: "Air Quality Measures for NO2 ",
        data: [3, 2, 4, 5, 6],
      }
    ],
  };

  const dataNH3 = {
    labels: ["Jan", "Feb", "Mar", "Jun", "Jul"],
    datasets: [
      {
        label: "Air Quality Measures for NH3",
        data: [3, 2, 4, 5, 6],
      }
    ],
  };

  const dataCO = {
    labels: ["Jan", "Feb", "Mar", "Jun", "Jul"],
    datasets: [
      {
        label: "Air Quality Measures for SO2",
        data: [3, 2, 4, 5, 6],
      }
    ],
  };

  const dataSO2 = {
    labels: ["Jan", "Feb", "Mar", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Air Quality Measures for CO",
        data: [3, 2, 4, 5, 6, 5, 6, 7, 3, 6],
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
            The Given condition predicts the upcomming air quality to be <b>2.3um</b>. <br/>
            As we can observe it's no good of a condition as it has crossed the threshold. The city needs to fix it's quality measures and other industrial works so as to control the current situation.
            The Given condition predicts the upcomming air quality to be <b>2.3um</b>. <br/>
            As we can observe it's no good of a condition as it has crossed the threshold. The city needs to fix it's quality measures and other industrial works so as to control the current situation.
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
            The Given condition predicts the upcomming air quality to be <b>2.3um</b>. <br/>
            As we can observe it's no good of a condition as it has crossed the threshold. The city needs to fix it's quality measures and other industrial works so as to control the current situation.
            The Given condition predicts the upcomming air quality to be <b>2.3um</b>. <br/>
            As we can observe it's no good of a condition as it has crossed the threshold. The city needs to fix it's quality measures and other industrial works so as to control the current situation.
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
            The Given condition predicts the upcomming air quality to be <b>2.3um</b>. <br/>
            As we can observe it's no good of a condition as it has crossed the threshold. The city needs to fix it's quality measures and other industrial works so as to control the current situation.
            The Given condition predicts the upcomming air quality to be <b>2.3um</b>. <br/>
            As we can observe it's no good of a condition as it has crossed the threshold. The city needs to fix it's quality measures and other industrial works so as to control the current situation.
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
            The Given condition predicts the upcomming air quality to be <b>2.3um</b>. <br/>
            As we can observe it's no good of a condition as it has crossed the threshold. The city needs to fix it's quality measures and other industrial works so as to control the current situation.
            The Given condition predicts the upcomming air quality to be <b>2.3um</b>. <br/>
            As we can observe it's no good of a condition as it has crossed the threshold. The city needs to fix it's quality measures and other industrial works so as to control the current situation.
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
            The Given condition predicts the upcomming air quality to be <b>2.3um</b>. <br/>
            As we can observe it's no good of a condition as it has crossed the threshold. The city needs to fix it's quality measures and other industrial works so as to control the current situation.
            The Given condition predicts the upcomming air quality to be <b>2.3um</b>. <br/>
            As we can observe it's no good of a condition as it has crossed the threshold. The city needs to fix it's quality measures and other industrial works so as to control the current situation.
          </Col>
        </Row>
      </Container>
      <Container fluid style={{marginBottom:"200px"}}>
        <h1>Conclusion & Preventive measures - </h1>
        <p>Give the predicted quality measures and the ratings we can have some security measures and take some precations to avoid poor air quality. Given below are certain steps and techniques for the same problem - </p>
      </Container>
    </div>
  );
}
