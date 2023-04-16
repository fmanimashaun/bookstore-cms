import { useRef, useState, useEffect } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import styles from 'assets/scss/header.module.scss';

const Pageheader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  const handleNavLinkClick = () => {
    setShowMenu(false);
  };

  const navLinks = [
    { to: '/', label: 'Books' },
    { to: '/categories', label: 'Categories' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.nav__wrapper}>
          <span className={styles.logo}>Bookstore CMS</span>
          <nav className={styles.navbar}>
            <ul className={styles.navlinks}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={styles.navlinks__item}
                >
                  {link.label}
                </NavLink>
              ))}
            </ul>
          </nav>
        </div>
        <button type="button" className={styles.profile}>
          <FaUserAlt className={styles.profile__icon} />
        </button>
        <button
          type="button"
          className={styles.menu}
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <FiMenu className={styles.menu__icon} />
        </button>
        {showMenu && (
          <nav ref={menuRef} className={styles.navbar__mobile}>
            <ul className={styles.navlinks}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={styles.navlinks__item}
                  onClick={handleNavLinkClick}
                >
                  {link.label}
                </NavLink>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Pageheader;
