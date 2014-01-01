module.exports = {
    build: {
        options: {
            paths: ['library/style/less'],
            dumpLineNumbers: 'all',
            sourceMap: true
        },
        files: [
            {
                expand: true,
                cwd: 'library/style/less',
                src: 'style.less',
                dest: 'library/style/css',
                ext: '-<%= pkg.version %>.css'
            }
        ]
    }
};