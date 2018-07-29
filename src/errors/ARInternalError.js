class ARInternalError extends InternalError {
    constructor(...args) {
        super(...args)
        InternalError.captureStackTrace(this, ARInternalError)
    }
}
