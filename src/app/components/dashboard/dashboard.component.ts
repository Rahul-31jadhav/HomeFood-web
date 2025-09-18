import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
// import ChartDataLabels from 'chartjs-plugin-datalabels';

// Chart.register(ChartDataLabels);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.loadBookingTrendsChart();
    this.loadOrderTypesChart();
  }

  // 📈 Line Chart
  loadBookingTrendsChart(): void {
    const ctx = document.getElementById('bookingTrendsChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'Jan 1', 'Jan 8', 'Jan 15', 'Jan 22', 'Jan 29',
          'Feb 5', 'Feb 12', 'Feb 19', 'Feb 26',
          'Mar 5', 'Mar 12', 'Mar 19'
        ],
        datasets: [
          {
            label: 'Daily Bookings',
            data: [5, 10, 15, 25, 30, 42, 35, 50, 65, 68, 72, 76],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: false,
            tension: 0.4,
            pointBorderColor: 'rgba(255, 99, 132, 1)',
            pointBackgroundColor: '#fff',
            pointRadius: 4,
            pointHoverRadius: 7
          },
          {
            label: 'Weekly Average',
            data: [8, 12, 22, 28, 32, 38, 30, 40, 55, 60, 66, 73],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: false,
            tension: 0.4,
            pointBorderColor: 'rgba(54, 162, 235, 1)',
            pointBackgroundColor: '#fff',
            pointRadius: 4,
            pointHoverRadius: 7
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'bottom'
          }
        },
        scales: {
          x: {
            grid: { display: true }
          },
          y: {
            grid: { display: true },
            beginAtZero: true,
            ticks: { stepSize: 10 }
          }
        }
      }
    });
  }

  // 🥧 Pie Chart
  loadOrderTypesChart(): void {
    const ctx = document.getElementById('orderTypesChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Takeaway', 'Delivery', 'Dine-in'],
        datasets: [{
          data: [39.13, 56.6, 49.75],   
          backgroundColor: ['#2ec7f4', '#9a7cf6', '#ff8a8a'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          datalabels: {
            formatter: (value: any, ctx: any) => {
              const label = ctx.chart.data.labels[ctx.dataIndex];
              if (label === 'Takeaway') return 'Takeaway\n39.13  26.90%';
              if (label === 'Delivery') return 'Delivery\n56.6  38.91%';
              if (label === 'Dine-in') return 'Dine-in\n49.75  34.20%'; 
              return '';
            },
            color: (ctx: any) => {
              const bg = ctx.dataset.backgroundColor;
              return Array.isArray(bg) ? bg[ctx.dataIndex] : bg;
            },
            font: { size: 11, weight: '600' },
            align: 'end',   // push outside
            anchor: 'end',  // attach to slice edge
            clamp: true
          } as any
        }
      } as any
    });
  }
}
