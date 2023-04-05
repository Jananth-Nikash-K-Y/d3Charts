import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'app-donut',
    templateUrl: './donut-chart.component.html',
    styleUrls : ['./donut-chart.component.css']
})

export class donutChartComponent implements OnInit{

    margin = { top : 10, right: 30, bottom: 30, left: 40};

    width = 300;
    height = 300;

    svg: any;
    colors: any;
    pie: any; 
    data : any;
    data_ready: any;

    constructor() {}

    donut(){
        var radius = Math.min(this.width, this.height)/2;

        var biggestarc = d3
            .arc()
            .outerRadius(radius - 100)
            .innerRadius(radius - 60);

        var bigarc = d3   
            .arc()
            .outerRadius(radius - 100)
            .innerRadius(radius - 40);

        var smallarc = d3   
            .arc()
            .outerRadius(radius - 100)
            .innerRadius(radius - 30);

        var biggerarc = d3   
            .arc()
            .outerRadius(radius - 100)
            .innerRadius(radius - 50);

        var pie = d3
            .pie()
            .sort(null)
            .value(function(d: any){
                return d.percent;
            });
        
        this.data = [
            {
            "label" : "Biggest",
            "perecent" : 13,
            valueOf : () => 1
            },
            {
            "label" : "Big",
            "perecent" : 15,
            valueOf : () => 2
            },
            {
            "label" : "Biggest",
            "perecent" : 60,
            valueOf : () => 3
            },
            {
            "label" : "Biggest",
            "perecent" : 12,
            valueOf : () => 4
            },
        ]

        var g = this.svg.selectAll(".arc")
            .data(pie(this.data))
            .enter()
            .append('g')
            .attr('class', 'arc');

        g.append('path')
            .attr('d', function(d : any){
                if(d.data.label == "Biggest"){
                    return biggestarc(d);
                }
                else if(d.data.label == "Big"){
                    return bigarc(d);
                }
                else if(d.data.label == "Bigger"){
                    return biggerarc(d);
                }
                else{
                    return smallarc(d);
                }
            })
            .attr('fill', (d : any) => {
                return `url(#svgGradient-${d.index})`;
            })
            .attr('stroke', 'white')
            .style('stroke-width', '0.7px')
            .style('opacity', 1);

        g.append('text')
            .attr('transform', function(d : any){
                d.innerRadius = 0;
                d.outerRadius = radius;
                if(d.data.label == "Biggest"){
                    return "translate(" + biggestarc.centroid(d) + ")";
                }
                else if(d.data.label == "Big"){
                    return "translate(" + bigarc.centroid(d) + ")";
                }
                else if(d.data.label == "Bigger"){
                    return "translate(" + biggerarc.centroid(d) + ")";
                }
                else{
                    return "translate(" + smallarc.centroid(d) + ")";
                }
            })
            .attr('text-anchor', 'middle')
            .text( (d : any, i : any) =>{
                return this.data[i].perecent + '%';
            })
            .style('fill', '#fff')
            .style('font-size', '12px')

        var label = g.append('text')
            .attr('class', 'labels')
            .attr('text-anchor', 'middle')
            .attr('font-size', '10px')
            .attr('alignment-baseline', 'middle');
        
        label.append('tspan')
            .text('Lorem ')
            .attr('fill', '#DE9921');

        label.append('tspan')
            .text('Ipsum')
            .attr('fill', '#6F6F6F');
    }

    createSvg(): void{
        this.svg = d3
            .select('figure#donut')
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .append('g')
            .attr('transform', 'translate(100, 150)');
    }

    createColor(data : any){
        const defs = this.svg.append('defs');
        var gradientOne = defs.append('linearGradient')
            .attr('id', 'svgGradient-0')
            .attr('x1', '0%')
            .attr('x2', '100%')
            .attr('y1', '0%')
            .attr('y2', '0%')

        gradientOne.append('stop')
            .attr('class', 'start')
            .attr('offset', '0%')
            .attr('stop-color', '#5EC14B')
            .attr('stop-opacity', 1)
        
        gradientOne.append('stop')
            .attr('class', 'end')
            .attr('offset', '100%')
            .attr('stop-color', '#0C5F05')
            .attr('stop-color', 1)
        
        gradientOne.attr('gradientTransform', 'rotate(110)')

        var gradientTwo = defs.append('linearGradient')
            .attr('id', 'svgGradient-1')
            .attr('x1', '0%')
            .attr('x2', '100%')
            .attr('y1', '0%')
            .attr('y2', '0%')

        gradientTwo.append('stop')
            .attr('class', 'start')
            .attr('offset', '0%')
            .attr('stop-color', '#B99E0C')
            .attr('stop-opacity', 1)
        
        gradientTwo.append('stop')
            .attr('class', 'end')
            .attr('offset', '100%')
            .attr('stop-color', '#F2EA47')
            .attr('stop-color', 1)
        
        var gradientThree = defs.append('linearGradient')
            .attr('id', 'svgGradient-2')
            .attr('x1', '0%')
            .attr('x2', '100%')
            .attr('y1', '0%')
            .attr('y2', '0%')

        gradientThree.append('stop')
            .attr('class', 'start')
            .attr('offset', '0%')
            .attr('stop-color', '#ED740F')
            .attr('stop-opacity', 1)
        
        gradientThree.append('stop')
            .attr('class', 'end')
            .attr('offset', '100%')
            .attr('stop-color', '#F6B944')
            .attr('stop-color', 1)
        
        gradientThree.attr('gradientTransform', 'rotate(110)')

        var gradientFour = defs.append('linearGradient')
            .attr('id', 'svgGradient-3')
            .attr('x1', '0%')
            .attr('x2', '100%')
            .attr('y1', '0%')
            .attr('y2', '0%')

        gradientFour.append('stop')
            .attr('class', 'start')
            .attr('offset', '0%')
            .attr('stop-color', '#F4844B')
            .attr('stop-opacity', 1)
        
        gradientFour.append('stop')
            .attr('class', 'end')
            .attr('offset', '100%')
            .attr('stop-color', '#D1114A')
            .attr('stop-color', 1)
        
        gradientFour.attr('gradientTransform', 'rotate(110)')
    }
    ngOnInit(): void {
        this.createSvg();
        this.createColor(this.data);
        this.donut();
    }
}
