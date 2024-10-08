// importing images
import {boroventia_Road} from '../../utils/image_links/locations/locations'
import concept_art from '../../utils/concept_art/cropped-sundayPrian_Boroventia_Gym_concept.jpg'
import concept_art_mini from '../../utils/while_loading/concept_art/cropped-sundayPrian_Boroventia_Gym_concept.jpg'

// importing packages
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Card, Image, Space } from 'antd';

function Extras() {
    const random = Date.now();
    return(
        <div style={{marginLeft:'7%'}}>
            <Container>
                <Row>
                    <Col xs={12} md={6} style={{marginBottom:'2%'}}>
                        <Card
                            hoverable
                            style={{
                            width: '75%',
                            cursor:'default',
                            }}
                            cover={
                                <Space size={12}>
                                    <Image
                                        preview={false}
                                    
                                        src={concept_art+`?${random}`}
                                        placeholder={
                                        <Image
                                            preview={false}
                                            src={concept_art_mini}
                                            width={'100%'}
                                        />
                                        }
                                    />
                                </Space>
                            }
                        >
                            <Link to='/extras/concept'>
                                <div className="d-grid gap-2">
                                    <Button>Character Concepts</Button>
                                </div>
                            </Link>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} style={{marginBottom:'2%'}}>
                        <Card
                            hoverable
                            style={{
                            width: '75%',
                            cursor:'default',
                            }}
                            cover={
                                <Space size={12}>
                                    <Image
                                        preview={false}
                                    
                                        src={boroventia_Road[0]+`?${random}`}
                                        placeholder={
                                        <Image
                                            preview={false}
                                            src={boroventia_Road[1]}
                                            width={'100%'}
                                        />
                                        }
                                    />
                                </Space>
                            }
                        >
                            <Link to='/extras/locations'>
                                <div className="d-grid gap-2">
                                    <Button>Locations</Button>
                                </div>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Extras