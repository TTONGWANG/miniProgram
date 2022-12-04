// pages/scroll-view/scroll.js
Page({
  handleScroll(event) {
    console.log(event.detail.scrollTop)
  },
  data: {
    inputShowed: false,
    inputVal: '',
    firstName: 'Kobe',
    lastName: 'Bryant',
    age: 12,
    nowTime: new Date().toLocaleString(),
    list: ['abc','cba','nba'],
    price: 26.666666
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString() 
      })
    }, 1000)
  },
  showInput() {
    this.setData({
      inputShowed: true,
    });
  },
  hideInput() {
    this.setData({
      inputVal: '',
      inputShowed: false,
    });
  },
  clearInput() {
    this.setData({
      inputVal: '',
    });
  },
  inputTyping(e) {
    this.setData({
      inputVal: e.detail.value,
    });
  }
})