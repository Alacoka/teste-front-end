import { useState, useEffect } from 'react';
import type { Product, ProductResponse } from '../../types/Products';
import { ProductCard } from '../ProductCard';
import { Modal } from '../Modal';
import './style.scss';

export function Vitrine() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch('/produtos.json')
            .then(response => response.json())
            .then((data: ProductResponse) => {
                console.log("Dados da API: ", data);
                if (data.sucess) {
                    setProducts(data.products);
                }
            })
            .catch(error => console.error("Erro ao buscar a API:", error));
    }, []);

    function handleOpenModal(product: Product) {
        setSelectedProduct(product);
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
        setSelectedProduct(null);
    }

    return (
        <section className="vitrine">
            <div className="container">
                <h2>Produtos relacionados</h2>

                <div className="vitrine-grid">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            product={product}
                            onOpenModal={() => handleOpenModal(product)}
                        />
                    ))}
                </div>
            </div>

            {isModalOpen && selectedProduct && (
                <Modal product={selectedProduct} onClose={handleCloseModal} />
            )}
        </section>
    );
}