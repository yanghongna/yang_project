var gulp = require("gulp");

var uglify = require("gulp-uglify"); //压缩模块

var babel = require("gulp-babel");  //es6的转译

var sass = require("gulp-ruby-sass"); 

var connect = require("gulp-connect"); // 热部署
gulp.task("JS",function(){
	gulp.src("./dev/*.js").pipe(babel({
		presets: ["es2015"]
	})).pipe(uglify()).pipe(gulp.dest("./minjs"));
})

gulp.task("compilesass",function(){
	sass("./dev/scss/*.scss",{
		style : "expanded"
	}).pipe(gulp.dest("./dev/css/"));
})

gulp.task("refreshHTML",function(){
	gulp.src('./dev/**/*.html').pipe(connect.reload());
})

gulp.task("listen",function(){
	
	connect.server({
		livereload:true
	});
	
	gulp.watch("./dev/scss/*.scss",["compilesass"]);
	gulp.watch("./dev/css/*.css",["refreshHTML"]);	
	gulp.watch("./dev/**/*.html",["refreshHTML"]);
})

