class ARTypeError extends TypeError {
    constructor(...args) {
        super(...args)
        TypeError.captureStackTrace(this, ARTypeError)
    }
}
