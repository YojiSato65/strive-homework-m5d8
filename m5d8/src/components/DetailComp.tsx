import { useEffect, useState } from 'react'
import { Container, Row, Col, Image, Badge } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import SongDetail from '../types/SongDetail'

interface DetailCompProps {
  songDetail: SongDetail
}

const DetailComp = ({ songDetail }: DetailCompProps) => {
  const { id } = useParams()
  const [song, setSong] = useState<DetailCompProps[]>([])

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
        setSong(data)
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container className="mt-5">
      <Link to={'/'}>Home</Link>
      <Row className="mt-5 justify-content-center">
        <Col md={4}>
          <Image src={songDetail.artist.picture_big} />
        </Col>
        <Col md={4} className="d-flex justify-content-center flex-column">
          <h2>{songDetail.title}</h2>
          <h4>{songDetail.artist.name}</h4>
          <p>Release: {songDetail.release_date}</p>
          <Badge variant="warning" style={{ width: 'fit-content' }}>
            {songDetail.bpm} BPM
          </Badge>
        </Col>
      </Row>
    </Container>
  )
}

export default DetailComp
