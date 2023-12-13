import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import Logo from '/img/logo.svg'
import './Header.scss'

function Header() {
  return (
    <header className='main-header'>
        <div className="logo">
            <img src={Logo} alt="Todo" />
            <h1>Todo</h1>
        </div>
        <label className="search">
          <input type="text" placeholder="Search..." />
            <AiOutlineSearch />
        </label>
        <div className="user">
          <button>
              <AiOutlineUser />
          </button>
        </div>
    </header>
  )
}

export default Header
