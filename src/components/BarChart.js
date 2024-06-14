// components/LineChart.js

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BoxChart = ({ data }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      chartInstance.current = new Chart(chartContainer.current, {
        type: 'bar',
        data: data,
        options: {
          scales: {
            x: {
              grid: {
                display: false
              }
            },
            y: {
              grid: {
                display: false
              }
            }
          },
          plugins: {
            legend: {
              display: false
            },
            annotation: {
              drawTime: 'afterDatasetsDraw',
              annotations: {
                low: {
                  type: 'line',
                  mode: 'horizontal',
                  scaleID: 'y',
                  value: data.annotations.low.profit,
                  borderColor: 'red',
                  borderWidth: 2,
                  label: {
                    backgroundColor: 'red',
                    content: `Low Profit (${data.annotations.low.profit})`,
                    enabled: true,
                  },
                },
                high: {
                  type: 'line',
                  mode: 'horizontal',
                  scaleID: 'y',
                  value: data.annotations.high.profit,
                  borderColor: 'orange',
                  borderWidth: 2,
                  label: {
                    backgroundColor: 'orange',
                    content: `High Profit (${data.annotations.high.profit})`,
                    enabled: true,
                  },
                },
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas className="w-full h-full" ref={chartContainer}></canvas>;
};

export default BoxChart;