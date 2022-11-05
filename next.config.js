
module.exports = {
    async rewrites() {
        return [
            {
                source: '*',
                destination: 'https://duly-directory-worker.singulardavepratt.workers.dev/'
            }
        ]
    }
};