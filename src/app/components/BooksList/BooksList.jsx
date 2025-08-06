export default async function BooksList() {
  const books = await fetch(
    `https://${process.env.MOCKAPI_SECRET}.mockapi.io/books`
  ).then((res) => res.json());

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <a href={`/books/${book.id}`}>{book.title}</a>
        </li>
      ))}
    </ul>
  );
}
