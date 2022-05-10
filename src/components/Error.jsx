import React from 'react';

const Error = () => {
  return (
    <div className="error">
      <div className="center">
        <section className="error__section">
          <h1 className="error__title">404</h1>
          <h2 className="error__type">User not found</h2>
          <p className="error__cta">We’re sorry, the user you have looked for does not exist in our database!</p>
        </section>
      </div>
    </div>
  );
};

export default Error;
