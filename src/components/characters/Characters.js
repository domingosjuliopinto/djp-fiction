// importing packages
import { Image, Space } from 'antd';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// importing Character Images
import {sundayPrian_Boroventia_Gym} from '../../utils/image_links/characters/sundayPrian'
import {ryushShin_Boroventia_Gym} from '../../utils/image_links/characters/ryushShin'
import {vaitShin_Boroventia_Gym} from '../../utils/image_links/characters/vaitShin'
import {aayiBarbooza_NLhack} from '../../utils/image_links/characters/aayiBarboozaNLhack'

function Characters() {
    const random = Date.now();
    return(
        <div style={{marginLeft:'7%'}}>
            <Container>
                <Row>
                    <Col xs={10} md={6} lg={4} style={{marginBottom:'2%'}}>
                        <Space size={12}>
                            <Image
                                preview={false}
                                width={'75%'}
                                src={sundayPrian_Boroventia_Gym[0]+`?${random}`}
                                placeholder={
                                <Image
                                    preview={false}
                                    src={sundayPrian_Boroventia_Gym[1]}
                                    width={'100%'}
                                />
                                }
                            />
                        </Space>
                    </Col>
                    <Col xs={10} md={6} lg={4} style={{marginBottom:'2%'}}>
                        <Space size={12}>
                            <Image
                                preview={false}
                                width={'75%'}
                                src={ryushShin_Boroventia_Gym[0]+`?${random}`}
                                placeholder={
                                <Image
                                    preview={false}
                                    src={ryushShin_Boroventia_Gym[1]}
                                    width={'100%'}
                                />
                                }
                            />
                        </Space>
                    </Col>
                    <Col xs={10} md={6} lg={4} style={{marginBottom:'2%'}}>
                        <Space size={12}>
                            <Image
                                preview={false}
                                width={'75%'}
                                src={vaitShin_Boroventia_Gym[0]+`?${random}`}
                                placeholder={
                                <Image
                                    preview={false}
                                    src={vaitShin_Boroventia_Gym[1]}
                                    width={'100%'}
                                />
                                }
                            />
                        </Space>
                    </Col>
                    <Col xs={10} md={6} lg={4} style={{marginBottom:'2%'}}>
                        <Space size={12}>
                            <Image
                                preview={false}
                                width={'75%'}
                                src={aayiBarbooza_NLhack[0]+`?${random}`}
                                placeholder={
                                <Image
                                    preview={false}
                                    src={aayiBarbooza_NLhack[1]}
                                    width={'100%'}
                                />
                                }
                            />
                        </Space>
                    </Col>
                </Row>
                <Row>
                    <Col xs={10} md={6} lg={4} style={{marginBottom:'2%'}}>
                        {/* <Space size={12}>
                            <Image
                                preview={false}
                                width={'75%'}
                                src={aayiBarboozaNLhack+`?${random}`}
                                placeholder={
                                <Image
                                    preview={false}
                                    src={aayiBarboozaNLhack_mini}
                                    width={'100%'}
                                />
                                }
                            />
                        </Space> */}
                    </Col>
                    <Col xs={10} md={6} lg={4} style={{marginBottom:'2%'}}>
                        {/* <Space size={12}>
                            <Image
                                preview={false}
                                width={'75%'}
                                src={ryushShin+`?${random}`}
                                placeholder={
                                <Image
                                    preview={false}
                                    src={ryushShin_mini}
                                    width={'100%'}
                                />
                                }
                            />
                        </Space> */}
                    </Col>
                    <Col xs={10} md={6} lg={4} style={{marginBottom:'2%'}}>
                        {/* <Space size={12}>
                            <Image
                                preview={false}
                                width={'75%'}
                                src={vaitShin+`?${random}`}
                                placeholder={
                                <Image
                                    preview={false}
                                    src={vaitShin_mini}
                                    width={'100%'}
                                />
                                }
                            />
                        </Space> */}
                    </Col>
                    <Col xs={10} md={6} lg={4} style={{marginBottom:'2%'}}>
                        {/* <Space size={12}>
                            <Image
                                preview={false}
                                width={'75%'}
                                src={aayiBarboozaNLhack+`?${random}`}
                                placeholder={
                                <Image
                                    preview={false}
                                    src={aayiBarboozaNLhack_mini}
                                    width={'100%'}
                                />
                                }
                            />
                        </Space> */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Characters