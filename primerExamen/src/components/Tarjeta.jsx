
function Tarjeta({nombreIngresado, libroIngresado}) {
    return (
    <div>
        <h2>Hola {nombreIngresado}</h2>
        <h3>Tu libro favorito es:</h3>
        <p>{libroIngresado}</p>
    </div>
    );
}

export default Tarjeta;