// place files you want to import through the `$lib` alias in this folder.
import { goto } from '$app/navigation';

/**
 * Navigates to the specified route passed in the argument
 * @param {string} route The route of the page we want to jump to
 * @example
 * // goes to /about
 * <button on:click={() => navigateToPage('/about')}> About </button>
 *
 */
export async function navigateToPage(route) {
	goto(route);
}

/**
 * Takes in a valid UTC datestring
 * and returns a new date string with the timezone of user taken into account
 * @param {string} dateString
 * @returns {string} The adjusted dateString according to user's timezone
 */
export function getValidDate(dateString) {
	const timezoneOffset = -new Date().getTimezoneOffset() / 60;

	// Parse the input date string and adjust it for the timezone offset
	const inputDate = new Date(dateString);
	const adjustedDate = new Date(inputDate.getTime() + timezoneOffset * 60 * 60 * 1000);

	// Format the adjusted date as a string
	const adjustedDateString = adjustedDate.toISOString().slice(0, 19).replace('T', ' ');

	return adjustedDateString;
}
