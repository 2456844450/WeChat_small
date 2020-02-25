/**
 * Created by jimmy on 17/3/24.
 */
import {
  Base
} from '../../utils/base.js'

class My extends Base {
  constructor() {
    super();
  }
  //得到用户信息
  getUserInfo(cb) {
    var that = this;
    wx.login({
      success: function() {
        wx.getUserInfo({
          success: function(res) {
            typeof cb == "function" && cb(res.userInfo);

          }
        });
      },

    })
  }


}



export {
  My
}