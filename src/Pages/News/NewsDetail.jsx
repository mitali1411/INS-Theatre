// import React from 'react';
import { useParams, Link } from 'react-router-dom';
// import './News.css';
import { FaMasksTheater } from 'react-icons/fa6';
// import { newsItems } from './newsItems';

// // Example news data (replace with API or context as needed)
// const newsData = [
//   // {
//   //   id: '1',
//   //   title: 'The Role of Music in Theater',
//   //   image: News1,
//   //   details: `Welcome to the theater, a realm where stories come alive on stage, captivating audiences and transporting them to different worlds. Being a part of this experience is a privilege, and like any communal activity, it comes with its own set of etiquette guidelines. Understanding and adhering to these unwritten rules not only enhances your enjoyment but also ensures a seamless and respectful atmosphere for fellow theater enthusiasts. Let’s delve into the essential theater etiquette to make every performance a collective celebration of art.\n\nShow appreciation for the artists by refraining from booing, heckling, or making negative comments during the performance. Every actor and crew member puts in immense effort, and respect for their dedication is essential.\n\nBy embracing these theater etiquette guidelines, you not only enhance your personal theater experience but also contribute to creating a respectful and enjoyable atmosphere for all. Let us celebrate the magic of live performances with a collective understanding of proper theater decorum.`
//   // },
//   // {
//   //   id: '2',
//   //   title: 'The Role of Dance in Theater',
//   //   image: News2,
//   //   details: `Welcome to the theater, a realm where stories come alive on stage, captivating audiences and transporting them to different worlds. Being a part of this experience is a privilege, and like any communal activity, it comes with its own set of etiquette guidelines. Understanding and adhering to these unwritten rules not only enhances your enjoyment but also ensures a seamless and respectful atmosphere for fellow theater enthusiasts. Let’s delve into the essential theater etiquette to make every performance a collective celebration of art.\n\nShow appreciation for the artists by refraining from booing, heckling, or making negative comments during the performance. Every actor and crew member puts in immense effort, and respect for their dedication is essential.\n\nBy embracing these theater etiquette guidelines, you not only enhance your personal theater experience but also contribute to creating a respectful and enjoyable atmosphere for all. Let us celebrate the magic of live performances with a collective understanding of proper theater decorum.`
//   // },
//   // {
//   //   id: '3',
//   //   title: 'The Role of Acting in Theater',
//   //   image: News3,
//   //   details: `Welcome to the theater, a realm where stories come alive on stage, captivating audiences and transporting them to different worlds. Being a part of this experience is a privilege, and like any communal activity, it comes with its own set of etiquette guidelines. Understanding and adhering to these unwritten rules not only enhances your enjoyment but also ensures a seamless and respectful atmosphere for fellow theater enthusiasts. Let’s delve into the essential theater etiquette to make every performance a collective celebration of art.\n\nShow appreciation for the artists by refraining from booing, heckling, or making negative comments during the performance. Every actor and crew member puts in immense effort, and respect for their dedication is essential.\n\nBy embracing these theater etiquette guidelines, you not only enhance your personal theater experience but also contribute to creating a respectful and enjoyable atmosphere for all. Let us celebrate the magic of live performances with a collective understanding of proper theater decorum.`
//   // },
//   // Add more news items as needed
// ];

// const NewsDetail = ({}) => {
//   const { id, title } = useParams();
//   const news = newsData.find((item, idx) => String(idx + 1) === id);
//   // const news = newsItems.find((item) => item.id.toString() === id);
//   const currentIdx = newsData.findIndex((item, idx) => String(idx + 1) === id);
//   const prevNews = currentIdx > 0 ? newsData[currentIdx - 1] : null;
//   const nextNews = currentIdx < newsData.length - 1 ? newsData[currentIdx + 1] : null;

//   if (!news) {
//     return <div style={{ padding: '2rem', textAlign: 'center' }}>News not found.</div>;
//   }

//   return (
//     <div>
//       {/* Hero Section */}
//       <div
//         className="news-hero"
//         style={{
//           backgroundImage: `url(${news.image})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           minHeight: '350px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <h1 className="news-hero-title" style={{ color: '#fff', background: 'rgba(0,0,0,0.5)', padding: '1rem 2rem', borderRadius: 8 }}>{news.title}</h1>
//       </div>

