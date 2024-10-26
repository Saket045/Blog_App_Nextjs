"use client"
import { Button } from "@/components/ui/button"
import Typed from 'typed.js';
import React, {useRef, useEffect} from 'react';

export default function Home() {
    // Create reference to store the DOM element containing the animation
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Coding', 'Web Development', 'Software Engineering', 'Data Science', 'Machine Learning'],
        typeSpeed: 50,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []); 

  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            Exploring <span className="font-semibold">my career </span>in <br className="hidden lg:block" />  <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          Every challenge is an opportunity for growth; embrace them to become the best version of yourself.
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
             
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>

<section className="py-12 bg-gray-100 dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Career paths for developers</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Career paths in development and machine learnig</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Basic Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Web Developer</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">Full Stack Developer</p>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400">HTML & CSS</li>
            <li className="text-gray-600 dark:text-gray-400">Javascript</li>
            <li className="text-gray-600 dark:text-gray-400">React or Angular</li>
            <li className="text-gray-600 dark:text-gray-400">Nodejs</li>
            <li className="text-gray-600 dark:text-gray-400">Mongodb</li>
          </ul>
          <Button className="mx-1" variant="outline">Start your journey</Button>
        </div>
      </div>
      {/* Standard Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Data Scientist</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">Data Analytics</p>
          <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">Most scope in future</span>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400">Statistics and Mathematics</li>
            <li className="text-gray-600 dark:text-gray-400">Python or R</li>
            <li className="text-gray-600 dark:text-gray-400">SQL</li>
            <li className="text-gray-600 dark:text-gray-400">Data Manipulation techniques</li>
            <li className="text-gray-600 dark:text-gray-400">Machine learning algorithms</li>
          </ul>
          <Button className="mx-1" variant="outline">Start your journey</Button>
        </div>
      </div>
      {/* Premium Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Android Developer</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">Android</p>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400">Java or Kotlin</li>
            <li className="text-gray-600 dark:text-gray-400">Android Studio</li>
            <li className="text-gray-600 dark:text-gray-400">XML</li>
            <li className="text-gray-600 dark:text-gray-400">Restful API's</li>
            <li className="text-gray-600 dark:text-gray-400">Databases - SQLite</li>
          </ul>
          <Button className="mx-1" variant="outline">Start your journey</Button>
        </div>
      </div>
    </div>
  </div>
</section>



 <section className="py-12 bg-white dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">"What the tech tychoons say"</h2>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Testimonial 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"In a world that’s changing really quickly, the only strategy that is guaranteed to fail is not taking risks"</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Mark Zuckerberg</h3>
        </div>
      </div>
      {/* Testimonial 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">“Innovation distinguishes between a leader and a follower.”</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Steve Jobs</h3>
        </div>
      </div>
      {/* Testimonial 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"Don't be afraid to take risks. You never know what great things can come from them."</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Steve Chen</h3>
     
        </div>
      </div>
    </div>
  </div>
</section>


<section className="py-12 bg-gray-100 dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Top Blogs</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Check out my blog posts</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Blog 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <img src="/typescript.webp" className="w-full h-64 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">C Programming Tutorial</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">This is C tutorial and this is for learning C</p>
            <Button className="m-2" variant="outline" href="/blog-post-1">Read More</Button>
          </div>
        </div>
      </div>
      {/* Blog 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <img src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog 2" className="w-full h-64 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">C++ programming tutorial</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">This is C++ tutorial and this is for learning C++</p>
            <Button className="m-2" variant="outline" href="/blog-post-2">Read More</Button>
          </div>
        </div>
      </div>
      {/* Blog 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <img src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg" alt="Blog 3" className="w-full h-64 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">CSS tutorial</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">This is CSS tutorial and this is for learning CSS</p>
            <Button className="m-2" variant="outline" href="/blog-post-3">Read More</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
  );
};








