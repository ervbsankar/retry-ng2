var gulp = require("gulp");
var ts = require("typescript");
var gts = require("gulp-typescript");
var del = require("del");
var tsProject = gts.createProject("./tsconfig.json");
var tsLint = require("gulp-tsLint");
var sourceMaps = require("gulp-sourcemaps");

gulp.task("clean", function(){
    del("build");
});

gulp.task("compile",function(){
   return gulp.src(["app/**/*.ts","!**/*.spec.ts"])
       .pipe(sourceMaps.init())
       .pipe(tsProject())
       .pipe(sourceMaps.write("."))
       .pipe(gulp.dest("app"));
});

gulp.task("tsLint", function() {
    return gulp.src("app/**/*.ts")
        .pipe(tsLint({
            formatter: "prose"
        }))
        .pipe(tsLint.report());
});

gulp.task("libs", function() {
    return gulp.src([
        "core-js/client/shim.min.js",
        "systemjs/dist/system-polyfills.js",
        "systemjs/dist/system.src.js",
        "reflect-metadata/Reflect.js",
        "rxjs/**/*.js",
        "zone.js/dist/**",
        "@angular/**/bundles/**",
        "@angular/material/core/theming/**",
        "ng2-bootstrap/**",
        "bootstrap/dist/**",
        "moment/moment.js",
        "angular2-in-memory-web-api/**",
        "ng2-tooltip/**"
    ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("build/lib"));
});

gulp.task("assets", ["compile"], function()  {
    return gulp.src(["app/**/*", "!**/*.ts"])
        .pipe(gulp.dest("build/app"));
});

gulp.task("index-file", function()  {
    return gulp.src(["./index.html","./systemjs.config.js"])
        .pipe(gulp.dest("build"));
});

gulp.task("watch",function () {
    gulp.watch(["app/**/*.ts"],["assets"]);
    gulp.watch(["app/**/*.html","app/**/*.css","./index.html","./systemjs.config.js"],["assets","index-file"]);
});

gulp.task("build", ["libs","assets","index-file"],function () {
});