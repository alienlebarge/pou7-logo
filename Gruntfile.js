module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'source',
          src: ['*.svg'],
          dest: 'dist'
        }]
      },
      options: {
        plugins: [{
          cleanupIDs: false
        }]
      },
    }

  });

  // Plugins
  grunt.loadNpmTasks('grunt-svgmin');

  // Default task(s).
  grunt.registerTask('default', ['svgmin']);

};
