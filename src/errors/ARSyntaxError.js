class ARSyntaxError extends SyntaxError {
    constructor(...args) {
        super(...args)
        SyntaxError.captureStackTrace(this, ARSyntaxError)
    }
}
