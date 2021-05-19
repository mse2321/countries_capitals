import Header from './layout/Header';
import Views from './views/Views';
import Footer from './layout/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import { StateProvider } from '../context/state';

const App = () => {
  return (
    <Container fluid>
      <Row id="content_wrap">
        <StateProvider>
          <Col xs={12} xl={7}>
            <Header />
            <Views />
          </Col>
          <Footer />
        </StateProvider>
      </Row>
    </Container>
  );
}

export default App;