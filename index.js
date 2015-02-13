"use strict";

exports = module.exports;

/*
 Convert abbreviated day strings such as "mon", "tues" etc to "Monday", "Tuesday"
 @param string The day to convert
 @returns string or undefined
*/
exports.getDayString = function (day) {

    "use strict";

    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], i;

    if (typeof day === "string" && day.length > 0) {
        day = day.toLowerCase();
    } else if (typeof day === "number") {
        return days[day];
    } else {
        return;
    }

    for (i = 0; i < days.length; i += 1) {
        if (days[i].toLowerCase().indexOf(day) !== -1) {
            return days[i];
        }
    }

}

/*
 Convert abbreviated month strings such as "jan", "feb" etc to "January", "February"
 @param string The day to convert
 @returns string or undefined
*/
exports.getMonthString = function (month) {

    "use strict";

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], i;

    if (typeof month === "string" && month.length > 0) {
        month = month.toLowerCase();
    } else if (typeof month === "number") {
        return months[month];
    } else {
        return;
    }

    for (i = 0; i < months.length; i += 1) {
        if (months[i].toLowerCase().indexOf(month) !== -1) {
            return months[i];
        }
    }

}