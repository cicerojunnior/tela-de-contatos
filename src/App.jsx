
import './App.css'  

import Plus from './assets/plus-icon.svg'
import Pencil from './assets/pencil-icon.svg'
import Search from './assets/search-icon.svg'
import Bin from './assets/bin-icon.svg'

import Contacts from './contacts.json'

const App = () => {

  const urlImage = () => {
    let random = Math.floor(Math.random() * 99) + 1
    let url = `https://randomuser.me/api/portraits/men/${random}.jpg`
    return url
  }
 
  return (
    <div className="project">
      <header className='content-top'>
        <nav className='options'>
          <div className='title-options'>
            <p className='title-contatos'>Meus contatos</p>
            <img src={Plus} />
            <img src={Pencil} />
            <img src={Bin} />
          </div>
          <div className='search'>
            <img src={Search} />
            <input type='text' placeholder='Busque por nome ou por dados de contato...' />
          </div>
        </nav>
      </header>
      <section className='list-contacts'>
        <div className="content-list">
            {
              Contacts.map(contato => {
                return (
                  <div className="content-line" key={contato.name}>
                    <span className='alfabeto'>{contato.name.substring(0,1)}</span>
                    <div className='content-data'>
                      <img src={urlImage()} />
                      <div className='name-phone'>
                        <span className='name'>{contato.name}</span>
                        <span className='phone'>{contato.phone}</span>
                      </div>
                    </div>  
                  </div>
                )
              })
            }
        </div>
      </section>
    </div>
  )
}

export default App