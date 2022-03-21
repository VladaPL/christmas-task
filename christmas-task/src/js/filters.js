import data from "./utils/data";

//import { containerChosenToys } from "../index";
//import { toysPage } from "../index";
import { toysContainer } from "../index";
import { createElement } from "./utils/utils";
import { createToysList } from "./createToysList";

export const filterValues = (model, node) => {
  if (node.classList.contains("shape-ball")) {
    // если кнопка содержит класс shape-ball, то
    model.changeFilter("shape", "шар");
  }
  if (node.classList.contains("shape-bell")) {
    model.changeFilter("shape", "колокольчик");
  }
  if (node.classList.contains("shape-cone")) {
    model.changeFilter("shape", "шишка");
  }
  if (node.classList.contains("shape-snowflake")) {
    model.changeFilter("shape", "снежинка");
  }
  if (node.classList.contains("shape-toy")) {
    model.changeFilter("shape", "фигурка");
  }
  if (node.classList.contains("color-white")) {
    model.changeFilter("colors", "белый");
  }
  if (node.classList.contains("color-yellow")) {
    model.changeFilter("colors", "желтый");
  }
  if (node.classList.contains("color-red")) {
    model.changeFilter("colors", "красный");
  }
  if (node.classList.contains("color-blue")) {
    model.changeFilter("colors", "синий");
  }
  if (node.classList.contains("color-green")) {
    model.changeFilter("colors", "зелёный");
  }
  if (node.classList.contains("size-big")) {
    model.changeFilter("size", "большой");
  }
  if (node.classList.contains("size-middle")) {
    model.changeFilter("size", "средний");
  }
  if (node.classList.contains("size-small")) {
    model.changeFilter("size", "малый");
  }
  if (node.classList.contains("favorite-toy")) {
    model.changeFilter("favorite", true);
  }
}

export function addColorActive() {
  this.classList.toggle("color-active");
}

export function addShapeActive() {
  this.classList.toggle("shape-active");
}
