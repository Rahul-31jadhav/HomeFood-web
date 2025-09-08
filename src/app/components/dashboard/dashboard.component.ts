  import { Component, AfterViewInit } from '@angular/core';
  import { Chart } from 'chart.js/auto';

  @Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
  })
  export class DashboardComponent implements AfterViewInit {

    ngAfterViewInit(): void {
      this.loadBookingTrendsChart();
    }

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
              borderColor: 'rgba(255, 99, 132, 1)', // red line
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
              ticks: {
                stepSize: 10
              }
            }
          }
        }
      });
    }
  }
