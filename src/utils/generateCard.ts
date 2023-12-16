import { Card } from "./models"
import getRandomCat from "./getRandomCat"

type GenCardFn = () => Card;

const generateCard: GenCardFn = () => {
  const {name, img} = getRandomCat()
  const strength = Math.floor(Math.random() * 20);
  const defence = Math.floor(Math.random() * 20);

  return {
    name,
    strength,
    defence,
    img
  }
};

export default generateCard;
