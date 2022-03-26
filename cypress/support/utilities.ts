
//this function returns specsfic date in the past. It accepts a number
export function setASpecificDate(specificDay: number) {
    //set a specific day
    let days = specificDay; // Days you want to subtract
    let date = new Date();
    let last = new Date(date.getTime() - ((days) * 24 * 60 * 60 * 1000));
    let day = String(last.getDate()).padStart(2, '0')
    let month = String(last.getMonth() + 1).padStart(2, '0'); //January is 0!

    let year = last.getFullYear();
    return day + '.' + month + '.' + year;

}