import "./normalize.css";
import "./style.css";
import "./rSlider.min.css";
import "./js/rSlider.min";
import { createElement, renderToysList } from "./js/utils/utils";
import data from "./js/utils/data";
import { filterValues } from "./js/filters";
import { addColorActive } from "./js/filters";
import { addShapeActive } from "./js/filters";
import { Model } from "./js/model";
import { createToysList } from "./js/createToysList";
// import "./js/christmas-tree-page";

const model = new Model(data);

const fragment = document.createDocumentFragment();
const mainSection = document.querySelector(".main-wrapper");

const buttonLogo = document.querySelector(".logo");
const buttonToys = document.querySelector(".nav-toys");
const buttonChrTree = document.querySelector(".nav-christm-tree");

// ! СТАРТОВАЯ СТРАНИЦА (ф-ия createElement в utils.js)

export const startPage = createElement({
  tagName: "div",
  classNames: ["start-page-container"],
});

const titleContainer = createElement({
  tagName: "div",
  classNames: ["title-container"],
});

const mainHeading = createElement({
  tagName: "h1",
  classNames: ["main-heading"],
  textContent: "Новогодняя игра",
});

const nameGame = createElement({
  tagName: "h2",
  classNames: ["name-game"],
  textContent: "«Наряди ёлку»",
});

const buttonStart = createElement({
  tagName: "button",
  classNames: ["btn-start"],
  textContent: "Начать",
});

const ballLeft = createElement({
  tagName: "div",
  classNames: ["bg-ball-left"],
});

const ballRight = createElement({
  tagName: "div",
  classNames: ["bg-ball-right"],
});

startPage.appendChild(ballLeft);
startPage.appendChild(ballRight);
startPage.appendChild(titleContainer);
startPage.appendChild(buttonStart);

titleContainer.appendChild(mainHeading);
titleContainer.appendChild(nameGame);

// ! СТРАНИЦА ИГРУШКИ (карточки в модуле createToysList.js)

export const toysPage = createElement({
  tagName: "div",
  classNames: ["toys-page"],
});
const filtersContainer = createElement({
  tagName: "div",
  classNames: ["filters-container"],
});
const filtersValueContainer = createElement({
  tagName: "div",
  classNames: ["filters-value-container"],
  textContent: "ФИЛЬТРЫ ПО ЗНАЧЕНИЮ",
});
const filtersRangeContainer = createElement({
  tagName: "div",
  classNames: ["filters-range-container"],
  textContent: "ФИЛЬТРЫ ПО ДИАПАЗОНУ",
});
const shapeContainer = createElement({
  tagName: "div",
  classNames: ["shape-container"],
  textContent: "Форма:",
});
const colorContainer = createElement({
  tagName: "div",
  classNames: ["color-container"],
  textContent: "Цвет:",
});
const sizeContainer = createElement({
  tagName: "div",
  classNames: ["size-container"],
  textContent: "Размер:",
});
const favoriteContainer = createElement({
  tagName: "div",
  classNames: ["favorite-container"],
  textContent: "Только любимые:",
});
const filtersAlphabetContainer = createElement({
  tagName: "div",
  classNames: ["filters-alphabet-container"],
  textContent: "СОРТИРОВКА",
});
export const toysContainer = createElement({
  tagName: "div",
  classNames: ["toys-container"],
});

// ! Добавление фильтров в секцию filtersValueContainer

const namesClassOfButtonsShape = [
  ["shape", "shape-ball"],
  ["shape", "shape-bell"],
  ["shape", "shape-cone"],
  ["shape", "shape-snowflake"],
  ["shape", "shape-toy"],
];

const shapeBtn = {};

namesClassOfButtonsShape.forEach((nameClassOfButtonShape) => {
  const buttonsShape = createElement({
    tagName: "button",
    classNames: nameClassOfButtonShape,
    clickHandler: (evt) => {
      filterValues(model, evt.target);
      renderToysList(model, toysContainer);
    },
    clickHandler2: addShapeActive,
  });
  shapeBtn[nameClassOfButtonShape[1]] = buttonsShape;

  fragment.appendChild(buttonsShape);
});

shapeContainer.appendChild(fragment);
// ---------------------------------------------------------
const namesClassOfButtonsColor = [
  ["сolor", "color-white"],
  ["сolor", "color-yellow"],
  ["сolor", "color-red"],
  ["сolor", "color-blue"],
  ["сolor", "color-green"],
];

const colorBtn = {}; // собирает кнопки в объект для удобного доступа к кнопкам

