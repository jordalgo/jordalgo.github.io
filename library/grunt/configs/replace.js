module.exports = {
    build: {
        options: {
            variables: { 'version': '<%= pkg.version %>' }
        },
        files: [
            {
                expand: true,
                cwd: 'library/html/',
                src: 'index.html',
                dest: ''
            }
        ]
    }
};