import { Fragment, useState } from "react";
import {
  NavBarAuth,
  NavBarCardPanier,
  NavBarCurrency,
  NavBarLogo,
  NavBarSearch,
  PopOver,
  TransitionRoot,
} from "../../Component/index";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className=" mb-2">
      {/* Mobile menu */}
      <TransitionRoot open={open} Fragment={Fragment} setOpen={setOpen} />
      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b bg-white">
            <div className="flex h-16 items-center">
              <div className="ml-4 flex lg:ml-0">
                <NavBarLogo />
              </div>
              {/* Flyout menus */}
              <PopOver />
              <div className="ml-auto flex items-center">
                <NavBarAuth />
                <div className="hidden lg:ml-8 lg:flex">
                  <NavBarCurrency />
                </div>
                <div className="flex lg:ml-6">
                  <NavBarSearch />
                </div>
                <div className="ml-4 flow-root lg:ml-6">
                  <NavBarCardPanier />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
