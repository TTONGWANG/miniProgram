// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleInput(event) {
    console.log('用户输入了：',event.detail.value)
  },
  handleFocus(event) {
    console.log('input获取焦点',event)
  },
  handleBlur(event) {
    console.log('input失去焦点',event)
  }
})