import type { Product } from '../../types/Products';
import { formatCurrency } from '../../utils/formatCurrency';
import './style.scss';

interface ModalProps {
    product: Product;
    onClose: () => void;
}

export function Modal({ product, onClose }: ModalProps) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    X
                </button>

                <div className="modal-image-container">
                    <img src={product.photo} alt={product.productName} />
                </div>

                <div className="modal-info">
                    <h3>{product.productName}</h3>
                    <p className="modal-price">{formatCurrency(product.price)}</p>
                    <p className="modal-description">{product.descriptionShort}</p>
                    <a href="#" className="modal-details-link">Veja mais detalhes do produto {'>'}</a>

                    <button className="modal-buy-button">Comprar</button>
                </div>
            </div>
        </div>
    );
}