
// class MyDate {

//     constructor(year, month = 0, day = 1, hour = 0, minute = 0) {

//         if (!year === 0) {
//             return new Date(0)
//         }
//         if (!year) {
//             return new Date()
//         }
//         this._year = year;
//         this._month = month;
//         this._monthsName = ["hunvar", "petrvar", "mart", "april", "mayis", "hunis", "hulis", "ogostos", "september", "hoktember", "noyember", "dektember"]
//         this._day = day;
//         this.dayTitle = ["erkushabti", "ereqshabti", "choreqshabti", "hingshabti", "urbat", "shabat", "kiraki"]
//         this._hour = hour;
//         this._minute = minute;

        
// this.getYear = function () {
//     return this._year
// }
// this.getMonth = function () {
//     return this._month
// }
// this.getDay = function () {
//     return this._day
// }
// this.getHours = function () {
//     return this._hour
// }
// this.getMinutes = function () {
//     return this._minute

// }

// this.setMonth = function (value) {
//     this._month = value
// }
// this.day = function (value) {
//     this._day = value
// }
// this.setYear = function (value) {
//     this._year = value
// }

// this.setHour = function (value) {
//     this._hour = value
// }


// this.setMinute = function (value) {
//     const addHours = parseInt(value / 60);
//     this.second = value % 60;
//     this.setHour(this.getHour() + addHours)
// }

// Object.defineProperty(this, "year", {
//     set: (value) => {
//         this._year = value;
//     },
//     get: () => {
//         return this._month
//     }
// })

// Object.defineProperty(this, "month", {
//     set: (value) => {
//         this._year += parseInt(value / 12)
//         this._month = value % 12;
//     },
//     get: () => {
//         return this._month
//     }
// })

// Object.defineProperty(this, "day", {
//     set: (value) => {
//         this._month += Math.floor(value / 30)
//         this._day = value % 30;
//     },
//     get: () => {
//         return this._day
//     }
// })

// Object.defineProperty(this, "hour", {
//     set: (value) => {
//         this._day += Math.floor(value / 24)
//         this._hour = value % 24;
//     },
//     get: () => {
//         return this._hour
//     }
// })



// Object.defineProperty(this, "minute", {
//     set: (value) => {
//         this._hour += Math.floor(value / 60)
//         this._minute = value % 60;
//     },
//     get: () => {
//         return this._minute
//     }
// })
// this.toString = function () {
//     return `${this.dayTitle[day]},${this.year}.${this.day}.${this._monthsName[month]}${this.month}, ${hour}:${minute} `
// }

//     }  
    

// }

// let ab = new MyDate(2023, 11, 15, 14, 30) // stex unim undefined  kan erevi petq e this.toString-i returni mej poxelu ban ka

// //console.log(ab);
// console.log(ab.toString());




// nuyn@ aranc Object.defineProperty-neri


class MyDate1 {
    constructor(year, month = 0, day = 1, hour = 0, minute = 0) {
      if (!year === 0) {
        return new Date(0);
      }
      if (!year) {
        return new Date();
      }
      this._year = year;
      this._month = month;
      this._monthsName = ['hunvar', 'petrvar', 'mart', 'april', 'mayis', 'hunis', 'hulis', 'ogostos', 'september', 'hoktember', 'noyember', 'dektember'];
      this._day = day;
      this.dayTitle = ['erkushabti', 'ereqshabti', 'choreqshabti', 'hingshabti', 'urbat', 'shabat', 'kiraki'];
      this._hour = hour;
      this._minute = minute;
  
      this.getFullYear = function () {
        return this._year;
      };
      this.getHours = function () {
        return this._hour;
      };
      this.getMinutes = function () {
        return this._minute;
      };
      this.setMonth = function (value) {
        this._year += parseInt(value / 12);
        this._month = value % 12;
      };
      this.day = function (value) {
        this._month += Math.floor(value / 30);
        this._day = value % 30;
      };
      this.setHour = function (value) {
        this._day = Math.floor(value / 24);
        this._hour = value % 24;
      };
      this.setMinute = function (value) {
        this._hour += Math.floor(value / 60);
        this._minute = value % 60;
      };
      this.setMonth(this._month);
      this.getFullYear(this._year);
      this.day(this._day);
      this.setMinute(this._minute);
      this.setHour(this._hour);
      this.toString = function () {
        return `${this.dayTitle[this._day]},${this._year}.${this._day}.${this._monthsName[this._month]}, ${this._hour}:${this._minute} `;
      };
    }
  }
  let x = new MyDate1(2023, 50, 47, 70, 90);
  
  console.log(x.toString());
  
  