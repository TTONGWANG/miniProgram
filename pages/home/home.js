// pages/home/home.js

const app = getApp();
const gender = app.globalData.gender;
Page({
  data: {
    name: 'Tong',
    age: 18,
    gender: gender,
    students: [
      {
        id: 100,
        name: 'Tong',
        age: 18
      },
      {
        id: 100,
        name: 'Pei',
        age: 19
      },
      {
        id: 100,
        name: 'James',
        age: 20
      },
    ],
    counter: 0
  },
  add() {
    // 错误做法
    // this.data.counter++;

    // this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },

  sub() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  // 页面被加载
  onLoad() {
    console.log('onLoad')
  },
  //页面显示出来时
  onShow() {
    console.log('onShow')
  },
  //初次页面渲染完成
  onReady() {
    console.log('onReady')
  },

  // 页面隐藏起来时
  onHide() {
    console.log('onHide')
  },
  onUnload() {
    console.log('onUnload')
  }
})