import React from "react";
import s from "./App.module.scss";
import Header from "./Header/Header";
import Filters from "./Filters/Filters";
import Items from "./Items/Items";
import Listings from "./Listings/Listings";
import News from "./News/News";
import Footer from "./Footer/Footer";

import { Provider } from "react-redux";
import store from "./redux/reduxStore";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className={s.appWrapper}>
          <div className={s.app}>
            <Header />
            <div className={s.appContent}>
              <Filters />
              <Items />
              <Listings />
              <News />
            </div>
            <Footer />
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
