router.use((req, res, next) => {
    if (!req.headers['x-auth']) return next('router')
    next()
})