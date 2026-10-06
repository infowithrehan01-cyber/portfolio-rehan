module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#070707',
        panel: '#141414',
        text: '#f7f3ef',
        muted: '#cfc7c1',
        amber: '#fbbf24',
        orange: '#d97706',
        gold: '#f5c98b',
      },
      boxShadow: {
        soft: '0 20px 80px rgba(0,0,0,0.4)',
      },
      maxWidth: {
        '8xl': '1280px',
      },
    },
  },
  plugins: [],
};
