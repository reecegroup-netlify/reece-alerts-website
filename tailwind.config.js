const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

import isPlainObject from 'tailwindcss/src/util/isPlainObject'

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`
const hexToRgb = (hex) => {
  hex = hex.replace('#', '')
  hex = hex.length === 3 ? hex.replace(/./g, '$&$&') : hex
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)
  return `${r} ${g} ${b}`
}

module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xs: ['.75rem', { lineHeight: '1.0125rem', letterSpacing: '-0.0015em' }],
      sm: ['.875rem', { lineHeight: '1.18125rem', letterSpacing: '-0.00175em' }],
      base: ['1rem', { lineHeight: '1.35rem', letterSpacing: '-0.002em' }],
      lg: ['1.25rem', { lineHeight: '1.6875rem', letterSpacing: '-0.0025em' }],
    },
    headingSize: {
      xs: ['0.75rem', { lineHeight: '0.85rem', letterSpacing: '-0.005em' }],
      sm: ['0.875rem', { lineHeight: '0.96rem', letterSpacing: '-0.005em' }],
      md: ['1rem', { lineHeight: '1.1rem', letterSpacing: '-0.005em' }],
      lg: ['1.5rem', { lineHeight: '1.65rem', letterSpacing: '-0.005em' }],
      xl: ['2rem', { lineHeight: '2.2rem', letterSpacing: '-0.005em' }],
      '2xl': ['2.5rem', { lineHeight: '2.75rem', letterSpacing: '-0.005em' }],
      '3xl': ['3rem', { lineHeight: '3.3rem', letterSpacing: '-0.005em' }],
      '4xl': ['4rem', { lineHeight: '3.8rem', letterSpacing: '-0.001em' }],
      '5xl': ['6rem', { lineHeight: '5.7rem', letterSpacing: '-0.001em' }],
      '6xl': ['8rem', { lineHeight: '8.8rem', letterSpacing: '-0.001em' }],
    },
    subheadingSize: {
      xs: ['0.75rem', { lineHeight: '0.825rem', letterSpacing: '0.005em', fontWeight: 700 }],
      sm: ['0.875rem', { lineHeight: '0.9625rem', letterSpacing: '0.005em', fontWeight: 700 }],
      md: ['1rem', { lineHeight: '1.1rem', letterSpacing: '0.005em', fontWeight: 700 }],
      lg: ['1.25rem', { lineHeight: '1.375rem', letterSpacing: '0.005em', fontWeight: 700 }],
    },
    extend: {
      letterSpacing: {
        wide: '0.02em',
      },
      typography: {
        DEFAULT: {
          css: [
            {
              fontSize: rem(16),
              lineHeight: round(21.6 / 16),
              letterSpacing: '0.002em',
              '--tw-prose-body': '#575756',
              '--tw-prose-headings': '#003057',
              '--tw-prose-lead': '#575756',
              '--tw-prose-links': '#003057',
              '--tw-prose-bold': '#575756',
              '--tw-prose-counters': '#575756',
              '--tw-prose-bullets': '#575756',
              '--tw-prose-hr': '#575756',
              '--tw-prose-quotes': '#575756',
              '--tw-prose-quote-borders': '#003057',
              '--tw-prose-captions': '#575756',
              // '--tw-prose-kbd': colors.slate[900], // @todo set prose values below
              // '--tw-prose-kbd-shadows': hexToRgb(colors.slate[900]),
              // '--tw-prose-code': colors.slate[900],
              // '--tw-prose-pre-code': colors.slate[200],
              // '--tw-prose-pre-bg': colors.slate[800],
              // '--tw-prose-th-borders': colors.slate[300],
              // '--tw-prose-td-borders': colors.slate[200],
              // '--tw-prose-invert-body': colors.slate[300],
              // '--tw-prose-invert-headings': colors.white,
              // '--tw-prose-invert-lead': colors.slate[400],
              // '--tw-prose-invert-links': colors.white,
              // '--tw-prose-invert-bold': colors.white,
              // '--tw-prose-invert-counters': colors.slate[400],
              // '--tw-prose-invert-bullets': colors.slate[600],
              // '--tw-prose-invert-hr': colors.slate[700],
              // '--tw-prose-invert-quotes': colors.slate[100],
              // '--tw-prose-invert-quote-borders': colors.slate[700],
              // '--tw-prose-invert-captions': colors.slate[400],
              // '--tw-prose-invert-kbd': colors.white,
              // '--tw-prose-invert-kbd-shadows': hexToRgb(colors.white),
              // '--tw-prose-invert-code': colors.white,
              // '--tw-prose-invert-pre-code': colors.slate[300],
              // '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
              // '--tw-prose-invert-th-borders': colors.slate[600],
              // '--tw-prose-invert-td-borders': colors.slate[700],
              h1: {
                fontSize: rem(40),
                lineHeight: round(44 / 40),
                letterSpacing: '-0.005em',
                fontWeight: '500',
              },
              'h1 strong': {
                fontWeight: '700',
              },
              h2: {
                fontSize: rem(32),
                lineHeight: round(35.2 / 32),
                letterSpacing: '-0.005em',
                fontWeight: '500',
              },
              'h2 strong': {
                fontWeight: '700',
              },
              h3: {
                fontSize: rem(24),
                lineHeight: round(25.4 / 24),
                letterSpacing: '-0.005em',
                fontWeight: '500',
              },
              'h3 strong': {
                fontWeight: '700',
              },
              h4: {
                fontSize: rem(16),
                lineHeight: round(17.6 / 16),
                letterSpacing: '-0.005em',
                fontWeight: '500',
              },
              'h4 strong': {
                fontWeight: '700',
              },
              h5: {
                fontSize: rem(14),
                lineHeight: round(15.4 / 14),
                letterSpacing: '-0.005em',
                fontWeight: '500',
              },
              'h5 strong': {
                fontWeight: '700',
              },
              h6: {
                fontSize: rem(12),
                lineHeight: round(13.2 / 12),
                letterSpacing: '-0.005em',
                fontWeight: '500',
              },
              'h6 strong': {
                fontWeight: '700',
              },
              '[class~="lead"]': {
                fontSize: rem(20),
                lineHeight: round(27 / 20),
                letterSpacing: '0.025em',
              },
            },
          ],
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          heading: (value, { modifier }) => {
            let [fontSize, options] = Array.isArray(value) ? value : [value]

            if (modifier) {
              return {
                'font-size': fontSize,
                'line-height': modifier,
              }
            }

            let { lineHeight, letterSpacing, fontWeight } = isPlainObject(options)
              ? options
              : { lineHeight: options }

            return {
              'font-size': fontSize,
              ...(lineHeight === undefined ? {} : { 'line-height': lineHeight }),
              ...(letterSpacing === undefined ? {} : { 'letter-spacing': letterSpacing }),
              ...(fontWeight === undefined ? {} : { 'font-weight': fontWeight }),
            }
          },
        },
        {
          values: theme('headingSize'),
          modifiers: theme('lineHeight'),
          type: ['absolute-size', 'relative-size', 'length', 'percentage'],
        }
      )
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          subheading: (value, { modifier }) => {
            let [fontSize, options] = Array.isArray(value) ? value : [value]

            if (modifier) {
              return {
                'font-size': fontSize,
                'line-height': modifier,
              }
            }

            let { lineHeight, letterSpacing, fontWeight } = isPlainObject(options)
              ? options
              : { lineHeight: options }

            return {
              'font-size': fontSize,
              'text-transform': 'uppercase',
              ...(lineHeight === undefined ? {} : { 'line-height': lineHeight }),
              ...(letterSpacing === undefined ? {} : { 'letter-spacing': letterSpacing }),
              ...(fontWeight === undefined ? {} : { 'font-weight': fontWeight }),
            }
          },
        },
        {
          values: theme('subheadingSize'),
          modifiers: theme('lineHeight'),
          type: ['absolute-size', 'relative-size', 'length', 'percentage'],
        }
      )
    }),
  ],
}
