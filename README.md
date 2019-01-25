1) `npm init`
2) `npm install sharp`
  2a) Also made an `index.js` file in the root directory which loads the sharp modules

        <!--

        const sharp = require('sharp');

        -->

3) updated `package.json` so a fixed version of sharp is used in the project ("^0.21.3" changed to "0.21.3")
4) Added mocha as a dev dependency using `npm install mocha --save-dev`
5) `sudo npm install gulp-cli -g` to install gulp globally
6) `npm install gulp` to install locally instead...
7) `npm install babel-core babel-preset-env gulp-babel` for gulp-specific install of babel
8) Added script to package.json

        <!--

        "scripts": {
          "dev": "gulp dev",
          ...
        }

        -->

9) Created `gulpfile.js` - the config file for gulp
10) Copy-pasted in this code from the lesson materials:

          <!--

          var gulp = require('gulp');
          var babel = require("gulp-babel");

          gulp.task('build', function() {
            return gulp.src("src/**/*.js")
              .pipe(babel())
              .pipe(gulp.dest("dist"));
          });

          -->

  10a) This is set to find any .js file at any level in a src folder, so I made a src folder and moved my `index.js` file there.

11) Tried to run the build task defined in the above code. Used `gulp build` but got errors about missing packages:
  11a) `npm install babel-core`
  11b) `npm install @babel/core`
12) Gulp task 'build' now works (though doesn't have anything actually going through it properly yet)
13) Created a configuration file for babel - `.babelrc`
  13a) Added code from lesson materials:

          <!--

          {
            "presets": [
              ["env", {
                "targets": {
                  "node": "current"
                }
              }]
            ]
          }

          -->
14) `npm install gulp-nodemon` - "a gulp wrapper around nodemon"
15) Updating gulpfile to include nodemon
  15a) Added at the top of the file with other loaded modules:
          <!--

          var nodemon = require('gulp-nodemon');

          -->

  15b) Added underneath the pre-existing 'build' task code block:
          <!--

          gulp.task('dev', ['build'], function() {   //This line specifies that when the dev task is called it should perform 'build' first
            return nodemon({
              script: 'dist/index.js', //nodemon monitors this file
              ext: 'js',
              ignore: ['dist/'],
              env: { 'NODE_ENV': 'development' },
              tasks: ['build']
            });
          });

          -->
16) This started me to get errors when running `npm run-script dev` and couldn't run `gulp build` or `gulp dev`. Commented out the new stuff from step 15 onwards. `gulp build` was then able to start to run a gulp script, but failed at error "Cannot find module 'babel-preset-env'"
17) `npm install babel-preset-env`
18) Can now run `gulp build` ok. `npm run-script build` runs ok too.
