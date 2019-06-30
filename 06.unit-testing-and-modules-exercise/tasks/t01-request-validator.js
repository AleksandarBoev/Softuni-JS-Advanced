/**
 * @param httpRequest {Object}
 */
function requestValidator(httpRequest) {
    const errorMessageBeginning = 'Invalid request header: Invalid ';

    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    if (httpRequest.method === undefined || !validMethods.includes(httpRequest.method)) {
        throw Error(errorMessageBeginning + 'Method');
    }

    const uriRegex = /(^[0-9A-z\.]+$)|(^\*$)/;
    if (httpRequest.uri === undefined || !uriRegex.test(httpRequest.uri)) {
        throw Error(errorMessageBeginning + 'URI');
    }

    const validHttpVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    if (httpRequest.version === undefined || !validHttpVersions.includes(httpRequest.version)) {
        throw Error(errorMessageBeginning + 'Version');
    }

    const messageRegex = /^[^<>\\&'"]*$/;
    if (httpRequest.message === undefined || !messageRegex.test(httpRequest.message)) {
        throw Error(errorMessageBeginning + 'Message');
    }

    return httpRequest;
}

// console.log(requestValidator({
//         method: 'GET',
//         uri: 'svn.public.catalog',
//         version: 'HTTP/1.1',
//         message: 'qwertyuiopasdfghjklzxcvbnm1234567890`~!@#$%^*()-=_+[]{};:|,./? '
//     }
// ));