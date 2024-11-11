import React from 'react';

const TrendingArticle3 = () => {
  const articles = [
    {
      id: 1,
      title: 'Beraksi untuk Sesama di Tahun ke-13 Tokopedia',
      image: 'https://images.tokopedia.net/img/KRMmCm/2022/9/15/e588a5b4-5d18-4af9-a1c0-c15f65c9498d.jpg',
      date: '15 September 2022',
      category: 'Social Impact'
    },
    {
      id: 2,
      title: 'Wujudkan Komitmen Jaga Kelestarian Lingkungan, Tokopedia Tanam Ribuan Pohon Mangrove di 8 Provinsi Indonesia',
      image: 'https://images.tokopedia.net/img/KRMmCm/2022/8/24/b8fad339-c804-4db0-8df4-e3bb906f7963.jpg',
      date: '24 Agustus 2022',
      category: 'Social Impact'
    },
    {
      id: 3,
      title: 'Kontribusi Nakama untuk Lingkungan Lewat Tanam Pohon Mangrove di Program Nakamate',
      image: 'https://images.tokopedia.net/img/KRMmCm/2022/8/4/9d5f5e0d-1e40-42b7-b0ed-d9bf6528f650.jpg',
      date: '4 Agustus 2022',
      category: 'Social Impact'
    }
  ];

  return (
    <div className="max-w-[1080px] mx-auto my-10 py-10 container">
      {/* Header Navigation dengan border line */}
      <div className="relative border-b-2 border-green-500 my-10">
        {/* Menu items container */}
        <div className="flex items-center justify-between absolute bottom-[-2px] w-full">
          {/* Left side - Active tab */}
          <div className="bg-green-500 text-white px-4 py-2 text-base">
            Social Impact
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="group cursor-pointer">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Category Badge */}
              <div className="absolute bottom-4 left-4">
                <span className="bg-white/90 text-gray-800 text-sm px-3 py-1 rounded">
                  {article.category}
                </span>
              </div>
            </div>
            
            {/* Article Info */}
            <h3 className="font-semibold text-base mb-2 group-hover:text-green-500 line-clamp-2">
              {article.title}
            </h3>
            <p className="text-gray-500 text-sm">
              {article.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingArticle3;