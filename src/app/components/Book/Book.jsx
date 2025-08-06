export function Book({ book }) {
  return (
    <div>
      <h1>{book?.title}</h1>
      <p>{book?.description}</p>
      <img src={book?.img} alt={book?.title} width={600} height={300} />
      <p>{book?.price}</p>
    </div>
  );
}
