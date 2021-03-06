import photo1 from "../assets/items/1.png";
import photo2 from "../assets/items/2.png";
import photo3 from "../assets/items/3.png";
import photo4 from "../assets/items/4.png";
import photo5 from "../assets/items/5.png";
import photo6 from "../assets/items/6.png";
import photo7 from "../assets/items/7.png";
import photo8 from "../assets/items/8.png";

const initialState = {
  itemsData: [
    {
      id: 1,
      name: "Antminer s9",
      power: "10.5-14.5 th/s",
      photo: photo1,
      price: 137.0,
      currency: "$",
      dateOfReceipt: "2020-05-26T14:48:00",
    },
    {
      id: 2,
      name: "Antminer DR5",
      power: "35 Th/s",
      photo: photo2,
      price: 1385.0,
      currency: "$",
      dateOfReceipt: "2020-05-28T14:48:00",
    },
    {
      id: 3,
      name: "GPU Enclosure",
      power: "12 cards",
      photo: photo3,
      price: 650.0,
      currency: "$",
      dateOfReceipt: "2020-05-29T14:48:00",
    },
    {
      id: 4,
      name: "PandaMiner B3 Pro 4g",
      power: "230 Mh/s",
      photo: photo4,
      price: 2209.0,
      currency: "$",
      dateOfReceipt: "2020-06-03T14:48:00",
    },
    {
      id: 5,
      name: "Innosilicon A6 ",
      power: "1.23 GH/s",
      photo: photo5,
      price: 3240.0,
      currency: "$",
      dateOfReceipt: "2020-06-07T14:48:00",
    },
    {
      id: 6,
      name: "Innosilicon A6 ",
      power: "1.23 GH/s",
      photo: photo6,
      price: 3240.0,
      currency: "$",
      dateOfReceipt: "2020-07-26T14:48:00",
    },
    {
      id: 7,
      name: "GPU Enclosure",
      power: "8 cards",
      photo: photo7,
      price: 550.0,
      currency: "$",
      dateOfReceipt: "2020-07-28T14:48:00",
    },
    {
      id: 8,
      name: "Innosilicon T3",
      power: "43 th/s",
      photo: photo8,
      price: 137.0,
      currency: "$",
      dateOfReceipt: "2020-07-29T14:48:00",
    },
    {
      id: 9,
      name: "Antminer s9",
      power: "10.5-14.5 th/s",
      photo: photo1,
      price: 137.0,
      currency: "$",
      dateOfReceipt: "2020-05-26T14:48:00",
    },
    {
      id: 10,
      name: "Antminer DR5",
      power: "35 Th/s",
      photo: photo2,
      price: 1385.0,
      currency: "$",
      dateOfReceipt: "2020-05-28T14:48:00",
    },
    {
      id: 11,
      name: "GPU Enclosure",
      power: "12 cards",
      photo: photo3,
      price: 650.0,
      currency: "$",
      dateOfReceipt: "2020-05-29T14:48:00",
    },
    {
      id: 12,
      name: "PandaMiner B3 Pro 4g",
      power: "230 Mh/s",
      photo: photo4,
      price: 2209.0,
      currency: "$",
      dateOfReceipt: "2020-06-03T14:48:00",
    },
    {
      id: 13,
      name: "Innosilicon A6 ",
      power: "1.23 GH/s",
      photo: photo5,
      price: 3240.0,
      currency: "$",
      dateOfReceipt: "2020-06-07T14:48:00",
    },
    {
      id: 14,
      name: "Innosilicon A6 ",
      power: "1.23 GH/s",
      photo: photo6,
      price: 3240.0,
      currency: "$",
      dateOfReceipt: "2020-05-26T14:48:00",
    },
    {
      id: 15,
      name: "GPU Enclosure",
      power: "8 cards",
      photo: photo7,
      price: 550.0,
      currency: "$",
      dateOfReceipt: "2020-05-28T14:48:00",
    },
    {
      id: 16,
      name: "Innosilicon T3",
      power: "43 th/s",
      photo: photo8,
      price: 137.0,
      currency: "$",
      dateOfReceipt: "2020-05-29T14:48:00",
    },
    {
      id: 17,
      name: "Antminer s9",
      power: "10.5-14.5 th/s",
      photo: photo1,
      price: 137.0,
      currency: "$",
      dateOfReceipt: "2020-05-26T14:48:00",
    },
    {
      id: 18,
      name: "Antminer DR5",
      power: "35 Th/s",
      photo: photo2,
      price: 1385.0,
      currency: "$",
      dateOfReceipt: "2020-05-28T14:48:00",
    },
    {
      id: 19,
      name: "GPU Enclosure",
      power: "12 cards",
      photo: photo3,
      price: 650.0,
      currency: "$",
      dateOfReceipt: "2020-05-29T14:48:00",
    },
    {
      id: 20,
      name: "PandaMiner B3 Pro 4g",
      power: "230 Mh/s",
      photo: photo4,
      price: 2209.0,
      currency: "$",
      dateOfReceipt: "2020-06-03T14:48:00",
    },
    {
      id: 21,
      name: "Innosilicon A6 ",
      power: "1.23 GH/s",
      photo: photo5,
      price: 3240.0,
      currency: "$",
      dateOfReceipt: "2020-06-07T14:48:00",
    },
    {
      id: 22,
      name: "Innosilicon A6 ",
      power: "1.23 GH/s",
      photo: photo6,
      price: 3240.0,
      currency: "$",
      dateOfReceipt: "2020-05-26T14:48:00",
    },
    {
      id: 23,
      name: "GPU Enclosure",
      power: "8 cards",
      photo: photo7,
      price: 550.0,
      currency: "$",
      dateOfReceipt: "2020-05-28T14:48:00",
    },
    {
      id: 24,
      name: "Innosilicon T3",
      power: "43 th/s",
      photo: photo8,
      price: 137.0,
      currency: "$",
      dateOfReceipt: "2020-05-29T14:48:00",
    },
    {
      id: 25,
      name: "Antminer s9",
      power: "10.5-14.5 th/s",
      photo: photo1,
      price: 137.0,
      currency: "$",
      dateOfReceipt: "2020-05-26T14:48:00",
    },
    {
      id: 26,
      name: "Antminer DR5",
      power: "35 Th/s",
      photo: photo2,
      price: 1385.0,
      currency: "$",
      dateOfReceipt: "2020-05-28T14:48:00",
    },
    {
      id: 27,
      name: "GPU Enclosure",
      power: "12 cards",
      photo: photo3,
      price: 650.0,
      currency: "$",
      dateOfReceipt: "2020-05-29T14:48:00",
    },
    {
      id: 28,
      name: "PandaMiner B3 Pro 4g",
      power: "230 Mh/s",
      photo: photo4,
      price: 2209.0,
      currency: "$",
      dateOfReceipt: "2020-06-03T14:48:00",
    },
    {
      id: 29,
      name: "Innosilicon A6 ",
      power: "1.23 GH/s",
      photo: photo5,
      price: 3240.0,
      currency: "$",
      dateOfReceipt: "2020-06-07T14:48:00",
    },
    {
      id: 30,
      name: "Innosilicon A6 ",
      power: "1.23 GH/s",
      photo: photo6,
      price: 3240.0,
      currency: "$",
      dateOfReceipt: "2020-05-26T14:48:00",
    },
    {
      id: 31,
      name: "GPU Enclosure",
      power: "8 cards",
      photo: photo7,
      price: 550.0,
      currency: "$",
      dateOfReceipt: "2020-05-28T14:48:00",
    },
    {
      id: 32,
      name: "Innosilicon T3",
      power: "43 th/s",
      photo: photo8,
      price: 137.0,
      currency: "$",
      dateOfReceipt: "2020-05-29T14:48:00",
    },
    {
      id: 33,
      name: "Innosilicon A6 ",
      power: "1.23 GH/s",
      photo: photo6,
      price: 3240.0,
      currency: "$",
      dateOfReceipt: "2020-05-26T14:48:00",
    },
    {
      id: 34,
      name: "GPU Enclosure",
      power: "8 cards",
      photo: photo7,
      price: 550.0,
      currency: "$",
      dateOfReceipt: "2020-05-28T14:48:00",
    },
    {
      id: 35,
      name: "Innosilicon T3",
      power: "43 th/s",
      photo: photo8,
      price: 137.0,
      currency: "$",
      dateOfReceipt: "2020-05-29T14:48:00",
    },
    {
      id: 36,
      name: "Antminer s9",
      power: "10.5-14.5 th/s",
      photo: photo1,
      price: 137.0,
      currency: "$",
      dateOfReceipt: "2020-05-26T14:48:00",
    },
    {
      id: 37,
      name: "Antminer DR5",
      power: "35 Th/s",
      photo: photo2,
      price: 1385.0,
      currency: "$",
      dateOfReceipt: "2020-05-28T14:48:00",
    },
    {
      id: 38,
      name: "GPU Enclosure",
      power: "12 cards",
      photo: photo3,
      price: 650.0,
      currency: "$",
      dateOfReceipt: "2020-05-29T14:48:00",
    },
    {
      id: 39,
      name: "PandaMiner B3 Pro 4g",
      power: "230 Mh/s",
      photo: photo4,
      price: 2209.0,
      currency: "$",
      dateOfReceipt: "2020-06-03T14:48:00",
    },
    {
      id: 40,
      name: "Innosilicon A6 ",
      power: "1.23 GH/s",
      photo: photo5,
      price: 3240.0,
      currency: "$",
      dateOfReceipt: "2020-06-07T14:48:00",
    },
    {
      id: 41,
      name: "Innosilicon A6 ",
      power: "1.23 GH/s",
      photo: photo6,
      price: 3240.0,
      currency: "$",
      dateOfReceipt: "2020-05-26T14:48:00",
    },
    {
      id: 42,
      name: "GPU Enclosure",
      power: "8 cards",
      photo: photo7,
      price: 550.0,
      currency: "$",
      dateOfReceipt: "2020-05-28T14:48:00",
    },
    {
      id: 43,
      name: "Innosilicon T3",
      power: "43 th/s",
      photo: photo8,
      price: 137.0,
      currency: "$",
      dateOfReceipt: "2020-05-29T14:48:00",
    },
    {
      id: 44,
      name: "Antminer s9",
      power: "10.5-14.5 th/s",
      photo: photo1,
      price: 137.0,
      currency: "$",
      dateOfReceipt: "2020-05-26T14:48:00",
    },
    {
      id: 45,
      name: "Antminer DR5",
      power: "35 Th/s",
      photo: photo2,
      price: 1385.0,
      currency: "$",
      dateOfReceipt: "2020-05-28T14:48:00",
    },
    {
      id: 46,
      name: "GPU Enclosure",
      power: "12 cards",
      photo: photo3,
      price: 650.0,
      currency: "$",
      dateOfReceipt: "2020-05-29T14:48:00",
    },
    {
      id: 47,
      name: "PandaMiner B3 Pro 4g",
      power: "230 Mh/s",
      photo: photo4,
      price: 2209.0,
      currency: "$",
      dateOfReceipt: "2020-06-03T14:48:00",
    },
    {
      id: 48,
      name: "Innosilicon A6 ",
      power: "1.23 GH/s",
      photo: photo5,
      price: 3240.0,
      currency: "$",
      dateOfReceipt: "2020-06-07T14:48:00",
    },
    {
      id: 49,
      name: "Innosilicon A6 ",
      power: "1.23 GH/s",
      photo: photo6,
      price: 3240.0,
      currency: "$",
      dateOfReceipt: "2020-05-26T14:48:00",
    },
    {
      id: 50,
      name: "GPU Enclosure",
      power: "8 cards",
      photo: photo7,
      price: 550.0,
      currency: "$",
      dateOfReceipt: "2020-05-28T14:48:00",
    },
    {
      id: 51,
      name: "Innosilicon T3",
      power: "43 th/s",
      photo: photo8,
      price: 137.0,
      currency: "$",
      dateOfReceipt: "2020-05-29T14:48:00",
    },
  ],
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default itemsReducer;
