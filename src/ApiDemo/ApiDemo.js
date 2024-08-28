import React, { useState, useEffect } from "react";

const ApiDemo = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
//   const [islogged, setIsLogged] = useState(false);
  const url =
    "https://newsapi.org/v2/everything?q=tesla&from=2024-02-16&sortBy=publishedAt&apiKey=d75118449e5148a4ae3f517868dec207";
  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
           console.log("API data:", data.articles);
        setNews(data.articles);
        setIsLoading(false);
     //    if(!islogged){
     //      console.log(news);
     //      setIsLogged(true);
     //    }
        
     //    console.log(news);
      });
  };
  useEffect(() => {
    getData();

  }, []);
      
  //   const postData = async () => {
  //     const response = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         title: "React Post Example",
  //         description: "This is an example of a post using the react app.",
  //       }),
  //     });
  //     const result = await response.json();
  //     setNews(...news, result);
  //   };
  return (
    <div>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <div>
          {news.map((data,index) => {
            return (
              <div
                key={index}
                style={{
                  height: 500,
                  width: 500,
                  float: "left",
                  margin: 20,
                  border: "solid",
                  boxSizing: "border-box",
                  padding: 10,
                }}
              >
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                {/* <img src={data.urlToImage} height={250} width="300" /> */}
              </div>
            );
          })}
        </div>
      )}
      {/* <button onClick={ postData}>PostData</button> */}
    </div>
  );
};

export default ApiDemo;
