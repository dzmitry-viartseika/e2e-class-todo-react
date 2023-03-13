import './Header.css';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="main-header">
      <img data-test-id="main-header__logo" src={logo} alt="A list" />
      <h1 data-test-id="main-header__title">React Tasks</h1>
    </header>
  );
}

export default Header;
