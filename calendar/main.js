
const now = new Date();
let currenYear = now.getFullYear();
let currentMonth = now.getMonth() + 1;



const displaySelect = (() => {
  const selectMonth = document.querySelector('.monthSelect');
  const selectYear = document.querySelector('.yearSelect');

  const monthArr = ['Select Month', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const now = new Date();

  monthArr.forEach((item, index) => {
    selectMonth.innerHTML += `<option value="${index}">${item}</option>`
  });

  selectYear.innerHTML = '<option value="0">Select Year</option>'
  for (let i = 1980; i <= now.getFullYear(); i++) {
    selectYear.innerHTML += `<option value="${i}">${i}</option>`
  }
})();

function createCalendar(elem, year, month) {

    const monthForJs = month - 1;
    const currentDate = new Date(year, monthForJs);
    const currenYearText = currentDate.getFullYear();
    const currentMonthText = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    let headerTable = '<div id="title">Календарь</div>';


    const currentMonthControlPanel = ` ${currentMonthText[monthForJs]} `;
    const currentYearControlPanel = ` ${currenYearText} `;

    
    let controlPanal = `<div id="controlPanel">   ${currentMonthControlPanel}  ${currentYearControlPanel}   </div>`;
    
    let  tableDefault = `${headerTable} ${controlPanal} 
      <table>
        <tr>
          <th>Mo</th>
          <th>Tu</th>
          <th>We</th>
          <th>Th</th>
          <th>Fr</th>
          <th id="Weekend">Sa</th>
          <th id="Weekend">Su</th>
        </tr>
        <tr>`;
    
    for (let i = 0; i < getDay(currentDate); i++) {
      tableDefault += '<td id="clearCell"></td>';
    };

    while (currentDate.getMonth() === monthForJs) {
     
      tableDefault += '<td>' + currentDate.getDate() + '</td>';



      if (getDay(currentDate) % 7 === 6) {
        tableDefault += '</tr><tr>';
      }

      currentDate.setDate(currentDate.getDate() + 1);
    };

    if (getDay(currentDate) !== 0) {
      for (let i = getDay(currentDate); i < 7; i++) {
        tableDefault += '<td id="clearCell"></td>';
      }
    }

    tableDefault += '</tr></table>';

    elem.innerHTML = tableDefault;

  }

  function getDay(date) { 
    let day = date.getDay();
    if (day === 0) {
      day = 7; 
    };
    return day - 1;
  }

  
  createCalendar(calendar, currenYear, currentMonth);



changeData.onclick = function () {
    const whatMonth = prompt("Выберите месяц?", 11);
    const whatYear = prompt("Выберите год?", 2021);
    createCalendar(calendar, whatYear, whatMonth);
};


const prevYearButton = document.querySelector('#prevYear');
const prevMonthButton = document.querySelector('#prevMonth');
const nextYearButton = document.querySelector('#nextYear');
const nextMonthButton = document.querySelector('#nextMonth');

const minusYear = function() {
  createCalendar(calendar, currenYear-- , currentMonth);
  
}

const plusYear = function() {
  createCalendar(calendar, currenYear++, currentMonth);
}

const minusMonth = function() {
  createCalendar(calendar, currenYear, currentMonth--);
}

const plusMonth = function () {
  createCalendar(calendar, currenYear, currentMonth++);
}

prevYearButton.addEventListener('click', minusYear);
prevMonthButton.addEventListener('click', minusMonth);
nextMonthButton.addEventListener('click', plusMonth);
nextYearButton.addEventListener('click', plusYear);


// class DateHandler {
//   constructor() {
//     this.date = new Date();
//     this.month = this.date.getMonth();
//     this.year = this.date.getFullYear(); 
//   }

//   getMonth() {
//     return this.month;
//   }

//   getDays() {
//     const daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
//     const firstDayInMonth = new Date(this.year, this.month, 1).getDay();
//     const prevMonthDaysRemains = this.getPrevMonthDaysRemains(firstDayInMonth);
//     const currentMonthDays = this.getCurrentMonthDays(daysInMonth);
//     const nextMonthDaysremains = this.getNextMonthDaysRemains(prevMonthDaysRemains, currentMonthDays);
    
//     return prevMonthDaysRemains.concat(currentMonthDays).concat(nextMonthDaysremains);
//   }

//   getNextMonthDaysRemains(lastMonthRemains, currentMonthDays) {
//     const daysLenght = lastMonthRemains.lenght + currentMonthDays.lenght;
//     if(daysLenght % 7 === 0 ) {
//       return [];
//     }

//     const getNextMonthDaysRemains = (Math.ceil(daysLenght / 7 * 7) - daysLenght);
//     const daysInArr = [];
//     for (let i = 1; i <= getNextMonthDaysRemains; i++) {
//       daysInArr.push({
//         day: i
//       });
//     }

//     return daysInArr;
//   }

//   getCurrentMonthDays(daysInArr) {
//     const days = [];

//     for (let i = 1; i <= daysInMonth; i++) {
//       days.push({
//         day: 1,
//         currMonth: true
//       });
//     }

//     return days;
//   }

//   getPrevMonthDaysRemains(firstDayInMonth) {
//     const lastMonthRemains = [];

//     if(firstDayInMonth !== 1) {
//       const daysInPrevMonth = new Date(this.year, this.month, 0).getDate();
//       const diff = (firstDayInMonth || 7) - 1;

//       for(let i = diff - 1; i >= 0; i--) {
//         lastMonthRemains.push({
//           day: daysInPrevMonth - i
//         });
//       }
//     }

//     return lastMonthRemains;
//   }

//   getYear() {
//     return this.year;
//   }

//   setYear(num) {
//     this.year += num;
//   }

//   setMonth(num) {
//     this.month += num;

//     if(this.month > 11) {
//       this.month = 0;
//       this.setYear(1);
//     }

//     if(this.month < 0) {
//       this.month = 11;
//       this.setYear(-1);
//     }
//   }

// }

// const Calendar = new DateHandler();

// Calendar.getDays()


