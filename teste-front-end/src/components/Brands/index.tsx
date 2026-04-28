import './style.scss';
import logoImg from '../../assets/logo.png'; // Importa a logo aqui!

export function Brands() {
    // Array simples para renderizar os 5 círculos sem repetir código
    const brandsArray = [1, 2, 3, 4, 5];

    return (
        <section className="brands-section">
            <div className="container brands-container">

                <h2>Navegue por marcas</h2>

                <div className="brands-list">
                    {brandsArray.map((item) => (
                        <div className="brand-item" key={item}>
                            <img src={logoImg} alt="Marca Parceira" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}