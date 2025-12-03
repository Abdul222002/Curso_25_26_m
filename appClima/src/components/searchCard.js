
export default function createSearchCard(onSearch) {
    //Quiero una variable privada que me diga si esto buscando o no
    let isSearching= false

    //DOM
    const container=document.createElement("div");
    container.className("bg-white rounded-lg shadow-lg p-6 mb-6")

    //Titulo
    const title= document.createElement("h2")
    title.textContent="🔍 Buscar ciudad"

    //input
    const input=document.createElement("input")
    input.type="text"
    input.placeholder="Introduzca aqui la ciudad"

    //button
    const searchButton=document.createElement("button")
    searchButton.textContent="Buscar"

    //Crear parrafo llamado status element que permita especificar los siguientes estados a traves de la funcion
    //setStatus(message,type="info")
    //Los estados son:
    //-loading color azul
    //-error color rojo
    //-success color verde
    //-info color gray
    //Que permita modificar el valor del componente statusElement
    const statusElement= document.createElement("p");
    statusElement.innerHTML=""
    const setStatus=(message,type="info")=>{
        statusElement.textContent=message
        switch (type) {
            case "loading":
                statusElement.className+="text-blue-600"
                break;
            case "error":
                statusElement.className+="text-red-600"
            case "success":
                statusElement.className+="text-green-600"
            case "info":    
                statusElement.className+="text-gray-600"
            default:
                break;
        }
    }
    //Realizamos la busqueda
    async function performSearch(){
        const cityName=input.value.trim()
        if(!cityName){
            setStatus("Escribe el nombre de la ciudad","error")
            return
        }

        //Comenzamos la busqueda
        isSearching=true;
        try{
            //Ahora hago la busqueda ...
            await onSearch(cityName)
            setStatus("busqueda realizada correctamente","success")
        }catch(e){
            setStatus("Error al buscar nombre de la ciudad","error")
            throw new Error("sadasdsadsad",e.message)
        }finally{
            isSearching=false
        }
    
    //Eventos
    searchButton.addEventListener("click",performSearch )

    input.addEventListener("keypress",e=>{
        if(e.key==="Enter"){
            performSearch()            
        }
    })

    }

    return {
        element:container,
        focus:()=>{
            input.focus()
        },
        clearForm:()=>{
            input.value=""
            setStatus("", "info")
            isSearching=false
        },
        getValue : ()   => input.value.trim(),

    }   
    
}
