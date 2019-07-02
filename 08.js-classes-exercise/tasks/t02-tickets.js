/**
 * @param arrayOfTicketInformation {Array}
 * @param sortCriteria {String}
 */
function ticketsSolution(arrayOfTicketInformation, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const tickets = arrayOfTicketInformation.map(ticketInfo => {
        const ticketTokens = ticketInfo.split('|');
        return new Ticket(ticketTokens[0], +ticketTokens[1], ticketTokens[2]);
    }).sort((t1, t2) => {
        try {
            return t1[sortCriteria].localeCompare(t2[sortCriteria]);
        } catch (e) {
            return t1[sortCriteria] - t2[sortCriteria];
        }
    });

    return tickets;
}


// console.log(ticketsSolution(['Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'],
//     'destination'
// ));