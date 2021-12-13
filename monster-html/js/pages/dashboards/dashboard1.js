/*
Template Name: Admin Pro Admin
Author: Wrappixel
Email: niravjoshi87@gmail.com
File: js
*/
$(function () {
    "use strict";
    plot();

    function plot() {
        var low = [[1,20],[2,21],[3,23],[4,22],[5,24],[6,24],[7,24],[8,24],[9,26],[10,26],[11,25],[12,25]],
            middle = [[1,13],[2,13],[3,12],[4,13],[5,12],[6,12],[7,11],[8,11],[9,10],[10,10],[11,11],[12,10]],
            high = [[1,17],[2,16],[3,15],[4,15],[5,14],[6,14],[7,15],[8,15],[9,14],[10,14],[11,14],[12,15]],
            normal = [[1,50],[2,50],[3,50],[4,51],[5,50],[6,50],[7,51],[8,49],[9,50],[10,50],[11,51],[12,50]];
        /*for (var i = 0; i < 12; i += 0.2) {
            sin.push([i, Math.sin(i + offset)]);
            cos.push([i, Math.cos(i + offset)]);
            
        }*/
        var options = {
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: true
                }
            },
            grid: {
                hoverable: true //IMPORTANT! this is needed for tooltip to work
            },
            yaxis: {
                min: 0,
                max: 55
            },
            xaxis: {
                min: 1,
                max: 12
            },
            colors: ["#009efb", "#F77414","#C60B08","#11CE24"],
            grid: {
                color: "#AFAFAF",
                hoverable: true,
                borderWidth: 0,
                backgroundColor: '#FFF'
            },
            tooltip: true,
            tooltipOpts: {
                content: "'%s' of %x.1 is %y.4",
                shifts: {
                    x: -60,
                    y: 20
                }
            }
        };
        var plotObj = $.plot($("#flot-line-chart"), [{
            data: low,
            label: "低風險",
        }, {
            data: middle,
            label: "中風險"
        }, {
            data: high,
            label: "高風險"
        }, {
            data: normal,
            label: "無風險"
        }
        ], options);
    }
});