import React from 'react';
import Box from './Box';

const Container = ({ toggleTheme, theme }) => {
  return (
    <main className="container" role="main">
      <Box toggleTheme={toggleTheme} theme={theme} />
    </main>
  );
};

export default Container;
