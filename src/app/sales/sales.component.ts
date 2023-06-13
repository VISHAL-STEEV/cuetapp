import { Component, OnInit } from '@angular/core';

import{Chart,registerables} from 'node_modules/chart.js'
Chart.register(...registerables);

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {



  filterdata:any;
  lessthanorgraterthan: any;
 ChartData ={
  "dataset1" : Array.from({length:8},()=>Math.floor(Math.random()*590)+10)
 }
  barchart: any;
  doughnutchart:any;
  piechart: any;
  linechart:any;

  chartfilterdata(value:any){





    
   this.barchart.data.datasets[0].data=this.ChartData.dataset1;
   

   this.barchart.data.datasets.forEach((data:any,i:any)=>{
    if(this.lessthanorgraterthan ==='graterthan'){
      this.barchart.data.datasets[i].data=data.data.map((v:any)=>{if(v>=value){return v;}else{return 0}});
    }else{
      this.barchart.data.datasets[i].data=data.data.map((v:any)=>{if(v<=value){return v;}else{return 0}}); 
    }
   });

   this.barchart.update();








   this.doughnutchart.data.datasets[0].data=this.ChartData.dataset1;
   

   this.doughnutchart.data.datasets.forEach((data:any,i:any)=>{
    if(this.lessthanorgraterthan ==='graterthan'){
      this.doughnutchart.data.datasets[i].data=data.data.map((v:any)=>{if(v>=value){return v;}else{return 0}});
    }else{
      this.doughnutchart.data.datasets[i].data=data.data.map((v:any)=>{if(v<=value){return v;}else{return 0}}); 
    }
   });

   this.doughnutchart.update();







   this.piechart.data.datasets[0].data=this.ChartData.dataset1;
   

   this.piechart.data.datasets.forEach((data:any,i:any)=>{
    if(this.lessthanorgraterthan ==='graterthan'){
      this.piechart.data.datasets[i].data=data.data.map((v:any)=>{if(v>=value){return v;}else{return 0}});
    }else{
      this.piechart.data.datasets[i].data=data.data.map((v:any)=>{if(v<=value){return v;}else{return 0}}); 
    }
   });

   this.piechart.update();




   this.piechart.data.datasets[0].data=this.ChartData.dataset1;
   

   this.piechart.data.datasets.forEach((data:any,i:any)=>{
    if(this.lessthanorgraterthan ==='graterthan'){
      this.piechart.data.datasets[i].data=data.data.map((v:any)=>{if(v>=value){return v;}else{return 0}});
    }else{
      this.piechart.data.datasets[i].data=data.data.map((v:any)=>{if(v<=value){return v;}else{return 0}}); 
    }
   });

   this.piechart.update();




   this.linechart.data.datasets[0].data=this.ChartData.dataset1;
   

   this.linechart.data.datasets.forEach((data:any,i:any)=>{
    if(this.lessthanorgraterthan ==='graterthan'){
      this.linechart.data.datasets[i].data=data.data.map((v:any)=>{if(v>=value){return v;}else{return 0}});
    }else{
      this.linechart.data.datasets[i].data=data.data.map((v:any)=>{if(v<=value){return v;}else{return 0}}); 
    }
   });

   this.linechart.update();

  }



  ngOnInit(): void {
    
    this.barchart = new Chart("myChart", {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
        label: 'hello',
        data: this.ChartData.dataset1,
        borderWidth: 1
      },]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  this.doughnutchart = new Chart("doughnut", {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
        label: 'hello',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }
    
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  this.piechart = new Chart("piechart", {
    type: 'pie',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
        label: 'hello',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }
    
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  this.linechart = new Chart("linechart", {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  }


}
