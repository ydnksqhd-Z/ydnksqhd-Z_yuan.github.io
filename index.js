//右下板块
(function() {
  // 实例化对象
  var myChart7 = echarts.init(document.querySelector(".bar .chart"));

    option = {
      grid: {
        left: "0%",
        top: "55%",
        right: "5%",
        bottom: "0%",
        containLabel: true
      },
      legend: {},
      tooltip: {
        trigger: 'axis',
        showContent: false
      },
      dataset: {
        source: [
          ['product', '总数','越冬地', '繁殖地', '迁徙停歇地'],
          ['东线',249,63,129,224],
          ['中线',228,74,82,177],
          ['西线',248,57,162,109],
        ]
      },
      xAxis: { type: 'category' },
      yAxis: { gridIndex: 0 },
      series: [
        {
          type: 'bar',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'bar',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'bar',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'pie',
          id: 'pie',
          radius: ["10%", "30%"],
          center: ["50%", "30%"],
          roseType: "radius",
          emphasis: {
            focus: 'self'
          },
          label: {
            formatter: '{b}: {@2012} ({d}%)'
          },
        }
      ]
    };
    myChart7.on('updateAxisPointer', function (event) {
      const xAxisInfo = event.axesInfo[0];
      if (xAxisInfo) {
        const dimension = xAxisInfo.value + 1;
        myChart7.setOption({
          series: {
            id: 'pie',
            label: {
              formatter: '{b}: {@[' + dimension + ']} ({d}%)'
            },
            encode: {
              value: dimension,
              tooltip: dimension
            }
          }
        });
      }
    });


    
    var dataAll = [
      { year: "2019", data: [
        ['product', '总数','越冬地', '繁殖地', '迁徙停歇地'],
        ['东线',249,63,129,224],
        ['中线',228,74,82,177],
        ['西线',248,57,162,109],
      ] },
      { year: "2020", data: [
        ['product', '总数','越冬地', '繁殖地', '迁徙停歇地'],
        ['东线',0,0,0,0],
        ['中线',228,74,82,177],
        ['西线',248,57,162,109],
      ] }
    ];

    myChart7.setOption(option);
      
    window.addEventListener("resize", function() {
      // 让我们的图表调用 resize这个方法
      myChart7.resize();
    });
})();
//左下
(function() {
  // 实例化对象
  var myChart7 = echarts.init(document.querySelector(".ball .chart"));


  var data = [
    [
    [1980, 300000,'黄胸鹀' ],  
  [2004, 180000,'黄胸鹀'],  
  [2010, 2724,'黄胸鹀'],  
  [ 2015, 1500,'黄胸鹀']
    ],
  
    [
  [1996, 30000,'遗鸥'],  
  [2012, 22500,'遗鸥']
    ],
  
  
    [
    [2015, 64000,'白琵鹭' ]
    ],
    [
    [ 2000, 147212,'白鹈鹕'],  
  [2005, 182396,'白鹈鹕'],  
  [2010, 225989,'白鹈鹕'],  
  [2015, 280000,'白鹈鹕']
    ],
  
  
    [
    [ 1988, 174863,'大杓鹬'],  
  [ 2000, 78332,'大杓鹬'],  
  [2005, 58122,'大杓鹬'],  
  [ 2010, 43127,'大杓鹬'],  
  [2015, 32000,'大杓鹬']
    ],
    [
      [1988, 288,'黑脸琵鹭'],  
    [2003, 1069,'黑脸琵鹭'],  
    [2008, 2065,'黑脸琵鹭'],  
    [2015, 3272,'黑脸琵鹭'],  
    [2017, 3941,'黑脸琵鹭']
      ],
      [
      [1988, 5382,'丹顶鹤'],  
    [ 2000, 5163,'丹顶鹤'],  
    [ 2008, 4128,'丹顶鹤'],  
    [ 2015, 3887,'丹顶鹤'],  
    [ 2020, 3822,'丹顶鹤']
      ],
 [
        [2002,9865,'勺嘴鹬'],
        [2008,1938,'勺嘴鹬'],
        [2015,620,'勺嘴鹬'],
        [2020,340,'勺嘴鹬']
 ],
      
  ];
  option = {
      grid: {
        left: "0%",
        top: "20%",
        right: "10%",
        bottom: "4%",
        containLabel: true
      },
      tooltip: {
          trigger: 'item',
          formatter: function (params) {
              return params.data[2] + '<br>年份: ' + params.data[0] + '<br>数量: ' + params.data[1];
          }
      },
      legend: {
             type: 'scroll',
      top: 20,
      bottom: 20,
          data: ['黄胸鹀', '黑脸琵鹭', '遗鸥', '白琵鹭', '白鹈鹕', '大杓鹬','勺嘴鹬', '黑脸琵鹭', '丹顶鹤']
      },
      xAxis: {
          type: 'value',
          name: '年份',
          min:1980,
          max:2020,
          maxInterval:5,
          splitLine: { //网格线
            show: false
            }
      },
      yAxis: {
          type: 'value',
          name: '数量',
          splitLine: { //网格线
            show: false
            }
      },
      
      series: [
          {
              type: 'scatter',
              name: '黄胸鹀',
              symbolSize: function (data) {
                  return Math.sqrt(data[1]) / 10;
              },
              data: data[0],
              emphasis: {
          focus: 'series',
          label: {
            show: true,
            formatter: function (param) {
              return param.data[2];
            },
            position: 'top'
          }
        },
              
              itemStyle: {
                  shadowBlur: 10,
          shadowColor: 'rgba(25, 100, 150, 0.5)',
          shadowOffsetY: 5,
          color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
              offset: 0,
              color: 'rgb(251, 208, 23)'
            },
            {
              offset: 1,
              color: 'rgb(184, 6, 72)'
            }
          ])
              }
          },
          {
              type: 'scatter',
              name: '遗鸥',
              symbolSize: function (data) {
                  return Math.sqrt(data[1]) / 10;
              },
              data: data[1],
              emphasis: {
          focus: 'series',
          label: {
            show: true,
            formatter: function (param) {
              return param.data[2];
            },
            position: 'top'
          }
        },
              itemStyle: {
                  shadowBlur: 10,
          shadowColor: 'rgba(25, 100, 150, 0.5)',
          shadowOffsetY: 5,
          color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
              offset: 0,
              color: 'rgb(80, 227, 30)'
            },
            {
              offset: 1,
              color: 'rgb(0, 183, 123)'
            }
          ])
              }
          },
          {
              type: 'scatter',
              name: '白琵鹭',
              symbolSize: function (data) {
                  return Math.sqrt(data[1]) / 10;
              },
              data: data[2],
              emphasis: {
          focus: 'series',
          label: {
            show: true,
            formatter: function (param) {
              return param.data[2];
            },
            position: 'top'
          }
        },
              itemStyle: {
                  shadowBlur: 10,
          shadowColor: 'rgba(25, 100, 150, 0.5)',
          shadowOffsetY: 5,
          color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
              offset: 0,
              color: 'rgb(129, 60, 238)'
            },
            {
              offset: 1,
              color: 'rgb(25, 0, 207)'
            }
          ])
              }
          },
          {
              type: 'scatter',
              name: '白鹈鹕',
              symbolSize: function (data) {
                  return Math.sqrt(data[1]) / 10;
              },
              data: data[3],
              emphasis: {
          focus: 'series',
          label: {
            show: true,
            formatter: function (param) {
              return param.data[2];
            },
            position: 'top'
          }
        },
              itemStyle: {
                  shadowBlur: 10,
          shadowColor: 'rgba(25, 100, 150, 0.5)',
          shadowOffsetY: 5,
          color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
              offset: 0,
              color: 'rgb(145, 222, 38)'
            },
            {
              offset: 1,
              color: 'rgb(125, 83, 7)'
            }
          ])
              }
          },
          {
              type: 'scatter',
              name: '大杓鹬',
              symbolSize: function (data) {
                  return Math.sqrt(data[1]) / 10;
              },
              data: data[4],
              emphasis: {
          focus: 'series',
          label: {
            show: true,
            formatter: function (param) {
              return param.data[2];
            },
            position: 'top'
          }
        },
              itemStyle: {
                  shadowBlur: 10,
          shadowColor: 'rgba(25, 100, 150, 0.5)',
          shadowOffsetY: 5,
          color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
              offset: 0,
              color: 'rgb(19, 227, 238)'
            },
            {
              offset: 1,
              color: 'rgb(15, 83, 207)'
            }
          ])
              }
          },
            {
                type: 'scatter',
                name: '黑脸琵鹭',
                symbolSize: function (data) {
                    return Math.sqrt(data[1]) /8;
                },
                data: data[5],
                emphasis: {
            focus: 'series',
            label: {
              show: true,
              formatter: function (param) {
                return param.data[2];
              },
              position: 'top'
            }
          },
                
                itemStyle: {
                    shadowBlur: 10,
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
              {
                offset: 0,
                color: 'rgb(251, 118, 123)'
              },
              {
                offset: 1,
                color: 'rgb(204, 46, 72)'
              }
            ])
                }
            },
            {
              type: 'scatter',
              name: '丹顶鹤',
              symbolSize: function (data) {
                  return Math.sqrt(data[1])/8;
              },
              data: data[6],
               emphasis: {
          focus: 'series',
          label: {
            show: true,
            formatter: function (param) {
              return param.data[2];
            },
            position: 'top'
          }
        },
              itemStyle: {
                  shadowBlur: 10,
          shadowColor: 'rgba(120, 36, 50, 0.5)',
          shadowOffsetY: 5,
                  color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
              offset: 0,
              color: 'rgb(25, 118, 123)'
            },
            {
              offset: 1,
              color: 'rgb(20, 46, 72)'
            }
          ])
              }
          },
          {
            type: 'scatter',
            name: '勺嘴鹬',
            symbolSize: function (data) {
                return Math.sqrt(data[1])/8;
            },
            data: data[7],
             emphasis: {
        focus: 'series',
        label: {
          show: true,
          formatter: function (param) {
            return param.data[2];
          },
          position: 'top'
        }
      },
            itemStyle: {
                shadowBlur: 10,
        shadowColor: 'rgba(25, 100, 150, 0.5)',
        shadowOffsetY: 5,
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
          {
            offset: 0,
            color: 'rgb(255, 227, 0)'
          },
          {
            offset: 1,
            color: 'rgb(125, 183, 0)'
          }
        ])
            }
        },
      ]
      
  };
  
  // 3. 配置项和数据给我们的实例化对象
