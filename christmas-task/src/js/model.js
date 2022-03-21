export class Model {
  constructor(dataToys) {
    this._toys = dataToys;

    this._rangeCountItems = 4;

    this._filters = {
      shape: [],
      colors: [],
      size: [],
      favorite: [],
      years: [1940, 2020],
      amount: [1, 12],
    };
  }

  _getToysRange = () => {
    // получить игрушки согласно диапазону
    return this._toys.filter(({ year }) => {
      // вернуть массив игрушек, отфильтрованный по годам
      const [start, end] = this._filters.years;
      
      return year >= start && year <= end;
    });
  };

  // _getToysRange = () => {
  //   // получить игрушки согласно диапазону
  //   return this._toys.filter(({ year, count }) => {
  //     // вернуть массив игрушек, отфильтрованный по годам
  //     const [start, end] = this._filters.years;
  //     const [start2, end2] = this._filters.amount;
  //     return (year >= start && year <= end) && (count >= start2 && count <= end2);
  //   });
  // };

  // _getToysRange = () => { // ! Почему не работает с count?
  //   // получить игрушки согласно диапазону
  //   return this._toys.filter(({ count }) => {
  //     // вернуть массив игрушек, отфильтрованный по годам
  //     const [start, end] = this._filters.amount;
  //     return count >= start && count <= end;
  //   });
  // };

  getToys = () => {
    const isFilterNoActive = Object.values(this._filters).flat().length;
    // console.log(isFilterNoActive); // => 4, согласно указанным значениям в years & amount
    // Object.values() возвращает массив, чьи элементы это значения перечисляемых свойств найденных в объекте
    // Метод flat() возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth
    if (isFilterNoActive === this._rangeCountItems) return this._getToysRange(); // если фильтров нет - вернуть все игрушки!

    return this._getToysRange().filter((toy) => {
      return (
        this._filters.shape.includes(toy.shape) ||
        this._filters.colors.includes(toy.color) ||
        this._filters.size.includes(toy.size) ||
        this._filters.size.includes(toy.size) ||
        this._filters.favorite.includes(toy.favorite)
      );

      // if (this._filters.shape.includes(toy.shape)) return true;
      // if (this._filters.colors.includes(toy.color)) return true;
      // if (this._filters.size.includes(toy.size)) return true;
      // if (this._filters.favorite.includes(toy.favorite)) return true;
    });
  };

  changeRangeFilter = (type, range) => {
    if (type === "years") {
      this._filters.years = range;
    }
    if (type === "amount") {
      this._filters.amount = range;
    }
    console.log(range); //  ['1', '12'] и ['1940', '2020']
  };

  // type - тип фильтра, value - значение фильтра
  changeFilter = (type, value) => {
    const currentFilter = this._filters[type];

    if (currentFilter.includes(value)) {
      this._filters[type] = currentFilter.filter(
        (valueFilter) => valueFilter !== value // если значение выбранного фильтра не равно значению свойства игрушки
      );
    } else {
      currentFilter.push(value); // если значение выбранного фильтра равно значению свойства игрушки, то добавляем игрушку в массив текущего фильтра
    }
  };
}
