class ErrLogger {

  private options: Conf

  constructor(userConf: Conf) {
    if (!userConf) userConf = {};
    let defaultConfig: Conf = {
      detailedErrors: true,
      remoteLogging: false,
      remoteSettings: {
        url: null,
        proId: null,
        additionalParams: null,
        successCallback: null,
        errorCallback: null
      }
    }
    this.options = (<any>Object).assign(defaultConfig, userConf);
    window.removeEventListener('error', this.errListener);
  }
  errListener(e) {
    if (this.options.detailedErrors) {
      this.detailedErrors(e);
    }
    if (this.options.remoteLogging) {
      this.remoteLogging(e, this.options.remoteSettings);
    }
  }
  detailedErrors(e) {
    let i = this.errorData(e);
    let helpPath = encodeURI("https://stackoverflow.com/search?q=" + i.error.split(' ').join('+'));

    let str = [
      "%cType: %c" + i.type,
      "%cError: %c" + i.error,
      "%cStackTrace: %c" + i.stackTrace,
      "%cFile Name: %c" + i.filename,
      "%cPath: %c" + i.path,
      "%cLine: %c" + i.line,
      "%cColumn: %c" + i.column,
      "%cDate: %c" + i.datetime,
      "%cDebug : %c" + i.path + ':' + i.line,
      "%cGet Help: " + "%c" + helpPath
    ].join("\n");

    if (this.browserInfo.browser === 'Chrome') {
      console.log(str, "font-weight: bold;", "color: #e74c3c;", "font-weight: bold;", "font-weight: normal; color: #e74c3c;", "font-weight: bold;", "font-weight: normal; color: #e74c3c;", "font-weight: bold;", "font-weight: normal;", "font-weight: bold;", "font-weight: normal;", "font-weight: bold;", "font-weight: normal;", "font-weight: bold;", "font-weight: normal;", "font-weight: bold;", "font-weight: normal;", "font-weight: bold;", "font-weight: normal;", "font-weight: bold;", "font-weight: normal; color: #3498db;");
    } else {
      console.log(str.replace(/%c/gi, ''));
    }
  }
  remoteLogging(e, remoteSettings) {
    if (!remoteSettings.url) {
      throw new Error('Provide remote URL to log errors remotely');
    } else if (remoteSettings.additionalParams && typeof remoteSettings.additionalParams !== 'object') {
      throw new Error('Invalid data type, additionalParams should be a valid object');
    }
    if (!remoteSettings.proId) {
      throw new Error('Invalid data type, proId should be a string');
    }

    var http = new XMLHttpRequest();
    var url = remoteSettings.url;
    var data = this.errorData(e);
    var params = Object.assign(data, remoteSettings.additionalParams, { proId: remoteSettings.proId });

    axios.post(url, params).then(res => {
      console.log(res.data);
    })
  }
  errorData(e) {
    let filename = e.filename.lastIndexOf('/');
    let datetime = new Date().toString();

    //userAgent only for POST request purposes, not required in pretty print
    return {
      type: e.type,
      path: e.filename,
      filename: e.filename.substring(++filename),
      line: e.lineno,
      column: e.colno,
      error: e.message,
      stackTrace: ((e.error) ? e.error.stack.toString().replace(/(\r\n|\n|\r)/gm, "") : ""),
      datetime: datetime,
      userAgent: navigator.userAgent || window.navigator.userAgent
    };
  }
  serializeData(params) {
    return Object.keys(params).map(function (k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(params[k]);
    }).join('&');
  }
}