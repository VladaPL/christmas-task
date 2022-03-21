import {createElement} from "./utils/utils";

const CARD_CONTENT = {
  name: "",
  count: "Количество:",
  year: "Год покупки:",
  shape: "Форма:",
  color: "Цвет:",
  size: "Размер:",
  favorite: "Любимая:",
  imgSrc: "",
};

export const createToy = (toy) => {
  const { name, count, year, shape, color, size, favorite, imgSrc, isChosen, num } = toy; // список названий переменных в {...} (деструктуризация).

  const classNameContainer = isChosen ? ["card-container", "chosen-toy-highlight"] : ["card-container"];

  const cardContainer = createElement({
    tagName: "div",
    classNames: classNameContainer,
  });

  cardContainer.setAttribute('data-id', num); // Добавляет новый атрибут

  const toyTitle = createElement({
    tagName: "h3",
    classNames: ["card-title"],
    textContent: `${CARD_CONTENT.name} ${name}`,
  });
  const toyCount = createElement({
    tagName: "p",
    classNames: ["card-property"],
    textContent: `${CARD_CONTENT.count} ${count}`,
  });
  const toyYear = createElement({
    tagName: "p",
    classNames: ["card-property"],
    textContent: `${CARD_CONTENT.year} ${year}`,
  });
  const toyShape = createElement({
    tagName: "p",
    classNames: ["card-property"],
    textContent: `${CARD_CONTENT.shape} ${shape}`,
  });
  const toyColor = createElement({
    tagName: "p",
    classNames: ["card-property"],
    textContent: `${CARD_CONTENT.color} ${color}`,
  });
  const toySize = createElement({
    tagName: "p",
    classNames: ["card-property"],
    textContent: `${CARD_CONTENT.size} ${size}`,
  });
  const toyFavorite = createElement({
    tagName: "p",
    classNames: ["card-property"],
    textContent: `${CARD_CONTENT.favorite} ${favorite}`,
  });
  const toyImg = createElement({
    tagName: "img",
    classNames: ["card-img"],
  });

  toyImg.src = imgSrc;

  cardContainer.append(
    toyTitle,
    toyCount,
    toyYear,
    toyShape,
    toyColor,
    toySize,
    toyFavorite,
    toyImg,
  );
  return cardContainer;
};

export const createToysList = (toysData) => {
  // массив объектов с данными об игрушках
  const result = toysData.map((toyData) => {
    return createToy(toyData);
  });
  return result;
};
