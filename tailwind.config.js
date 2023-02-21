module.exports = {

  daisyui: {
    themes: ["light", "dark", "cupcake"]
  },
  plugins: [require('daisyui')],
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ]
}
