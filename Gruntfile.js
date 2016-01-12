module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-concat'),
	grunt.loadNpmTasks('grunt-contrib-less'),
	grunt.loadNpmTasks('grunt-contrib-uglify'),
	grunt.loadNpmTasks('grunt-contrib-cssmin'),
	grunt.loadNpmTasks('grunt-contrib-watch'),
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.registerTask('default', ['less','concat']),
	grunt.registerTask('dist', ['clean','less','concat','uglify','cssmin']);

	grunt.initConfig({
		watch: {
			scripts: {
				files: ['dev/**/*.js','dev/**/*.less'],
				tasks: ['default'],
				options: {
					spawn: false,
				},
			},
		},	

		clean: {
			del:['dist/scripts', 'dist/styles']
		},		

		less: {
			less: {
				files: {
					'dev/less/main.css': 'dev/less/main.less'
				}
			},
		},
 
		concat: {
			js: {
				src: ['bower_components/angular/angular.min.js','bower_components/angular-route/angular-route.min.js','bower_components/angular-sanitize/angular-sanitize.min.js'],
				dest: 'dist/scripts/lib.js',
			},
			css: {
				src: ['bower_components/normalize-css/*.css'],
				dest: 'dist/styles/lib.css',
			},
			js_dev: {
				src: ['dev/js/script.js','dev/js/**/*.js'],
				dest: 'dist/scripts/app.js',
			},
			css_dev: {
				src: ['dev/less/main.css'],
				dest: 'dist/styles/app.css',
			}
		},	

		uglify: {
			js: {
				files: {
					'dist/scripts/lib.min.js': ['dist/scripts/lib.js'],
					'dist/scripts/app.min.js': ['dist/scripts/app.js']
				}
			}
		},
		cssmin: {
			options: {
				shorthandCompacting: true,
				roundingPrecision: -1
			},
			target: {
				files: {
					'dist/styles/lib.min.css': ['dist/styles/lib.css'],
					'dist/styles/app.min.css': ['dist/styles/app.css']
				}
			}
		}
	});	
};