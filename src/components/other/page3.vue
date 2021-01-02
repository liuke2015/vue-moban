<template>
  <div id="page3">
    <el-table
      v-loading="loading"
      :data="tableData"
      style="width: 100%"
      :cell-class-name="tableCellClassName"
      ref="table"
    >
      <el-table-column
        label="时间"
        prop="date"
        show-overflow-tooltip
        min-width="120"
      ></el-table-column>
      <el-table-column
        label="新增用户数"
        prop="num"
        min-width="130"
      ></el-table-column>
      <el-table-column label="1天后" prop="one"></el-table-column>
      <el-table-column label="2天后" prop="two"></el-table-column>
      <el-table-column label="3天后" prop="three"></el-table-column>
      <el-table-column label="4天后" prop="four"></el-table-column>
      <el-table-column label="5天后" prop="five"></el-table-column>
      <el-table-column label="6天后" prop="six"></el-table-column>
      <el-table-column label="7天后" prop="seven"></el-table-column>
      <el-table-column label="14天后" prop="fourteen"></el-table-column>
      <el-table-column label="30天后" prop="thirty"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "留存分析",
    msg: "页面三",
    data() {
      return {
        loading:false,
        tableData:[
          {date:"20201223",num:1596,one:"",two:"",three:"",four:"",five:"",six:"",seven:"",fourteen:"",thirty:""},
          {date:"20201222",num:1596,one:"11.2",two:"",three:"",four:"",five:"",six:"",seven:"",fourteen:"",thirty:""},
          {date:"20201221",num:1596,one:"9.47",two:"6.22",three:"",four:"",five:"",six:"",seven:"",fourteen:"",thirty:""},
          {date:"20201220",num:1596,one:"10.8",two:"7.16",three:"6.22",four:"",five:"",six:"",seven:"",fourteen:"",thirty:""},
          {date:"20201219",num:1596,one:"11.29",two:"7.36",three:"6.94",four:"4.81",five:"",six:"",seven:"",fourteen:"",thirty:""},
          {date:"20201218",num:1596,one:"19.69",two:"9.35",three:"8.98",four:"11.25",five:"8.35",six:"",seven:"",fourteen:"",thirty:""},
          {date:"20201217",num:1596,one:"56",two:"32",three:"20",four:"22",five:"36",six:"30",seven:"",fourteen:"",thirty:""},
          {date:"20201216",num:1596,one:"18.75",two:"43.75",three:"31.25",four:"25",five:"25",six:"37.5",seven:"31.25",fourteen:"",thirty:""},
          {date:"20201215",num:1596,one:"12.5",two:"18.75",three:"25",four:"12.5",five:"12.5",six:"18.75",seven:"24",fourteen:"",thirty:""},
          {date:"20201214",num:1596,one:"4.55",two:"4.55",three:"0",four:"0",five:"0",six:"0",seven:"4.55",fourteen:"",thirty:""}
        ],
        keyValue:{
           "2v":'one',
           "3v":'two',
           "4v":'three',
           "5v":'four',
           "6v":'five',
           "7v":'six',
           "8v":'seven',
           "9v":'fourteen',
        }
      }
    },
    methods: {
      tableRowClassName({row, rowIndex}){
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      tableCellClassName({row, column, rowIndex, columnIndex}){


        if( columnIndex > 1){
          let key =columnIndex+'v'
          let value = row[this.keyValue[key]]
          if(!value){
           return ''
          }
          let num = parseFloat(value)
          if(num<=10) return 'color-one'
          if(num>10 && num <=20) return 'color-two'
          if(num>20 && num <=30) return 'color-three'
          if(num>30 && num <=40) return 'color-four'
          if(num>40) return 'color-five'
         /* console.log(this.keyValue[key])
          console.log(value)*/
        }else{
          return ''
        }
      }
    }
  }
</script>

<style lang="less">
  #page3{
    min-height:500px;
    .el-table .color-one{
      background: #e2f3e2;
    }
    .el-table .color-two{
      background: #c8ebc8;
    }
    .el-table .color-three{
      background: #aee2ae;
    }
    .el-table .color-four{
      background: #94da94;
    }
    .el-table .color-five{
      background: #7ad17a;
    }
  }
</style>
