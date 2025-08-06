import { Suspense } from "react";
import BooksList from "@/components/BooksList/BooksList";

export default function Books() {
  return (
    <div>
      <h1>Books</h1>
      <p>All books</p>
      <Suspense fallback={<h1>Loading...</h1>}>
        <BooksList />
      </Suspense>
    </div>
  );
}
