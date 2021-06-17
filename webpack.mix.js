const mix = require('laravel-mix');
const fs = require('fs');

mix
  .setPublicPath('theme/assets/build/')
  .js('theme/assets/scripts/app.js', 'theme/assets/build/')
  .postCss('theme/assets/styles/app.css', 'theme/assets/build/', [
    require('tailwindcss'),
  ])
  .version();

if (fs.existsSync('browsersync.config.js')) {
  const config = require('./browsersync.config');
  mix.browserSync(config);
}
