(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".map .chart"));
  // 2. 指定配置和数据
  // 2. 指定配置和数据
  var option = {
    geo: {
      map: "china",
      label: {
        emphasis: {
          show: true,
          color: "#fff"
        }
      },
      roam: false,
      //   放大我们的地图
      zoom: 1,
      itemStyle: {
        normal: {
          areaColor: "rgba(43, 100, 150, 0.66)",
          borderColor: "rgba(43, 196, 243, 1)",
          borderWidth: 1
        },
        emphasis: {
          areaColor: "#2B91B7"
        }
      }
    },
    series: [
      {
          type: "scatter",
          coordinateSystem: "geo",
          symbol: "pin",
          legendHoverLink: true,
          symbolSize: [60, 60],
          // 这里渲染标志里的内容以及样式
          label: {
              show: true,
              formatter(value) {
                  return value.data.name;
              },
              color: "#fff",
          },
          // 标志的样式
          itemStyle: {
              normal: {
                  color: "rgba(255,0,0,.7)",
                  shadowBlur: 2,
                  shadowColor: "D8BC37",
              },
          },
          // 数据格式，其中name,value是必要的，value的前两个值是数据点的经纬度，其他的数据格式可以自定义
          // 至于如何展示，完全是靠上面的formatter来自己定义的
          data: [
              { name: "鄱阳湖", value: [116.5, 28.94] ,url: "http://www.xinhuanet.com/politics/2019-12/15/c_1125349117.htm"},
              { name: "黄河三角洲", value: [117.9673802, 35.706] ,url: "https://www.gov.cn/xinwen/2021-06/09/content_5616493.htm"},
              { name: "扎龙", value: [124.058,47.346] ,url: "https://www.sohu.com/a/415219782_104149"},
              { name: "青海湖", value: [99.863,36.959] ,url: "http://www.tibet.cn/cn/index/zqdt/202006/t20200601_6791557.html"},
              { name: "巴音布鲁克", value: [84.798,42.594] ,url: "https://zhuanlan.zhihu.com/p/136362603"},
              { name: "盐城", value: [120.507,33.609] ,url: "https://www.thepaper.cn/newsDetail_forward_7187921"},
              { name: "洞庭湖", value: [112,29] ,url: "https://new.qq.com/rain/a/20211107A01HW800"},
              { name: "科尔沁", value: [122,43.5] ,url: "https://www.sohu.com/a/766517886_121620820"},
              { name: "海子山", value: [100,29.5] ,url: "https://zhuanlan.zhihu.com/p/426484527"},
              { name: "卧龙", value: [103,31] ,url: "https://lcj.sc.gov.cn/scslyt/gjjbhq/2016/4/8/a2b36e691ee042e59cddeb79707e1a1b.shtml"},
              { name: "哀牢山", value: [101,24] ,url: "http://www.xinhuanet.com/2021-12/03/c_1128125828.htm"},
              { name: "西双版纳", value: [101,22] ,url: "https://www.sohu.com/a/454045717_100019966"},
              { name: "北仑河", value: [108.5,21.5] ,url: "https://zhuanlan.zhihu.com/p/672665634"},
              { name: "大瑶山", value: [110,24] ,url: "http://36.136.2.198:8889/"},
              { name: "羌塘草原", value: [87,31] ,url: "https://news.cyol.com/gb/articles/2021-05/23/content_xwZoxsVxO.html"},
              { name: "色木措", value: [92,31] ,url: "https://www.cnr.cn/xz/tpxw/20170621/t20170621_523811824.shtml"},
              { name: "白水江", value: [105,32.5] ,url: "http://www.baishuijiang.com.cn/ms-mcms/html/1/2/10/9452.html"},
              { name: "太子山", value: [103.3,35.3] ,url: "https://www.baike.com/wikiid/6251834909290713383"},
              { name: "贺兰山", value: [106,39] ,url: "http://www.hlsbhq.com/"},
              { name: "艾比湖", value: [83,45] ,url: "https://baike.baidu.com/item/%E8%89%BE%E6%AF%94%E6%B9%96%E6%B9%BF%E5%9C%B0%E5%9B%BD%E5%AE%B6%E7%BA%A7%E8%87%AA%E7%84%B6%E4%BF%9D%E6%8A%A4%E5%8C%BA/9727830#%E6%A6%82%E8%A7%88"},
              { name: "额尔古纳", value: [120,50] ,url: "https://news.cctv.com/2022/07/29/ARTIeVvAIRWbfVYL7B0mPwzs220729.shtml"},
              { name: "长白山", value: [128,42] ,url: "http://www.changbaishan.gov.cn/zjzbs/"},
              { name: "牡丹峰", value: [129.7,44.5] ,url: "https://baike.baidu.com/item/%E9%BB%91%E9%BE%99%E6%B1%9F%E7%89%A1%E4%B8%B9%E5%B3%B0%E5%9B%BD%E5%AE%B6%E7%BA%A7%E8%87%AA%E7%84%B6%E4%BF%9D%E6%8A%A4%E5%8C%BA/7083317"},
              { name: "庞泉沟", value: [111.5,37.8] ,url: "https://new.qq.com/rain/a/20210514A00RIF00"},
              { name: "九龙山", value: [116.5,39.9] ,url: "http://lyj.lishui.gov.cn/art/2022/7/27/art_1229657276_232.html"},
              { name: "天目山", value: [119.4,30.4] ,url: "https://hznews.hangzhou.com.cn/chengshi/content/2023-09/01/content_8610865.htm"},
              { name: "湛江", value: [110.8,20.6] ,url: "https://lyj.gd.gov.cn/bhq/html/protection_zone/hongshulin.html"},
              { name: "漳江口", value: [117.4,24] ,url: "https://lyj.fujian.gov.cn/bmsjk/zrbhq/202012/t20201216_5492336.htm"},

          ],
          showEffectOn: "render",
          rippleEffect: {
              brushType: "stroke",
          },
          hoverAnimation: true,
          zlevel: 1,
      },
  ],
  
  };
  myChart.setOption(option);
  myChart.on('click', function (param) {
    window.open(param.data.url);
});
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
