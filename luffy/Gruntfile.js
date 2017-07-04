/*global module:false*/
module.exports = function (grunt) {
    'use strict';
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        imagemin: {
            /* 压缩图片大小 */
            dist: {
                options: {
                    optimizationLevel: 7 //定义 PNG 图片优化水平
                },
                files: [
                    {
                        expand: true,
                        cwd: 'images/',
                        src: ['**/{,*/}*.{png,jpg,jpeg,svg}'], // 优化 img 目录下所有 png/jpg/jpeg 图片
                        dest: 'img/' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
                    }
                ]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: '{,*/}*.svg',
                    dest: 'img/svg-loaders/'
                }]
            }
        },
     cssmin: {
         minify: {
             expand: true,
             cwd: 'css/',
             src: ['*.css', '!*.min.css'],
             dest: 'css/',
             ext: '.min.css' },
         combine: {
             files: {
                 'css/style.min.css': ['css/common.min.css', 'css/fullPage.min.css','css/main.min.css']
             }
         }
     },
        // uglify: {
        //     build: {
        //         src: 'js/*.js',//压缩源文件是之前合并的buildt.js文件
        //         dest: 'js/script.min.js'//压缩文件为built.min.js
        //     }
        // }

    });
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('img', [
        'imagemin',
        'svgmin',
        'cssmin'
    ]);
};