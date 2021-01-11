<template>
    <div id="baseData">
      <div id="baseData-origin"></div>
    </div>
</template>

<script>
    export default {
        name: "baseData",
        msg: "基础数据",
        data() {
            return {
              originData:{
                all: [
                  {
                  name: 'APP',
                  value: 70
                }, {
                  name: 'PC ',
                  value: 28
                }, {
                  name: 'M站',
                  value: 38
                }],
                try:[
                  {
                  name: 'APP',
                  value: 40
                }, {
                  name: 'PC ',
                  value: 58
                }, {
                  name: 'M站',
                  value: 68
                }],
                formal:[
                  {
                  name: 'APP',
                  value: 50
                }, {
                  name: 'PC ',
                  value: 28
                }, {
                  name: 'M站',
                  value: 68
                }],
                other:[
                  {
                  name: 'APP',
                  value: 80
                }, {
                  name: 'PC ',
                  value: 90
                }, {
                  name: 'M站',
                  value: 40
                }]
              }
            }
        },
        mounted() {
          this.echartsInit()
        },
        methods: {
          echartsInit(){
            let _this=this
// 基于准备好的dom，初始化echarts实例
              let myChart = this.echarts.init(document.getElementById('baseData-origin'));

    let option = {
      title: [
        {
        text: '用户来源占比统计',
        textStyle:{
          fontSize:22
          }
      }, {
        subtext: '全部用户',
        left: '12.5%',
        top: '17%',
        textAlign: 'center',
        subtextStyle:{
            fontSize:16
          }
      }, {
        subtext: '试学用户',
        left: '37.5%',
        top: '17%',
        textAlign: 'center',
          subtextStyle:{
            fontSize:16
          }
      }, {
        subtext: '正式用户',
        left: '62.5%',
        top: '17%',
        textAlign: 'center',
          subtextStyle:{
            fontSize:16
          }
      },{
        subtext: '其他',
        left: '87.5%',
        top: '17%',
        textAlign: 'center',
          subtextStyle:{
            fontSize:16
          }
      }],
/*      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: data.legendData,

        selected: data.selected
      },*/
      tooltip: {
        trigger: 'item',
        formatter: '{b} :<br/> {c} ({d}%)'
      },
      label: {
        formatter: function (val) {   //让series 中的文字进行换行
          let str=val.name+"\n"+val.value+"人 "+val.percent+"%"
          return str;
        },
        position: 'outer',
        fontSize:14,
        lineHeight:18
      },
      series: [{
        type: 'pie',
        radius: '50%',
        center: ['50%', '50%'],
        data: _this.originData.all,
        animation: false,
        left: 0,
        right: '75%',
        top: '5%',
        bottom: 0
      }, {
        type: 'pie',
        radius: '50%',
        center: ['50%', '50%'],
        data: _this.originData.try,
        animation: false,
        left: '25%',
        right: '50%',
        top: '5%',
        bottom: 0
      }, {
        type: 'pie',
        radius: '50%',
        center: ['50%', '50%'],
        data:  _this.originData.formal,
        animation: false,
        left: '50%',
        right: '25%',
        top: '5%',
        bottom: 0
      },
        {
          type: 'pie',
          radius: '50%',
          center: ['50%', '50%'],
          data: _this.originData.other,
          animation: false,
          left: '75%',
          right: 0,
          top: '5%',
          bottom: 0
        }, ]
    };
            myChart.setOption(option);
        }
        }
    }
</script>

<style lang="less">
    #baseData {
      #baseData-origin{
        width:100%;
        height:350px;
      }
    }
</style>
