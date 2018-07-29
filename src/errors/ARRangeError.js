class ARRangeError extends RangeError {
    constructor(...args) {
        super(...args)
        RangeError.captureStackTrace(this, ARRangeError)
    }
}
