import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
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
        <>
        <div className='container-skills'>
            <div className='title-skill'>
                <h2 className='title-tegnology'>Tenologías usadas</h2>
                 <hr className='hr-skill'/>
            <Row xs={1} sm={3} ld={3}md={4} className="g-3 group-skills">
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
        </>       
    );
}

export default Skills;
