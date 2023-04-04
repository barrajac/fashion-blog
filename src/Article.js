import React from "react";

function Article(props) {
  return (
    <article>
      <p className="date">{props.date}</p>
      <h2 className="blog-title">{props.title}</h2>
      <img className={props.imgClass} src={props.imgSrc} alt={props.imgAlt} />
      <p className="add-fancy-style">{props.content}</p>
      <p className="continues">
        <a className="cont-anchor" href={props.link}>
          Continues ...
        </a>
      </p>
    </article>
  );
}

export default Article;
