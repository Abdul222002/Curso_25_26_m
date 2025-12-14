
function dateBooking() {
    const container =document.createElement("div")

    //check_in
    const check_in=document.createElement("input")
    check_in.id="check_in"
    check_in.name="check_in"
    check_in.type="date"
    const today = new Date(Date.now()); // o simplemente new Date()
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (mm < 10) mm = '0' + mm;
    if (dd < 10) dd = '0' + dd;

    check_in.min = `${yyyy}-${mm}-${dd}`;
    
    //check_out
    const check_out=document.createElement("input")
    check_out.id="check_out"
    check_out.name="check_out"
    check_out.type="date"

    // Día siguiente para check_out
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    let ddTomorrow = tomorrow.getDate();
    let mmTomorrow = tomorrow.getMonth() + 1;
    const yyyyTomorrow = tomorrow.getFullYear();

    if (ddTomorrow < 10) ddTomorrow = '0' + ddTomorrow;
    if (mmTomorrow < 10) mmTomorrow = '0' + mmTomorrow;

    check_out.min = `${yyyyTomorrow}-${mmTomorrow}-${ddTomorrow}`;



    container.appendChild(check_in)
    container.appendChild(check_out)
    
    return {
        element:container,
        check_in,
        check_out
    }
}      

export default dateBooking
