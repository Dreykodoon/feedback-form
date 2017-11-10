import validator from 'validator';

export const EMPTY_FIELDS = 'Please fill in all empty fields';
export const INVALID_EMAIL = 'Please enter a valid email address';

/**
 * @param formData
 * @return {boolean} <b>true</b> if form data is valid, <b>false</b> otherwise
 */
export function isFormValid(formData) {
    const {name, email, message} = formData;

    return name && email && validator.isEmail(email) && message;
}

/**
 * @param formData
 * @return {string} The error message to be displayed.
 */
export function generateErrorMessage(formData) {
    const {name, email, message} = formData;

    return !name || !email || !message ? EMPTY_FIELDS : INVALID_EMAIL;
}
