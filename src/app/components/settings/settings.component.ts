import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Booking {
  meal: string;
  host: string;
  customers: string[];   // list of images
  guests: number;
  date: string;
  time: string;
  status: 'Upcoming' | 'Completed' | 'Canceled';
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  activeTab: string = 'All Booking';

  bookings: Booking[] = [
    {
      meal: 'Paneer Butter Masala with Naan',
      host: 'Priya Kulkarni',
      customers: ['/img/u.svg','/img/u.svg','/img/u.svg'],
      guests: 3,
      date: 'Sept 10, 2025',
      time: 'Lunch',
      status: 'Upcoming'
    },
    {
      meal: 'Paneer Butter Masala with Naan',
      host: 'Kianna George',
      customers: ['/img/u.svg','/img/u.svg','/img/u.svg','/img/u.svg','/img/u.svg','/img/u.svg'],
      guests: 6,
      date: 'Sept 8, 2025',
      time: 'Dinner',
      status: 'Completed'
    },
    {
      meal: 'Paneer Butter Masala with Naan',
      host: 'Gretchen Botosh',
      customers: ['/img/u.svg','/img/u.svg','/img/u.svg','/img/u.svg','/img/u.svg','/img/u.svg'],
      guests: 6,
      date: 'Sept 8, 2025',
      time: 'Dinner',
      status: 'Canceled'
    }
  ];

  // ✅ Precomputed counts
  get totalCount(): number {
    return this.bookings.length;
  }
  get upcomingCount(): number {
    return this.bookings.filter(b => b.status === 'Upcoming').length;
  }
  get completedCount(): number {
    return this.bookings.filter(b => b.status === 'Completed').length;
  }
  get canceledCount(): number {
    return this.bookings.filter(b => b.status === 'Canceled').length;
  }

  // ✅ Filter function
  get filteredBookings(): Booking[] {
    if (this.activeTab === 'All Booking') {
      return this.bookings;
    }
    return this.bookings.filter(b => b.status === this.activeTab);
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
onRowClick(booking: Booking) {
  console.log("Row clicked:", booking);

  // Example 1: Navigate to details page
  // this.router.navigate(['/booking', booking.id]);

  // Example 2: Open a modal (Bootstrap/Material)
  // this.selectedBooking = booking;
  // this.showModal = true;
}

}
