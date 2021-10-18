module.exports = {
    async rewrites() {
        return [
            {
                source: "/a",
                destination: "/index.html",
            }
        ]
    }
}