namesClassOfButtonsColor.forEach((nameClassOfButtonColor) => {
  const buttonsColor = createElement({
    tagName: "button",
    classNames: nameClassOfButtonColor,
    clickHandler: (evt) => {
      filterValues(model, evt.target);
      renderToysList(model, toysContainer);
    },
    clickHandler2: addColorActive,
    // clickHandler: () => {
    //   filterValues(model);
    //   // пишешь ещё сколько угодно вызовов обработчиков
    //   addColorActive;
    // },
  });
  colorBtn[nameClassOfButtonColor[1]] = buttonsColor; // деструктуризация
  // console.log(buttonsColor); // все кнопки

  fragment.appendChild(buttonsColor);
});
// colorBtn['color-white'].hidden = true;
// console.log(colorBtn["color-white"]); // пример доступа к каждой кнопке

colorContainer.appendChild(fragment);
// ---------------------------------------------------------
const namesClassOfButtonsSize = [
  ["size", "size-big"],
  ["size", "size-middle"],
  ["size", "size-small"],
];

const sizeBtn = {};

namesClassOfButtonsSize.forEach((nameClassOfButtonSize) => {
  const buttonsSize = createElement({
    tagName: "button",
    classNames: nameClassOfButtonSize,
    clickHandler: (evt) => {
      filterValues(model, evt.target);
      renderToysList(model, toysContainer);
    },
    clickHandler2: addShapeActive,
  });
  sizeBtn[nameClassOfButtonSize[1]] = buttonsSize;

  fragment.appendChild(buttonsSize);
});

sizeContainer.appendChild(fragment);

const namesClassOfInputFavorite = [["favorite-toy"]];

namesClassOfInputFavorite.forEach((nameClassOfInputFavorite) => {
  const inputFavorite = createElement({
    tagName: "input",
    classNames: nameClassOfInputFavorite,
    clickHandler: (evt) => {
      filterValues(model, evt.target);
      renderToysList(model, toysContainer);
    },
  });
  inputFavorite.setAttribute("type", "checkbox");
  fragment.appendChild(inputFavorite);
});

favoriteContainer.appendChild(fragment);

toysPage.append(filtersContainer, toysContainer);
filtersContainer.append(
  filtersValueContainer,
  filtersRangeContainer,
  filtersAlphabetContainer
);
filtersValueContainer.append(
  shapeContainer,
  colorContainer,
  sizeContainer,
  favoriteContainer
);

// ! Добавление фильтров в секцию filtersRangeContainer

// AMOUNT-RANGE-SLIDER start

const amountTitle = createElement({
  tagName: "div",
  classNames: ["amount-title"],
  textContent: "Количество экземпляров:",
});

filtersRangeContainer.append(amountTitle);

const amountContainer = createElement({
  tagName: "div",
  classNames: ["amount-container"],
});

filtersRangeContainer.append(amountContainer);

const amountInput = createElement({
  tagName: "input",
  classNames: ["amount-input"],
});

amountInput.type = "text";
amountInput.id = "sampleSlider";

amountContainer.appendChild(amountInput);

const amountSlider = new rSlider({
  target: amountInput,
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  range: true,
  tooltip: true,
  scale: false,
  labels: false,
  set: [1, 12],
  onChange: (values) => {
    model.changeRangeFilter("amount", values.split(","));
    renderToysList(model, toysContainer);
  },
});

const amountValues = amountSlider.values;
console.log(amountValues); // {start: 0, end: 11}

// AMOUNT-RANGE-SLIDER end

// YEAR-RANGE-SLIDER start

const yearTitle = createElement({
  tagName: "div",
  classNames: ["year-title"],
  textContent: "Год приобретения:",
});

filtersRangeContainer.append(yearTitle);

const yearContainer = createElement({
  tagName: "div",
  classNames: ["year-container"],
});

filtersRangeContainer.appendChild(yearContainer);

const yearInput = createElement({
  tagName: "input",
  classNames: ["year-input"],
});

yearInput.type = "text";
//yearInput.id = "sampleSlider"; // Наличие или отсутствие id не устраняет баг ползунков

console.log(yearInput);

yearContainer.appendChild(yearInput);

const yearSlider = new rSlider({
  target: yearInput,
  values: [1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020],
  range: true,
  tooltip: true,
  scale: false,
  labels: false,
  set: [1940, 2020],
  onChange: (values) => {
    model.changeRangeFilter("years", values.split(","));
    renderToysList(model, toysContainer);
  },
});

const yearValues = yearSlider.values;
// console.log(yearValues); // {start: 0, end: 8}
// YEAR-RANGE-SLIDER end

// ! Добавление фильтров в секцию filtersAlphabetContainer

const alphabetContainer = createElement({
  tagName: "select",
  classNames: ["alphabet-select"],
  textContent: "Сортировка от а до я",
});

const buttonReset = createElement({
  tagName: "button",
  classNames: ["button-reset"],
  textContent: "Сброс фильтров",
});

filtersAlphabetContainer.appendChild(alphabetContainer);
filtersAlphabetContainer.appendChild(buttonReset);

