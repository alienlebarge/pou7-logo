module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'svgs',
          src: ['*.svg'],
          dest: 'source'
        }]
      }
    },

    grunticon: {
      myIcons: {
        files: [{
          expand: true,
          cwd: 'source',
          src: ['*.svg', '*.png'],
          dest: "dist"
        }],
        options: {
        }
      }
    }

  });

  // Load the plugin that provides the "svgmin" task.
  grunt.loadNpmTasks('grunt-svgmin');
  // Load the plugin that provides the "grunticon" task.
  grunt.loadNpmTasks('grunt-grunticon');

  // Default task(s).
  grunt.registerTask('default', ['svgmin','grunticon']);

};
