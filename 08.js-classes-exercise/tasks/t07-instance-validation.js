/*
Write a class for a checking account that validates it’s created with valid parameters.
A CheckingAccount has a clientId, email, firstName, lastName all set through the
constructor and an array of products that is initially empty.

Each parameter must meet specific requirements:
•	clientId - Must be a string representing a 6-digit number; if invalid, throw a
TypeError with the message "Client ID must be a 6-digit number"
•	email - Must contain at least one alphanumeric character, followed by the @ symbol,
followed by one or more letters or periods; all letters must be Latin; if invalid, throw a
TypeError with message "Invalid e-mail"
•	firstName, lastName - Must be at least 3 and at most 20 characters long, containing only Latin letters;
o	If the length is invalid, throw a TypeError with message:
"{First/Last} name must be between 3 and 20 characters long"
o	 If invalid characters are used, throw a TypeError with message:
"{First/Last} name must contain only Latin characters" (replace First/Last with the relevant word)

All checks must happen in the order in which they are listed - if more than one parameter is invalid,
throw an error for the first encountered. Note that error messages must be exact.

Submit your solution containing a single class definition.

 */

class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }

    set clientId(clientId) {
        if (!/^[0-9]{6}$/.test(clientId)) {
            throw TypeError('Client ID must be a 6-digit number');
        }
        this._clientId = clientId;
    }

    set email(email) {
        if (!/^[A-z0-9]+@[A-z\.]+$/.test(email)) {
            throw TypeError('Invalid e-mail');
        }

        this._email = email;
    }

    set firstName(firstName) {
        const minLength = 3; //would be better to be static variables, but judge crashes
        const maxLength = 20;

        if(!this.hasValidLength(firstName, minLength, maxLength)) {
            throw TypeError(`First name must be between ${minLength} and ${maxLength} characters long`);
        }

        if (!this.containsOnlyLatinLetters(firstName)) {
            throw TypeError('First name must contain only Latin characters');
        }

        this._firstName = firstName;
    }

    set lastName(lastName) {
        const minLength = 3; //would be better to be static variables, but judge crashes
        const maxLength = 20;

        if(!this.hasValidLength(lastName, minLength, maxLength)) {
            throw TypeError(`Last name must be between ${minLength} and ${maxLength} characters long`);
        }

        if (!this.containsOnlyLatinLetters(lastName)) {
            throw TypeError('Last name must contain only Latin characters');
        }

        this._lastName = lastName;
    }

    hasValidLength(name, minLength, maxLength) {
        if (name.length < 3 || name > 20) {
            return false;
        } else {
            return true;
        }
    }

    containsOnlyLatinLetters(name) {
        if (!/^[A-z]+$/.test(name)) {
            return false;
        } else {
            return true;
        }
    }
}

// let acc = new CheckingAccount('123456', 'ivan@some.com', 'Ivan', 'P3trov')