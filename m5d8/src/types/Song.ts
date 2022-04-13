interface Song {
  id: number
  title: string
  artist: {
    name: string
    picture_big: string
  }
}

export default Song
