// pages/home/home.js

const app = getApp();
const gender = app.globalData.gender;
Page({
  data: {
    titles:['衣服','裤子','鞋子'],
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
  handleIncrementCpn() {
    const my_sel = this.selectComponent('#sel_id')
    console.log(my_sel.data.counter)

    // 直接修改不符合规范
    // my_sel.setData({
    //   counter: my_sel.data.counter + 20
    // })
    my_sel.incrementcounter(10)
  },
  handleIncrement(event) {
    console.log(event.detail.name, event.detail.age)
    this.setData({
      counter: this.data.counter+1,
    })
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
    // console.log('onLoad')
  },
  //页面显示出来时
  onShow() {
    // console.log('onShow')
  },
  //初次页面渲染完成
  onReady() {
    // console.log('onReady')
  },

  // 页面隐藏起来时
  onHide() {
    console.log('onHide')
  },
  onUnload() {
    console.log('onUnload')
  },
  handleItemClick(event) {
    // console.log(event)
    const dataset = event.currentTarget.dataset;
    const title = dataset.item;
    const index = dataset.index;
    console.log(title, index)
  },

  handleCaptureView1() {
    console.log('handleCaptureView1')
  },
  handleBindView1() {
    console.log('handleBindView1')
  },
  handleCaptureView2() {
    console.log('handleCaptureView2')
  },
  handleBindView2() {
    console.log('handleBindView2')
  },
  handleCaptureView3() {
    console.log('handleCaptureView3')
  },
  handleBindView3() {
    console.log('handleBindView3')
  },
})