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
import Menu from "./Menu/Menu";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <main className={s.appWrapper}>
          <div className={s.app}>
            <Header />
            <Menu />
            <div className={s.appContent}>
              <Filters />
              <Items />
              <Listings />
              <News />
            </div>
            <Footer />
          </div>
        </main>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
