import Promise from 'bluebird';

export function getUser(userName) {
  return new Promise(function (resolve, reject) {
      let xhr = new XMLHttpRequest;
      xhr.open("GET", 'http://localhost:3000/users/' + userName);
      xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
      xhr.onload = function() {
        if (this.status >= 200 && this.status < 300) {
          resolve(xhr.response);
        } else {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = function () {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      };
      xhr.send(null);
  });
}
