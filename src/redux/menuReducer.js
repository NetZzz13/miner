const initialState = {
  labels: {
    english: {
      lbl_home: "Home",
      lbl_sell: "Sell",
      lbl_host: "Host",
      lbl_aboutUs: "About Us",
      lbl_support: "Support",
    },
    russian: {
      lbl_home: "Главная",
      lbl_sell: "Продукты",
      lbl_host: "Адрес",
      lbl_aboutUs: "О нас",
      lbl_support: "Поддержка",
    },
    spanish: {
      lbl_home: "Hogar",
      lbl_sell: "Vender",
      lbl_host: "Anfitrión",
      lbl_aboutUs: "Sobre nosotros",
      lbl_support: "Apoyo",
    },
    italian: {
      lbl_home: "Casa",
      lbl_sell: "Vendere",
      lbl_host: "Ospite",
      lbl_aboutUs: "Riguardo a noi",
      lbl_support: "Supporto",
    },
    deutch: {
      lbl_home: "Zuhause",
      lbl_sell: "Verkaufen",
      lbl_host: "Gastgeber",
      lbl_aboutUs: "Über uns",
      lbl_support: "Unterstützung",
    },
  },
};

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default menuReducer;
