import '../css/componente-a.css';
import '../styles.css'
export const saludo = () => {
    const body = document.body;

    const titular = document.createElement('h1');

    titular.innerHTML = 'Hola Mundo!!';

    body.append(titular);


};