import React from "react";
import blogData from "../data/blog";
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

console.log(blogData);

function App() {
  return (
    <div className="App">
     <Header name={blogData.name} />
      <About image="https://via.placeholder.com/215" about="This is a blog about React and web development." />
      <ArticleList posts={blogData.posts} /> 
    </div>
  );
}

export default App;
