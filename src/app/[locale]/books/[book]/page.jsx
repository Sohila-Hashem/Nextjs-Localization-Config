import { Book } from "@/components/Book/Book";

export default async function BookPage({ params }) {
  const { book } = params;
  const bookData = await fetch(
    `https://68931b6bc49d24bce86975be.mockapi.io/books/${book}`
  ).then((res) => res.json());

  return (
    <div>
      <Book book={bookData} />
    </div>
  );
}
