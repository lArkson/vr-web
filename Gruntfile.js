module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    // myGRUNT: COPIAR[PROVEEDORES]+ DISTRIBUIR[JS&CSS] + VALIDAR[HTML]
	grunt.initConfig({
		// metadatos
		leerJson: grunt.file.readJSON('package.json'),
		banner: '/**\n' +
				'* <%= leerJson.name %> v<%= leerJson.version %> por @fizzvr\n' +
				'*/\n',
		frontend: {
           force: false,
           srcWebroot: './src/public',
           webroot: './out',
        },
        //--------------------
        // COPIAR[PROVEEDORES]
		// tarea de copia de los archivos 3rd party desde bower --- bower list --path
        //--------------------
		copy: {
			main: {
				files: [
				// //bauserif - fuente
				// {
				// 	expand: true,
				// 	flatten: true,
				// 	src: ["./src/public/css/bauserif.*"],
				// 	dest: './out/cvr/'
				// },
				//jquery - indispensable
				{
					expand: true,
					flatten: true,
					src: ["bower_components/jquery/dist/jquery.min.js",
					"bower_components/jquery/dist/jquery.min.map"],
					dest: './out/act/jquery/'
				},
				//bootstrap - responsive
				{
					expand: true,
					flatten: true,
					src: ["bower_components/bootstrap/dist/js/bootstrap.min.js"],
					dest: './out/act/bs3/'
				},
				{
					expand: true,
					flatten: true,
					src: ["bower_components/bootstrap/dist/css/bootstrap.min.css",
						"bower_components/bootstrap/dist/css/bootstrap-theme.min.css"],
					dest: './out/act/bs3/css/'
				},
				{
					expand: true,
					flatten: true,
					src: ["bower_components/bootstrap/dist/fonts/*"],
					dest: './out/act/bs3/fonts/'
				},
				//flexslider - slider de imágenes
				{
					expand: true,
					flatten: true,
					src: ["bower_components/flexslider/jquery.flexslider.js",
                          "bower_components/flexslider/flexslider.css"],
					dest: './out/act/fs/'
				},
				{
					expand: true,
					flatten: true,
					src:["bower_components/flexslider/fonts/*"],
					dest: './out/act/fs/fonts/'
				},
				//prettyPhoto - caja de imagenes
				{
					expand: true,
					flatten: true,
					src: ["bower_components/jquery-prettyPhoto/js/jquery.prettyPhoto.js"],
					dest: './out/act/pp/'
				},
				{
					expand: true,
					flatten: true,
					src: ["bower_components/jquery-prettyPhoto/css/*"],
					dest: './out/act/pp/css/'
				},
				{
					expand: true,
					cwd: 'bower_components/jquery-prettyPhoto/images/prettyPhoto/',
					src: ['**'],
					dest: './out/act/pp/images/prettyPhoto/'
				},
                //font-awesome - iconos, fuente
				{
				    expand: true,
					cwd: 'bower_components/font-awesome/css/',
					src: ['**'],
					dest: './out/act/fa/css/'
				},
				{
					expand: true,
					flatten: true,
					src:["bower_components/font-awesome/fonts/*"],
					dest: './out/act/fa/fonts/'
				},
                //animsition - trancisiones css
				{
				    expand: true,
                    flatten: true,
					src: ['bower_components/animsition/dist/js/jquery.animsition.min.js',
                          'bower_components/animsition/dist/css/animsition.min.css'],
					dest: './out/act/an/'
				},
                //isotope - Filter & sort magical layouts
				{
				    expand: true,
                    flatten: true,
					src: ['bower_components/isotope/dist/isotope.pkgd.min.js'],
					dest: './out/act/is/'
				}
				]
			}
		},
        //--------------------
        // DISTRIBUIR[JS&CSS]
		// tarea de distribucion JS
        //--------------------
        uglify: {
            main: {
                // task options
                options: {
                    banner: '// <%= leerJson.name %> - <%= leerJson.url %> - ' + '<%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %>\n\n',
                    preserveComments: 'some'
                },
                files: {
                    'out/jvr/vr1.min.js': ['src/public/js/jvr1.js']
                }
            }
        },
       // tarea de distribucion CSS
        csso: {
           main: {
               options: {
                    banner: '/* <%= leerJson.name %> - <%= leerJson.url %> - ' + '<%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> */\n\n'
                },
                files: {
                  'out/cvr/vr1.min.css': ['src/public/css/cvr1.css']
                }
            }
        },

//        'frontend-css': {
//            main: {
//                options: {
//                    // inline @imports
//                    inline: true,
//                    // rewrite all url() to versioned ones.
//                    // the `rewriteScheme` is used to create versioned URL
//                    rewriteUrl: false,
//
//                    // minify CSS
//                    minify: true
//                },
//                files: [
//                    {
//                        src: 'src/public/css/cvr1.css',
//                        dest: 'out/cvr/vr1.css'
//                    }
//                ]
//            }
//        },
        //--------------------
        // VALIDAR[HTML]
		// validacion HTML
        //--------------------
		validation: {
			options: {
				reset: true,
                relaxerror: ['Attribute width not allowed on element a at this point.']
			},
			files: {
				src:['out/**/*.html']
			}
	    }
		/*compress: {
      		target: {
        			files: {
          				'pack/<%= pkg.name %>.v<%= pkg.version %>.zip': ['prod/**']
        			}
      			}
    	}*/
	});
	// validar html
	grunt.registerTask('validar-html', ['validation']);
	// distribucion JS y CSS
	grunt.registerTask('dist-jscss', ['uglify', 'csso']);
	// distribucion de los activos
	grunt.registerTask('dist-activos', ['copy']);
	// distribucion FULL
	grunt.registerTask('dist-full', ['dist-activos', 'dist-jscss']);
    // Travis
	grunt.registerTask('travis', ['dist-jscss']);
	// tarea por default
	grunt.registerTask('default', ['dist-full']);
};
