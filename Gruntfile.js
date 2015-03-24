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
    },


    svg2png: {
      all: {
        // specify files in array format with multiple src-dest mapping
        files: [
          // rasterize all SVG files in "img" and its subdirectories to "img/png"
          {
            cwd: 'dist/',
            src: ['**/*.svg'],
            dest: 'dist/png/'
          }
        ]
      }
    }

  });

  // Plugins
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-svg2png');

  // Default task(s).
  grunt.registerTask('default', ['svgmin', 'svg2png']);

};
