import React from 'react';

import { Link } from 'react-router-dom';
interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return (
    <Link to={`/${text}`}>
      <button
        type="button"
        className="w-48 h-10 bg-yellow-500 text-center text-2xl"
      >
        {text}
      </button>
    </Link>
  );
}

export default Button;
