/**
 * Created by OYSK on 2017/8/14.
 */
import gulp from 'gulp'
import gulpSequence from 'gulp-sequence'


gulp.task('build', gulpSequence('clean','css','pages','scripts', ['browser','serve']))