//       {/* News Details Section */}
//       <section className="news-detail-section" style={{ maxWidth: 900, margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
//         {news.details.split('\n').map((para, idx) => (
//           <p key={idx} style={{ marginBottom: '1.2rem', lineHeight: 1.7 }}>{para}</p>
//         ))}
//       </section>

      // {/* Previous/Next Post Navigation */}
      // <div style={{
      //   display: 'flex',
      //   alignItems: 'center',
      //   justifyContent: 'space-between',
      //   maxWidth: 900,
      //   margin: '3rem auto 2rem',
      //   padding: '2rem 0 0 0',
      //   borderTop: '1px solid #eee',
      // }}>
      //   {/* Previous Post */}
      //   <div style={{ flex: 1, textAlign: 'left' }}>
      //     {prevNews && (
      //       <Link
      //         to={`/news/${currentIdx}/${encodeURIComponent(prevNews.title.replace(/\s+/g, '-').toLowerCase())}`}
      //         style={{ textDecoration: 'none', color: 'inherit' }}
      //       >
      //         <div style={{ color: '#ff7f32', fontSize: 18, marginBottom: 2 }}>Previous post</div>
      //         <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      //           <span style={{ fontSize: 22 }}>←</span>
      //           <span style={{ fontWeight: 600, fontSize: 22, fontFamily: 'Playfair Display, serif' }}>{prevNews.title}</span>
      //         </div>
      //       </Link>
      //     )}
      //   </div>
      //   {/* Center Icon */}
      //   <div style={{ flex: 0, textAlign: 'center' }}>
      //     <FaMasksTheater style={{ color: '#ff7f32', fontSize: 36 }} />
      //   </div>
      //   {/* Next Post */}
      //   <div style={{ flex: 1, textAlign: 'right' }}>
      //     {nextNews && (
      //       <Link
      //         to={`/news/${currentIdx + 2}/${encodeURIComponent(nextNews.title.replace(/\s+/g, '-').toLowerCase())}`}
      //         style={{ textDecoration: 'none', color: 'inherit' }}
      //       >
      //         <div style={{ color: '#ff7f32', fontSize: 18, marginBottom: 2 }}>Next post</div>
      //         <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end' }}>
      //           <span style={{ fontWeight: 600, fontSize: 22, fontFamily: 'Playfair Display, serif' }}>{nextNews.title}</span>
      //           <span style={{ fontSize: 22 }}>→</span>
      //         </div>
      //       </Link>
      //     )}
      //   </div>
      // </div>
    // </div>
  // );
// };

// export default NewsDetail; 


import React from 'react';
// import { useParams } from 'react-router-dom';
import { newsItems } from './newsItems';

const NewsDetail = () => {
  const { id } = useParams();
  const news = newsItems.find((item) => item.id.toString() === id);
  const currentIdx = newsItems.findIndex((item, idx) => String(idx + 1) === id);
  const prevNews = currentIdx > 0 ? newsItems[currentIdx - 1] : null;
  const nextNews = currentIdx < newsItems.length - 1 ? newsItems[currentIdx + 1] : null;

  if (!news) return <p>News not found</p>;

  return (
    <div className="news-detail">
      {/* <h2>{news.title}</h2>
      <img src={news.image} alt={news.title} />
      <p>{news.desc}</p>
      <p><strong>Date:</strong> {news.date}</p> */}

<div
        className="news-hero"
        style={{
          backgroundImage: `url(${news.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '350px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 className="news-hero-title" style={{ color: '#fff', background: 'rgba(0,0,0,0.5)', padding: '1rem 2rem', borderRadius: 8 }}>{news.title}</h1>
      </div>

      {/* News Details Section */}
      <section className="news-detail-section" style={{ maxWidth: 900, margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        {news.desc}
      </section>

       {/* Previous/Next Post Navigation */}
       <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 900,
        margin: '3rem auto 2rem',
        padding: '2rem 0 0 0',
        borderTop: '1px solid #eee',
      }}>
        {/* Previous Post */}
        <div style={{ flex: 1, textAlign: 'left' }}>
          {prevNews && (
            <Link
              to={`/news/${currentIdx}/${encodeURIComponent(prevNews.title.replace(/\s+/g, '-').toLowerCase())}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ color: '#ff7f32', fontSize: 18, marginBottom: 2 }}>Previous post</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 22 }}>←</span>
                <span style={{ fontWeight: 600, fontSize: 22, fontFamily: 'Playfair Display, serif' }}>{prevNews.title}</span>
              </div>
            </Link>
          )}
        </div>
        {/* Center Icon */}
        <div style={{ flex: 0, textAlign: 'center' }}>
          <FaMasksTheater style={{ color: '#ff7f32', fontSize: 36 }} />
        </div>
        {/* Next Post */}
        <div style={{ flex: 1, textAlign: 'right' }}>
          {nextNews && (
            <Link
              to={`/news/${currentIdx + 2}/${encodeURIComponent(nextNews.title.replace(/\s+/g, '-').toLowerCase())}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ color: '#ff7f32', fontSize: 18, marginBottom: 2 }}>Next post</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end' }}>
                <span style={{ fontWeight: 600, fontSize: 22, fontFamily: 'Playfair Display, serif' }}>{nextNews.title}</span>
                <span style={{ fontSize: 22 }}>→</span>
              </div>
            </Link>
          )}
        </div>
      </div>
      
    </div>

    
  );
};

export default NewsDetail;