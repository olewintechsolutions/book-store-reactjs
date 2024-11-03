import React, { useState } from 'react';
import { FaUpload, FaSearch } from 'react-icons/fa';

const ArticlePlatform = () => {
    const [articles, setArticles] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [newArticleTitle, setNewArticleTitle] = useState('');
    const [newArticleContent, setNewArticleContent] = useState('');


  const handleUploadArticle = () => {
    // Check if title and content are not empty
    if (newArticleTitle.trim() !== '' && newArticleContent.trim() !== '') {
      // Add the new article to the articles state
      const newArticle = { id: Date.now(), title: newArticleTitle, content: newArticleContent };
      setArticles([...articles, newArticle]);

      // Clear the form inputs after uploading
      setNewArticleTitle('');
      setNewArticleContent('');
    } else {
      alert('Please enter a title and content for the article.');
    }
  };


  const handleSearch = () => {
    // Logic to filter articles based on search query
    // For simplicity, let's just filter articles containing the search query in their title
    const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(searchQuery.toLowerCase()));
    return filteredArticles;
  };

  const renderArticles = () => {
    const filteredArticles = handleSearch();
    return filteredArticles.map(article => (
      <div key={article.id}>
        <h2>{article.title}</h2>
        <p>{article.content}</p>
      </div>
    ));
  };

  return (
    <div>
      <div className="header">
        <h1>Welcome to Medium-like Platform</h1>
        <div className="actions">
          <button onClick={handleUploadArticle}><FaUpload /> Upload Article</button>
          <div className="search-bar">
            <input type="text" placeholder="Search articles" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button onClick={handleSearch}><FaSearch /></button>
          </div>
        </div>
      </div>
      <div className="articles-list">
        {renderArticles()}
      </div>
    </div>
  );
};

export default ArticlePlatform;
