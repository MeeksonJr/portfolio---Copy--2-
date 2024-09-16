import { useEffect, useState } from 'react';
import '../styled/GitHubSection.css';

function GitHubSection() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/MeeksonJr/repos')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Sort repos by creation date in descending order
        const sortedRepos = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setRepos(sortedRepos);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="github-section"><p>Loading...</p></div>;
  }

  if (error) {
    return <div className="github-section"><p>Error: {error}</p></div>;
  }

  return (
    <div id="github" className="github-section">
      <h2 className="section-title">GitHub Repositories</h2>
      {repos.length === 0 ? (
        <p>No repositories found.</p>
      ) : (
        <div className="repo-cards-container">
          {repos.map((repo) => (
            <div key={repo.id} className="repo-card">
              <h3>{repo.name}</h3>
              <p className="repo-description">{repo.description || 'No description available'}</p>
              <p className="repo-details">
                <span className="repo-language">{repo.language || 'Unknown language'}</span> | 
                <span className="repo-date">Created on: {new Date(repo.created_at).toLocaleDateString()}</span>
              </p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-link">
                View Repository
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GitHubSection;
