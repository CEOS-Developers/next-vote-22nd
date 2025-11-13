/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Next.js 앱 경로
    "./components/**/*.{js,ts,jsx,tsx}", // 컴포넌트 경로
    "./app/**/*.{js,ts,jsx,tsx}", // app router 사용하는 경우
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 브랜드 기본 색상 팔레트
        yellow: {
          DEFAULT: "#FFD954",  // 주 색상
          light: "#FFE58F",    // 밝은 버전
          dark: "#E6C200",     // 어두운 버전
        },
        secondary: {
          DEFAULT: "#FF8A00",  // 포인트 색상
          light: "#FFB84D",
          dark: "#CC6E00",
        },

        // 🌿 중립 계열 (UI 배경, 텍스트 등)
        neutral: {
          50:  "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          400: "#A3A3A3",
          600: "#525252",
          800: "#262626",
          900: "#171717",
        },

        // 🌙 상태 색상
        success: "#22C55E",
        warning: "#FACC15",
        error: "#EF4444",

        // 배경/텍스트
        background: "#FFFFFF",
        surface: "#F9FAFB",
        text: {
          primary: "#1E1E1E",
          secondary: "#6B7280",
          inverse: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
