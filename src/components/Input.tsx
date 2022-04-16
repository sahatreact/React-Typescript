import React from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value, handleChange }: InputProps) => {
  // alih alih mengirimkan handlechange lewat props, kita juga bisa membuatnya di dalam component ini sendiri
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    console.log(event);
  return <input type="text" value={value} onChange={handleInputChange} />;
};
