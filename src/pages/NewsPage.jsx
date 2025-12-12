import Header from "../components/Header";
import News from "../components/News";
import {useEffect, useState} from "react";
import getData from "../utils/api-client";

const NewsPage = () => {
  const style = {
    display:"grid",
    gridTemplateColumns:"1fr 1fr 1fr"
  }
  const [articles, setArticles] = useState([]);
  const getHeadlines = async () => {
    const news = await getData();
    console.log("The news is", news);
    setArticles(news.articles);
  };
  useEffect(() => {
    getHeadlines();
  }, []);
  return (
    <div >
      <Header></Header>
      <div style={style}>
      {articles.map((article) => (
        <News article={article}></News>
      ))}
      </div>
    </div>
  );
};

export default NewsPage;
