import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6'],
  datasets: [
    {
      label: 'Sleep',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.7)',
    },
    {
      label: 'Diet',
      data: [10, 15, 3, 5, 3, 5],
      fill: false,
      backgroundColor: 'rgb(0,0,255)',
      borderColor: 'rgba(0,0,255, 0.7)',
    },
    {
      label: 'Mood',
      data: [6, 12,2, 1, 5, 3],
      fill: false,
      backgroundColor: 'rgb(60, 179, 113)',
      borderColor: 'rgba(60, 179, 113, 0.7)',
    },
  ],
  
};

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const LineChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Entry Chart</h1>
      <div className='links'>
        {/* <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js'
        >
          Github Source
        </a> */}
      </div>
    </div>
    <Line data={data} options={options} />
  </>
);

export default LineChart;