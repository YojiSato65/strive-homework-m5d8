interface SongDetail {
  id: number
  title: string
  release_date: string
  bpm: number
  artist: {
    name: string
    picture_big: string
  }
}

export default SongDetail
