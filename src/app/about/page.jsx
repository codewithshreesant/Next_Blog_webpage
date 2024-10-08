import React from 'react'

function About() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
  <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl w-full">
    <h1 className="text-4xl font-bold text-center mb-4 dark:text-black">About Us</h1>
    <p className="text-lg text-gray-700 mb-4">
      Welcome to our programming blog! We are passionate about sharing knowledge and helping developers of all levels improve their skills. Our team consists of experienced software engineers, designers, and tech enthusiasts who are dedicated to providing high-quality content.
    </p>
    <p className="text-lg text-gray-700 mb-4">
      Whether you're a beginner looking to learn the basics or an experienced developer seeking advanced techniques, you'll find valuable resources here. We cover a wide range of topics including [web development](https://developer.mozilla.org/en-US/docs/Web), [mobile development](https://developer.android.com/), [data science](https://en.wikipedia.org/wiki/Data_science), and more.
    </p>
    <p className="text-lg text-gray-700 mb-4">
      Our mission is to create a supportive and inclusive community where everyone can learn and grow together. Thank you for visiting our blog, and we hope you find our content helpful and inspiring!
    </p>
    <div className="flex justify-center mt-6">
      <img src="https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Team Photo" className="rounded-lg shadow-lg w-1/2" />
    </div>
  </div>
</div>

  )
}

export default About