type Product = {
  id: string
  name: string
  intro: string
  thumbnail: {
    url: string // 画像のURLを持ってくるからstring
    width: number
    height: number
  }
  link: string
  price: string
  status: [string]
}
