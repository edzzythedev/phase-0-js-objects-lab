/**
 * Event Attendee Manager Lab
 *
 * This file contains the declaration of an Attendee Object and several
 * functions to manipulate its properties, fulfilling the requirements
 * of the lab tasks.
 */

// Task 2: Declare and Initialize an Attendee Object
// The attendee object holds properties like ID, name, event, ticket type, and price.
// Using the specific values requested: T001, Alice Smith, JavaScript Conference, VIP, 150.00
let attendee = {
    attendeeId: "T001",
    name: "Alice Smith",
    event: "JavaScript Conference",
    ticketType: "VIP",
    ticketPrice: 150.00
};


// Task 3: Create a Function to Log Attendee Name
const logAttendeeName = (attendeeObj) => {
    // FIX: Removed the descriptive string "Attendee Name: " so the test only receives the raw name.
    console.log(attendeeObj.name);
    return attendeeObj.name;
};


// Task 4: Create a Function to Log Ticket Price
const logTicketPrice = (attendeeObj) => {
    // FIX: Removed the descriptive string "Ticket Price: $" and the .toFixed(2) call.
    // The test expects the raw number value (150.00 or 150).
    console.log(attendeeObj.ticketPrice);
    return attendeeObj.ticketPrice;
};


// Task 5: Create a Function to Update Ticket Type
const updateTicketType = (attendeeObj, newType) => {
    // Assign a new value to the 'ticketType' property.
    attendeeObj.ticketType = newType;
    console.log(`Ticket Type Updated to: ${attendeeObj.ticketType}`);
};


// Task 6: Create a Function to Update Ticket Price
const updateTicketPrice = (attendeeObj, newPrice) => {
    // Assign a new value to the 'ticketPrice' property.
    attendeeObj.ticketPrice = newPrice;
    console.log(`Ticket Price Updated to: $${attendeeObj.ticketPrice.toFixed(2)}`);
};


// Task 7: Create a Function to Remove the Event Property
const removeEventProperty = (attendeeObj) => {
    // The 'delete' keyword is used to permanently remove a property from an object.
    const deletedEvent = attendeeObj.event;
    delete attendeeObj.event;
    console.log(`Removed event property: ${deletedEvent}`);
};


// Task 8: Create a Function to Add a Checked-in Property
const addCheckedInProperty = (attendeeObj) => {
    // We add a new property ('checkedIn') and set its value to true.
    attendeeObj.checkedIn = true;
    console.log(`Checked-in status added: ${attendeeObj.checkedIn}`);
};


// Export the necessary parts for testing and visibility
module.exports = {
    attendee,
    logAttendeeName,
    logTicketPrice,
    updateTicketType,
    updateTicketPrice,
    removeEventProperty,
    addCheckedInProperty
};