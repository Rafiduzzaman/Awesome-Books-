// Import necessary elements
import { DateTime } from '../node_modules/luxon/src/luxon.js';

// Function to display the current date and time
export const dateTime = setInterval(() => {
  // Get the current time of the System
  const currentTime = DateTime.now().setZone('system');

  // Format the time
  const formatedTime = currentTime.toFormat("MMMM d yyyy',' hh:mm:ss a");

  // Display the time in the 'currentTime' element
  const elementTime = document.querySelector('.currentTime');
  elementTime.innerText = formatedTime;
}, 1000);