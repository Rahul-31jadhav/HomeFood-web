import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { Dropdown } from 'bootstrap';
import { FormsModule } from '@angular/forms';

interface Meal {
  name: string;
  img: string;
  type: string;
  date: string;
  time: string;
  status: string;
  price: number;
}

interface User {
  name: string;
  email: string;
  role: string;
  roleImg: string;
  img: string;
  status: 'Active' | 'Inactive';
  joinDate: string;
  firstName?: string;
  lastName?: string;
  displayName?: string;
  gender?: string;
  contact?: string;
  country?: string;
  knownLanguages?: string[];

  // Added meals + bookings for demo
  listedMeals?: Meal[];
  bookingHistory?: string[];
}

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements AfterViewInit {

  // For main table filters
  activeTab: string = 'All Users';   
  currentFilter: string = 'All';     
  isMealDetailsView: boolean = false;


  // For offcanvas tabs
  offcanvasTab: string = 'overview';   // 👈 new property

  selectedUser: User | null = null;
  mode: 'view' | 'edit' = 'view';
  originalUser: User | null = null;

  // edit states
  isFirstNameEditing = false;
  isLastNameEditing = false;

  // ✅ Static data with meals
  users: User[] = [
    {
      name: 'Jaime Grimes',
      email: 'jaime.grimes@email.com',
      role: 'Host',
      roleImg: '/assets/userIcon/tourist.png',
      img: 'assets/userIcon/user1.png',
      status: 'Active',
      joinDate: 'Mar 01, 2025',
      firstName: 'Jaime',
      lastName: 'Grimes',
      displayName: 'Jaime G',
      gender: 'Male',
      contact: '1234567890',
      country: 'India',
      knownLanguages: ['English', 'Hindi'],
      listedMeals: [
        {
          name: 'Paneer Butter Masala with Naan and Jeera Rice',
          img: '/assets/meals/meal1.png',
          type: 'Dine-in',
          date: 'Tomorrow',
          time: 'Dinner',
          status: 'Active',
          price: 280
        },
        {
          name: 'Chicken Parmigiana with Salad and Fries',
          img: '/assets/meals/meal2.png',
          type: 'Dine-in, Take-away, Delivery',
          date: 'Today',
          time: 'Lunch',
          status: 'Inactive',
          price: 180
        }
      ],
      bookingHistory: ['Booking #123', 'Booking #124']
    },
    {
      name: 'Sophia Patel',
      email: 'sophia.patel@email.com',
      role: 'Guest',
      roleImg: '/assets/userIcon/guest.png',
      img: 'assets/userIcon/user2.png',
      status: 'Active',
      joinDate: 'Feb 15, 2025',
      firstName: 'Sophia',
      lastName: 'Patel',
      displayName: 'Sophie',
      gender: 'Female',
      contact: '9876543210',
      country: 'USA',
      knownLanguages: ['English'],
      listedMeals: [],
      bookingHistory: ['Booking #200']
    },
    {
      name: 'Arjun Mehra',
      email: 'arjun.mehra@email.com',
      role: 'Host',
      roleImg: '/assets/userIcon/tourist.png',
      img: 'assets/userIcon/user3.png',
      status: 'Inactive',
      joinDate: 'Jan 20, 2025',
      firstName: 'Arjun',
      lastName: 'Mehra',
      displayName: 'Arjun M',
      gender: 'Male',
      contact: '9988776655',
      country: 'India',
      knownLanguages: ['English', 'Hindi', 'Punjabi'],
      listedMeals: [],
      bookingHistory: []
    },
    {
      name: 'Emily Johnson',
      email: 'emily.johnson@email.com',
      role: 'Guest',
      roleImg: '/assets/userIcon/guest.png',
      img: 'assets/userIcon/user4.png',
      status: 'Inactive',
      joinDate: 'Dec 05, 2024',
      firstName: 'Emily',
      lastName: 'Johnson',
      displayName: 'Em J',
      gender: 'Female',
      contact: '4455667788',
      country: 'UK',
      knownLanguages: ['English', 'French'],
      listedMeals: [],
      bookingHistory: []
    },
    {
      name: 'Ravi Kumar',
      email: 'ravi.kumar@email.com',
      role: 'Host',
      roleImg: '/assets/userIcon/tourist.png',
      img: 'assets/userIcon/user5.png',
      status: 'Active',
      joinDate: 'Nov 18, 2024',
      firstName: 'Ravi',
      lastName: 'Kumar',
      displayName: 'Ravi K',
      gender: 'Male',
      contact: '7766554433',
      country: 'India',
      knownLanguages: ['English', 'Hindi', 'Tamil'],
      listedMeals: [],
      bookingHistory: []
    },
    
  ];
  

  ngAfterViewInit() {
    const dropdownElementList = document.querySelectorAll('.dropdown');
    dropdownElementList.forEach(el => new Dropdown(el));
  }
  ngOninit() {
    this.allClosed();
  }
  openMealDetails() {
  this.isMealDetailsView = true;
}

closeMealDetails() {
  this.isMealDetailsView = false;
}

  toggleFirstNameEdit() {
    this.isFirstNameEditing = true;
  }

  toggleLastNameEdit() {
    this.isLastNameEditing = true;
  }

  // ✅ For main table filtering
  get filteredUsers(): User[] {
    let list = [...this.users];
    if (this.activeTab !== 'All Users') {
      list = list.filter(user => user.role === this.activeTab);
    }
    if (this.currentFilter !== 'All') {
      list = list.filter(user => user.status === this.currentFilter);
    }
    return list;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  applyFilter(filter: string) {
    this.currentFilter = filter;
  }

  // ✅ For offcanvas tab switching
  setOffcanvasTab(tab: string) {
    this.offcanvasTab = tab;
  }

  // ✅ open offcanvas with mode
  openOffcanvas(user: any, action: 'view' | 'edit') {
    this.selectedUser = { ...user };
    this.mode = action;

    this.originalUser = { ...user };
    this.isFirstNameEditing = false;
    this.isLastNameEditing = false;

    // Reset offcanvas tab to overview each time you open
    this.offcanvasTab = 'overview';
  }

  saveUserDetails() {
    if (!this.selectedUser) return;

    const index = this.users.findIndex(u => u.email === this.selectedUser?.email);
    if (index > -1) {
      this.users[index] = { ...this.selectedUser };
    }

    this.originalUser = { ...this.selectedUser };
    this.resetEditStates();
  }

  discardChanges() {
    if (this.selectedUser && this.originalUser) {
      this.selectedUser = { ...this.originalUser }; 
    }
    this.resetEditStates(); 
  }

  private resetEditStates() {
    this.isFirstNameEditing = false;
    this.isLastNameEditing = false;
  }

  allClosed(){
    this.isMealDetailsView = false;
  }
}
