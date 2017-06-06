
export class FetchInterceptor {
  get(url, params, options) {
    return this.processRequest(url, { ...params, method: 'get' });
  }
  //process the request and returns an appropriatre result or throw an error
  processRequest(url, params, options) {
    return fetch(url, { ...params }).then(response => {
      return this.processResponse(response);
    }).catch(err => {
      
      throw (err);
    }
      )
  }
  //process the responsose
  processResponse(response) {
    if (response.ok) {
      //if the response is ok
      return response.json().then(data => {
        return data;
      }).catch(err => {
        // no results ?
      })
    }
    else {
      //throw the statusText as error .. need to handle other scenarios
      throw response.statusText;
    }
  }
}

FetchInterceptor.dispatch = undefined;
export default new FetchInterceptor();
