class HashStorage {
    constructor() {
      this.magazine_ = {}; 
    }
  
    addValue(key, value) {
      this.magazine_[key] = value;
    }
  
    getValue(key) {
      return this.magazine_[key];
    }
  
    deleteValue(key) {
      if(key in this.magazine_) {
        return delete this.magazine_[key];
      }
      return false
     
    }
  
    getKeys() {
      return Object.keys(this.magazine_);
    }
  }

  const coctailsStorage = new HashStorage();
  
  coctailsStorage.addValue('Маргарита', 
        {
            'алкогольный': true, 
            'состав': 'Водка Finlandia 50мл, Кофейный ликер 25мл, Лед в кубиках 120 г',
            'рецепт приготовления' : 'Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25 мл, водку 50 мл и размешай коктейльной ложкой'
        } 
    );
    coctailsStorage.addValue('Пеликан', 
        {
            'алкогольный': false, 
            'состав': 'Гренадин Monin 10мл, Клубничный сироп Monin 10мл, Персиковый сок 150мл, Лимонный сок 15мл, Банан 110г, Клубника 50г, Дробленый лед 60г',
            'рецепт приготовления' : 'Положи в блендер очищенную и нарезанную половинку банана и клубнику 2 ягоды. Налей лимонный сок 15 мл, гренадин 10 мл, клубничный сироп 10 мл и персиковый сок 150 мл. Добавь в блендер совок дробленого льда и взбей. Перелей в хайбол. Укрась кружком банана и половинкой клубники на коктейльной шпажке'
        } 
    );
  
const addCoctailButton = document.getElementById('add-coctail');
const allCoctailsButton = document.getElementById('all-coctails');
const deleteCoctailsButton = document.getElementById('delete-coctail');
const getRecipeCoctailsButton = document.getElementById('get-coctail');



addCoctailButton.onclick = function () {
  const name = prompt('Введите название коктеля');
  const isAlcohol = prompt('Напиток алкогольный?');
  const contain = prompt('Из чего состоит?:')
  const recipe = prompt('Введите рецепт коктеля:');
  
  coctailsStorage.addValue(name, {name, isAlcohol,recipe,contain });
}

allCoctailsButton.onclick = function() {
    alert(`Весь список коктейлей:
     ${coctailsStorage.getKeys()}`) 
}

deleteCoctailsButton.onclick = function() {
    const name = prompt('Какой коктейль хотите удалить?');
    coctailsStorage.deleteValue(name)
}

getRecipeCoctailsButton.onclick = function() {
    const name = prompt('О каком коктейле вы хотите узнать?');
    console.log(coctailsStorage.getValue(name))
}