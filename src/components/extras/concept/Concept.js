// importing packages
import { Image, Space } from 'antd';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

// importing css
import './Concept.css'

// importing Character Images
import { sunday_Prian_Concept } from '../../../utils/image_links/concept_art/sundayPrianConcept'
import { ryush_Shin_Concept } from '../../../utils/image_links/concept_art/ryushShinConcept'
import { vait_Shin_Concept } from '../../../utils/image_links/concept_art/vaitShinConcept'
import { aayi_Barbooza_NLhack_Concept } from '../../../utils/image_links/concept_art/aayiBarboozaNLhackConcept'
import { xitu_Abino_DSteepz_Rockyhack_Concept } from '../../../utils/image_links/concept_art/xituAbinoDSteepzRockyhack';
import { jivani_Bel_WWhack_Concept } from '../../../utils/image_links/concept_art/jivaniBelWWhackConcept';

function Concept() {
    const random = Date.now();
    return(
        <div style={{marginLeft:'7%'}}>
            <Container>
                <Row>
                    <Col xs={10} md={6} lg={4} style={{marginBottom:'2%'}}>
                        <Space size={12}>
                            <Carousel style={{textAlign:"center"}}>
                                {sunday_Prian_Concept.map((sundayPrian)=>(
                                    <Carousel.Item>
                                    <Image
                                    src={sundayPrian[0]+`?${random}`}
                                    width={'75%'}
                                    placeholder={
                                        <Image
                                            preview={false}
                                            src={sundayPrian[1]}
                                            width={'100%'}
                                        />
                                    }
                                    />
                                    <Carousel.Caption>
                                    <h3><b>Sunday Prian</b></h3>
                                    <h5>{sundayPrian[2]}</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                ))}
                            </Carousel>
                        </Space>
                    </Col>
                    <Col xs={10} md={6} lg={4} style={{marginBottom:'2%'}}>
                        <Space size={12}>
                            <Carousel style={{textAlign:"center"}}>
                                {ryush_Shin_Concept.map((ryushShin)=>(
                                    <Carousel.Item>
                                     <Image
                                        width={'75%'}
                                        src={ryushShin[0]+`?${random}`}
                                        placeholder={
                                        <Image
                                            preview={false}
                                            src={ryushShin[1]}
                                            width={'100%'}
                                        />
                                        }
                                    />
                                    <Carousel.Caption>
                                    <h3><b>Ryush Shin</b></h3>
                                    <h5>{ryushShin[2]}</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                ))}
                            </Carousel>
                        </Space>
                    </Col>
                    <Col xs={10} md={6} lg={4} style={{marginBottom:'2%'}}>
                        <Space size={12}>
                            <Carousel style={{textAlign:"center"}}>
                                {vait_Shin_Concept.map((vaitShin)=>(
                                    <Carousel.Item>
                                     <Image
                                        width={'75%'}
                                        src={vaitShin[0]+`?${random}`}
                                        placeholder={
                                        <Image
                                            preview={false}
                                            src={vaitShin[1]}
                                            width={'100%'}
                                        />
                                        }
                                    />
                                    <Carousel.Caption>
                                    <h3><b>Vait Shin</b></h3>
                                    <h5>{vaitShin[2]}</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                ))}
                            </Carousel>
                        </Space>
                    </Col>
                    <Col xs={10} md={6} lg={4} style={{marginBottom:'2%'}}>
                        <Space size={12}>
                            <Carousel style={{textAlign:"center"}}>
                                {aayi_Barbooza_NLhack_Concept.map((aayiBarbooza_NLhack)=>(
                                    <Carousel.Item>
                                     <Image
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
                                    <Carousel.Caption>
                                    <h3><b>Aayi Barbooza (NLhack)</b></h3>
                                    <h5>{aayiBarbooza_NLhack[2]}</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                ))}
                            </Carousel>
                        </Space>
                    </Col>
                    <Col xs={10} md={6} lg={4} style={{marginBottom:'2%'}}>
                        <Space size={12}>
                            <Carousel style={{textAlign:"center"}}>
                                {xitu_Abino_DSteepz_Rockyhack_Concept.map((xituAbinoDSteepz_Rockyhack)=>(
                                    <Carousel.Item>
                                     <Image
                                        width={'75%'}
                                        src={xituAbinoDSteepz_Rockyhack[0]+`?${random}`}
                                        placeholder={
                                        <Image
                                            preview={false}
                                            src={xituAbinoDSteepz_Rockyhack[1]}
                                            width={'100%'}
                                        />
                                        }
                                    />
                                    <Carousel.Caption>
                                    <h3><b>Xitu Abino D'Steepz (Rockyhack)</b></h3>
                                    <h5>{xituAbinoDSteepz_Rockyhack[2]}</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                ))}
                            </Carousel>
                        </Space>
                    </Col>
                    <Col xs={10} md={6} lg={4} style={{marginBottom:'2%'}}>
                        <Space size={12}>
                            <Carousel style={{textAlign:"center"}}>
                                {jivani_Bel_WWhack_Concept.map((jivaniBel_WWhack)=>(
                                    <Carousel.Item>
                                    <Image
                                        width={'75%'}
                                        src={jivaniBel_WWhack[0]+`?${random}`}
                                        placeholder={
                                        <Image
                                            preview={false}
                                            src={jivaniBel_WWhack[1]}
                                            width={'100%'}
                                        />
                                        }
                                    />
                                    <Carousel.Caption>
                                    <h3><b>Jivani Bel (WWhack)</b></h3>
                                    <h5>{jivaniBel_WWhack[2]}</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                ))}
                            </Carousel>
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