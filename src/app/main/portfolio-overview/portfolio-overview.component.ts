import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-overview',
  templateUrl: './portfolio-overview.component.html',
  styleUrls: ['./portfolio-overview.component.scss']
})
export class PortfolioOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customBarData = [
    {
      data : '<25k',
      per : '48%'
    },
    {
      data : '25-50k',
      per : '62%'
    },
    {
      data : '50-75k',
      per : '30%'
    },
    {
      data : '75-100k',
      per : '60%'
    },
    {
      data : '>100k',
      per : '20%'
    }
  ];

  customData = [
    {
      month:'Sat',
      data:[
        {
          color:'#38d468',
          per:'10%'
        },
        {
          color:'#289cc6',
          per:'30%'
        },
        {
          color:'#df8f01',
          per:'20%'
        },
        {
          color:'#d51703',
          per:'40%'
        }
      ]
    },
    {
      month:'Fri',
      data:[
        {
          color:'#38d468',
          per:'50%'
        },
        {
          color:'#289cc6',
          per:'30%'
        },
        {
          color:'#df8f01',
          per:'5%'
        },
        {
          color:'#d51703',
          per:'15%'
        }
      ]
    },
    {
      month:'Thu',
      data:[
        {
          color:'#38d468',
          per:'10%'
        },
        {
          color:'#289cc6',
          per:'25%'
        },
        {
          color:'#df8f01',
          per:'55%'
        },
        {
          color:'#d51703',
          per:'10%'
        }
      ]
    },
    {
      month:'Wed',
      data:[
        {
          color:'#38d468',
          per:'35%'
        },
        {
          color:'#289cc6',
          per:'5%'
        },
        {
          color:'#df8f01',  
          per:'10%'
        },
        {
          color:'#d51703',
          per:'50%'
        }
      ]
    },
    {
      month:'Thu',
      data:[
        {
          color:'#38d468',
          per:'20%'
        },
        {
          color:'#289cc6',
          per:'35%'
        },
        {
          color:'#df8f01',  
          per:'15%'
        },
        {
          color:'#d51703',
          per:'30%'
        }
      ]
    },
    {
      month:'Mon',
      data:[
        {
          color:'#38d468',
          per:'35%'
        },
        {
          color:'#289cc6',
          per:'5%'
        },
        {
          color:'#df8f01',  
          per:'10%'
        },
        {
          color:'#d51703',
          per:'50%'
        }
      ]
    },
    {
      month:'Sun',
      data:[
        {
          color:'#38d468',
          per:'10%'
        },
        {
          color:'#289cc6',
          per:'70%'
        },
        {
          color:'#df8f01',  
          per:'5%'
        },
        {
          color:'#d51703',
          per:'15%'
        }
      ]
    }
];

  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
    { data: [26, 80, 56, 29, 37, 76, 35], label: 'My second dataset' }
  ];

  public chartLabels: Array<any> = ['<25', '25-50k', '50-75k', '75-100k', '>100k'];

  public chartColors: Array<any> = [
      {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'      
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'    ],
      borderWidth: 2,
    },
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'      
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'    ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
