
module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            return {
                ...webpackConfig,
                entry: {
                    main: [env === 'development' &&
                        require.resolve('react-dev-utils/webpackHotDevClient'), paths.appIndexJs].filter(Boolean),
                    serviceWorker: './src/scripts/serviceWorker.ts',
                    content: './src/scripts/content.ts',
                },
                output: {
                    ...webpackConfig.output,
                    filename: 'static/js/[name].js',
                },
                optimization: {
                    ...webpackConfig.optimization,
                    runtimeChunk: false,
                }
            }
        },
    }
}
