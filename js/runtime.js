var now = new Date()

function createtime() {
  var grt = new Date('04/01/2021 00:00:00') //此处修改你的建站时间或者网站上线时间
  now.setTime(now.getTime() + 250)
  var days = (now - grt) / 1000 / 60 / 60 / 24
  var dnum = Math.floor(days)
  var hours = (now - grt) / 1000 / 60 / 60 - 24 * dnum
  var hnum = Math.floor(hours)
  if (String(hnum).length == 1) {
    hnum = '0' + hnum
  }
  var minutes = (now - grt) / 1000 / 60 - 24 * 60 * dnum - 60 * hnum
  var mnum = Math.floor(minutes)
  if (String(mnum).length == 1) {
    mnum = '0' + mnum
  }
  var seconds = (now - grt) / 1000 - 24 * 60 * 60 * dnum - 60 * 60 * hnum - 60 * mnum
  var snum = Math.round(seconds)
  if (String(snum).length == 1) {
    snum = '0' + snum
  }
  let currentTimeHtml = ''

  if (hnum < 18 && hnum >= 9) {
    currentTimeHtml = `<img class='boardsign' src='https://space.anzhiy.cn/i/2022/07/13/f6ogwe.svg' title='距离月入25k也就还差一个大佬带我~'><span class='textTip'> <br> 本站居然运行了 ${dnum} 天</span><span id='runtime'> ${hnum} 小时 ${mnum} 分 ${snum} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>`
  } else {
    currentTimeHtml = `<img class='boardsign' src='https://space.anzhiy.cn/i/2022/07/13/f6okbj.svg' title='下班了就该开开心心的玩耍，嘿嘿~'><span class='textTip'> <br> 本站居然运行了 ${dnum} 天</span><span id='runtime'> ${hnum} 小时 ${mnum} 分 ${snum} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>`
  }
  if (document.getElementById('workboard')) {
    document.getElementById('workboard').innerHTML = currentTimeHtml
  }
}

setInterval(() => {
  createtime()
}, 250)
