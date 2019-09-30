<template>
  <div id="topTagList">
    <div class="left-tabs">
      <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
        <el-tab-pane
          v-for="(item, index) in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
        >
          <!-- {{item.content}}-->
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="right-btns">
      <div class="drop-box">
        <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <el-button type="text"><i class="el-icon-refresh-right"></i>刷新</el-button>
    </div>
     <el-button size="small" @click="addTab(editableTabsValue)">
      add tab
    </el-button>
  </div>
</template>

<script>
  export default {
    name: "topTagList",
    msg: "右侧内容区域-顶部标签列表",
    data() {
      return {
        editableTabsValue: '2',
        tabIndex: 2,
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
      }
    },
    mounted() {

    },
    methods: {
      /*新增标签*/
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: `New Tab ${this.tabIndex}`,
          name: newTabName,
          content: `New Tab content ${this.tabIndex}`
        });
        this.editableTabsValue = newTabName;
      },
      /*删除标签*/
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
</script>

<style lang="less">
  #topTagList {
    @rightBtnWidth: 150px;
    @h:40px;
    @lineC:#ccc;
    position:relative;
    height:@h;
    border-bottom: 2px solid #e7eaec;
    border-top: 2px solid #e7eaec;

    .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
      border-bottom-color: #e7eaec;
      color: #3a8ee6;
      background: #ccc;
    }

    .left-tabs {
      margin-right: @rightBtnWidth;
      .el-tabs__header.is-top{
        border-right:1px solid @lineC;
      }
    }

    .right-btns {
      position:absolute;
      top:0;
      right:0;
      width: @rightBtnWidth;
      .drop-box{
        float:left;
        width:80px;
        height:@h;
        margin-left:5px;
        border-right:1px solid @lineC;
        .el-dropdown{
          margin-top:10px;
          cursor: pointer;
        }
      }
      button.el-button.el-button--text{
        width: 60px;
        color: #606266;
        font-size: 14px;
      }
    }
  }
</style>
