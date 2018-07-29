class ARError extends Error {
    constructor(...args) {
        super(...args)
        Error.captureStackTrace(this, ARError)
    }
}
