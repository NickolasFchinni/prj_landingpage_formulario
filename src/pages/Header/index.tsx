import { useState, useEffect } from "react"
import Logo from "../../assets/logo.png"
import BackIcon from "../../assets/back-icon.png"
import "./style.css"
import classNames from "classnames"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollingDown, setScrollingDown] = useState(false)
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const delta = 5
  const navbarHeight = 80

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleScroll = () => {
    const st = window.scrollY

    if (Math.abs(lastScrollTop - st) <= delta) return

    if (st > lastScrollTop && st > navbarHeight) {
      setScrollingDown(true)
      setMenuOpen(false)
    } else {
      setScrollingDown(false)
    }

    setLastScrollTop(st)
  }

  useEffect(() => {
    let didScroll = false
    const intervalId = setInterval(() => {
      if (didScroll) {
        handleScroll()
        didScroll = false
      }
    }, 250)

    const onScroll = () => {
      didScroll = true
    }

    window.addEventListener("scroll", onScroll)

    return () => {
      clearInterval(intervalId)
      window.removeEventListener("scroll", onScroll)
    }
  })

  return (
    <div>
      <header
        className={classNames(
          "absolute top-0 z-30 sm:hidden flex gap-6 items-center w-full p-4 md:py-0 transition-transform duration-500 container px-5 md:mx-auto",
          {
            "-translate-y-full": scrollingDown,
            "bg-[#2D2D2D]/40": !scrollingDown && !menuOpen,
            "rounded-b-2xl bg-[#2D2D2D]": menuOpen,
          }
        )}
      >
        <img className="w-28 ml-1" src={Logo} alt="Logo da empresa Monks" />
        <nav id="nav" className={menuOpen ? "active" : ""}>
          <button
            aria-label={menuOpen ? "Fechar Menu" : "Abrir Menu"}
            id="btn-mobile"
            className="flex py-2 text-base border-none bg-none cursor-pointer gap-2 text-white"
            aria-haspopup="true"
            aria-controls="menu"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span id="hamburger" className="border-t-2 border-solid w-5"></span>
          </button>
        </nav>
      </header>
      <ul
        id="menu"
        role="menu"
        className={classNames(
          "w-full sm:hidden right-0 pt-16 bg-[#DFBBFE] z-[1000] h-0 overflow-y-hidden text-[#2D2D2D] font-bold list-disc px-6 text-xl space-y-5",
          {
            "h-full visible overflow-y-auto": menuOpen,
            invisible: !menuOpen,
          }
        )}
      >
        <li
          onClick={toggleMenu}
          className="mt-8 menuItem transition ease-in-out delay-50 hover:text-gray-500 duration-80 hover:cursor-pointer mx-4"
        >
          <AnchorLink href="#quem-somos">Categoria 1</AnchorLink>
        </li>
        <li
          onClick={toggleMenu}
          className="mx-4 menuItem transition ease-in-out delay-50 hover:text-gray-500 duration-80 hover:cursor-pointer"
        >
          <AnchorLink href="#imagens">Categoria 2</AnchorLink>
        </li>
        <li
          onClick={toggleMenu}
          className="mx-4 menuItem transition ease-in-out delay-50 hover:text-gray-500 duration-80 hover:cursor-pointer"
        >
          <AnchorLink href="#download">Categoria 3</AnchorLink>
        </li>
        <li
          onClick={toggleMenu}
          className="mx-4 menuItem transition ease-in-out delay-50 hover:text-gray-500 duration-80 hover:cursor-pointer"
        >
          <AnchorLink href="#formulario">Categoria 4</AnchorLink>
        </li>
        <div className="flex justify-center" onClick={toggleMenu}>
          <AnchorLink href="#home">
            <img src={BackIcon} alt="Ímagem de volta à HomePage" className="pt-12 pb-6" />
          </AnchorLink>
        </div>
      </ul>
      <div className="flex absolute w-full">
        <div className="hidden sm:flex md:flex-row md:gap-20 md:items-center md:w-full py-4 container px-6 md:mx-auto text-white font-light text-lg">
          <img src={Logo} className="hidden md:block w-40 py-2 p-1" alt="Logo da empresa Monks" />
          <AnchorLink href="#quem-somos" className="hover:cursor-pointer">
            <p>Categoria 1</p>
          </AnchorLink>
          <AnchorLink href="#imagens" className="hover:cursor-pointer">
            <p>Categoria 2</p>
          </AnchorLink>
          <AnchorLink href="#download" className="hover:cursor-pointer">
            <p>Categoria 3</p>
          </AnchorLink>
          <AnchorLink href="#formulario" className="hover:cursor-pointer">
            <p>Categoria 4</p>
          </AnchorLink>
        </div>
      </div>
    </div>
  )
}

export default Header
