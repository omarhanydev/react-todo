import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import Logo from '/img/logo.svg'
import './Header.scss'

function Header({ loading, searchQuery, setSearchQuery }) {
  return (
    <header className='main-header'>
      <div className="logo">
        <img src={Logo} alt="Todo" />
        <h1>Todo</h1>
      </div>
      {!loading && 
        <>
          <label className="search">
            <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
            <AiOutlineSearch />
          </label>
          <div className="user">
            <button>
              <AiOutlineUser />
            </button>
          </div>
        </>
      }
    </header>
  )
}

export default Header
