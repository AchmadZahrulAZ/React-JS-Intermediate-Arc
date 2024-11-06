import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import useFetch
import useFetch from "../hooks/useFetch";

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1); // State untuk halaman saat ini
  const postsPerPage = 6; // Jumlah item per halaman

  // Mengambil data dari API Custom Hook useFetch
  const { isLoading, apiData: posts, serverError } = useFetch("http://localhost:3000/posts", {
    // parameter query halaman
    _page: currentPage,
    _limit: postsPerPage,
  });

  if (isLoading) return <p>Loading...</p>;
  if (serverError) return <p>Error: {serverError.message}</p>;

  // Mengubah halaman ke halaman berikutnya
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Mengubah halaman ke halaman sebelumnya
  const handlePreviousPage = () => {
    // Menurunkan halaman satu tingkat, namun tidak bisa lebih kecil dari halaman 1
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Blog Posts</h1>
      <section className="row">
      {/* Jika data posts ada, lakukan map untuk setiap post */}
        {posts && posts.map((post) => (
          <div className="col-md-6 col-lg-4 mb-4" key={post.id}>
            <Link to={`/post/${post.id}`} className="text-decoration-none">
              <div className="card h-100 shadow-sm">
                <img
                  src={post.img}
                  className="card-img-top img-cstm"
                  alt={post.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text text-muted">{post.desc}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>

      {/* Tombol Pagination */}
      <div className="d-flex justify-content-between mt-4">
        <button
          className="btn btn-primary"
          onClick={handlePreviousPage}
          // Menonaktifkan tombol Previous jika sudah di halaman pertama
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button className="btn btn-primary" onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogList;
