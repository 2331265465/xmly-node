const request = require('request');
const { BASE_URL } = require('../config');
module.exports = (req, res) => {
  const url = `${BASE_URL}/album?albumId=${req.query.albumId}`;
  request({
    url,
    headers: {
      'xm-sign': req.sign
    }
  }, function (error, response, body) {
    if (error) {
      res.status(500).json({
        ret: 0,
        message: '专辑详情请求失败',
        data: error
      });
    } else {
      res.status(response.statusCode).json(JSON.parse(body))
    }
  });
}

