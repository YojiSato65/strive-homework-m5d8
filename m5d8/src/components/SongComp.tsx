import { Col, Card, Button } from 'react-bootstrap'
import Song from '../types/Song'

interface SongCompProps {
  song: Song
}

const SongComp = ({ song }: SongCompProps) => {
  return (
    <Col md={4} className="mb-3">
      <Card>
        <Card.Img variant="top" src={song.artist.picture_big} />
        <Card.Body>
          <Card.Title>{song.title}</Card.Title>
          <Card.Text>{song.artist.name}</Card.Text>
          <Button variant="success">Detail</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SongComp
