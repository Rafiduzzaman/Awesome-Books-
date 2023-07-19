import { DateTime } from 'luxon';

export function displayCurrentDate() {
  const currentDate = DateTime.now().toLocaleString(DateTime.DATE_FULL);
  const dateElement = document.getElementById('currentDate');
  dateElement.textContent = currentDate;
}
