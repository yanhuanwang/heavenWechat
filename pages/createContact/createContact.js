// pages/createContact/createContact.js
Page({

        /**
         * Page initial data
         */
        data: {

        },

        /**
         * Lifecycle function--Called when page load
         */
        onLoad: function (options) {

        },

        /**
         * Lifecycle function--Called when page is initially rendered
         */
        onReady: function () {

        },

        /**
         * Lifecycle function--Called when page show
         */
        onShow: function () {

        },
        chooseImg: function () {
                var _self = this;
                wx.chooseImage({
                        count: 1, // 默认9
                        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                        success: function (res) {
                                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                                var tempFilePaths = res.tempFilePaths;
                                var t = _self.data.message;
                                t.push({
                                        img: _self.data.userInfo.avatarUrl,
                                        imgList: tempFilePaths,
                                        me: true
                                })
                                _self.setData({
                                        message: t
                                })
                        }
                })
        },
        /**
         * Lifecycle function--Called when page hide
         */
        onHide: function () {

        },

        /**
         * Lifecycle function--Called when page unload
         */
        onUnload: function () {

        },

        /**
         * Page event handler function--Called when user drop down
         */
        onPullDownRefresh: function () {

        },

        /**
         * Called when page reach bottom
         */
        onReachBottom: function () {

        },

        /**
         * Called when user click on the top right corner to share
         */
        onShareAppMessage: function () {

        }
})