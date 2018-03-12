document.addEventListener('DOMContentLoaded', function () {
  /* WECHAT SHARING */
  var hostname = location.origin;
  var appId = /www.starbucks.com.cn$/i.test(hostname) ? 'wxaf48360fec8b1f0c' : 'wx186c10fc6a4ff63c';
  $.ajax({
    url: hostname + '/api/external/wechat/thirdParty/jssdkSignature',
    method: 'POST',
    data: {
      data: {
        url: location.href.split('#')[0],
        appId: appId
      }
    }
  }).done(function (resData) {
    var signature = resData.signature;
    var nonceStr = resData.nonceStr;
    var timestamp = resData.timestamp;
    if (signature && nonceStr && timestamp && wx) {
      wx.config({
        debug: false,
        appId: appId,
        timestamp: timestamp,
        nonceStr: nonceStr,
        signature: signature,
        jsApiList: [
          'checkJsApi',
          'onMenuShareTimeline',
          'onMenuShareAppMessage'
        ]
      });
      wx.ready(function () {
        var pageShareData = {
          title: WECHAT_TITLE,
          desc: WECHAT_DESC,
          link: location.href + '?utm_source=sbux%20china&utm_medium=wechat',
          imgUrl: hostname + WECHAT_IMAGE,
          success: function (res) {
            console.log('This page shared:', location.href);
          },
          cancel: function (res) {
            console.log('Cancelled page sharing for:', location.href);
          }
        };
        wx.onMenuShareTimeline(pageShareData);
        wx.onMenuShareAppMessage(pageShareData);
      });
      wx.error(function (res) {
        console.log('wechat jssdk error: ', res.errMsg);
      });
    }
  }).fail(function (jqXHR, textStatus) {
    console.log('Request to share api failed: ', textStatus);
  });
})
