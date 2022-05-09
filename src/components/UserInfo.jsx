import React, { useState, useEffect } from 'react';
import Location from '../images/icon-location.svg';
import Twitter from '../images/icon-twitter.svg';
import Website from '../images/icon-website.svg';
import Company from '../images/icon-company.svg';

const UserInfo = ({ url }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [url]);

  return (
    <section className="profile" role="contentinfo">
      {/* header */}
      <div className="profile-header">
        <div className="profile-image">
          <img src={user.avatar_url} alt="user avatar" style={{ width: '200px', height: 'auto' }} />
        </div>
        <div className="profile-info">
          <div className="profile-name">
            <h2 className="profile-title">{user.name}</h2>
            <h3 className="profile-username">@{user.login}</h3>
          </div>
          <div className="profile-date">
            <h2 className="profile-date-text">{user.created_at}</h2>
          </div>
        </div>
      </div>
      {/* Bio */}
      <p className="profile-bio">{user.bio === null ? 'This Profile has no bio' : user.bio}</p>
      {/* stats */}
      <div className="profile-stats">
        <div className="profile-repos">
          <h3 className="profile-stats-title">Repos</h3>
          <p className="profile-stats-value">{user.public_repos}</p>
        </div>
        <div className="profile-followers">
          <h3 className="profile-stats-title">Followers</h3>
          <p className="profile-stats-value">{user.followers}</p>
        </div>
        <div className="profile-followings">
          <h3 className="profile-stats-title">Followings</h3>
          <p className="profile-stats-value">{user.following}</p>
        </div>
      </div>
      {/* other */}
      <div className="profile-others">
        <ul className="profile-others-list">
          <li className="profile-others-item profile-others-location">
            <span className="profile-location-icon">
              <img src={Location} alt="icon-location" />
            </span>
            <span className="profile-location-text">{user.location}</span>
          </li>
          <li className="profile-others-item profile-others-twitter">
            <span className="profile-twitter-icon">
              <img src={Twitter} alt="icon-twitter" />
            </span>
            <span className="profile-twitter-text">{user.twitter_username}</span>
          </li>
          <li className="profile-others-item profile-others-website">
            <span className="profile-website-icon">
              <img src={Website} alt="icon-website-link" />
            </span>
            <span className="profile-website-text">{user.blog}</span>
          </li>
          <li className="profile-others-item profile-others-company">
            <span className="profile-company-icon">
              <img src={Company} alt="icon-company" />
            </span>
            <span className="profile-company-text">{user.company}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default UserInfo;
