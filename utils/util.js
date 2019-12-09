const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
function getMessage(id, obj) {
        wx.request({
                url: app.globalData.ip + '/getMsg.php',
                data: {
                        id: id
                },
                method: "POST",
                header: {
                        'x-my-custom-header': 'some value'
                },
                success: function (res) {
                        console.log(res)
                        obj.setData({
                                message: res.data
                        })
                },
                fail: function (err) {
                        console.log(err);
                }
        })
}
function getUser(obj) {
        obj.setData({
                hidden: false
        })
        wx.request({
                url: app.globalData.ip + '/getUser.php',
                data: {},
                header: {
                        'Content-Type': 'application/json'
                },
                success: function (res) {
                        setTimeout(function () {
                                obj.setData({
                                        list: res.data,
                                        hidden: true,
                                        toast1Hidden: false,
                                        toastText: "拿到数据"
                                })
                                wx.stopPullDownRefresh()
                        }, 3000)

                },
                fail: function (err) {
                        setTimeout(function () {
                                obj.setData({
                                        hidden: true,
                                        toast1Hidden: false,
                                        toastText: "请检查server"
                                })
                                wx.stopPullDownRefresh()
                        }, 3000)
                        console.log(err);
                }
        })
}
function getMoments(obj) {
        wx.request({
                url: app.globalData.ip + '/getMoments.php',
                data: {},
                header: {
                        'Content-Type': 'application/json'
                },
                success: function (res) {
                        obj.setData({
                                moments: res.data
                        })
                },
                fail: function (err) {
                        console.log(err);
                }
        })
}

module.exports = {
        formatTime: formatTime,
        getMessage: getMessage,
        getUser: getUser,
        getMoments: getMoments
}
