import React from 'react';

const TrendingArticle = () => {
  const articles = [
    {
      id: 1,
      title: 'Sambut Hari Pelanggan Nasional 2023, Intip Inovasi Customer Experience di Tokopedia',
      image: 'https://images.tokopedia.net/img/KRMmCm/2023/10/6/b883a8a5-66f9-4546-a6d5-e64c697f30a7.jpg',
      date: '6 October 2023',
      category: 'Siaran Pers'
    },
    {
      id: 2,
      title: 'Tokopedia Rekap Tren Belanja Online Kuartal III 2023: Transaksi Groceries Melesat',
      image: 'https://images.tokopedia.net/img/KRMmCm/2023/10/4/7595bffd-ceca-45e4-be13-c73ac8be9312.jpg',
      date: '4 October 2023',
      category: 'Siaran Pers'
    },
    {
      id: 3,
      title: 'Tokopedia Luncurkan Fitur "Dipromosikan Affiliate", Pengguna Makin Mudah Dapat Penghasilan',
      image: 'https://images.tokopedia.net/img/KRMmCm/2023/9/13/5f575be0-eedd-4372-9e4d-c0ae89dd88d1.jpg',
      date: '13 September 2023',
      category: 'Siaran Pers'
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
            Siaran Pers
          </div>
          {/* Right side - Other tabs */}
          <div className="flex gap-6 mb-2 text-base">
            <span className="text-gray-600 hover:text-green-500 cursor-pointer">
              Founder's Letter
            </span>
            <span className="text-gray-600 hover:text-green-500 cursor-pointer">
              Milestone
            </span>
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

export default TrendingArticle;