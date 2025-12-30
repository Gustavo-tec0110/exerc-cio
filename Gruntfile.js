module.exports = function (grunt) {

  grunt.initConfig({

    less: {
      development: {
        files: {
          "css/main.css": "less/main.less"
        }
      }
    },

    uglify: {
      build: {
        files: {
          "js/script.min.js": ["js/script.js"]
        }
      }
    }

  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["less", "uglify"]);
};
