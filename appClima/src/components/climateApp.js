export default function createClimateApp() {

    //DOMContentLoaded
    const container= document.createElement("div");
    
    //Header
    const header= document.createElement("header");

    //main
    const main= document.createElement("main");

    //Funcionalidades

    const searchCard= createSearhCard()

    container.appendChild(header)
    container.appendChild(main)

    // return (
    //     <div> create</div>
    // );
}