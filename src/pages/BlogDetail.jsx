import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import parse from "html-react-parser";
// import useFetch
import useFetch from "../hooks/useFetch";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // Menggunakan useFetch untuk mengambil data dari API
  const { isLoading, apiData: post, serverError } = useFetch(`http://localhost:3000/posts/${id}`);

  // Tampilan-tampilan pesan sesuai kondisi
  if (isLoading) return <p>Loading...</p>;
  if (serverError) return <p>Error: {serverError.message}</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div className="container my-5">
      <button
        className="btn btn-outline-secondary mb-4"
        // Menggunakan useNavigate untuk mengembalikan ke halaman sebelumnya
        onClick={() => navigate(-1)}
      >
        <i className="bi bi-arrow-left"></i> Back
      </button>
      <div className="card shadow-sm p-4">
        {/* Dari {post.image} ke {post.img} */}
        <img src={post.img} alt="Blog image" className="card-img-top" />
        <h1 className="card-title text-center">{post.title}</h1>
        <p className="card-text text-muted text-center">{post.desc}</p>
        <hr />
        <div className="card-body">{parse(post.content)}</div>
      </div>
    </div>
  );
};

export default BlogDetail;
