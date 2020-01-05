// pages/wallet/wallet.js
Page({

        /**
         * Page initial data
         */
        data: {
        balance: 0
        },

        /**
         * Lifecycle function--Called when page load
         */
        onLoad: function (options) {
                wx.setNavigationBarTitle({
                        title: '我的钱包'
                      })

        },

        /**
         * Lifecycle function--Called when page is initially rendered
         */
        onReady: function () {
                wx.getStorage({
                        key: 'balance',
                        success: (res) => {
                          this.setData({
                            overage: res.data.balance
                          })
                        }
                      })      
        },

        /**
         * Lifecycle function--Called when page show
         */
        onShow: function () {
                wx.getStorage({
                        key: 'balance',
                        success: (res) => {
                          this.setData({
                            overage: res.data.balance
                          })
                        }
                      }) 
        },

            // 跳转到充值页面
              movetoCharge: function(){
                // 关闭当前页面，跳转到指定页面，返回时将不会回到当前页面
                wx.redirectTo({
                  url: '../charge/index'
                })
              },

               // 跳转到取现页面
               movetoCash: function(){
                // 关闭当前页面，跳转到指定页面，返回时将不会回到当前页面
                wx.redirectTo({
                  url: '../cash/cash'
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