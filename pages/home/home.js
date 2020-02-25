import {
  Home
} from 'home-model.js';
var home = new Home(); //实例化 首页 对象

Page({
  data: {
    // loadingHidden: false
  },
  onLoad: function() {
    this._loadData();
  },
  onShow: function(e) {
    
  },
  showModal: function(e) {
    this.setData({
      modalName: "DialogModal1"
    })
    var id = e.target.dataset.id;
    var hornArr = this.data.hornArr;
    for(var i=0;i<hornArr.length;i++){
      if(id == hornArr[i].id){
        this.setData({
          msgList:{
            'title':hornArr[i].title,
            'content': hornArr[i].content,
            'creat_time': hornArr[i].creat_time
          }
        });
      }
    }
  },
  closeModal: function (e) {
    this.setData({
      modalName: null
    });

  },
  hideModal: function(e) {
    this.setData({
      modalName: null
    });
    wx.navigateTo({
      url: '../timeline/timeline'
    })

  },

  /*加载所有数据*/
  _loadData: function(callback) {
    var that = this;

    // 获得bannar信息
    home.getBannerData((data) => {
      that.setData({
        bannerArr: data,
      });
    });
    home.getHornInfo((data) => {
      that.setData({
        hornArr: data,
      });
    });

    /*获取主题信息*/
    home.getThemeData((data) => {
      that.setData({
        themeArr: data
        // loadingHidden: true
      });
    });

    /*获取单品信息*/
    home.getProductorData((data) => {
      that.setData({
        productsArr: data
      });
      callback && callback();
    });
  },

  /*跳转到商品详情*/
  onProductsItemTap: function(event) {
    var id = home.getDataSet(event, 'id');
    wx.navigateTo({
      url: '../product/product?id=' + id
    })
  },

  /*跳转到主题列表*/
  onThemesItemTap: function(event) {
    var id = home.getDataSet(event, 'id');
    var name = home.getDataSet(event, 'name');
    wx.navigateTo({
      url: '../theme/theme?id=' + id + '&name=' + name
    })
  },

  /*下拉刷新页面*/
  onPullDownRefresh: function() {
    this._loadData(() => {
      wx.stopPullDownRefresh()
    });
  },

  //分享效果
  onShareAppMessage: function() {
    return {
      title: '抗台风利器 Anti-typhoon edge',
      path: 'pages/home/home'
    }
  }

})