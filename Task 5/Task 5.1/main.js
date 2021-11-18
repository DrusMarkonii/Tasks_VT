
function createCalendar(elem, year, month) {

    

    let mon = month - 1;
    let d = new Date(year, mon);
   

    let table = '<table><caption id="title">Календарь</caption><tr><th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th><th>ВС</th></tr><tr>';
    
    
    for (let i = 0; i < getDay(d); i++) {
      table += '<td id="clearCell"></td>';
    }

   
    while (d.getMonth() == mon) {
      table += '<td>' + d.getDate() + '</td>';

      if (getDay(d) % 7 == 6) {
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<td id="clearCell"></td>';
      }
    }

   
    table += '</tr></table>';

    elem.innerHTML = table;
  }

  function getDay(date) { 
    let day = date.getDay();
    if (day == 0) day = 7; 
    return day - 1;
  }

  createCalendar(calendar, whatYear = '2021', whatMonth="11");


changData.onclick = function () {
    let whatMonth = prompt("Какой сейчас месяц?", 11);
    let whatYear = prompt("Какой сейчас год?", 2021);
    console.log('yes')
    createCalendar(calendar, whatYear, whatMonth);

}

