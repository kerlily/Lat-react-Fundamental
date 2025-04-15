function Article(props) {
  return (
    <>
        <h2>{props.title}</h2>
        <div>
            {props.content.map((index) => {
                return <div>- {index}</div>;
            }
            )}
        </div>
    </>
  );
}

export default Article;