import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './account-modal.html',
  styleUrls: ['./account-modal.scss'],
})
export class AccountModalComponent {
  @Output() confirm = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<void>();

  goal = signal('');

  handleConfirm() {
    if (this.goal().trim().length > 0) {
      this.confirm.emit(this.goal());
    }
  }
}