// ! ДОБАВЛЕНИЕ КАРТОЧЕК С ИГРУШКАМИ

renderToysList(model, toysContainer);

// ! ПЕРЕКЛЮЧЕНИЕ МЕЖДУ СТРНИЦАМИ

export const chrTreePage = createElement({
  tagName: "div",
  classNames: ["chr-tree-page"],
  addChrTreePage,
});

function addStartPage() {
  mainSection.innerHTML = "";
  mainSection.appendChild(startPage);
}

function addToysPage() {
  mainSection.innerHTML = "";
  mainSection.appendChild(toysPage);
}

export function addChrTreePage() {
  mainSection.innerHTML = "";
  mainSection.appendChild(chrTreePage);
}

buttonChrTree.addEventListener("click", addChrTreePage);
buttonLogo.addEventListener("click", addStartPage);
buttonStart.addEventListener("click", addToysPage);
buttonToys.addEventListener("click", addToysPage);

document.addEventListener("DOMContentLoaded", addStartPage);

// ! Mеняем значение isChosen false на true:

toysContainer.addEventListener("click", (event) => {
  const cardContainer = event.target.closest(".card-container"); // Метод .closest() возвращает ближайший родительский элемент

  if (!cardContainer) return;

  const id = cardContainer.getAttribute("data-id"); // getAttribute() возвращает значение указанного атрибута элемента

  const dataCurrentToy = data.find((toyData) => toyData.num === id); // находим игрушку в data, которая соответсвует id выбранного cardContainer

  dataCurrentToy.isChosen = !dataCurrentToy.isChosen; // меняем значение isChosen false на true

  toysContainer.innerHTML = ""; // очищаем контейнер с игрушками

  const toysData = model.getToys();
  const toysNodeElements = createToysList(toysData);
  toysContainer.append(...toysNodeElements);
});


// ! СТРАНИЦА ЕЛКА (добавление элементов)

const leftBlockPage = createElement({
  tagName: "div",
  classNames: ["left-block"],
  textContent: "Выбери ёлку и фон",
});
const centerBlockPage = createElement({
  tagName: "div",
  classNames: ["center-block"],
  textContent: "Укрась ёлку",
});
const rightBlockPage = createElement({
  tagName: "div",
  classNames: ["right-block"],
});
chrTreePage.append(leftBlockPage, centerBlockPage, rightBlockPage);

const namesClassOfWrappers = [
  ["control", "control-wrapper"],
  ["control", "trees-wrapper"],
  ["control", "background-wrapper"],
  ["control", "lights-wrapper"],
];

namesClassOfWrappers.forEach((nameClassOfWrapper) => {
  const divElem = createElement({
    tagName: "div",
    classNames: nameClassOfWrapper,
  });

  fragment.appendChild(divElem);
});

leftBlockPage.appendChild(fragment);

// ! Выбери елку

const namesClassOfTrees = [
  ["trees", "first-tree"],
  ["trees", "second-tree"],
  ["trees", "third-tree"],
  ["trees", "fourth-tree"],
  ["trees", "fifth-tree"],
  ["trees", "sixth-tree"],
];

namesClassOfTrees.forEach((nameClassOfTree) => {
  const divElem = createElement({
    tagName: "div",
    classNames: nameClassOfTree,
  });
  fragment.appendChild(divElem);
});

const treesWrapper = leftBlockPage.querySelector(".trees-wrapper");

treesWrapper.appendChild(fragment);

// ! Выбери фон
const namesClassOfBg = [
  ["bg", "first-bg"],
  ["bg", "second-bg"],
  ["bg", "third-bg"],
  ["bg", "fourth-bg"],
  ["bg", "fifth-bg"],
  ["bg", "sixth-bg"],
  ["bg", "seventh-bg"],
  ["bg", "eighth-bg"],
  ["bg", "ninth-bg"],
  ["bg", "tenth-bg"],
];

namesClassOfBg.forEach((nameClassOfBg) => {
  const divElem = createElement({
    tagName: "div",
    classNames: nameClassOfBg,
  });
  fragment.appendChild(divElem);
});

const backgroundWrapper = leftBlockPage.querySelector(".background-wrapper");

backgroundWrapper.appendChild(fragment);

// ! Контейнер для избранных игрушек:

const containerChosenToys = createElement({
  tagName: "div",
  classNames: ["container-chosen-toys"],
  textContent: "ИГРУШКИ",
});
rightBlockPage.appendChild(containerChosenToys);

// ! Укрась елку (средний блок)

const bgForDecor = createElement({
  tagName: "div",
  classNames: ["bg-decor"],
});

const treeForDecor = createElement({
  tagName: "div",
  classNames: ["tree-decor"],
});

centerBlockPage.appendChild(bgForDecor);
centerBlockPage.appendChild(treeForDecor);
