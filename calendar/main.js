
const now = new Date();
let currenYearText = now.getFullYear();




function createCalendar(elem, year, month) {

    const monthForJs = month - 1;
    const currentDate = new Date(year, monthForJs);
    const currenYearText = currentDate.getFullYear();
    const currentMonthText = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let headerTable = '<div id="title">Календарь</div>';
    const leftButtonsControlPanal = 
        `<button id="prevYear"><<</button>
         <button id="prevMonth"><</button>`;
    const currentMonthControlPanel = ` ${currentMonthText[monthForJs]} `;
    const currentYearControlPanel = ` ${currenYearText} `;
    const RightButtonsControlPanal = 
        `<button id="nextMonth">></button>
         <button id="nextYear">>></button>`;

    let controlPanal = `<div id="controlPanel">  ${leftButtonsControlPanal}  ${currentMonthControlPanel}  ${currentYearControlPanel}  ${RightButtonsControlPanal} </div>`;
    
    let tableDefault = `${headerTable} ${controlPanal} 
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

  createCalendar(calendar, whatYear = '2021', whatMonth="11");



changeData.onclick = function () {
    const whatMonth = prompt("Выберите месяц?", 11);
    const whatYear = prompt("Выберите год?", 2021);
    createCalendar(calendar, whatYear, whatMonth);
};


const prevYearButton = document.querySelector('#prevYear');
const prevMonthButton = document.querySelector('#prevMonth');

const minusYear = function() {
  currenYearText--;
  createCalendar(calendar, currenYearText, whatMonth);
  
}

const minusMonth= function() {
  console.log(currentMonthText)
  createCalendar(calendar, currenYearText, whatMonth--);
  
}

prevYearButton.addEventListener('click', minusYear)
prevMonthButton.addEventListener('click', minusMonth)


