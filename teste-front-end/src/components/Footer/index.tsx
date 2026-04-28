import './style.scss';
import logoImg from '../../assets/logo.png';


export function Footer() {
    return (
        <footer className="site-footer">

            {/* 1. SEÇÃO DA NEWSLETTER */}
            <div className="newsletter-section">
                <div className="container newsletter-container">

                    <div className="newsletter-text">
                        <h2>Inscreva-se na nossa newsletter</h2>
                        <p>
                            Assine a nossa newsletter
                            e receba as novidades e conteúdos exclusivos da Econverse.
                        </p>
                    </div>

                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="inputs-row">
                            <input type="text" placeholder="Digite seu nome" required />
                            <input type="email" placeholder="Digite seu e-mail" required />
                            <button type="submit">INSCREVER</button>
                        </div>

                        <div className="checkbox-row">
                            <input type="checkbox" id="terms" required />
                            <label htmlFor="terms">Aceito os termos e condições</label>
                        </div>
                    </form>

                </div>
            </div>

            {/* 2. RODAPÉ PRINCIPAL */}
            <div className="main-footer">
                <div className="container main-footer-container">

                    {/* Bloco da Logo e Redes */}
                    <div className="footer-company">
                        <img src={logoImg} alt="Econverse" className="footer-logo" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                        <div className="social-icons">
                            <span className="icon-placeholder"><svg enable-background="new 0 0 512 512" id="Layer_1" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M505,257c0,35.8,0.1,71.6,0,107.5c-0.2,52-24.4,90.5-67.6,117.7C412.1,498,384,505,354.2,505   c-65.2,0-130.3,0.3-195.5-0.1c-45.3-0.3-84.3-16.3-115.2-49.9c-19.1-20.8-30.5-45.3-33.8-73.6c-0.7-6-0.8-11.9-0.8-17.9   c0-71.3-0.1-142.6,0-213.9C9.2,97.5,33.4,59,76.6,31.8C102.1,15.9,130.3,9,160.3,9c65,0,130-0.3,195,0.1   c45.5,0.3,84.6,16.4,115.5,50.2c18.9,20.7,30.2,45.2,33.4,73.2c1.3,11,0.7,22,0.8,32.9C505.1,196,505,226.5,505,257z M46,257   c0,36.7-0.1,73.3,0,110c0.1,25.2,9.3,46.9,26.5,64.9c23.1,24.1,51.9,35.8,85,36c65.7,0.4,131.3,0.1,197,0.1   c21.2,0,41.4-4.6,59.8-15.2c34.4-19.7,53.8-48.7,53.8-89.3c0-72.2,0-144.3,0-216.5c0-25-9.1-46.6-26.2-64.5   c-22.9-24.2-51.8-36.1-84.8-36.3C290.7,45.7,224.4,46,158,46c-20.7,0-40.3,4.9-58.3,15.1C65.4,80.9,45.9,109.9,46,150.5   C46,186,46,221.5,46,257z" fill="#A7A7A7" /><path d="M257.3,363c-64.6,0-116.4-51.6-116.3-116c0.1-62.7,52.6-114.1,116.7-114c64.4,0,116.4,51.7,116.3,115.5   C373.9,311.7,321.6,363,257.3,363z M257.3,326c43.9,0,79.7-34.9,79.7-77.8c0-43.1-35.5-78.2-79.3-78.2c-43.9,0-79.7,34.9-79.7,77.8   C178,290.9,213.5,326,257.3,326z" fill="#A7A7A7" /><path d="M363,123.6c0-14.2,10.9-25.6,24.5-25.6c13.6,0,24.5,11.5,24.5,25.6c0,13.9-10.9,25.3-24.3,25.4   C374.1,149.1,363,137.8,363,123.6z" fill="#A7A7A7" /></g></svg></span>
                            <span className="icon-placeholder"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H12V13H11C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11H12V9.5C12 7.567 13.567 6 15.5 6H16.1C16.6523 6 17.1 6.44772 17.1 7C17.1 7.55228 16.6523 8 16.1 8H15.5C14.6716 8 14 8.67157 14 9.5V11H16.1C16.6523 11 17.1 11.4477 17.1 12C17.1 12.5523 16.6523 13 16.1 13H14V20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6Z" fill="#A7A7A7"></path> </g></svg></span>
                            <span className="icon-placeholder"><svg fill="#A7A7A7" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Zm-687.52-.792v1318.918H0V600.53h480.48Zm-120.12 120.12H120.12v1078.678h240.24V720.65Zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441ZM240.24 0c132.493 0 240.24 107.748 240.24 240.24 0 132.493-107.747 240.24-240.24 240.24C107.748 480.48 0 372.733 0 240.24 0 107.748 107.748 0 240.24 0Zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12Z" fill-rule="evenodd"></path> </g></svg></span>
                        </div>
                    </div>

                    {/* A linha divisória */}
                    <div className="vertical-divider"></div>

                    {/* Bloco dos Links */}
                    <div className="footer-links">
                        <div className="link-column">
                            <h3>Institucional</h3>
                            <a href="#">Sobre Nós</a>
                            <a href="#">Movimento</a>
                            <a href="#">Trabalhe conosco</a>
                        </div>

                        <div className="link-column">
                            <h3>Ajuda</h3>
                            <a href="#">Suporte</a>
                            <a href="#">Fale Conosco</a>
                            <a href="#">Perguntas Frequentes</a>
                        </div>

                        <div className="link-column">
                            <h3>Termos</h3>
                            <a href="#">Termos e Condições</a>
                            <a href="#">Política de Privacidade</a>
                            <a href="#">Troca e Devolução</a>
                        </div>
                    </div>

                </div>
            </div>

            {/* 3. BARRA INFERIOR */}
            <div className="bottom-bar">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

        </footer>
    );
}