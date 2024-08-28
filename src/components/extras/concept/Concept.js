// importing packages
import { Image, Space } from 'antd';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// importing Character Images
import {sundayPrian_Boroventia_Gym_Concept} from '../../../utils/image_links/concept_art/sundayPrianConcept'
import {ryushShin_Boroventia_Gym_Concept} from '../../../utils/image_links/concept_art/ryushShinConcept'
import {vaitShin_Boroventia_Gym_Concept} from '../../../utils/image_links/concept_art/vaitShinConcept'
import {aayiBarbooza_NLhack_Concept} from '../../../utils/image_links/concept_art/aayiBarboozaNLhackConcept'

function Concept() {
    const random = Date.now();
    return(
        <div style={{marginLeft:'7%'}}>
            <Container>
                <Row>
                    <Col xs={10} md={6} lg={4} style={{marginBottom:'2%'}}>
                        <Space size={12}>
                            <Image
                                width={'75%'}
                                src={sundayPrian_Boroventia_Gym_Concept[0]+`?${random}`}
                                placeholder={
                                <Image
                                    preview={false}
                                    src={sundayPrian_Boroventia_Gym_Concept[1]}
                                    width={'100%'}
                                />
                                }
                            />
                        </Space>
                    </Col>
                    <Col xs={10} md={6} lg={4} style={{marginBottom:'2%'}}>
                        <Space size={12}>
                            <Image
                                width={'75%'}
                                src={ryushShin_Boroventia_Gym_Concept[0]+`?${random}`}
                                placeholder={
                                <Image
                                    preview={false}
                                    src={ryushShin_Boroventia_Gym_Concept[1]}
                                    width={'100%'}
                                />
                                }
                            />
                        </Space>
                    </Col>
                    <Col xs={10} md={6} lg={4} style={{marginBottom:'2%'}}>
                        <Space size={12}>
                            <Image
                                width={'75%'}
                                src={vaitShin_Boroventia_Gym_Concept[0]+`?${random}`}
                                placeholder={
                                <Image
                                    preview={false}
                                    src={vaitShin_Boroventia_Gym_Concept[1]}
                                    width={'100%'}
                                />
                                }
                            />
                        </Space>
                    </Col>
                    <Col xs={10} md={6} lg={4} style={{marginBottom:'2%'}}>
                        <Space size={12}>
                            <Image
                                width={'75%'}
                                src={aayiBarbooza_NLhack_Concept[0]+`?${random}`}
                                placeholder={
                                <Image
                                    preview={false}
                                    src={aayiBarbooza_NLhack_Concept[1]}
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

export default Concept