import React from 'react';

interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return (
    <button
      type="button"
      className="w-48 h-10 bg-yellow-500 text-center text-2xl"
    >
      {text}
    </button>
  );
}

export default Button;
