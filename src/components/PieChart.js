// components/PieChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({ data }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    if (chartRef && chartRef.current) {
      if (chartInstance) {
        chartInstance.destroy(); // Destroy previous chart instance
      }

      const ctx = chartRef.current.getContext('2d');
      chartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: data.labels,
          datasets: [{
            label: '',
            data: data.values,
            backgroundColor: [
              '#FFB3B3',
              '#ADC8F8',
              '#FCE94F',
              '#90EE90',
              '#F44336'
            ],
            hoverOffset: 4
          }]
        }
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy(); // Cleanup on component unmount
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default PieChart;
