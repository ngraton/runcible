import React from 'react';

function Page(props) {
  const page = props.page
  const book = props.book

  const imageNum = page + 1 > 9 ? page + 1: "0" + (page +1)
  const imagePath = `./img/${book.image}${imageNum}.png`
  const audioPath = `./audio/${page - 1}.mp3`

  const speech = new Audio()

  React.useEffect(() => {
    speech.pause()
    speech.src = audioPath
    speech.play()
    return () => { speech.pause() }
    })

  return (
    <div
      className="columns is-vcentered"
    >
      <div
        className="column"
      >
        <img src={imagePath} alt=""/>
        {page}
      </div>
      <div
        className="column page-text"
      >
        <p>{book.text[page -1]}</p>
      </div>
    </div>
  )
}
export default Page;