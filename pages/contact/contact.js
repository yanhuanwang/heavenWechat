// pages/contact/contact.js
Page({

        /**
         * Page initial data
         */
        data: {
                list: [{
                        img: "/images/memory.png",
                        name: "郭德纲",
                        id: "1"
                },
                {
                        img: "/images/me.png",
                        name: "于谦",
                        id: "2"
                }]
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

        goPage: function (e) {
                console.log(e);
                wx.navigateTo({
                        url: '../createContact/createContact'
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