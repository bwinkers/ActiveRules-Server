class AREvalError extends EvalError {
    constructor(...args) {
        super(...args)
        EvalError.captureStackTrace(this, AREvalError)
    }
}
