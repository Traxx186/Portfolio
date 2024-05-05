/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: [
        require('autoprefixer'),
        require('cssnano')({ preset: 'default' }),
        require('@fullhuman/postcss-purgecss')({ 
            content: ['./**/*.{html.twig,js}']
        })
    ]
}
  
module.exports = config