// history 对象
// 保存着用户上网的历史纪录

// 跳转到最近的 wrox.com 页面
history.go("wrox.com");

// 跳转到最近的 nczonline.net 页面
history.go("nczonline.net");

// 后退一页
history.back();

// 前进一页
history.forward();

if (history.length == 0) {
  // 这应该是用户打开窗口后的第一个页面
}