import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
   activeTab: string = 'Overview'; // default tab

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  openTickets = [
  { id: 4567, title: 'Order Notification Not Received', user: { name: 'Tatiana Vaccaro', email: 'tatiana.vaccaro11yahoo.com', img: '/img/user1.png', role: 'Host' } },
  { id: 8910, title: 'Payment Failed During Checkout', user: { name: 'Velma Zboncak', email: 'velma.zboncakemail.com', img: '/img/user2.png', role: 'Guest' } },
  { id: 2345, title: 'Issue Logging Into Host Account', user: { name: 'Tiana Vaccaro', email: 'tiana.vaccarocreativemail.com', img: '/img/user3.png', role: 'Host' } }
];

closedTickets = [
  { id: 5678, title: 'Refund Not Processed', user: { name: 'John Doe', email: 'john@example.com', img: '/img/user4.png', role: 'Guest' } },
  { id: 6789, title: 'Account Locked', user: { name: 'Jane Smith', email: 'jane@example.com', img: '/img/user5.png', role: 'Host' } }
];

// Function to return tickets based on active tab
getTickets() {
  if(this.activeTab === 'Open Ticket') return this.openTickets;
  if(this.activeTab === 'Closed Ticket') return this.closedTickets;
  return [];
}

}
