class ErrorService {
    constructor() {

    }
    errorResponse(code, data) {
        return {
    		status : false,
            message: {
                code: code,
                message: data
            }
    	}
    }
    response(code, data) {
        return {
    		status : true,
    		data : data
    	}
    }
    errorType(code,data) {
        var errorObject = {};

    	switch(error) {
            case 401:
                errorObject.status = 401;
                errorObject.message = 'User or password incorrect';
                break;
            case 403:
                errorObject.status = 403;
                errorObject.message = 'Forbidden';
                break;
            case 404:
                errorObject.status = 404;
                errorObject.message = 'Data not found';
                break;
            default:
                errorObject.status = 400;
                errorObject.message = 'Generic error';
                break;
        }

        errorObject.code = error;

        if (errorMessage) {
            errorObject.message = errorMessage;
        }

        return errorObject;
    }
}

export default new ErrorService();
