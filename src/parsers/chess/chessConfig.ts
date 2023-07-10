import {Square} from "react-chessboard/dist/chessboard/types";

const ARROW_SEPARATOR = '->'

class ChessConfig {
  public fen?: string;
  public arrows?: Square[][]
  public size?: string

  constructor(content: string) {
    this.parse(content)
  }

  private parse = (content: string) => {
    const lines = content.split(/(\r\n|\n|\r)/)

    lines.forEach(this.parseLine)
  }

  private parseLine = (line: string) => {
    if (!line.trim()) {
      return
    }

    const parts = line.split(':').map(item => item.trim())
    const token = parts[0].toLowerCase()
    const value = parts[1]

    switch (token) {
      case 'fen':
        this.fen = value
        break
      case 'arrows':
        this.parseArrows(value)
        break
      case 'size':
        this.size = value
    }
  }

  private parseArrows = (line: string) => {
    this.arrows = []

    const items = line.split(' ').map(item => item.trim())

    items.forEach((item) => {
      const parts = item.split(ARROW_SEPARATOR)
      this.arrows.push(parts as Square[])
    })
  }
}

export default ChessConfig
