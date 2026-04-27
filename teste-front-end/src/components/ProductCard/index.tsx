import type { Product } from "../../types/Products";
import { formatCurrency } from "../../utils/formatCurrency";
import "./style.scss";

interface ProductCardProps {
    product: Product;
    onOpenModal: () => void;
}

export function ProductCard({ product, onOpenModal }: ProductCardProps) {
    return (
        <div className="product-card">
            <img src={product.photo} alt={product.productName} className="product-img" />
            <h3 className="product-price">{formatCurrency(product.price)}</h3>
            <button className="buy-button" onClick={onOpenModal}>Comprar</button>
        </div>
    )
}

