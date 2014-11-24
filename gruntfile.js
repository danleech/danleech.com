module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			before: {
				src: ['build', 'dist']
			},
			after: {
				src: ['build', '.sass-cache']
			}
		},
		copy: {
			toDist: {
				expand: true,
				cwd: 'build',
				src: ['**/*.ico', 'fonts/*.*', '**/*.css'],
				dest: 'dist'
			}
		},
		cssmin: {
			toDist: {
				files: [{
					expand: true,
					cwd: 'build',
					src: '**/*.css',
					dest: 'build'
				}]
			}
		},
		jekyll: {
			toBuild: {
				options: {
					src: 'src',
					dest: 'build',
					config: 'src/_config.yml'
				}
			}
		},
		htmlmin: {
			options: {
				removeComments: true,
				collapseWhitespace: true
			},
			toDist: {
				files: [{
					expand: true,
					cwd: 'build',
					src: '**/*.html',
					dest: 'dist'
				}]
			}
		},
		imagemin: {
			toDist: {
				files: [{
					expand: true,
					cwd: 'build',
					src: ['**/*.{gif,jpg,png,svg}'],
					dest: 'dist'
				}]
			}
		},
        inline: {
            toBuild: {
                files: [{
                    expand: true,
                    cwd: 'build',
                    src: '**/*.html',
                    dest: 'build'
                }]
            }
        },
		sass: {
			toBuild: {
				files: [{
					expand: true,
					cwd: 'build',
					src: '**/*.scss',
					dest: 'build',
					ext: '.css'
				}]
			}
		},
		uglify: {
			toDist: {
				files: [{
					expand: true,
					cwd: 'build',
					src: '**/*.js',
					dest: 'dist'
				}]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-inline');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.registerTask('default', ['clean:before', 'jekyll', 'imagemin', 'sass', 'cssmin', 'uglify', 'inline', 'htmlmin', 'copy', 'clean:after']);
};