// Location

// hash   "#contents"
// host   "www.wrox.com:80"
// hostname "www.wrox.com"
// href "http://www.wrox.com"
// pathname "/WileyCDA"
// port "80"
// protocol "http" or "https"
// search "? q=javascript"

// 位置操作

// location.assign("http://www.wrox.com");
// location.href = "http://www.wrox.com";

// replace() 方法，不会在历史纪录中生成新纪录

// 重新加载

// location.reload();  // 重新加载(有可能从缓存中加载)
// location.reload(true); // 重新加载 (从服务器重新加载)

setTimeout(function() {
  location.replace("http://www.baidu.com");
}, 2000);