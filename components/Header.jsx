import Link from 'next/link';
import {FaFacebookF,FaInstagram,FaTiktok,FaTwitter,FaYoutube,FaPhone} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
export default function Header(){
  const socials=[{i:<FaFacebookF/>,c:'#1877f2',h:'https://www.facebook.com'},{i:<FaInstagram/>,c:'#e1306c',h:'#'},{i:<FaTiktok/>,c:'#000',h:'#'},{i:<FaTwitter/>,c:'#1da1f2',h:'#'},{i:<MdEmail/>,c:'#ea4335',h:'mailto:tupiazreviewai@gmail.com'},{i:<FaPhone/>,c:'#25d366',h:'tel:0396101196'},{i:<FaYoutube/>,c:'#ff0000',h:'https://youtube.com/@TupiazReviewAI1'}];
  const navItems=[['HOMEPAGE','/'],['AI IMAGE','/ai-image'],['AI VIDEO','/ai-video'],['BLOG','/blog'],['TOOL','/tool'],['VOUCHER','/voucher'],['VIDEO','/video'],['CONTACT','/contact']];
  return(
    <header>
      <div style={{background:'#fff',padding:'10px 20px',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:10,borderBottom:'1px solid #eee'}}>
        <Link href="/"><span style={{fontSize:26,fontWeight:900,cursor:'pointer'}}><span style={{color:'#000'}}>TUPIAZ</span><span style={{color:'#e63946'}}>REVIEWAI</span><span style={{color:'#888',fontSize:14}}>.com</span></span></Link>
        <input type="text" placeholder="Search..." style={{padding:'7px 14px',border:'1px solid #ccc',borderRadius:4,width:200}}/>
        <div style={{display:'flex',alignItems:'center',gap:14,flexWrap:'wrap'}}>
          <span style={{fontSize:13,display:'flex',alignItems:'center',gap:5}}><MdEmail/> tupiazreviewai@gmail.com</span>
          <span style={{fontSize:13,display:'flex',alignItems:'center',gap:5}}><FaPhone/> 0396101196</span>
          <div style={{display:'flex',gap:7}}>
            {socials.map((s,i)=><a key={i} href={s.h} target="_blank" rel="noreferrer" style={{background:s.c,color:'#fff',width:28,height:28,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:13,textDecoration:'none'}}>{s.i}</a>)}
          </div>
        </div>
      </div>
      <nav style={{background:'#1a1aff',padding:'0 20px'}}>
        <ul style={{display:'flex',listStyle:'none',gap:0,margin:0,padding:0}}>
          {navItems.map(([label,href])=><li key={href}><Link href={href} style={{display:'block',color:'#fff',padding:'13px 16px',fontWeight:700,fontSize:13,textDecoration:'none'}}>{label}</Link></li>)}
        </ul>
      </nav>
    </header>
  );
}