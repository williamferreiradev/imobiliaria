import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#B4975A',
          50: '#FDFCF6',
          100: '#FAF8EB',
          200: '#F2ECD1',
          300: '#EADBB1',
          400: '#CDBA89',
          500: '#B4975A',
          600: '#8A7340',
          700: '#61502C',
          glow: '#B4975A30'
        },
        dark: {
          bg: '#0F1115',
          surface: '#181A20',
          card: '#1F222A',
          border: '#2A2D35',
          text: '#F3F4F6',
          muted: '#9CA3AF'
        },
        accent: {
          DEFAULT: '#E5CC98',
        }
      },
      boxShadow: {
        luxury: '0 10px 30px -5px rgba(212, 175, 55, 0.15)',
        card: '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.2)',
      },
      borderRadius: {
        card: '2px',
      }
    }
  }
}
