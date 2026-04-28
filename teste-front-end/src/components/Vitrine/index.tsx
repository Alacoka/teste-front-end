import { useState, useEffect, useRef } from 'react';
import { ProductCard, type Product } from '../ProductCard';
import { ProductModal } from '../Modal';
import './style.scss';

export function Vitrine() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        fetch('../../public/produtos.json')
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, []);

    const handleScrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -1280, behavior: 'smooth' });
        }
    };

    const handleScrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 1280, behavior: 'smooth' });
        }
    };

    const handleOpenModal = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    return (
        <section className="vitrine-section">
            <div className="container">

                <div className="title-wrapper">
                    <div className="line"></div>
                    <h2>Produtos relacionados</h2>
                    <div className="line"></div>
                </div>

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

                <div className="carousel-wrapper">
                    <button className="arrow-btn left" onClick={handleScrollLeft}>
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>

                    <div className="products-grid" ref={carouselRef}>
                        {products.map((item, index) => (
                            <ProductCard key={index} product={item} onOpenModal={handleOpenModal} />
                        ))}
                    </div>

                    <button className="arrow-btn right" onClick={handleScrollRight}>
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
                <ProductModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    product={selectedProduct}
                />

            </div>
        </section>
    );
}