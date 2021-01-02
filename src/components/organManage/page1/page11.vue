<template>
  <div id="page1">

    <div id="dom">

    </div>
  </div>
</template>

<script>

  export default {
    name: 'page1',
    msg: "页面一",
    data() {
      return {

      }
    },
    mounted() {
       this.echartsInit()
    },
    methods: {
      echartsInit(){
// 基于准备好的dom，初始化echarts实例
        let myChart = this.echarts.init(document.getElementById('dom'));
// 绘制图表
        var data = {
          title: ['12-01', '12-02', '12-03', '12-04', '12-05', '12-06', '12-07', '12-08', '12-09'],
          app: [300, 490, 333, 346, 777, 888, 864, 789, 765],
          pc: [400, 500, 300, 400, 500, 300, 400, 500, 500],
          mz: [80, 90, 60, 70, 80, 90, 60, 70, 90],
          total: [45, 88, 100, 110, 70, 80, 90, 100, 100]
        };

        for (var pr in data) {
          data[pr] = data[pr].slice(0, 9);
        }

        function getTableLine(num) {
          var list = [];
          var bottom = 122;
          var height = 20;
          for (var i = 0; i < num; i++) {
            list.push({
              type: 'line',
              bottom: bottom - i * height,
              right: 80,
              style: {
                fill: '#333'
              },
              shape: {
                x1: 0,
                y1: 0,
                x2: 3200,
                y2: 0
              }

            });
          }
          return list;
        }
        var lineList = getTableLine(5);


        let option = {
          title: [{
            text: ' \nAPP\nPC\nM站\n总活跃人数',
            bottom: 42,
            left: 10,
            textStyle: {
              lineHeight: 20,
              fontSize: 13,
              fontWeight: 'normal',
              formatter: function(value) {
                return '{table|' + value + '}';
              },
              rich: {
                table: {
                  align: 'center'
                }
              }
            }
          }],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#283b56'
              }
            }
          },
          legend: {
            data: ['APP', 'PC', 'M站', '总活跃人数']
          },
          grid: {
            bottom: 150,
            left: 80,
            right: 80
          },
          toolbox: {
            show: true,
            feature: {
              saveAsImage: {}
            }
          },
          dataZoom: {
            show: true,
            type:'slider',
            start: 0,
            end: 50
            // zoomLock: true
          },
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: data.title,
            axisTick: {
              length: 108
            },
            axisLabel: {
              align:'left',
              formatter: function(value, index) {
                var indexNum = 0;
                for(var i = 0; i < data.title.length; i++){
                  if(value == data.title[i]){
                    indexNum = i;
                  }
                }
                return '{table|' + value +
                  '}\n{table|' + data.app[indexNum] +
                  '}\n{table|' + data.pc[indexNum] +
                  '}\n{table|' + data.mz[indexNum] +
                  '%}\n{table|' + data.total[indexNum] + '%}';
              },
              rich: {
                table: {
                  lineHeight: 20,
                  align: 'center'
                }
              }
            }
          }],
          yAxis: [{
            type: 'value',
            scale: true,
            minInterval: 1,
            name: '数量',
            splitLine: {
              show: false
            },
            min: function(v) {
              return Math.max((v.min - 10), 0);
            }
          }, {
            type: 'value',
            scale: true,
            name: '百分比',
            splitLine: {
              show: false
            },
            axisLabel: {
              formatter: '{value} %'
            }
          }],
          series: [{
            name: 'APP',
            type: 'line',
            areaStyle: {
              /*color:"#91c7ae"*/
            },
           /* label: {
              show: true,
              position: 'top'
            },*/
            yAxisIndex: 0,
            data: data.app
          }, {
            name: 'PC',
            type: 'line',
            areaStyle: {
             /* color:"#d48265"*/
            },
          /*  label: {
              show: true,
              position: 'top'
            },*/
            yAxisIndex: 0,
            data: data.pc
          }, {
            name: 'M站',
            type: 'line',
            areaStyle: {
             /* color:"#63a1a9"*/
            },
           /* label: {
              show: true,
              position: 'top',
              formatter: '{c}'
            },*/
            yAxisIndex: 1,
            data: data.mz
          }, {
            name: '总活跃人数',
            type: 'line',
            areaStyle: {
             /* color:"#2f4554"*/
            },
            label: {
              show: true,
              position: 'top',
              formatter: '{c}'
            },
            yAxisIndex: 1,
            data: data.total
          }],
          graphic: lineList
        };
        myChart.setOption(option);
      }
    },
    components: {
    }
  }
</script>

<style lang="less">
  #page1{
    min-height:500px;
    #dom{
      width:100%;
      height:600px;
    }
  }
</style>
