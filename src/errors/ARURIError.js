class ARURIError extends URIError {
    constructor(...args) {
        super(...args)
        URIError.captureStackTrace(this, ARURIError)
    }
}
