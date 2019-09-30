const menu={
    state:{
      menuList:[
        {
          name: "页面一",
          icon: "el-icon-edit",
          router:"0",
          dataList: [
            {name: "页面一",router: "/organManage/page1",id:"01"},
            {
              name: "页面二",
              router:"1",
              dataList: [
                {name: "页面二-1", router: "/organManage/page2",id:"02"},
                {name: "页面二-2",router: "/organManage/page23",id:"03"},
              ]
            },
            {
              name: "页面四",
              router:"2",
              dataList: [
                {name: "页面四-1", router: "/organManage/page41",id:"04"},
                {name: "页面四-2",router: "/organManage/page42",id:"05"},
              ]
            },
          ]
        },
        {name: "页面三", router: "/page3", icon: "el-icon-share",id:"1"},
      ]
    }
}
export default menu
