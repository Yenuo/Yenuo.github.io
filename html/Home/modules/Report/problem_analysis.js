import React from 'react'
import Chart from 'rc-echarts';

export default React.createClass({

  render() {
    const options = {
      title : {
         text: '兼容性问题分布',
         subtext: '纯属虚构',
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
      name: '问题来源',
        type: 'pie',
        radius : '55%',
        center: ['50%', '50%'],
        color:['#ee5857', '#fb8665','#ffc64d', '#979bff', '#4cbce5'],
        labelLine: {
            normal: {
                show: false
            }
        },
        label:{
            normal:{
                show:false
             }
        },
        data:[
            {value:20, name:'运行异常'},
            {value:310, name:'安装异常'},
            {value:234, name:'卸载异常'},
            {value:135, name:'功能异常'},
            {value:1548, name:'UI异常'}
        ]
    };
    const mystyle = {
        width:'500px',
        height:'400px',
        float:'left'
    };
    console.log(this);
    return (
      <div>

        <Chart {...options} style={mystyle}>
          <Chart.Pie {...series}/>

        </Chart>
        <Chart {...options} style={{width:'300px',height:'200px',float:'right' }}>
          <Chart.Pie {...series}/>

        </Chart>
        <Chart {...options} style={{width:'300px',height:'200px',float:'right'}}>
          <Chart.Pie {...series}/>

        </Chart>
        <Chart {...options} style={{width:'300px',height:'200px',float:'right' }}>
          <Chart.Pie {...series}/>

        </Chart>
        <Chart {...options} style={{width:'300px',height:'200px',float:'right'}}>
          <Chart.Pie {...series}/>

        </Chart>
      </div>

    );
  }
})
