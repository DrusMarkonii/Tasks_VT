let getUserLastName;
let getUserFirstName;
let getUserMiddleName;
let getUserAge;
let userGender;

do {
    getUserLastName = prompt('Назовите вашу Фамилию', 'Макаревич');
} while (
    +getUserLastName || 
    getUserLastName.length > 15 || 
    !isNaN(getUserLastName)
  )

do {
    getUserFirstName = prompt('Назовите ваше Имя', 'Андрей');
} while (
    +getUserFirstName || 
    getUserFirstName.length > 15 || 
    !isNaN(getUserFirstName)
  )

do {
    getUserMiddleName = prompt('Назовите ваше Отчество', 'Васильевич');
} while (
    +getUserMiddleName || 
    getUserMiddleName.length > 15 || 
    !isNaN(getUserMiddleName)
    )


do {
    getUserAge = prompt('Сколько вам полных лет', 23)
} while (
    getUserAge <= 0 || 
    isNaN(getUserAge) || 
    getUserAge >= 100
    )

userGender = confirm('Ваш пол - мужской?') 



alert(` 
        Ваше ФИО: ${getUserLastName} ${getUserFirstName} ${getUserMiddleName} 
        Ваш возраст в годах: ${getUserAge} 
        Ваш возраст в днях: ${getUserAge * 365} 
        Вы ${getUserAge >= 18 ? 'уже совершеннолетний' : 'еще несовершеннолетний'} 
        Ваш пол: ${getUserAge ? 'мужской':'женский'} 
        Вы на пенсии: ${getUserAge >= 60 ? 'да' : 'нет'}
     `)