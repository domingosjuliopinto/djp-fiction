// importing images
import {boroventia_Road} from '../../utils/image_links/locations/locations'
import concept_art from '../../utils/concept_art/cropped-sundayPrian_Boroventia_Gym_concept.jpg'
import concept_art_mini from '../../utils/while_loading/concept_art/cropped-sundayPrian_Boroventia_Gym_concept.jpg'

// importing packages
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
                    <Col>
                        <Card
                            hoverable
                            style={{
                            width: '75%',
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
                            <Button>Character Concepts</Button>
                        </Card>
                    </Col>
                    <Col>
                        <Card
                            hoverable
                            style={{
                            width: '75%',
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
                            <Button>Locations</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Extras