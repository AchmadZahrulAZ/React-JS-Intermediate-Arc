import React from 'react';

const TrendingArticle2 = () => {
  const articles = [
    {
      id: 1,
      title: 'Mengenal Sosok Kartini Masa Kini: NakaBunda Tim Tokopedia Care',
      image: 'https://images.tokopedia.net/blog-tokopedia-com/uploads/2020/04/NakaBunda-1.png',
      date: '8 November 2023',
      category: 'Behind The Scene'
    },
    {
      id: 2,
      title: 'Perayaan 1 Dekade Tokopedia: Berbagi Tawa Bersama Keluarga Besar Nakama',
      image: 'https://images.tokopedia.net/blog-tokopedia-com/uploads/2019/09/IMG_0464.jpg',
      date: '19 October 2023',
      category: 'Behind The Scene'
    },
    {
      id: 3,
      title: 'Evoware: Produksi Gelas yang Bisa Dimakan untuk Mengurangi Sampah Plastik',
      image: 'https://images.tokopedia.net/img/KRMmCm/2023/8/29/e5ccdc10-fbb0-4158-9011-420702a793e6.jpg',
      date: '29 Agustus 2023',
      category: 'Behind The Scene'
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
            Behind The Scene
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

export default TrendingArticle2;