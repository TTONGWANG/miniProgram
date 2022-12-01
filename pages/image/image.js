// pages/image/image.js
Page({
  data: {
    imagePath: '',
  },
  // 从相册选择或者拍照
  handleChooseAlbum() {
  wx.chooseMedia({
    mediaType: ['image','video'],
    sourceType: ['album', 'camera'],
    success: (res) => {
      console.log(res)
      const path = res.tempFiles[0].tempFilePath
      this.setData({
        imagePath: path
      })
    }
  })
  },
  handleImgLoad() {
    console.log('aa');
  },
  /**
   * 页面的初始数据
   */

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})