// src/setupTests.js

// Mock ResizeObserver
// src/setupTests.js

import '@testing-library/jest-dom';

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;

// Mock Chart.js
jest.mock('react-chartjs-2', () => ({
  Bar: () => null,  // or any other chart type you're using, e.g., Pie, Line, etc.
  Pie: () => null,
}));
