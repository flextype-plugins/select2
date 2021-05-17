const gulp         = require('gulp');
const concat       = require('gulp-concat');
const csso         = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');
const sass         = require('gulp-sass');
const size         = require("gulp-size");
const gzip         = require("gulp-gzip");
const rename       = require("gulp-rename")
sass.compiler      = require('node-sass');

/**
 * Task: gulp css
 */
 gulp.task("css", function () {
    return gulp
        .src([
            // Select2
            'node_modules/select2/dist/css/select2.min.css',

            // Blocks
            'blocks/Select2/block.scss',
        ])
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: [
                "last 1 version"
            ],
            cascade: false
        }))
        .pipe(csso())
        .pipe(concat('select2.min.css'))
        .pipe(gulp.dest("blocks/Select2/dist/css/"))
        .pipe(size({ showFiles: true }))
        .pipe(gzip())
        .pipe(rename("select2.min.css.gz"))
        .pipe(gulp.dest("blocks/Select2/dist/css/"))
        .pipe(size({ showFiles: true, gzip: true }));
});


/**
 * Task: gulp js
 */
 gulp.task('js', function () {
    return gulp
        .src([
            // Select2
            'node_modules/select2/dist/js/select2.min.js',

            // Blocks
            'blocks/Select2/block.js'
        ])
        .pipe(concat('select2.min.js'))
        .pipe(size({ showFiles: true }))
        .pipe(gulp.dest('blocks/Select2/dist/js/'))
        .pipe(gzip())
        .pipe(rename("select2.min.js.gz"))
        .pipe(gulp.dest("blocks/Select2/dist/js/"))
        .pipe(size({ showFiles: true, gzip: true }));
});


/**
 * Task: gulp default
 */
gulp.task('default', gulp.series(
    'css', 'js'
));

/**
 * Task: gulp watch
 */
gulp.task('watch', function () {
    gulp.watch(["blocks/"], gulp.series('default'));
});
