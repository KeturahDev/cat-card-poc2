import obsOfChaos from "../assets/cat_orbs_of_chaos.jpg"
import gelacticTrance from "../assets/galactic_trance.gif"
import universalCharm from "../assets/cat-universal charm.gif"
import hoolagens from "../assets/hoolagen cat.jpg"
import tender from "../assets/tender_teddy.jpg"


const collection = [
  {
    name: "The Orbs of chaos",
    img: obsOfChaos
  },
  {
    name: "Arah, of Universal Charm",
    img: universalCharm
  },
  {
    name: "FooFoo, of Galactic Trance",
    img: gelacticTrance
  },
  {
    name: "The dancing minions of insanity",
    img: hoolagens
  },
  {
    name: "Miani, of home comforts",
    img: tender
  }
]

const getRandomCat = () => {
  const i = Math.floor(Math.random() * collection.length);
  return collection[i]
};

export default getRandomCat