import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";
import Footer from "./Footer";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <main className="main">
        <Article
          date="11/12/20"
          title="On the Street in Brooklyn"
          imgClass="blog-image-1"
          imgSrc="blog-image-1.jpg"
          imgAlt="building-with-woman-in-red-dress"
          content="Cray ipsum, ipsum dolor sit amet consectetur adipisicing elit. Distinctio libero quod inventore adipisci explicabo est ullam eligendi exercitationem! Maiores reprehenderit soluta eius ipsam suscipit ad reiciendis inventore fugiat animi qui! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit voluptate, architecto quisquam sunt dolore recusandae magni accusantium natus adipisci esse, nemo enim placeat suscipit obcaecati veniam voluptatem dolorum eligendi id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias optio suscipit architecto quia tempore soluta, quae sit doloremque in, eos molestiae accusamus quisquam neque unde praesentium ea repudiandae facilis facere."
          link="..."
        />
        <Article
          date="11/11/20"
          title="Vintage in Vogue"
          imgClass="blog-image-2"
          imgSrc="blog-image-2.jpg"
          imgAlt="three-people-in-fashionable-clothing"
          content="Selfies sunt, dolor sit amet consectetur adipisicing elit. Distinctio libero quod inventore adipisci explicabo est ullam eligendi exercitationem! Maiores reprehenderit soluta eius ipsam suscipit ad reiciendis inventore fugiat animi qui! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit voluptate, architecto quisquam sunt dolore recusandae magni accusantium natus adipisci esse, nemo enim placeat suscipit obcaecati veniam voluptatem dolorum eligendi id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias optio suscipit architecto quia tempore soluta, quae sit doloremque in, eos molestiae accusamus quisquam neque unde praesentium ea repudiandae facilis facere."
          link="..."
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
