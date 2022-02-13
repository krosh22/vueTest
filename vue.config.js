module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "~@/assets/variables.sass"`
            },
            scss: {
                additionalData: `@import "~@/assets/variables.scss";`
            },
        }
    }
}
