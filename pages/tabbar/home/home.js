// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    temp: null,
    icon: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeather();
  },
  getWeather() {
    var that = this;
    wx.request({
      url: 'https://devapi.qweather.com/v7/weather/now?location=101270101&key=36ff228c58ff4cc5962ad32b8730dc72',
      success: function(res) {
        console.log(res.data);
        that.setData({
          temp: res.data.now.temp,
          icon: 'https://www.xiaoqw.online/foodrecommendation/weather_icon/' + res.data.now.icon + '.png'
        })
      }
    })
  },
  toSearch() {
    wx.navigateTo({
      url: '../../search/search'
    })
  },
})