myChart7.setOption(option);
// 4. 当我们浏览器缩放的时候，图表也等比例缩放
window.addEventListener("resize", function() {
  // 让我们的图表调用 resize这个方法
  myChart7.resize();
});

})();

(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart5 = echarts.init(document.querySelector(".line .chart"));

  var data = 
  [
    [
      [2004,76],
      [2006,25],
      [2007,71],
      [2008,96],
      [2009,85],
      [2010,98],
      [2011,74],
      [2012,93],
      [2013,60],
      [2016,46],
      [2018,54],
      [2019,41],
      [2020,50],
      [2021,89],
      [2022,133],
      [2023,206],
      ],
   [
     [2004,10],
     [2005,13],
     [2006,5],
     [2009,10],
     [2010,67],
     [2014,17],
     [2015,70],
     [2016,59],
     [2018,68],
     [2020,101],
     [2021,64],
     [2022,46],
     [2023,89],
     ],
   [
     [2004,39],
     [2005,47],
     [2006,34],
     [2007,51],
     [2009,24],
     [2010,18],
     [2012,11],
     [2013,74],
     [2015,38],
     [2016,22],
     [2017,41],
     [2018,32],
     [2019,96],
     [2020,72],
     [2021,75],
     [2022,132],
     [2023,130],
     ]
 ];
 
  option = {
     tooltip: {
       trigger: "axis",
       axisPointer: {
         lineStyle: {
           color: "#dddc6b"
         }
       }
     },
     legend: {
       top: "0%",
       textStyle: {
         color: "rgba(255,255,255,.5)",
         fontSize: "12"
       }
     },
     grid: {
      left: "0%",
      top: "20%",
      right: "5%",
      bottom: "4%",
      containLabel: true
    },
     
     xAxis: [
       {
         type: "value",
         min:2004,
         max:2023,
         maxInterval:5,
         boundaryGap: true,
         axisLabel: {
           textStyle: {
             color: "rgba(255,255,255,.6)",
             fontSize: 12
           }
         },
         axisLine: {
           lineStyle: {
             color: "rgba(255,255,255,.2)"
           }
         },
       },
       {
         axisPointer: { show: false },
         axisLine: { show: false },
         position: "bottom",
         offset: 20
       }
     ],
 
     yAxis: [
       {
         type: "value",
         axisTick: { show: false },
         axisLine: {
           lineStyle: {
             color: "rgba(255,255,255,.1)"
           }
         },
         axisLabel: {
           textStyle: {
             color: "rgba(255,255,255,.6)",
             fontSize: 12
           }
         },
 
         splitLine: {
           lineStyle: {
             color: "rgba(255,255,255,.1)"
           }
         }
       }
     ],
     series: [
       {
         name: "鄱阳湖",
         type: "line",
         smooth: true,
         symbol: "circle",
         symbolSize: 5,
         showSymbol: false,
         lineStyle: {
           normal: {
             color: "#0184d5",
             width: 2
           }
         },
         data:data[0],
         areaStyle: {
           normal: {
             color: new echarts.graphic.LinearGradient(
               0,
               0,
               0,
               1,
               [
                 {
                   offset: 0,
                   color: "rgba(1, 132, 213, 0.4)"
                 },
                 {
                   offset: 0.8,
                   color: "rgba(1, 132, 213, 0.1)"
                 }
               ],
               false
             ),
             shadowColor: "rgba(0, 0, 0, 0.1)"
           }
         },
         itemStyle: {
           normal: {
             color: "#0184d5",
             borderColor: "rgba(221, 220, 107, .1)",
             borderWidth: 12
           }
         },
         
       },
       {
         name: "洞庭湖",
         type: "line",
         smooth: true,
         symbol: "circle",
         symbolSize: 5,
         showSymbol: false,
         lineStyle: {
           normal: {
             color: "#00d887",
             width: 2
           }
         },
         data:data[1],
         areaStyle: {
           normal: {
             color: new echarts.graphic.LinearGradient(
               0,
               0,
               0,
               1,
               [
                 {
                   offset: 0,
                   color: "rgba(0, 216, 135, 0.4)"
                 },
                 {
                   offset: 0.8,
                   color: "rgba(0, 216, 135, 0.1)"
                 }
               ],
               false
             ),
             shadowColor: "rgba(0, 0, 0, 0.1)"
           }
         },
         itemStyle: {
           normal: {
             color: "#00d887",
             borderColor: "rgba(221, 220, 107, .1)",
             borderWidth: 12
           }
         },
        
       },
       
       {
         name: "青海湖",
         type: "line",
         smooth: true,
         symbol: "circle",
         symbolSize: 5,
         showSymbol: false,
         lineStyle: {
           normal: {
             color: "#B22222",
             width: 2
           }
         },
         data:data[2],
         areaStyle: {
           normal: {
             color: new echarts.graphic.LinearGradient(
               0,
               0,
               0,
               1,
               [
                 {
                   offset: 0,
                   color: "rgba(216, 0, 135, 0.4)"
                 },
                 {
                   offset: 0.8,
                   color: "rgba(216, 0, 135, 0.1)"
                 }
               ],
               false
             ),
             shadowColor: "rgba(0, 0, 0, 0.1)"
           }
         },
         itemStyle: {
           normal: {
             color: "#B22222",
             borderColor: "rgba(221, 220, 107, 0.1)",
             borderWidth: 12
           }
         },
        
       }
     ]
   };

  // 使用刚指定的配置项和数据显示图表。
  myChart5.setOption(option);
  window.addEventListener("resize", function() {
    myChart5.resize();
  });
})();