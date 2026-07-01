/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0F1420',
          elevated: '#161D2E',
          border: '#232B3D',
        },
        ink: {
          DEFAULT: '#EDEEF3',
          muted: '#8B93A6',
        },
        signal: {
          DEFAULT: '#FF6B35',
          soft: '#FFB088',
        },
        cyan: {
          DEFAULT: '#38BDF8',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
