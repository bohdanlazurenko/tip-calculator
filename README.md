# Tip Calculator

A modern, responsive tip calculator built with Next.js 14, TypeScript, and Tailwind CSS. Calculate tips and split bills easily with a beautiful UI.

## Features

- Calculate tip amount per person
- Calculate total amount per person
- Pre-set tip percentages (5%, 10%, 15%, 25%, 50%)
- Custom tip percentage input
- Number of people splitter
- Reset functionality
- Responsive design for mobile and desktop
- Beautiful UI with smooth transitions

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Class Variance Authority** - Component variant management

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Enter the bill amount
2. Select a tip percentage or enter a custom one
3. Enter the number of people
4. View the calculated tip amount and total per person
5. Click RESET to clear all fields

## Project Structure

```
├── app/
│   ├── api/
│   │   └── ping/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       ├── button.tsx
│       └── input.tsx
├── lib/
│   └── utils.ts
├── public/
├── .gitignore
├── README.md
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT License