import {isFormValid, generateErrorMessage, EMPTY_FIELDS, INVALID_EMAIL} from '../feedback-form-validation';

describe('Form validation tests', () => {
    it('should return false if at least one form field is an empty string', () => {
        const formData = {
            name: '',
            email: 'test@email.address',
            message: 'test',
        };

        expect(isFormValid(formData)).toBe(false);
    });

    it('should return false if email is invalid', () => {
        const formData = {
            name: 'Tester',
            email: 'bad test email address',
            message: 'test',
        };

        expect(isFormValid(formData)).toBe(false);
    });
});

describe('Error messages', () => {
    it('should warn about empty fields if at least one value is an empty string', () => {
        const formData = {
            name: '',
            email: 'test@email.address',
            message: 'test',
        };

        expect(generateErrorMessage(formData)).toBe(EMPTY_FIELDS);
    });

    it('should warn about invalid email address', () => {
        const formData = {
            name: 'Tester',
            email: 'bad test email address',
            message: 'test',
        };

        expect(generateErrorMessage(formData)).toBe(INVALID_EMAIL);
    });
});
