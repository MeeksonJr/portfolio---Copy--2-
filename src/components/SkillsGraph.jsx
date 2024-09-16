import React, { useState } from 'react';
import './../styled/SkillGraph.css';
import { Radar } from 'react-chartjs-2';
import {
  Chart,
  RadialLinearScale,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from 'chart.js';

// Register the required components
Chart.register(
  RadialLinearScale,
  Tooltip,
  Legend,
  LineElement,
  PointElement
);

// Standardize labels across all skill categories
const allLabels = ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Node.js', 'Express', 'MongoDB', 'SQL', 'Python', 'Java', 'Ruby'];

const skillData = {
  'Front-End': [75, 75, 60, 65, 20, 0, 0, 0, 0, 0, 0, 0],
  'Back-End': [0, 0, 0, 0, 0, 50, 45, 30, 25, 0, 0, 0],
  'Languages': [0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 70, 20]
};

const SkillGraph = () => {
  const [selectedSkill, setSelectedSkill] = useState('Front-End');

  const data = {
    labels: allLabels,
    datasets: [{
      label: selectedSkill,
      data: skillData[selectedSkill],
      backgroundColor: 'rgba(255, 165, 0, 0.2)',
      borderColor: '#ff8c00',
      borderWidth: 2
    }]
  };

  const options = {
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10  // Increment the ticks by 10
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    }
  };

  return (
    <div className="skill-graph" id="skills">
      <div className="skill-buttons">
        {Object.keys(skillData).map(skill => (
          <button
            key={skill}
            onClick={() => setSelectedSkill(skill)}
            className={`skill-button ${selectedSkill === skill ? 'active' : ''}`}
          >
            {skill}
          </button>
        ))}
      </div>
      <div className="radar-chart">
        <Radar data={data} options={options} />
      </div>
    </div>
  );
};

export default SkillGraph;
