//import './Track.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Track({track, handleClick, buttonLabel, index}) {
    return (
      <Container fluid>
      <Row sm={5} xs={3}>
        <Col  ><img src={track.src} alt={track.altText}/></Col>
        <Col  ><h6>{track.track}</h6>  </Col>
        <Col  ><p>{track.artist}</p></Col>
        <Col xs="8" ><p><small>{track.album}</small></p></Col>
        <Col className="col-xs-1 col-sm-1"><button type="button" name="add" onClick={handleClick} value={index}>{buttonLabel}</button></Col>
      </Row>
      </Container>
    );
}
  
export default Track;
//images
//Use the rounded, roundedCircle and thumbnail props to customise the image.
//Use the fluid to scale image nicely to the parent element.
