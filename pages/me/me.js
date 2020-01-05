// pages/me.js
var app = getApp()
Page({

        data: {
                 userInfo: {},
                list: [
                        {
                                list_tool: [

                                        {
                                                img: "../../images/person.png",
                                                name: "思念的人",
                                                url: "../contact/contact"
                                        },
                                ]
                        },
                        {
                                list_tool:[
                                {
                                        img: "../../images/wallet.png",
                                        name: "钱包",
                                        url : "../wallet/wallet"
                                },
                                {
                                        img: "../../images/order.png",
                                        name: "订单",
                                        url: ""
                                },
                                ]
                        } ,
                        {
                                list_tool:[
                                {
                                        img: "../../images/setting.png",
                                        name: "设置",
                                        url:""
                                }
                                ]
                         },
        ]
},

        /**
         * Lifecycle function--Called when page load
         */
        onLoad: function (options) {
                var that = this
                //调用应用实例的方法获取全局数据
                that.setData({
                        userInfo: app.globalData.userInfo
                })
        },

        goPage: function (event) {
                console.log(event.currentTarget.dataset.log);
                wx.navigateTo({
                        url: event.currentTarget.dataset.url
                })
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