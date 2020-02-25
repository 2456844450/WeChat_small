/**
 * Created by jimmy on 17/03/09.
 */

import {Base} from '../../utils/base.js'

class Address extends Base {

  constructor() {
    super();
    this._storageKeyName = 'address';
   
  }
  test(){
    console.log('你本来就很美');
  }

  /*更新地址*/
  updateAddress(addressList,callback) {
    var that = this;
    var allParams = {
      url: 'address',
      type: 'post',
      data: addressList,
      sCallback: function () {
       
     
      },
      eCallback: function () {
      }
    };
    this.request(allParams);
  };

 


  /*本地缓存 保存／更新*/
  execSetStorageSync(data) {
    wx.setStorageSync(this._storageKeyName, data);
  };

 
}

export {Address};