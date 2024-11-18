//import './Track.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

function Track({track, clickHandler, buttonLabel, index}) {
  const handleClick = ({currentTarget}) => clickHandler(currentTarget.value);
  /**When using only target prop of onClick event, I had major issues where e.target.value would randomly be undefined. 
   * This created issues in both adding and removing playlist contents.
   * After several weeks of searching...
   * changed from {target} to {currentTarget} per solution on https://github.com/facebook/react/issues/4745 and solved all my issues. 
   * No more random undefined.
   * */

    return (
      <Container fluid>
      <Row sm={5} xs={3}>
        <Col  ><img src={track.src} alt={track.altText}/></Col>
        <Col  ><h6>{track.track}</h6>  </Col>
        <Col  ><p>{track.artist}</p></Col>
        <Col xs="8" ><p><small>{track.album}</small></p></Col>
        <Col className="col-xs-1 col-sm-1">
          <Button type="button" variant="outline-secondary" name="add" onClick={handleClick} value={index}><strong>{buttonLabel}</strong>
          </Button>
        </Col>
      </Row>
      </Container>
    );
}
  
export default Track;
//images
//Use the rounded, roundedCircle and thumbnail props to customise the image.
//Use the fluid to scale image nicely to the parent element.
