import { useState } from 'react';
import type { Product } from '../ProductCard';
import './style.scss';

interface ProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: Product | null;
}

export function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
    const [quantity, setQuantity] = useState(1);

    if (!isOpen || !product) return null;

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>

            <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                <button className="close-btn" onClick={onClose}>
                    <span className="material-symbols-outlined">close</span>
                </button>

                <div className="modal-body">
                    <div className="modal-image">
                        <img src={product.photo} alt={product.productName} />
                    </div>

                    <div className="modal-info">
                        <h3>{product.productName}</h3>
                        <p className="price">{formatCurrency(product.price)}</p>
                        <p className="description">
                            Many desktop publishing packages and web page editors now many desktop publishing
                        </p>
                        <a href="#" className="details-link">Veja mais detalhes do produto &gt;</a>

                        <div className="actions">
                            <div className="counter">
                                <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                                <span>{quantity.toString().padStart(2, '0')}</span>
                                <button onClick={() => setQuantity(q => q + 1)}>+</button>
                            </div>
                            <button className="buy-btn">COMPRAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}