import React from "react";
import { routes } from "./utils/routes";
import { useContextGlobal } from "./utils/global.context";
import MyLink from "./MyLink";

const Navbar = () => {
const { state, theme, setTheme } = useContextGlobal();
const handleChangeTheme = () => {
  if (theme === state.themes.dark) setTheme(state.themes.light);
  if (theme === state.themes.light) setTheme(state.themes.dark);
};

return (
  <nav>
    <img src="./public/DH.ico" alt="" className="logo"/>
    <div className="links-nav">
      <MyLink to={routes.home} name={"Inicio"}/>
      <MyLink to={routes.contact} name={"Contacto"}/>
      <MyLink to={routes.favs} name={"Favoritos"}/>
    </div>
    <button
      style={{ background: theme.background, color: theme.font }}
      onClick={handleChangeTheme}> Modo oscuro/claro
    </button>
  </nav>
  );
};

export default Navbar;
