// components/my-mul-slots/my-mul-slots.js
Component({
  options: {
    multipleSlots: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  // 页面相关声生命周期
  // pageLifetimes: {
  //   show() {
  //     console.log('监听组件所在页面显示出来时')
  //   },
  //   hide() {
  //     console.log('监听组件所在页面隐藏起来时')
  //   }
  // },
//组件相关生命周期
  lifetimes: {
    created() {
      console.log('组件被创建出来')
    },
    attached() {
      console.log('组件被添加到页面')
    },
    ready() {
      console.log('组件被渲染出来')
    },
    moved() {
      console.log('组件被移动到另外一个节点')
    },
    detached() {
      console.log('组件被移除')
    }
  }
})
