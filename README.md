# hotelAdmin
这是一款使用了Vue框架写的酒店前台管理系统。
## 技术栈
### 前端:Vue+Axios+ElementUi
### 后端:Node框架express

### 流程
进入项目时，会先向后端发起请求，查询是否登录中，如果不是登录中，路由拦截，跳到登录页面。登录时，填写账号、密码，密码会先经过一次加密，然后发送到后端时会再次加密。忘记密码时，需要接收验证码，验证码正确了，才可修改密码。登录成功进入项目首页。

### 功能
- 登录、注销
- 记住密码
- 忘记密码(需要接收邮政验证码，可能会被记为垃圾邮件)
- 系统锁定
- 开房、退房、换房
- 新增房间信息、修改房间信息、删除房间信息
- 历史记录查询
- 收入统计汇总

<img src="https://github.com/aqingxin/blobImg/blob/master/TIM%E6%88%AA%E5%9B%BE20190124093707.png">
<img src="https://github.com/aqingxin/blobImg/blob/master/TIM%E6%88%AA%E5%9B%BE20190124093727.png">
<img src="https://github.com/aqingxin/blobImg/blob/master/TIM%E6%88%AA%E5%9B%BE20190124093754.png">
<img src="https://github.com/aqingxin/blobImg/blob/master/TIM%E6%88%AA%E5%9B%BE20190124093807.png">
<img src="https://github.com/aqingxin/blobImg/blob/master/TIM%E6%88%AA%E5%9B%BE20190124093835.png">
<img src="https://github.com/aqingxin/blobImg/blob/master/TIM%E6%88%AA%E5%9B%BE20190124093850.png">
<img src="https://github.com/aqingxin/blobImg/blob/master/TIM%E6%88%AA%E5%9B%BE20190124093900.png">
