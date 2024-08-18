// importing packages
import { Image, Space } from 'antd';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// importing Character Images
import sundayPrian from '../../utils/characters/sunday_Prian/djpf1/sundayPrian_Boroventia_Gym.png'
import ryushShin from '../../utils/characters/ryush_Shin/djpf1/ryushShin_Boroventia_Gym.png'
import vaitShin from '../../utils/characters/vait_Shin/djpf1/vaitShin_Boroventia_Gym.png'
import aayiBarboozaNLhack from '../../utils/characters/aayi_Barbooza_NLhack/djpf1/aayiBarbooza_NLhack.png'

// importing while loading character Images
import sundayPrian_mini from '../../utils/while_loading/characters/sunday_Prian/djpf1/sundayPrian_Boroventia_Gym.png'
import ryushShin_mini from '../../utils/while_loading/characters/ryush_Shin/djpf1/ryushShin_Boroventia_Gym.png'
import vaitShin_mini from '../../utils/while_loading/characters/vait_Shin/djpf1/vaitShin_Boroventia_Gym.png'
import aayiBarboozaNLhack_mini from '../../utils/while_loading/characters/aayi_Barbooza_NLhack/djpf1/aayiBarbooza_NLhack.png'

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
                                src={sundayPrian+`?${random}`}
                                placeholder={
                                <Image
                                    preview={false}
                                    src={sundayPrian_mini}
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
                                src={ryushShin+`?${random}`}
                                placeholder={
                                <Image
                                    preview={false}
                                    src={ryushShin_mini}
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
                                src={vaitShin+`?${random}`}
                                placeholder={
                                <Image
                                    preview={false}
                                    src={vaitShin_mini}
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
                                src={aayiBarboozaNLhack+`?${random}`}
                                placeholder={
                                <Image
                                    preview={false}
                                    src={aayiBarboozaNLhack_mini}
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