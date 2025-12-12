import React from 'react'

const News = ({article}) => {
  const imgStyle = {
    height : "20vh"
  }
  return (
    <div style={{width:"25vw", display: "grid", border:"1px solid black", borderRadius:"20px", padding: "30px", margin:"20px"}}>
      <h1>{article.title}</h1>
      <p>~{article.author}</p>
      <p>{article.content}</p>
      <img src={article.urlToImage} alt="" style={imgStyle}/>
      <a href={article.url}>click here to view full news</a>
    </div>
  )
}

export default News
