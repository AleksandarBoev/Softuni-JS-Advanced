class Request {
    /**
     * @param method {String}
     * @param uri {String}
     * @param version {String}
     * @param message {String}
     */
    constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

// let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '');
//
// console.log(myData);