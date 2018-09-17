const request = require('request');

module.exports = {
  postMessage: async (token, channel, text) => {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + token
      },
      form: {
        token: token,
        channel: channel,
        text: text
      },
      json: true
    };
    return new Promise((resolve, reject) => {
      request.post('https://slack.com/api/chat.postMessage', options, (error, res, body) => {
        if (error) {
          reject(error);
        }

        resolve({
          response: res,
          body: body
        });
      });
    });
  }
};
