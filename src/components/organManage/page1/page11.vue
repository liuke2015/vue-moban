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
          title: ['12-01', '12-02', '12-03', '12-04', '12-05', '12-06', '12-07', '12-08', '12-09', '12-10', '12-11', '12-12', '12-13', '12-14', '12-15', '12-16', '12-17', '12-18', '12-19', '12-20', '12-21', '12-22', '12-23', '12-24', '12-25', '12-26', '12-27', '12-28', '12-29', '12-30'],
          app:[{num:300,level:30}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20},{num:300,level:30}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20},{num:300,level:30}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20},{num:300,level:30}, {num:490,level:20}, {num:490,level:20}],
          pc: [{num:300,level:30}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20},{num:300,level:30}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20},{num:300,level:30}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20},{num:300,level:30}, {num:490,level:20}, {num:490,level:20}],
          mz: [{num:300,level:30}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20},{num:300,level:30}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20},{num:300,level:30}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20},{num:300,level:30}, {num:490,level:20}, {num:490,level:20}],
          totalPerson: [{num:300,level:30}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20},{num:300,level:30}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20},{num:300,level:30}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20}, {num:490,level:20},{num:300,level:30}, {num:490,level:20}, {num:490,level:20}],
          total: [145, 188, 1100, 110, 70, 80, 90, 100, 100,145, 188, 1100, 110, 70, 80, 90, 100, 100,145, 188, 1100, 110, 70, 80, 90, 100, 100,145, 188, 1100],
          try:[800,901,552,703,604,305,206,507,408,800,901,552,703,604,305,206,507,408,800,901,552,703,604,305,206,507,408,800,901,552],
          normal:[110,161,180,313,214,505,606,450,608,110,161,180,313,214,505,606,450,608,110,161,180,313,214,505,606,450,608,110,161,180],
          other:[900,801,702,1003,804,505,306,407,808,900,801,702,1003,804,505,306,407,808,900,801,702,1003,804,505,306,407,808,900,801,702]
        };

        for (var pr in data) {
          data[pr] = data[pr].slice(0, 30);
        }

        function getTableLine(num) {
          var list = [];
          var bottom = 208;
          var height = 40;
          for (var i = 0; i < num; i++) {
            list.push({
              type: 'line',
              bottom: bottom - i * height,
              right: 0,
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
            bottom: 65,
            left: 8,
            textStyle: {
              lineHeight: 40,
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
            data: [ '总活跃人数','试学用户', '正式用户', '其他']
          },
          grid: {
            bottom: 235,
            left: 80,
            right: 220
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
          /*  zoomLock:true,*/
            start: 0,
            end: 50
            // zoomLock: true
          },
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: data.title,
            axisTick: {
              length: 186
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
                  '}\n{table|' + data.app[indexNum].num+'\n 占比 '+data.app[indexNum].level +
                  '%}\n{table|' + data.pc[indexNum].num+'\n 占比 '+data.pc[indexNum].level +
                  '%}\n{table|' + data.mz[indexNum].num+'\n 占比 '+data.mz[indexNum].level +
                  '%}\n{table|' + data.totalPerson[indexNum].num+'\n 占比 '+data.totalPerson[indexNum].level + '%}{table|}';
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
          }],
          series: [{
            name: '试学用户',
            type: 'line',
            areaStyle: {
              /*color:"#91c7ae"*/
            },
           /* label: {
              show: true,
              position: 'top'
            },*/
            data: data.try
          }, {
            name: '正式用户',
            type: 'line',
            areaStyle: {
             /* color:"#d48265"*/
            },
          /*  label: {
              show: true,
              position: 'top'
            },*/

            data: data.normal
          }, {
            name: '其他',
            type: 'line',
            areaStyle: {
             /* color:"#63a1a9"*/
            },
           /* label: {
              show: true,
              position: 'top',
              formatter: '{c}'
            },*/

            data: data.other
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
      height:700px;
    }
  }
</style>
