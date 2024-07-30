// Import Packages
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

// Import Static Content
import './Home.css';
import logo from '../../logo.png';

function Home() {
  return (
    <div>
      <header className="App-header">
        <div style={{marginTop:"3%"}}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Container>
          <Row>
            <Col xs={10} md={6} lg={4} className='center_align'>
              <div className="d-grid gap-2 button_color">
                <Button variant="outline-primary" size="lg">
                  Books
                </Button>
              </div>
            </Col>
            <Col xs={10} md={6} lg={4} className='center_align'>
              <div className="d-grid gap-2 button_color">
                <Button variant="outline-primary" size="lg">
                  Characters
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={10} md={6} lg={4} className='center_align'>
              <div className="d-grid gap-2 button_color">
                <Button variant="outline-primary" size="lg">
                  Records&nbsp;
                  <Tooltip placement="right" title="contains Fight Records, Events and Championships">
                    <QuestionCircleOutlined style={{fontSize:"18px"}}/>
                  </Tooltip>
                </Button>
              </div>
            </Col>
            <Col xs={10} md={6} lg={4} className='center_align'>
              <div className="d-grid gap-2 button_color">
                <Button variant="outline-primary" size="lg">
                  Extras&nbsp;
                  <Tooltip placement="right" title="contains Character Concept and Locations">
                    <QuestionCircleOutlined style={{fontSize:"18px"}}/>
                  </Tooltip>
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={10} md={6} lg={4} className='center_align'>
              <div className="d-grid gap-2 button_color">
                <Button variant="outline-primary" size="lg">
                  About
                </Button>
              </div>
            </Col>
            <Col xs={10} md={6} lg={4} className='center_align'>
              <div className="d-grid gap-2 button_color">
                <Button variant="outline-primary" size="lg">
                  Admin Portal
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default Home;
