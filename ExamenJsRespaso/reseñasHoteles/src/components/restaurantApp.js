import fetchRestaurant from "../utils/fetchRestaurant"
import cardRestaurant from "./cardRestaurant"

function restaurantApp() {
  
    const  renderRestaurant=  ()=>{    

        const container=document.createElement("div")
        const header=document.createElement("header")
        const main=document.createElement("main")
        const footer=document.createElement("footer")
        

        //Mostramos los restaurantes
        fetchRestaurant("restaurants").then(data=>{
            const cards=cardRestaurant(data).element
            main.appendChild(cards)
            }
        )   


        
        container.appendChild(header)
        container.appendChild(main)
        container.appendChild(footer)


        return{
            element:container
        }

        
    }
    
    const  render= ()=>{
        const mainContainer=document.createElement("div")
        const v1Wrapped= document.createElement("div")
        v1Wrapped.textContent="Restaurantes"
        v1Wrapped.appendChild( renderRestaurant().element)

        mainContainer.appendChild(v1Wrapped)
        return mainContainer
    }
    
    return {
        render
    }
}

export default restaurantApp
