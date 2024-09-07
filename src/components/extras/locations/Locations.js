// importing locations
import { 
    boroventia_Gym, boroventia_Road, riverside_Road,
} from '../../../utils/image_links/locations/locations'

// importing packages
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, Image, Space } from 'antd';
const { Meta } = Card;

function Locations(){
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
                                        src={boroventia_Gym[0]+`?${random}`}
                                        placeholder={
                                        <Image
                                            preview={false}
                                            src={boroventia_Gym[1]}
                                            width={'100%'}
                                        />
                                        }
                                    />
                                </Space>
                            }
                        >
                            <Meta title="Boroventia Gym" style={{cursor:'default'}} />
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
                            <Meta title="Boroventia Road" />
                        </Card>
                    </Col>
                </Row>
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
                                        src={riverside_Road[0]+`?${random}`}
                                        placeholder={
                                        <Image
                                            preview={false}
                                            src={riverside_Road[1]}
                                            width={'100%'}
                                        />
                                        }
                                    />
                                </Space>
                            }
                        >
                            <Meta title="Riverside Road" style={{cursor:'default'}} />
                        </Card>
                    </Col>
                    <Col xs={12} md={6} style={{marginBottom:'2%'}}>
                        {/* <Card
                            hoverable
                            style={{
                            width: '75%',
                            cursor:'default',
                            }}
                            cover={
                                <Space size={12}>
                                    <Image
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
                            <Meta title="Boroventia Road" />
                        </Card> */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Locations