```javascript
// Tailwind CSS configuration (tailwind.config.js)
module.exports = {
  theme: {
    extend: {
      textColor: {
        'custom-red': '#e53e3e', // Define your custom red color
      },
    },
  },
  plugins: [],
};

// some javascript code that uses tailwindcss classes
div {
  color: theme('textColor.custom-red');
}
```