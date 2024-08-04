// Import Packages
import { Link } from 'react-router-dom';
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
        <div style={{marginTop:"3%"}}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Container>
          <Row>
            <Col xs={10} md={6} lg={4} className='center_align'>
              <Link to="/books">
                <div className="d-grid gap-2 button_color">
                  <Button variant="outline-primary" size="lg">
                    Books
                  </Button>
                </div>
              </Link>
            </Col>
            <Col xs={10} md={6} lg={4} className='center_align'>
              <Link to="/characters">
                <div className="d-grid gap-2 button_color">
                  <Button variant="outline-primary" size="lg">
                    Characters
                  </Button>
                </div>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col xs={10} md={6} lg={4} className='center_align'>
              <Link to="/records">
                <div className="d-grid gap-2 button_color">
                  <Button variant="outline-primary" size="lg">
                    Records
                  </Button>
                </div>
              </Link>
            </Col>
            <Col xs={10} md={6} lg={4} className='center_align'>
              <Link to="/extras">
                <div className="d-grid gap-2 button_color">
                  <Button variant="outline-primary" size="lg">
                    Extras
                  </Button>
                </div>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col xs={10} md={6} lg={4} className='center_align'>
              <Link to="/about">
                <div className="d-grid gap-2 button_color">
                  <Button variant="outline-primary" size="lg">
                    About
                  </Button>
                </div>
              </Link>
            </Col>
            <Col xs={10} md={6} lg={4} className='center_align'>
              <Link to="/admin">
                <div className="d-grid gap-2 button_color">
                  <Button variant="outline-primary" size="lg">
                    Admin Portal
                  </Button>
                </div>
              </Link>  
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default Home;
