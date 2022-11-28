/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.js',
    './components/**/*.js'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      
      dark1: '#211f26',
      dark2: '#383440',
      dark3: '#4e495a',
    
      darkAccent1: '#382e74',
      darkAccent2: '#483b95',
      darkAccent3: '#5948b7',
    
      accent1: '#321eb3',
      accent2: '#3d24db',
      accent3: '#604ce1',
    
      lightAccent1: '#d4cff4',
      lightAccent2: '#b7aeed',
      lightAccent3: '#9b8ee6',
      
      light1: '#ececec',
      light2: '#d9d9d9',
      light3: '#bfbfbf',
    },
  },
  plugins: [],
}
