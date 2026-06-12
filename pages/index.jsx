import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoGrid from '../components/VideoGrid';
import Link from 'next/link';
const posts=[{title:'Cách Tạo Hình Ảnh Bằng AI Miễn Phí Trên Canva #6',excerpt:'Bạn đang tìm kiếm một cách nhanh chóng, dễ dàng và hoàn toàn miễn phí để tạo [...]',href:'/blog'}];
export default function Home(){
  return(<><Head><title>TUPIAZ REVIEW AI - Review AI Tools, Video & Blog</title><meta name="description" content="Review công cụ AI miễn phí, video hướng dẫn và blog công nghệ"/><meta name="viewport" content="width=device-width, initial-scale=1"/></Head>
    <Header/>
    <main style={{maxWidth:1200,margin:'0 auto',padding:'30px 20px'}}>
      <section style={{marginBottom:50}}>
        <h2 style={{color:'#1a1aff',fontWeight:800,fontSize:22,borderBottom:'3px solid #1a1aff',paddingBottom:8,marginBottom:24,display:'inline-block'}}>AI NEWS</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:24}}>
          {posts.map((p,i)=><Link key={i} href={p.href} style={{textDecoration:'none',color:'inherit'}}>
            <div style={{border:'1px solid #eee',borderRadius:8,overflow:'hidden',boxShadow:'0 2px 8px rgba(0,0,0,0.07)'}}>
              <div style={{background:'linear-gradient(135deg,#1a1aff,#0000aa)',height:180,display:'flex',alignItems:'center',justifyContent:'center'}}><span style={{color:'#fff',fontSize:50}}>🤖</span></div>
              <div style={{padding:'14px 16px'}}><h3 style={{color:'#1a1aff',fontSize:15,fontWeight:700,marginBottom:8,lineHeight:1.5}}>{p.title}</h3><hr style={{margin:'8px 0',borderColor:'#eee'}}/><p style={{fontSize:13,color:'#555',lineHeight:1.6}}>{p.excerpt}</p></div>
            </div></Link>)}
        </div>
      </section>
      <section><h2 style={{color:'#1a1aff',fontWeight:800,fontSize:22,borderBottom:'3px solid #1a1aff',paddingBottom:8,marginBottom:24,display:'inline-block'}}>VIDEO</h2><VideoGrid maxResults={24}/></section>
    </main>
    <Footer/></>);
}