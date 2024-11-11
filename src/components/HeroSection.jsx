import React from 'react';

const HeroSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Persiapan IFW 2024? Tokopedia Fashion Market x Indonesia Fashion Week Punya Kejutan Buat Kamu!',
      image: 'https://images.tokopedia.net/img/KRMmCm/2024/3/21/007d8a06-a374-4d5f-8cd6-b35a2772d6b8.jpg',
      date: '21 March 2024',
    },
    {
      id: 2,
      title: 'Brand fesyen THENBLANK ciptakan peluang dalam negeri bersama Tokopedia',
      image: 'https://images.tokopedia.net/img/KRMmCm/2023/8/23/de714108-8126-4458-8efc-ba57023fbf74.jpg',
    },
    {
      id: 3,
      title: 'Implementasi AI di Tokopedia, dari Gudang Pintar sampai Sistem Rekomendasi',
      image: 'https://images.tokopedia.net/img/KRMmCm/2023/8/21/0b782512-f8ff-49b4-8fc6-81364d662e4d.jpg',
    },
    {
      id: 4,
      title: 'CPO Tokopedia Berbagi Cara Menerapkan Data-Driven Decision Making',
      image: 'https://images.tokopedia.net/img/KRMmCm/2023/7/24/c88c2aa0-528a-436f-b279-2bf3df8db674.jpg',
    },
  ];

  return (
    <div className="max-w-[1080px] mx-auto my-10 py-10">
      <div className="flex flex-col md:flex-row gap-3">
        {/* Kolom Kiri - 1 gambar besar */}
        <div className="relative group overflow-hidden rounded-lg flex-1 h-[532px]">
          <img src={blogPosts[0].image} alt={blogPosts[0].title} className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
            <span className="text-sm text-white/80">{blogPosts[0].date}</span>
            <h2 className="text-xl font-bold text-white mt-2">{blogPosts[0].title}</h2>
          </div>
        </div>

        {/* Kolom Kanan */}
        <div className="flex flex-col gap-3 flex-1">
          {/* Bagian Atas - 1 gambar medium */}
          <div className="relative group overflow-hidden rounded-lg h-[265px]">
            <img src={blogPosts[1].image} alt={blogPosts[1].title} className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-lg font-semibold text-white">{blogPosts[1].title}</h3>
            </div>
          </div>

          {/* Bagian Bawah - 2 gambar kecil */}
          <div className="flex gap-3">
            {blogPosts.slice(2).map((post) => (
              <div key={post.id} className="relative group overflow-hidden rounded-lg w-1/2 h-[264px]">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-sm font-semibold text-white">{post.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
