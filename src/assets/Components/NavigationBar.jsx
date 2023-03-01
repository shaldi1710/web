import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap"
import vector from "../Components/imagepriview/Vector.png"
import konsultan from "../Components/imagepriview/Konsultan skripsi.png"
import analisa from "../Components/imagepriview/AnalisaData.png"
import hewan from "../Components/imagepriview/HewanPercobaan.png"
import translet from "../Components/imagepriview/Translate.png"






const NavigationBar = () => {
    return (
        <div>
            <Navbar> 
                <Container>
                    <Nav>
                        <div className="bungkus-2">
                            <div className="Yuklulus">
                                <NavbarBrand className="fontyuk">Yuk <span className="fontlus">Lulus</span></NavbarBrand>
                            </div>
                            <div className="halt">
                                <button className="home">Home</button>
                                <button className="about">About us</button>
                                <button className="layanan">Layanan</button>
                                <button className="testimoni">Testimoni</button>
                            </div>
                        </div>
                    </Nav>
                </Container>   
            </Navbar>
            
            <div className="bungkus-3">
                <div>
                    <p className="selesaikan">Selesaikan Skripsi Tanpa Rasa Bingung dan Pusing</p>
                    <p className="kami">Kami membantu menghubungkan anda dengan Konsultan Skripsi Profesional</p>
                    <button className="mulai">Mulai Konsultasi</button>
                </div>
                <div>
                    <img className="vector" src={vector} />
                </div>
            </div>

            <div className="bungkus-4">
                <div>
                    <p className="layanankami">Layanan Kami</p>
                </div>
                <div>
                    <img className="konsultan" src={konsultan} />
                    <img className="analisa" src={analisa} />
                    <img className="hewan" src={hewan} />
                    <img className="translet" src={translet} />
                </div>
            </div>
        </div>
    )
}

export default NavigationBar