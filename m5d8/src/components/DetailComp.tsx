import { useEffect, useState } from 'react'
import { Container, Row, Col, Image, Badge } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import SongDetail from '../types/SongDetail'

const DetailComp = () => {
  const { id } = useParams()
  const [mySong, setMySong] = useState<SongDetail | null>(null)

  console.table({ mySong })

  useEffect(() => {
    getSong()
  }, [])

  const getSong = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/track/${id}`,
      )
      if (response.ok) {
        const data = await response.json()
        setMySong(data)
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    mySong && (
      <Container className="mt-5">
        <Link to={'/'}>Home</Link>
        <Row className="mt-5 justify-content-center">
          <Col md={4}>
            <Image src={mySong.artist.picture_big} style={{ width: '300px' }} />
          </Col>
          <Col md={4} className="d-flex justify-content-center flex-column">
            <h2>{mySong.title}</h2>
            <h4>{mySong.artist.name}</h4>
            <p>Release: {mySong.release_date}</p>
            <Badge variant="warning" style={{ width: 'fit-content' }}>
              {mySong.bpm} BPM
            </Badge>
          </Col>
        </Row>
      </Container>
    )
  )
}

export default DetailComp
