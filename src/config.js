const config = {
  scene: {
    color: '#333333',
    alpha: 30 /* Range 0-255  */
  },
  particle: {
    amount: 50,
    factor: { inner: 20, outer: 120 },
    followSpeed: 0.05,
    rotationSpeed: 0.0005,
    changingHueSpeed: 0.5,
    color: {
      hue: { min: 0, max: 50 },
      lightness: { min: 20, max: 90 }
    },
    lineWidth: { min: 2, max: 6 }
  }
};

export default config;