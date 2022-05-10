import React, { useState, useEffect } from 'react';
import Error from './Error';
import Location from '../images/icon-location.svg';
import Twitter from '../images/icon-twitter.svg';
import Website from '../images/icon-website.svg';
import Company from '../images/icon-company.svg';

const UserInfo = ({ url }) => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log('re-rendered');
    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }

        if (response.status === 404) {
          setError(true);
        }
      })
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  const created_at_gen = () => {
    const obj = new Date(user.created_at);
    const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = obj.getUTCDate();
    const month = monthArr[obj.getUTCMonth()];
    const year = obj.getUTCFullYear();
    const dateString = date + ' ' + month + ' ' + year;
    return dateString;
  };

  if (error) {
    return (
      <section className="profile" role="contentinfo" style={{ textAlign: 'center' }}>
        <Error />
      </section>
    );
  }

  return (
    <section className="profile" role="contentinfo">
      {/* header */}
      <div className="profile-header">
        <div className="profile-image">
          <img src={user.avatar_url} alt="user avatar" />
        </div>
        <div className="profile-info">
          <div className="profile-name">
            <h2 className="profile-title">{user.name}</h2>
            <h3 className="profile-username">@{user.login}</h3>
          </div>
          <div className="profile-date">
            <h3 className="profile-date-text">Joined {created_at_gen()}</h3>
          </div>
        </div>
      </div>
      {/* Bio */}
      <p className="profile-bio">{user.bio === null ? 'This Profile has no bio' : user.bio}</p>
      {/* stats */}
      <div className="profile-stats">
        <div className="profile-repos profile-stats-block">
          <h3 className="profile-stats-title">Repos</h3>
          <p className="profile-stats-value">{user.public_repos}</p>
        </div>
        <div className="profile-followers profile-stats-block">
          <h3 className="profile-stats-title">Followers</h3>
          <p className="profile-stats-value">{user.followers}</p>
        </div>
        <div className="profile-followings profile-stats-block">
          <h3 className="profile-stats-title">Followings</h3>
          <p className="profile-stats-value">{user.following}</p>
        </div>
      </div>
      {/* other */}
      <div className="profile-others">
        <ul className="profile-others-list">
          <li className="profile-others-item profile-others-location">
            <span className="profile-item-icon">
              <img src={Location} alt="icon-location" />
            </span>
            <span className="profile-item-text">{user.location || 'Not Available'}</span>
          </li>
          <li className="profile-others-item profile-others-twitter">
            <span className="profile-item-icon">
              <img src={Twitter} alt="icon-twitter" />
            </span>
            <span className="profile-item-text">{user.twitter_username || 'Not Available'}</span>
          </li>
          <li className="profile-others-item profile-others-website">
            <span className="profile-item-icon">
              <img src={Website} alt="icon-website-link" />
            </span>
            <span className="profile-item-text">{user.blog || 'Not Available'}</span>
          </li>
          <li className="profile-others-item profile-others-company">
            <span className="profile-item-icon">
              <img src={Company} alt="icon-company" />
            </span>
            <span className="profile-item-text">{user.company || 'Not Available'}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default UserInfo;
