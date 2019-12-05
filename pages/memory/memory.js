// pages/memory.js
var app = getApp()
var util = require('../../utils/util')

Page({

        /**
         * Page initial data
         */
        data: {
                list:[{
            img:"/images/memory.png",
            name:"gg",
            message:"哈哈",
            time:"22:00",
            count:1,
            id:"1"
        },
        {
            img:"/images/me.png",
            name:"mm",
            message:"干什么呢",
            time:"17:30",
            count:0,
            id:"2"
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