
import React from 'react'
import Navbar from "../../layouts/Navbar"

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { Chart, registerables } from 'chart.js';

import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

import { Line,Pie, Doughnut, Bar, Radar, Polar  } from 'react-chartjs-2';


const MONTHS = ['January', 'February', 'March', 'April', 'May'];

Chart.register(...registerables);



const genPieData = () => {
  return {
    datasets: [
      {
        data: [100,40, 55,30,10],
        backgroundColor: [
          'orange',
          'green',
          'red',
          'yellow',
          'danger',
        ],
        label: 'Dataset 1',
      },
    ],
    labels: ['January', 'February', 'March', 'April', 'May'],
  };
};

const genDoughnutData = () => {
    return {
      datasets: [
        {
          data: [700,40,60,20,10],
          backgroundColor: [
            'red',
            'green',
            'orange',
            'yellow',
            'info',
          ],
          label: 'Dataset 1',
        },
      ],
      labels: ['January', 'February', 'March', 'April', 'May'],
    };
  };

const genLineData = (moreData = {}, moreData2 = {},moreData1={}) => {
  return {
    labels: MONTHS,
    datasets: [
      {
        label: 'Foulard',
        backgroundColor:"orange",
        borderColor: "yellow",
        borderWidth: 1,
        data: [400, 1000, 4000, 800, 7600],
        ...moreData,
      },
      {
        label: 'Sous tasse',
        backgroundColor:"pink",
        borderColor:"yellow",
        borderWidth: 1,
        data: [500, 2000, 3000, 500, 5500],
        ...moreData2,
      },
      {
        label: 'Gide',
        backgroundColor:"aqua",
        borderColor:"yellow",
        borderWidth: 1,
        data: [200, 3500, 4000, 500, 2500],
        ...moreData1,
      }
    ],
  };
};
const options = {
  plugins:{legend:{display:false}},
  layout:{padding:{bottom:100}},
  scales: {
    y:{
      ticks:{
        color:"white",
        font:{
          size:18
        }
      },
 
      grid:{
        color:"#243240"
      }
    },
    x:{
      ticks:{
        color:"white",
        font:{
          size:18
        }
      },
      
        scaleLabel: {
          display: true,
          labelString: 'labels',
        },
    
    }
  },
};
const Charts = () => {
  return (
    <>
    <Navbar/>
  
    <div  style={{marginLeft:"25%"  ,paddingTop:"5%",paddingBottom:"5%"}}>

    
       
        <Grid  md={3}>
          <Card>
           
          <Bar data={genLineData({  fill: false })} />
            
          </Card>
        </Grid>
        <Grid sx={{paddingLeft:5,marginTop:25}}  container> 

      <Grid sx={{width:450}} >
          
          <Card sx={{Width:500}}>
            <CardHeader>Foulard</CardHeader>
            <CardBody>
              <Pie data={genPieData()} />
            </CardBody>
          </Card>
        </Grid>
        <Grid sx={{width:450,marginLeft:"15%"}}>
          <Card  sx={{paddingLeft:"10%",Width:600}}>
            <CardHeader>Sous tasse</CardHeader>
            <CardBody>
              <Doughnut data={genDoughnutData()} />
            </CardBody>
          </Card>
          </Grid>
        
</Grid>
</div>
    </>
  );
};


 
 

export default Charts;