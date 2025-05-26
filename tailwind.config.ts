import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}", // adiciona os componentes do Tremor
  ],
  theme: {
    extend: {
      maxWidth: {
        app: '700px',
      },
      colors: {
        // Tons de Cinza para Background
        gray: {
          '50': '#F9FAFB',  // Cinza muito claro, quase branco (quase como 'bg-gray-50')
          '100': '#F3F4F6', // Cinza muito claro
          '200': '#E5E7EB', // Cinza claro
          '300': '#D1D5DB', // Cinza médio claro
          '400': '#9CA3AF', // Cinza médio
          '500': '#6B7280', // Cinza mais escuro (como 'text-gray-500')
          '600': '#4B5563', // Cinza escuro
          '700': '#374151', // Cinza muito escuro
          '800': '#1F2937', // Quase preto
          '900': '#111827', // Preto total
        },
        // Tons de Azul para Cores Principais
        blue: {
          '50': '#EFF6FF',  // Azul muito claro (quase como 'blue-50')
          '100': '#DBEAFE', // Azul muito claro
          '200': '#BFDBFE', // Azul claro
          '300': '#93C5FD', // Azul médio claro
          '400': '#60A5FA', // Azul principal (para botões, links, ícones)
          '500': '#3B82F6', // Azul um pouco mais escuro
          '600': '#2563EB', // Azul escuro
          '700': '#1D4ED8', // Azul muito escuro
          '800': '#1E40AF', // Azul quase marinho
          '900': '#1E3A8A', // Azul marinho
        },
        danger: {
          '50': '#FEF2F2',  // Vermelho muito claro
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  // Adiciona as cores do Tremor
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],
  plugins: [require('@tailwindcss/forms'), require('@headlessui/tailwindcss')],
}
export default config