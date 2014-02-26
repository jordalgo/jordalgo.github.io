var version = '<%= pkg.version %>';
var fragmentBase = '<%= grunt.file.read("library/html/fragments/';
var aboutmeFragment = fragmentBase + 'aboutme.html") %>';
var workFragment = fragmentBase + 'work.html") %>';
var contactFragment = fragmentBase + 'contact.html") %>';
var navFragment = fragmentBase + 'nav.html") %>';
var coverImageFragment = fragmentBase + 'cover-image.html") %>';
var files = [
        {
            expand: true,
            cwd: 'library/html/',
            src: 'index.html',
            dest: ''
        }
    ];

module.exports = {
    test: {
        options: {
            variables: {
                'nav': navFragment,
                'coverimage': coverImageFragment,
                'aboutme': aboutmeFragment,
                'work': workFragment,
                'contact': contactFragment,
                'livereload': '<script src="http://localhost:35729/livereload.js"></script>',
                'version': version
            }
        },
        files: files
    },
    build: {
        options: {
            variables: {
                'nav': navFragment,
                'coverimage': coverImageFragment,
                'aboutme': aboutmeFragment,
                'work': workFragment,
                'contact': contactFragment,
                'livereload': '',
                'version': version
            }
        },
        files: files
    }
};