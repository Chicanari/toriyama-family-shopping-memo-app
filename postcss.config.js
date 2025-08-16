// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {},   // ← これだけでOK（v4）
    // autoprefixer を入れたいなら:  'autoprefixer': {}
  },
}
