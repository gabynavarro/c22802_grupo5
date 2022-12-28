import React from 'react';
import { Card, CardGroup, Row, Col } from 'react-bootstrap';
import '../skills/skills.css'
import reactImg from '../../assets/img/react.png';
import bootstrap from '../../assets/img/boostrap.png'
import fontAwesome  from '../../assets/img/font-awesome.png';
import imgJs from '../../assets/img/js.png'
import imgCss from '../../assets/img/css.png'
import imgHtml from '../../assets/img/html5.png'
import imgGit from '../../assets/img/github.webp'
import imgPostman from '../../assets/img/postman.jpeg'

const images=[reactImg,bootstrap,fontAwesome,imgJs, imgCss, imgHtml, imgGit, imgPostman];
const tecnology=["React", "Boostrap", "Font Awesome", "Java Script", "CSS3", "HTML", "GitHub","Postman"]

const Skills = () => {
    return (
        <div className='container-skills'>
            <div className='title-skill'>
                <h2 className='title-tegnology'>Tenologías usadas</h2>
                 <hr className='hr-skill'/>
            <Row xs={2} md={4} className="g-4 group-skills">
                {Array.from({ length: 8 }).map((_, idx) => (
                <Col>
                    <Card>
                    <Card.Img variant="top" src={images[idx]} className="img-skills"/>
                    <Card.Body>
                        <Card.Title>{tecnology[idx]}</Card.Title>
                        <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
        </div>
        </div>
    
        // <div className='container-skills'>
        //     <div className='title-skill'>
        //         <h2>Tenologias usadas</h2>
        //         <hr className='hr-skill'/>
        //         <CardGroup className='group-skills'>
        //             <Card>
        //                 <Card.Img variant="top" src={reactImg} className="img-skills" />
        //                 <Card.Body>
        //                 <Card.Title>React</Card.Title>
        //                 <Card.Text>
        //                    React está basado en un paradigma llamado programación orientada a componentes en el que cada componente es una pieza con la que el usuario puede interactuar. Estas piezas se crean usando una sintaxis llamada JSX permitiendo escribir HTML (y opcionalmente CSS) dentro de objetos JavaScript.
        //                 </Card.Text>
        //                 </Card.Body>           
        //             </Card>
        //             <Card>
        //                 <Card.Img variant="top" src={bootstrap} className="img-skills"/>
        //                 <Card.Body>
        //                 <Card.Title>Bootstrap</Card.Title>
        //                 <Card.Text>
        //                 Bootstrap es un framework front-end que fornece estructuras de CSS para la creación de sitios web y aplicaciones responsivas de forma rápida y simple. Además, puede lidiar con sitios web de desktop y páginas de dispositibos mobiles de la misma forma.
        //                 </Card.Text>
        //                 </Card.Body>                     
        //             </Card>
        //             <Card>
        //                 <Card.Img variant="top" src={fontAwesome} className="img-skills"/>
        //                 <Card.Body>
        //                 <Card.Title>Font Awesome</Card.Title>
        //                 <Card.Text>
        //                 Font Awesom es un framework de iconos vectoriales y estilos css. Pero… ¿para qué sirve? Este framework es utilizado para sustituir imágenes de iconos comunes por gráficos vectoriales convertidos en fuentes. Para ello utiliza una librería de mas de 400 iconos transformadas en fuentes.
        //                 </Card.Text>
        //                 </Card.Body>                       
        //             </Card>
        //             <Card>
        //                 <Card.Img variant="top" src={bootstrap} className="img-skills"/>
        //                 <Card.Body>
        //                 <Card.Title>Bootstrap</Card.Title>
        //                 <Card.Text>
        //                 Bootstrap es un framework front-end que fornece estructuras de CSS para la creación de sitios web y aplicaciones responsivas de forma rápida y simple. Además, puede lidiar con sitios web de desktop y páginas de dispositibos mobiles de la misma forma.
        //                 </Card.Text>
        //                 </Card.Body>                     
        //             </Card>
        //             <Card>
        //                 <Card.Img variant="top" src={bootstrap} className="img-skills"/>
        //                 <Card.Body>
        //                 <Card.Title>Bootstrap</Card.Title>
        //                 <Card.Text>
        //                 Bootstrap es un framework front-end que fornece estructuras de CSS para la creación de sitios web y aplicaciones responsivas de forma rápida y simple. Además, puede lidiar con sitios web de desktop y páginas de dispositibos mobiles de la misma forma.
        //                 </Card.Text>
        //                 </Card.Body>                     
        //             </Card>
        //         </CardGroup>
        //     </div>
            
        // </div>
    );
}

export default Skills;
