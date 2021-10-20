const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsPtoject = ts.createProject('tsconfig.json')

function transformacaoTS() {
    return tsPtoject.src()
        .pipe(tsPtoject())
        .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)