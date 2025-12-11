export const createApp = () => {
    
    const app = document.getElementById('app')
    
    
    const header=document.createElement('header')
    header.className='header'

    const title=document.createElement('h1')
    title.textContent='MoviFLix Abdul Hakim'
    header.appendChild(title)

    //contenedor de películas principal
    const mainContainer=document.createElement('main')
    mainContainer.className='main-container'
    
    const filterContainer=document.createElement('div')
    filterContainer.className='filters-container'

    const searchContainer=document.createElement('div')
    searchContainer.className='search-container'

    const searchInput=document.createElement('input')
    searchInput.type='text'
    searchInput.placeholder='Buscar películas'
    searchInput.className='search-input'
    searchContainer.appendChild(searchInput)

    
    filterContainer.appendChild(searchContainer)




    app.appendChild(header)
}