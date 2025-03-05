import React from 'react';
import { Link } from 'react-router-dom';  

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
     
      <h2>Страница не найдена</h2>
      <img
                  src="https://images.unsplash.com/photo-1697535255597-a3a62ec492ff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Cat"
                  className={Image}
                  width={400}
                />
      <p>Извините, но запрашиваемая страница не существует.</p>
      <Link to="/">Перейти на главную страницу</Link>
    </div>
  );
};

export default NotFoundPage;