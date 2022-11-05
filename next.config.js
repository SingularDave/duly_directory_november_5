
// Add exportPathMap to next.config.js
module.exports = {
    experimental: {
        runtime: 'experimental-edge'
    },
    exportPathMap: async function () {
        const paths = {
            '/': { page: '/' }
        };
        const res = await fetch('http://localhost:3000/api/get_employees');
        const data = await res.json();
        data.forEach((employee) => {
            paths[`/employee/${employee.id}`] = { page: '/employee/[id]', query: { id: employee.id } };
        });
        return paths;
    }
}