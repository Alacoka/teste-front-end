import { useState, useEffect } from 'react';
import './style.scss';

// Definindo o formato do dado que vem da API
interface Product {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
}

export function RelatedProducts() {
    // Estado para guardar os produtos do JSON
    const [products, setProducts] = useState<Product[]>([]);

    // Simulando a chamada da API (Podes trocar pelo teu fetch/axios real)
    useEffect(() => {
        // Exemplo de como farias o fetch:
        /*
        fetch('URL_DA_TUA_API_OU_ARQUIVO_LOCAL')
            .then(res => res.json())
            .then(data => {
                if (data.success) setProducts(data.products);
            });
        */
    }, []);

    // Função de ouro para formatar o número para Real (R$)
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
        // 💡 Dica: Se a API mandar o preço em centavos (ex: 15000 = R$ 150,00), 
        // basta mudares ali em cima para: format(value / 100)
    };

    return (
        <section className="related-products">
            <div className="container">

                {/* 1. Título com as linhas */}
                <div className="title-wrapper">
                    <div className="line"></div>
                    <h2>Produtos relacionados</h2>
                    <div className="line"></div>
                </div>

                {/* 2. Menu de Filtros */}
                <nav className="filter-tabs">
                    <ul>
                        <li className="active">CELULAR</li>
                        <li>ACESSÓRIOS</li>
                        <li>TABLETS</li>
                        <li>NOTEBOOKS</li>
                        <li>TVS</li>
                        <li>VER TODOS</li>
                    </ul>
                </nav>

                {/* 3. Carrossel de Produtos */}
                <div className="carousel-wrapper">
                    <button className="arrow-btn left">
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>

                    <div className="products-grid">

                        {/* 🚀 AQUI ACONTECE A MÁGICA DO MAP 🚀 */}
                        {products.map((item, index) => (
                            <div className="product-card" key={index}>
                                <img src={item.photo} alt={item.productName} />

                                <p className="description">{item.descriptionShort}</p>

                                {/* Simulando um preço antigo 20% mais caro para bater com o layout */}
                                <span className="old-price">{formatCurrency(item.price * 1.2)}</span>

                                <span className="price">{formatCurrency(item.price)}</span>

                                {/* Simulando a parcela de 2x */}
                                <span className="installments">ou 2x de {formatCurrency(item.price / 2)} sem juros</span>

                                <span className="shipping">Frete grátis</span>

                                <button className="buy-btn">COMPRAR</button>
                            </div>
                        ))}

                    </div>

                    <button className="arrow-btn right">
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>

            </div>
        </section>
    );
}