module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				options: {
					style: 'nested'
				},
				files: [{
			        expand: true,
			        cwd: 'src/sass/',
			        src: ['*.scss'],
			        dest: 'mytheme/',
			        ext: '.css'
		    	}]
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
};
