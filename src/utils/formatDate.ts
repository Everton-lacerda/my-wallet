const formatDate = (date: string): string => {
    //  convert date string in date valid
    const dateFormatted = new Date(date);

    //  get day, month, year in the methods
    // month add + 1 becase month start 0 (janeiro = 0) add + 1 solves the problem 
    // put on the number zero before numbers from one the nine, xx/xx/xxxx
    const day = dateFormatted.getDate() > 9 ? dateFormatted.getDate() : `0${dateFormatted.getDate()}`;
    const month = dateFormatted.getMonth() + 1 > 9 ? dateFormatted.getMonth() + 1  : `0${dateFormatted.getMonth() + 1 }`;
    const year = dateFormatted.getFullYear();


    return `${day}/${month}/${year}`
};

export default formatDate;

