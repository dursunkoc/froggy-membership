/**
 * Created by dursun on 11/19/14.
 */
module.exports = function(grunt){
    grunt.initConfig({
       jshint:{
           files:['lib/**/*js','models/**/*js']
       },
        watch:{
            files:['lib/**/*js','models/**/*js','test/**/*.js'],
            tasks:['jshint']
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
}