import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface TableRow {
  name?: string;
  email?: string;
  status?: string;
  [key: string]: any;
}

@Component({
  selector: 'app-generic-table',
  standalone: true,
   imports: [CommonModule,FormsModule], 
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})
export class GenericTableComponent<T extends { [key: string]: any }> {

  // Table title (like “All Users”)
  @Input() activeTab: string = '';

  // Current filter (All / Active / Inactive)
  @Input() currentFilter: string = 'All';

  // Array of data to display
  @Input() data: T[] = [];

  // Column config
  @Input() columns: { key: string, label: string }[] = [];

  // Emits action events (view/edit/deactivate)
  @Output() action = new EventEmitter<{ type: string, row: T }>();

  // Search term
  searchTerm: string = '';

  // Filtered data with search + status
 get filteredData(): T[] {
  let list = [...this.data];

  // Status filter
  if (this.currentFilter !== 'All') {
    list = list.filter(u => u['status'] === this.currentFilter);
  }

  // Search filter
  if (this.searchTerm.trim() !== '') {
    const term = this.searchTerm.toLowerCase();
    list = list.filter(u =>
      (u['name']?.toString().toLowerCase().includes(term)) ||
      (u['email']?.toString().toLowerCase().includes(term))
    );
  }

  return list;
}


  applyFilter(filter: string) {
    this.currentFilter = filter;
  }
}
