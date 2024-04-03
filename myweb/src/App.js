import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

const quotes = [
  "Life is Story that you tell yourself and I wanna make sure atleast try that it worth telling -Premchand",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "The best way to predict the future is to create it. - Abraham Lincoln",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Every moment is a fresh beginning. - T.S. Eliot",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "The only person you should try to be better than is the person you were yesterday. - Unknown",
  "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The best way to predict the future is to create it. - Abraham Lincoln",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The best way to predict the future is to create it. - Abraham Lincoln",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The best way to predict the future is to create it. - Abraham Lincoln",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The best way to predict the future is to create it. - Abraham Lincoln",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The best way to predict the future is to create it. - Abraham Lincoln",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The best way to predict the future is to create it. - Abraham Lincoln",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The best way to predict the future is to create it. - Abraham Lincoln",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The best way to predict the future is to create it. - Abraham Lincoln"
];

const RandomQuoteGenerator = () => {
  const [quote, setQuote] = useState('');

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className='container'>
      <h1 className='grad'>Inspiring Life Quotes</h1>
      <div className='quote'>
      {quote && <p>{quote}</p>}
      </div>

      <Button variant="primary" onClick={generateRandomQuote}>Next Quote</Button>


    </div>
    
  );
};

export default RandomQuoteGenerator; 
