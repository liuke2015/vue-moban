const menu={
    state:{
      menuList:[
        {
          title: "页面一",
          icon: "el-icon-edit",
          isShow: true,
          dataList: [
            {
              name: "页面一",
              router: "/organManage/page1",
              isSub: false,
              isShow: true
            },
            {
              subTit: "页面二", isSub: true,
              isShow:true,
              children: [
                {name: "页面二-1", router: "/organManage/page2", isShow: true},
                {
                  name: "页面二-2",
                  router: "/organManage/page23",
                  isShow: true
                },
              ]
            },
          ]
        },
        {
          title: "页面三", router: "/page3", icon: "el-icon-share", isShow: true
        },
      ]
    }
}
export default menu
