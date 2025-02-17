const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const getCurrentMonth = () => MONTHS[new Date().getMonth()];

const getMonth = (time) => MONTHS[new Date(time).getMonth()];

const getNextMonthDate = (date = new Date(Date.now()), day = date.getDate()) => {
    const month = date.getMonth();
    if(month == 12) {
        date.setFullYear(date.getFullYear(), 1, day);
    } else{
        date.setMonth(month+1, day);
    }
    return date;
}

export {MONTHS, getCurrentMonth, getMonth, getNextMonthDate};