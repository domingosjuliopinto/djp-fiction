// Import Packages
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Import Static Content
import './Home.css';
import logo from '../../logo.png';

function Home() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container>
          <Row>
            <Col xs={12} sm={10} md={8} lg={6} xl={4} className='center_align'>
              <div className="d-grid gap-2 button_color">
                <Button variant="outline-primary" size="lg">
                  Books
                </Button>
              </div>
            </Col>
            <Col xs={12} sm={10} md={8} lg={6} xl={4} className='center_align'>
              <div className="d-grid gap-2 button_color">
                <Button variant="outline-primary" size="lg">
                  Characters
                </Button>
              </div>
            </Col>
            <Col xs={12} sm={10} md={8} lg={6} xl={4} className='center_align'>
              <div className="d-grid gap-2 button_color">
                <Button variant="outline-primary" size="lg">
                  Championships
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={10} md={8} lg={6} xl={4} className='center_align'>
              <div className="d-grid gap-2 button_color">
                <Button variant="outline-primary" size="lg">
                  Fight Records
                </Button>
              </div>
            </Col>
            <Col xs={12} sm={10} md={8} lg={6} xl={4} className='center_align'>
              <div className="d-grid gap-2 button_color">
                <Button variant="outline-primary" size="lg">
                  Events
                </Button>
              </div>
            </Col>
            <Col xs={12} sm={10} md={8} lg={6} xl={4} className='center_align'>
              <div className="d-grid gap-2 button_color">
                <Button variant="outline-primary" size="lg">
                  Locations
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={10} md={8} lg={6} xl={4} className='center_align'>
              <div className="d-grid gap-2 button_color">
                <Button variant="outline-primary" size="lg">
                  Character Concept
                </Button>
              </div>
            </Col>
            <Col xs={12} sm={10} md={8} lg={6} xl={4} className='center_align'>
              <div className="d-grid gap-2 button_color">
                <Button variant="outline-primary" size="lg">
                  About
                </Button>
              </div>
            </Col>
            <Col xs={12} sm={10} md={8} lg={6} xl={4} className='center_align'>
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
