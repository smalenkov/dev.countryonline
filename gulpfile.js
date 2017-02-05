var gulp = require('gulp'),
  watch = require('gulp-watch'),
  prefixer = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  jade = require('gulp-jade'),
  sourcemaps = require('gulp-sourcemaps'),
  rigger = require('gulp-rigger'),
  rename = require('gulp-rename'),
  cssmin = require('gulp-minify-css'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  rimraf = require('rimraf');
  gulpCopy = require('gulp-copy');

var path = { //Объект с путями для файлов проекта
  build: { //Тут указываем куда складывать готовые после сборки файлы
    html: 'build/',
    htmlmap: 'build/htmlmaps',
    js: 'build/js/',
    css: 'build/css/',
    img: 'build/images/',
    fonts: 'build/fonts/'
  },
  src: { //Указываем пути до исходников
    jade: 'src/*.jade', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
    jademap: 'src/templates/mapinfo/*.jade',
    js: 'src/js/**/*.js',//В стилях и скриптах нам понадобятся только main файлы
    style: 'src/styles/main.scss',
    img: ['src/images/**/*.*', '!src/images/sources/*.*'], //Синтаксис img/**/*.* означает - взять все файлы, всех расширений из папки и из
    // вложенных каталогов
    fonts: 'src/fonts/**/*.*'
  },
  bower: {
    bootstrap: {
      style: 'bower_components/bootstrap-sass/assets/stylesheets/bootstrap.scss'
    }
  },
  watch: { //Тут указываем, за изменением каких файлов мы хотим наблюдать
    jade: 'src/**/*.jade',
    js: 'src/js/**/*.js',
    style: 'src/styles/**/*.scss',
    img: 'src/images/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  clean: './build'
};

/* Задания для сборки */
gulp.task('jade:build', function () {
  gulp.src(path.src.jade)
    .pipe(jade({
      pretty: true //Форматируем html код
    }))
    .pipe(gulp.dest(path.build.html));
  gulp.src(path.src.jademap)
    .pipe(jade({
      pretty: true //Форматируем html код
    }))
    .pipe(gulp.dest(path.build.htmlmap));
});

gulp.task('bootstrap:sass', function () {
  gulp.src(path.bower.bootstrap.style)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.build.css));
});

gulp.task('main:sass', function () {
  gulp.src(path.src.style)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.build.css))
    .pipe(gulp.dest('../modx/css'));
});

gulp.task('compress', function () {
  gulp.src(path.src.js)
    .pipe(uglify())
    .pipe(gulp.dest(path.build.js));
});

gulp.task('copyjs', function () {
  gulp.src(path.src.js).pipe(gulp.dest(path.build.js));
});

gulp.task('copyimg', function () {
  gulp.src(path.src.img)
    .pipe(imagemin())
    .pipe(gulp.dest(path.build.img));
});

gulp.task('jadesass:watch', function () {
  gulp.watch(path.watch.jade, ['jade:build']);
  gulp.watch(path.bower.bootstrap.style, ['bootstrap:sass']);
  gulp.watch(path.watch.style, ['main:sass']);
  gulp.watch(path.watch.js, ['compress']);
});
