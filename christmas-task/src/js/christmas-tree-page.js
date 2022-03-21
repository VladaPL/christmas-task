// import { chrTreePage } from "../index";
// import { createElement } from "./utils/utils";
// import data from "./utils/data";


// console.log(chrTreePage);
// console.log("где страница?");

// const fragment = document.createDocumentFragment();

// // ! СТРАНИЦА ЕЛКА (добавление элементов)

// const leftBlockPage = createElement({
//   tagName: "div",
//   classNames: ["left-block"],
//   textContent: "Выбери ёлку и фон",
// });
// const centerBlockPage = createElement({
//   tagName: "div",
//   classNames: ["center-block"],
//   textContent: "Укрась ёлку",
// });
// const rightBlockPage = createElement({
//   tagName: "div",
//   classNames: ["right-block"],
// });

// chrTreePage.append(leftBlockPage, centerBlockPage, rightBlockPage);

// const namesClassOfWrappers = [
//   ["control", "control-wrapper"],
//   ["control", "trees-wrapper"],
//   ["control", "background-wrapper"],
//   ["control", "lights-wrapper"],
// ];

// namesClassOfWrappers.forEach((nameClassOfWrapper) => {
//   const divElem = createElement({
//     tagName: "div",
//     classNames: nameClassOfWrapper,
//   });

//   fragment.appendChild(divElem);
// });

// leftBlockPage.appendChild(fragment);

// // ! Выбери елку

// const namesClassOfTrees = [
//   ["trees", "first-tree"],
//   ["trees", "second-tree"],
//   ["trees", "third-tree"],
//   ["trees", "fourth-tree"],
//   ["trees", "fifth-tree"],
//   ["trees", "sixth-tree"],
// ];

// namesClassOfTrees.forEach((nameClassOfTree) => {
//   const divElem = createElement({
//     tagName: "div",
//     classNames: nameClassOfTree,
//   });
//   fragment.appendChild(divElem);
// });

// const treesWrapper = leftBlockPage.querySelector(".trees-wrapper");

// treesWrapper.appendChild(fragment);

// // ! Выбери фон
// const namesClassOfBg = [
//   ["bg", "first-bg"],
//   ["bg", "second-bg"],
//   ["bg", "third-bg"],
//   ["bg", "fourth-bg"],
//   ["bg", "fifth-bg"],
//   ["bg", "sixth-bg"],
//   ["bg", "seventh-bg"],
//   ["bg", "eighth-bg"],
//   ["bg", "ninth-bg"],
//   ["bg", "tenth-bg"],
// ];

// namesClassOfBg.forEach((nameClassOfBg) => {
//   const divElem = createElement({
//     tagName: "div",
//     classNames: nameClassOfBg,
//   });
//   fragment.appendChild(divElem);
// });

// const backgroundWrapper = leftBlockPage.querySelector(".background-wrapper");

// backgroundWrapper.appendChild(fragment);

// // ! Контейнер для избранных игрушек:

// const containerChosenToys = createElement({
//   tagName: "div",
//   classNames: ["container-chosen-toys"],
//   textContent: "ИГРУШКИ",
// });
// rightBlockPage.appendChild(containerChosenToys);

// // ! Укрась елку (средний блок)

// const bgForDecor = createElement({
//   tagName: "div",
//   classNames: ["bg-decor"],
// });

// const treeForDecor = createElement({
//   tagName: "div",
//   classNames: ["tree-decor"],
// });

// centerBlockPage.appendChild(bgForDecor);
// centerBlockPage.appendChild(treeForDecor);
