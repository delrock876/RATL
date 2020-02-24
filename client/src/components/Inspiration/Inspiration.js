import React from 'react'


const Quote = require('inspirational-quotes')
let inspiration = Quote.getQuote()
// QUOTE OF TH DAY, FOUND ON HOMEPAGE
const Inspiration = () => {
  return (
      
    <div className="quote">
        "{inspiration.text}"
        <br />
        -{inspiration.author}
    </div>

  )
}

export default Inspiration