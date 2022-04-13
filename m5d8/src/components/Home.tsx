import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FormEvent, useState } from 'react'
import Song from '../types/Song'
import SongComp from './SongComp'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [songs, setSongs] = useState<Song[]>([])

  const getSongs = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`,
      )
      if (response.ok) {
        const data = await response.json()
        setSongs(data.data)
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    getSongs()
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8} className="my-5">
          <Form
            className="d-flex justify-content-center"
            onSubmit={handleSearch}
          >
            <Form.Group className="mb-0">
              <Form.Control
                type="text"
                placeholder="Enter artist name here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="ml-3">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        {songs.map((song) => (
          <SongComp song={song} key={song.id} />
        ))}
      </Row>
    </Container>
  )
}

export default Home
