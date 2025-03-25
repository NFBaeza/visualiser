import React,  { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./RecommendationPage.css";

function DataPage() {
    const navigate = useNavigate();

  return (
    <div>
        <h1>Recommendations</h1>
    <Container fluid>
        <Row style={{ height: "auto"}}>
            <Col sm={6}>
            <div className='target-border'>
                <h5> Rayuela Capítulo 7</h5>
                <par>
                    «Toco tu boca, con un dedo toco el borde de tu boca, voy dibujándola como si saliera de mi mano, como si por primera vez tu boca se entreabriera, y me basta cerrar los ojos para deshacerlo todo y recomenzar, hago nacer cada vez la boca que deseo, la boca que mi mano elige y te dibuja en la cara, una boca elegida entre todas, con soberana libertad elegida por mí para dibujarla con mi mano por tu cara, y que por un azar que no busco comprender coincide exactamente con tu boca que sonríe por debajo de la que mi mano te dibuja.
                    Me miras, de cerca me miras, cada vez más de cerca y entonces jugamos al cíclope, nos miramos cada vez más de cerca y nuestros ojos se agrandan, se acercan entre sí, se superponen y los cíclopes se miran, respirando confundidos, las bocas se encuentran y luchan tibiamente, mordiéndose con los labios, apoyando apenas la lengua en los dientes, jugando en sus recintos donde un aire pesado va y viene con un perfume viejo y un silencio. Entonces mis manos buscan hundirse en tu pelo, acariciar lentamente la profundidad de tu pelo mientras nos besamos como si tuviéramos la boca llena de flores o de peces, de movimientos vivos, de fragancia oscura. Y si nos mordemos el dolor es dulce, y si nos ahogamos en un breve y terrible absorber simultáneo del aliento, esa instantánea muerte es bella. Y hay una sola saliva y un solo sabor a fruta madura, y yo te siento temblar contra mí como una luna en el agua.»
                    <br />
                    <br />
                    «Toco tu boca, con un dedo toco el borde de tu boca, voy dibujándola como si saliera de mi mano, como si por primera vez tu boca se entreabriera, y me basta cerrar los ojos para deshacerlo todo y recomenzar, hago nacer cada vez la boca que deseo, la boca que mi mano elige y te dibuja en la cara, una boca elegida entre todas, con soberana libertad elegida por mí para dibujarla con mi mano por tu cara, y que por un azar que no busco comprender coincide exactamente con tu boca que sonríe por debajo de la que mi mano te dibuja.
                    Me miras, de cerca me miras, cada vez más de cerca y entonces jugamos al cíclope, nos miramos cada vez más de cerca y nuestros ojos se agrandan, se acercan entre sí, se superponen y los cíclopes se miran, respirando confundidos, las bocas se encuentran y luchan tibiamente, mordiéndose con los labios, apoyando apenas la lengua en los dientes, jugando en sus recintos donde un aire pesado va y viene con un perfume viejo y un silencio. Entonces mis manos buscan hundirse en tu pelo, acariciar lentamente la profundidad de tu pelo mientras nos besamos como si tuviéramos la boca llena de flores o de peces, de movimientos vivos, de fragancia oscura. Y si nos mordemos el dolor es dulce, y si nos ahogamos en un breve y terrible absorber simultáneo del aliento, esa instantánea muerte es bella. Y hay una sola saliva y un solo sabor a fruta madura, y yo te siento temblar contra mí como una luna en el agua.»
                    <br />
                    <br />
                    «Toco tu boca, con un dedo toco el borde de tu boca, voy dibujándola como si saliera de mi mano, como si por primera vez tu boca se entreabriera, y me basta cerrar los ojos para deshacerlo todo y recomenzar, hago nacer cada vez la boca que deseo, la boca que mi mano elige y te dibuja en la cara, una boca elegida entre todas, con soberana libertad elegida por mí para dibujarla con mi mano por tu cara, y que por un azar que no busco comprender coincide exactamente con tu boca que sonríe por debajo de la que mi mano te dibuja.
                    Me miras, de cerca me miras, cada vez más de cerca y entonces jugamos al cíclope, nos miramos cada vez más de cerca y nuestros ojos se agrandan, se acercan entre sí, se superponen y los cíclopes se miran, respirando confundidos, las bocas se encuentran y luchan tibiamente, mordiéndose con los labios, apoyando apenas la lengua en los dientes, jugando en sus recintos donde un aire pesado va y viene con un perfume viejo y un silencio. Entonces mis manos buscan hundirse en tu pelo, acariciar lentamente la profundidad de tu pelo mientras nos besamos como si tuviéramos la boca llena de flores o de peces, de movimientos vivos, de fragancia oscura. Y si nos mordemos el dolor es dulce, y si nos ahogamos en un breve y terrible absorber simultáneo del aliento, esa instantánea muerte es bella. Y hay una sola saliva y un solo sabor a fruta madura, y yo te siento temblar contra mí como una luna en el agua.»
                    <br />
                    <br />
                    «Toco tu boca, con un dedo toco el borde de tu boca, voy dibujándola como si saliera de mi mano, como si por primera vez tu boca se entreabriera, y me basta cerrar los ojos para deshacerlo todo y recomenzar, hago nacer cada vez la boca que deseo, la boca que mi mano elige y te dibuja en la cara, una boca elegida entre todas, con soberana libertad elegida por mí para dibujarla con mi mano por tu cara, y que por un azar que no busco comprender coincide exactamente con tu boca que sonríe por debajo de la que mi mano te dibuja.
                    Me miras, de cerca me miras, cada vez más de cerca y entonces jugamos al cíclope, nos miramos cada vez más de cerca y nuestros ojos se agrandan, se acercan entre sí, se superponen y los cíclopes se miran, respirando confundidos, las bocas se encuentran y luchan tibiamente, mordiéndose con los labios, apoyando apenas la lengua en los dientes, jugando en sus recintos donde un aire pesado va y viene con un perfume viejo y un silencio. Entonces mis manos buscan hundirse en tu pelo, acariciar lentamente la profundidad de tu pelo mientras nos besamos como si tuviéramos la boca llena de flores o de peces, de movimientos vivos, de fragancia oscura. Y si nos mordemos el dolor es dulce, y si nos ahogamos en un breve y terrible absorber simultáneo del aliento, esa instantánea muerte es bella. Y hay una sola saliva y un solo sabor a fruta madura, y yo te siento temblar contra mí como una luna en el agua.»
                    <br />
                    <br />
                    «Toco tu boca, con un dedo toco el borde de tu boca, voy dibujándola como si saliera de mi mano, como si por primera vez tu boca se entreabriera, y me basta cerrar los ojos para deshacerlo todo y recomenzar, hago nacer cada vez la boca que deseo, la boca que mi mano elige y te dibuja en la cara, una boca elegida entre todas, con soberana libertad elegida por mí para dibujarla con mi mano por tu cara, y que por un azar que no busco comprender coincide exactamente con tu boca que sonríe por debajo de la que mi mano te dibuja.
                    Me miras, de cerca me miras, cada vez más de cerca y entonces jugamos al cíclope, nos miramos cada vez más de cerca y nuestros ojos se agrandan, se acercan entre sí, se superponen y los cíclopes se miran, respirando confundidos, las bocas se encuentran y luchan tibiamente, mordiéndose con los labios, apoyando apenas la lengua en los dientes, jugando en sus recintos donde un aire pesado va y viene con un perfume viejo y un silencio. Entonces mis manos buscan hundirse en tu pelo, acariciar lentamente la profundidad de tu pelo mientras nos besamos como si tuviéramos la boca llena de flores o de peces, de movimientos vivos, de fragancia oscura. Y si nos mordemos el dolor es dulce, y si nos ahogamos en un breve y terrible absorber simultáneo del aliento, esa instantánea muerte es bella. Y hay una sola saliva y un solo sabor a fruta madura, y yo te siento temblar contra mí como una luna en el agua.»
                    <br />
                    <br />
                    «Toco tu boca, con un dedo toco el borde de tu boca, voy dibujándola como si saliera de mi mano, como si por primera vez tu boca se entreabriera, y me basta cerrar los ojos para deshacerlo todo y recomenzar, hago nacer cada vez la boca que deseo, la boca que mi mano elige y te dibuja en la cara, una boca elegida entre todas, con soberana libertad elegida por mí para dibujarla con mi mano por tu cara, y que por un azar que no busco comprender coincide exactamente con tu boca que sonríe por debajo de la que mi mano te dibuja.
                    Me miras, de cerca me miras, cada vez más de cerca y entonces jugamos al cíclope, nos miramos cada vez más de cerca y nuestros ojos se agrandan, se acercan entre sí, se superponen y los cíclopes se miran, respirando confundidos, las bocas se encuentran y luchan tibiamente, mordiéndose con los labios, apoyando apenas la lengua en los dientes, jugando en sus recintos donde un aire pesado va y viene con un perfume viejo y un silencio. Entonces mis manos buscan hundirse en tu pelo, acariciar lentamente la profundidad de tu pelo mientras nos besamos como si tuviéramos la boca llena de flores o de peces, de movimientos vivos, de fragancia oscura. Y si nos mordemos el dolor es dulce, y si nos ahogamos en un breve y terrible absorber simultáneo del aliento, esa instantánea muerte es bella. Y hay una sola saliva y un solo sabor a fruta madura, y yo te siento temblar contra mí como una luna en el agua.»
                </par>
            </div>
            </Col>
            <Col sm={6}>
                <div>
                    <Figure>
                        <Figure.Image className='floating-figure' rounded  
                            src="logogato.png"
                        />
                        <Figure.Caption className='floating-figure'>
                            <p> Holaa</p>
                        </Figure.Caption>
                    </Figure>

                </div>  
            </Col>
        </Row>
        <Row style={{ height: "10px", display: "absolute"}}/>
    </Container>
    <Button className="button" variant="primary" onClick={() => navigate("/") }>Back Home</Button>
    </div>
  );
}

export default DataPage;