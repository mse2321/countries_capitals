import Header from './components/Header';
import Footer from './components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.scss';

const App = () => {
  return (
    <Container fluid>
      <Row id="content_wrap">
        <Col xs={12} xl={7}>
          <Header />
        </Col>
        <Footer />
      </Row>
    </Container>
  );
}

export default App;