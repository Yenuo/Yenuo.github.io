import React from 'react'
import Chart from 'rc-echarts';

export default React.createClass({

  render() {
    const options = {
      title : {
         text: '安装耗时分布',

         x:'left'
     },
     tooltip: {
         trigger: 'item',
         formatter: "{a} <br/>{b}: {c} ({d}%)"
     },
     legend: {
           y: 'center',
         orient:'',
         left: 'right',

           data: [{name:'运行异常',  icon: 'circle'},
         {name:'安装异常',  icon: 'circle'},
         {name:'卸载异常',  icon: 'circle'},
         {name:'功能异常',  icon: 'circle'},
         {name:'UI异常',  icon: 'circle'}]

     }
    };
    const series = {
      name:'访问来源',
           type:'pie',
           radius: ['50%', '70%'],
           avoidLabelOverlap: false,
           label: {
               normal: {
                   show: false,
                   position: 'center'
               },
               emphasis: {
                   show: true,
                   textStyle: {
                       fontSize: '30',
                       fontWeight: 'bold'
                   }
               }
           },
           labelLine: {
               normal: {
                   show: false
               }
           },
           data:[
               {value:335, name:'运行异常'},
               {value:310, name:'安装异常'},
               {value:234, name:'卸载异常'},
               {value:135, name:'功能异常'},
               {value:1548, name:'UI异常'}
           ]
    };
      const mystyle = {
          width:'500px',
          height:'400px'
      };
    return (
      <div style={mystyle}>
      <Chart  {...options}>
        <Chart.Pie {...series}/>

      </Chart>
    </div>
    );
  }
})
