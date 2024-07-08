function Nav() {
  return (
    <nav className="sticky border-b border-lightblue bg-white -top-0 z-50">
      <div className="container lp:max-w-full lp:px-10 h-24 flex mx-auto sm:max-w-full sm:px-4">
        <div className="flex justify-between items-center flex-1 p-4">
          <div className="flex gap-4">
            <img
              className="menu-btn sm:flex tb:flex hidden w-10"
              src="menu.svg"
              alt=""
            />
            <img className="w-12" src="logo.svg" alt="" />
          </div>
          <div className="flex justify-between items-center menu-text gap-16">
            <p className="menuActive menus">Home</p>
            <p className="menus">About us</p>
            <p className="menus">Contect us</p>
            <p className="menus">Login</p>
            <p className="try-Free-btn">Try it free</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Nav;