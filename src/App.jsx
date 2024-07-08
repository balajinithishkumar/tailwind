export default function App() {
  return (
    <div className="nav">
      <div className="container bg-red-200  lp:max-w-full lp:px-10 h-24 flex mx-auto sm:max-w-full sm:px-4">
        <div className="flex  justify-between items-center flex-1 p-4">
          <div className="flex  gap-4">
            <img className="menuBtn w-10" src="menu.svg" alt="" />
            <img className="w-12" src="logo.svg" alt="" />
          </div>
          <div className="flex justify-between items-center menu-text  gap-16 ">
            <p className="menuActive sm:menus tb:menus">home</p>
            <p className="sm:menus tb:menus">home</p>
            <p className="sm:menus tb:menus">home</p>
            <p className="sm:menus tb:menus">home</p>
            <p className="try-Free-btn">Try it free</p>
          </div>
        </div>
      </div>
    </div>
  );
}