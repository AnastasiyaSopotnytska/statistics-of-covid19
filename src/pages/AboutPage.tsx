import React from 'react';
import { Container } from '@mui/system';

const AboutPage: React.FC = () => {
  return (
    <div className="page">
      <h2>About</h2>
      <p>This is a COVID-19 statistics application built using React and TypeScript.</p>
      <p>It allows you to view global statistics and statistics for different countries.</p>
      <p>Filters can be applied to customize the data displayed.</p>
    </div>
  );
};

export default AboutPage;
