class ARReferenceError extends ReferenceError {
    constructor(...args) {
        super(...args)
        ReferenceError.captureStackTrace(this, ARReferenceError)
    }
}
