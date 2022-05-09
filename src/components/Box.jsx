import React, { useState } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import UserInfo from './UserInfo';

const Box = ({ toggleTheme, theme }) => {
  const [value, setValue] = useState('');
  const [user, setUser] = useState('bradtraversy');

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(value);
  };

  const url = `https://api.github.com/users/${user}`;

  return (
    <section className="box" role="application">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <SearchBar value={value} handleSubmit={handleSubmit} handleChange={handleChange} />
      <UserInfo url={url} />
    </section>
  );
};

export default Box;
