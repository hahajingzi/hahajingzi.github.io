let now1 = new Date()
var HoldLog = console.log //保存
console.log = function () {} //置空
queueMicrotask(() => {
  console.log = function () {} //置空
  const Log = function () {
    HoldLog.apply(console, arguments)
  } //在恢复前输出日志
  const grt = new Date('04/01/2021 00:00:00') //此处修改你的建站时间或者网站上线时间
  now1.setTime(now1.getTime() + 250)
  const days = (now1 - grt) / 1000 / 60 / 60 / 24
  const dnum = Math.floor(days)
  const ascll = [
    `欢迎来到安知鱼\`Blog!`,
    `生活明朗, 万物可爱`,
    `
        
           █████╗ ███╗   ██╗███████╗██╗  ██╗██╗██╗   ██╗██╗   ██╗
          ██╔══██╗████╗  ██║╚══███╔╝██║  ██║██║╚██╗ ██╔╝██║   ██║
          ███████║██╔██╗ ██║  ███╔╝ ███████║██║ ╚████╔╝ ██║   ██║
          ██╔══██║██║╚██╗██║ ███╔╝  ██╔══██║██║  ╚██╔╝  ██║   ██║
          ██║  ██║██║ ╚████║███████╗██║  ██║██║   ██║   ╚██████╔╝
          ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝   ╚═╝    ╚═════╝
        
        `,
    '安知鱼`Blog 已上线',
    dnum,
    '天',
    '©2020 By 安知鱼',
  ]
  const ascll2 = [`NCC2-036`, `调用前置摄像头拍照成功，识别为【小笨蛋】.`, `Photo captured: `, `  `]

  setTimeout(
    Log.bind(
      console,
      `\n%c${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}\n\n%c ${ascll[6]}\n`,
      'color:#49b1f5',
      '',
      'color:#49b1f5',
      'color:#49b1f5',
      '',
      'color:#49b1f5',
      ''
    )
  )
  setTimeout(
    Log.bind(
      console,
      `%c ${ascll2[0]} %c ${ascll2[1]} %c \n${ascll2[2]} %c\n${ascll2[3]}\n`,
      'color:white; background-color:#4fd953',
      '',
      '',
      'background:url("https://npm.elemecdn.com/anzhiyu-blog@latest/img/post/common/tinggge.gif") no-repeat;font-size:450%'
    )
  )

  setTimeout(
    Log.bind(console, '%c WELCOME %c 你好，小笨蛋.', 'color:white; background-color:#4f90d9', '')
  )

  setTimeout(
    console.warn.bind(
      console,
      '%c ⚡ Powered by 安知鱼 %c 你正在访问 安知鱼 的博客.',
      'color:white; background-color:#f0ad4e',
      ''
    )
  )

  setTimeout(
    Log.bind(console, '%c W23-12 %c 你已打开控制台.', 'color:white; background-color:#4f90d9', '')
  )

  setTimeout(
    console.warn.bind(
      console,
      '%c S013-782 %c 你现在正处于监控中.',
      'color:white; background-color:#d9534f',
      ''
    )
  )
})
// console.log = HoldLog //恢复

// setTimeout(
//   console.warn.bind(
//     console, '%c S013-783 %c 你还不走啊.我上你家揍你', 'color:white; background-color:#d9534f', ''), 5000);

// setTimeout(
//   console.warn.bind(
//     console, '%c S013-784 %c 你别不信啊', 'color:white; background-color:#d9534f', ''), 8000);

// setTimeout(
//   console.warn.bind(
//     console, '%c S013-785 %c 这是你家地址', 'color:white; background-color:#d9534f', ''), 10000);
// setTimeout(
//   console.warn.bind(
//     console, '%c S013-787 %c 这是你的ip', 'color:white; background-color:#d9534f', ''), 12000);

// setTimeout(
//   console.log.bind(
//     console, '%c S013-787 %c 你还不走啊', 'color:white; background-color:#4fd953', ''), 18000);

// setTimeout(
//   console.log.bind(
//     console, '%c S013-787 %c 但是我得走了，所以呀...', 'color:white; background-color:#4fd953', ''), 19000);
// setTimeout(
//   console.log.bind(
//     console, '%c S013-787 %c 生活明朗，万物可爱', 'color:white; background-color:#4fd953', ''), 20000);
// setTimeout(
//   console.log.bind(
//     console, '%c S013-787 %c 今天也要开开心心的喔~', 'color:white; background-color:#4fd953', ''), 21000);

// setTimeout(
//   console.clear, 29000);
// setTimeout(
//   createtime1, 30000);

// getIpInfo();

// // 获取ip
// function getIpInfo() {
//   var path = 'https://myip.ipip.net/';
//   if (path !== undefined) {
//     var httpRequest = new XMLHttpRequest(); //第一步：建立所需的对象
//     httpRequest.open('GET', path + '?imageAve', true); //第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
//     httpRequest.send(); //第三步：发送请求  将请求参数写在URL中
//     /**
//      * 获取数据后的处理程序
//      */
//     httpRequest.onreadystatechange = function () {
//       if (httpRequest.readyState == 4 && httpRequest.status == 200) {
//         var info = httpRequest.responseText; //获取到json字符串，还需解析
//         var ipresult = info.split("  ");

//         const ip = ipresult[0].split("：")[1];
//         const c2 = ipresult[1].split("：")[1].split(" ");
//         // console.log("你的ip是：", ip);
//         // console.log("你所在的城市是：", c2[0], c2[1], c2[2]);
//         // console.log("你的运营商是：", ipresult[2]);
//         // console.log("你所使用的设备信息",navigator.userAgent);

//         setTimeout(
//           console.warn.bind(
//             console, `%c S013-786 %c ${c2[0]}, %c${c2[1]},%c ${c2[2]}`, 'color:white; background-color:#d9534f', '', '', ''), 11000);

//         setTimeout(
//           console.warn.bind(
//             console, `%c S013-786 %c ${ip}`, 'color:white; background-color:#d9534f', ''), 12500);

//         setTimeout(
//           console.clear, 13000);
//         setTimeout(
//           createtime2, 15000
//         );

//       }
//     };
//   } else {
//     console.log('算你牛,获取信息失败');
//   }
// }
