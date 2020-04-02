export const menuConfig =[
  {
    title:'首页',
    url:'/'
  },{
    title:'学院概况',
    url:'/xygk'
  },{
    title:'师资力量',
    url:'/szll'
  },{
    title:'教育教学',
    url:'/jyjx'
  }
]
export const aMenuConfig = [
  {
    title: "教务处",
    href: "http://61.181.145.1:89/jsxsd/",
    imgsrc: "https://pic.images.ac.cn/image/5e778a31a430f"
  }, {
    title: "图书馆",
    href: "#",
    imgsrc: "https://pic.images.ac.cn/image/5e778adb59bf9"
  }
]
export const rMenuConfig = [
  {
    title: "校园OA",
    url: "/login",
    imgsrc: "https://pic.images.ac.cn/image/5e778d769e5cf"
  }, {
    title: "联系我们",
    url: "/lianxiwomen",
    imgsrc: "https://pic.images.ac.cn/image/5e778db30ebb1"
  }
]
export const loginSuccess = [
  {
    name: "上传学院新闻",
    routerto: "/addnews",
    index: "1-1"
  }, {
    name: "上传通知文件",
    routerto: "/addregulations",
    index: "1-2"
  }, {
    name: "上传学院文化",
    routerto: "/addschoolculture",
    index: "1-3"
  }, {
    name: "上传教师信息",
    routerto: "/addteachers",
    index: "1-4"
  }
]
export const newsTableData = [
  {
    prop: "newstitle",
    label: "新闻标题",
    width: "160"
  }, {
    prop: "newsimgsrc",
    label: "图片地址",
    width: "300"
  }, {
    prop: "newsurl",
    label: "新闻链接",
    width: "280"
  }
]
export const regulationsTableData = [
  {
    prop: "regulationsname",
    label: "文件名",
    width: "200"
  }, {
    prop: "regulationsUrl",
    label: "文件储存地址",
    width: "430"
  }
]
export const culturesTableData = [
  {
    prop: "schoolcultureimgsrc",
    label: "学院文化图片地址",
    width: "430"
  }, {
    prop: "schoolculturedesc",
    label: "学院文化描述",
    width: "200"
  }
]