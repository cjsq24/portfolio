import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../../assets/css/landingPageMenu.css';
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
   const location = useLocation();
   const [toggleMenu, setToggleMenu] = useState<boolean>(false);

   useEffect(() => {
      const ignoreClickOnMeElement = document.querySelector('.l-menu-header');

      document.addEventListener('click', (event) => {
         const target = event.target as HTMLInputElement;
         const isClickInsideElement = ignoreClickOnMeElement!.contains(target);
         if (!isClickInsideElement) {
            setToggleMenu(false);
         }
      });
      return () => {
         document.removeEventListener('click', () => {});
      }
   }, []);

   const onSelectMenu = () => {
      setToggleMenu(false);
   };

   const onChangeToggleMenu = () => {
      setToggleMenu(!toggleMenu);
   };

   const setActive = (url: string) => {
      return location.pathname === url ? 'active' : '';
   }

   return (
      <div className="l-menu-header">
         <div className="l-toggle-menu">
            <label htmlFor="responsive-check">
               {!toggleMenu
                  ? <FaBars size={30} color='#fff' style={{ marginTop: 5 }} />
                  : <FaTimes size={30} color='#fff' style={{ marginTop: 5 }} />
               }
            </label>
         </div>
         <input type="checkbox" id="responsive-check" onChange={onChangeToggleMenu} checked={toggleMenu} />
         <nav className="l-menu">
            <ul>
               <li className={setActive('/home')}>
                  <NavLink to="/home" onClick={onSelectMenu}>Home</NavLink>
               </li>
               <li className={setActive('/about-me')}>
                  <NavLink to="/about-me" onClick={onSelectMenu}>About Me</NavLink>
               </li>
               <li className={setActive('/skills')}>
                  <NavLink to="/skills" onClick={onSelectMenu}>Skills</NavLink>
               </li>
               <li className={setActive('/portfolio')}>
                  <NavLink to="/portfolio" onClick={onSelectMenu}>Portfolio</NavLink>
               </li>
               <li>
                  <NavLink to="/experience" onClick={onSelectMenu}>Experience</NavLink>
               </li>
               <li>
                  <NavLink to="/contact-me" onClick={onSelectMenu}>Contact Me</NavLink>
               </li>
            </ul>
         </nav>
      </div>
   );
};

export default Header;
