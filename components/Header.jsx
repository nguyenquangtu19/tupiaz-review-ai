import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaYoutube, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
export default function Header() {
  return (
    <header>
      <div style={{background:'#fff',padding:'10px 20px',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:10,borderBottom:'1px solid #eee'}}>
        <Link href="/"><span style={{fontSize:26,fontWeight:900}}><span style={{color:'#000'}}>TUPIAZ</span><span style={{color:'#e63946'}}>REVIEWAI</span><span style={{color:'#888',fontSize:14}}>.com</span></span></Link>
        <input type="text" placeholder="Search..." style={{padding:'7px 14px',border:'1px solid #ccc',borderRadius:4,width:200}} />
        <div style={{display:'flex',alignItems:'center',gap:14,flexWrap:'wrap'}}>
          <span style={{fontSize:13,display:'flex',alignItems:'center',gap:5}}><MdEmail/> tupiazreviewai@gmail.com</span>
          <span style={{fontSize:13,display:'flex',alignItems:'center',gap:5}}><FaPhone/> 0396101196</span>
          <div style={{display:'flex',gap:7}}>
            {[{icon:<FaFacebookF/>,color:'#1877f2',href:'https://facebook.com'},{icon:<FaInstagram/>,color:'#e1306c',href:'https://instagram.com'},{icon:<FaTiktok/>,color:'#000',href:'https://tiktok.com'},{icon:<FaTwitter/>,color:'#1da1f2',href:'https://twitter.com'},{icon:<MdEmail/>,color:'#ea4335',href:'mailto:tupiazreviewai@gmail.com'},{icon:<FaPhone/>,color:'#25d366',href:'tel:0396101196'},{icon:<FaYoutube/>,color:'#ff0000',href:'https://youtube.com/@TupiazReviewAI1'}].map((s,i)=>(
              <a key={i} href={s.href} target="_blank" rel="noreferrer" style={{background:s.color,color:'#fff',width:28,height:28,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:13}}>{s.icon}</a>
            ))}
          </div>
        </div>
      </div>
      <nav style={{background:'#1a1aff',padding:'0 20px'}}>
        <ul style={{display:'flex',listStyle:'none',gap:0}}>
          {[{label:'HOMEPAGE',href:'/'},{label:'AI IMAGE',href:'/ai-image'},{label:'AI VIDEO',href:'/ai-video'},{label:'BLOG',href:'/blog'},{label:'TOOL',href:'/tool'},{label:'VOUCHER',href:'/voucher'},{label:'VIDEO',href:'/video'},{label:'CONTACT',href:'/contact'}].map(item=>(
            <li key={item.href}><Link href={item.href} style={{display:'block',color:'#fff',padding:'13px 16px',fontWeight:700,fontSize:13,textDecoration:'none'}}>{item.label}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}