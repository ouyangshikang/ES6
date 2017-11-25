/**
 * Created by OYSK on 2017/5/27.
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';   //gulp语句中做语句判断的
import cancat from 'gulp-concat';   //文件拼接
import webpack from 'webpack';      //webpack 打包
import gulpWebpack from 'webpack-stream';   //结合webpack-stream做文件流处理
import named from 'vinyl-named';  //文件重命名做标志
import livereload from 'gulp-livereload';   //文件修改后浏览器自动刷新
import plumber from 'gulp-plumber';      //处理文件信息流
import rename from 'gulp-rename';  //对文件重命名
import uglify from 'gulp-uglify';   //js,css压缩处理
import {log,colors} from 'gulp-util';   //命令行输出
import args from './util/args';     //命令行参数解析的包


// npm install gulp gulp-if gulp-concat webpack webpack-stream vinyl-named gulp-livereload gulp-plumber gulp-rename gulp-uglify gulp-util yargs  --save-dev    安装这些依赖包

gulp.task('scripts',()=>{
    return gulp.src(['app/js/index.js'])
        .pipe(plumber({
            errorHandle:function () {
                
            }
        }))
        .pipe(named())
        .pipe(gulpWebpack({
            module:{
                loaders:[{
                    test:/\.js$/,
                    loader:'babel'
                }]
            }
        }),null,(err,stats)=>{
            log(`Finish '${colors.cyan('scripts')}'`,stats.toString({
                chunks:false
            }))
        })
        .pipe(gulp.dest('server/public/js'))
        .pipe(rename({
            basename:'cp',
            extname:'.min.js'
        }))
        .pipe(uglify({
            compress:{
                properties:false
            },
            output:{
                'quote_keys':true
            }
        }))
        .pipe(gulp.dest('server/public/js'))
        .pipe(gulpif(args.watch,livereload()))
})