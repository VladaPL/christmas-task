import {toysContainer} from "../../index";
import {createToysList} from "../createToysList";
import {filterValues} from "../filters";

export const createElement = ({ tagName, classNames = [], textContent = '', clickHandler, clickHandler2}) => {
  const element = document.createElement(tagName);
  element.classList.add(...classNames);
  element.innerText = textContent;
  if (typeof clickHandler === 'function') {
    element.addEventListener('click', clickHandler);
  }
  if (typeof clickHandler2 === 'function') {
    element.addEventListener('click', clickHandler2);
  }
  return element;
}

export const renderToysList = (model, container) => {
  container.innerHTML = "";

  const chosensToys = model.getToys();

  if (chosensToys) {
    const selectedNodeElements = createToysList(chosensToys);
    toysContainer.append(...selectedNodeElements);
  } else {
    toysContainer.innerHTML = "Ничего не найдено"; // сделать нормальным методом с добавлением отд элемента
  }
};
