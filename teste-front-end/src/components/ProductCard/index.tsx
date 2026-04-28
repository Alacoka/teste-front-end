import "./style.scss";

// Tipagem do produto que vem da API
export interface Product {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
}

interface ProductCardProps {
    product: Product;
    onOpenModal: (product: Product) => void;
}

export function ProductCard({ product, onOpenModal }: ProductCardProps) {

    // Função para formatar a moeda localmente no card
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    };

    return (
        <div className="product-card">
            <img src={product.photo} alt={product.productName} />

            <p className="description">{product.descriptionShort}</p>

            {/* Simulando o preço antigo (20% a mais) */}
            <span className="old-price">{formatCurrency(product.price * 1.2)}</span>

            <span className="price">{formatCurrency(product.price)}</span>

            {/* Simulando a parcela */}
            <span className="installments">ou 2x de {formatCurrency(product.price / 2)} sem juros</span>

            <span className="shipping">Frete grátis</span>

            <button className="buy-btn" onClick={() => onOpenModal(product)}>COMPRAR</button>
        </div>
    );
}
