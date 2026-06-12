import {FaFacebookF,FaTiktok,FaYoutube,FaPhone} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
export default function Footer(){
  return(
    <footer style={{background:'#1a1aff',color:'#fff',padding:'40px 40px 20px',marginTop:60}}>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:40,marginBottom:30}}>
        <div><h3 style={{fontSize:16,fontWeight:700,marginBottom:14}}>About TUPIAZREVIEWAI</h3><p style={{fontSize:13,lineHeight:1.8,color:'#ddd'}}>Nguyen Quang Tu - IT background in website design, SEO, YouTube and Digital Marketing. Sharing AI technology knowledge.</p></div>
        <div><h3 style={{fontSize:16,fontWeight:700,marginBottom:14}}>CONTACT INFORMATION</h3><ul style={{listStyle:'none',fontSize:13,color:'#ddd',lineHeight:2.2}}><li>📍 04 Bo Xuyen, Thai Binh, Hung Yen</li><li>📞 0396101196</li><li>✉️ tupiazreviewai@gmail.com</li><li>🕐 Mon–Sat: 8AM–5PM</li></ul></div>
        <div>
          <h3 style={{fontSize:16,fontWeight:700,marginBottom:14}}>TUPIAZREVIEWAI Channel</h3>
          <a href="https://youtube.com/@TupiazReviewAI1" target="_blank" rel="noreferrer" style={{display:'flex',alignItems:'center',gap:10,background:'#fff',color:'#000',padding:'10px 16px',borderRadius:6,textDecoration:'none',fontWeight:700,fontSize:14,marginBottom:20}}><FaYoutube style={{color:'#ff0000',fontSize:22}}/> SUBSCRIBE</a>
          <div style={{display:'flex',gap:10}}>
            {[{i:<FaFacebookF/>,c:'#1877f2',h:'#'},{i:<FaTiktok/>,c:'#010101',h:'#'},{i:<MdEmail/>,c:'#ea4335',h:'mailto:tupiazreviewai@gmail.com'},{i:<FaPhone/>,c:'#25d366',h:'tel:0396101196'},{i:<FaYoutube/>,c:'#ff0000',h:'https://youtube.com/@TupiazReviewAI1'}].map((s,i)=><a key={i} href={s.h} target="_blank" rel="noreferrer" style={{background:s.c,color:'#fff',width:36,height:36,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:16,textDecoration:'none'}}>{s.i}</a>)}
          </div>
        </div>
      </div>
      <div style={{borderTop:'1px solid rgba(255,255,255,0.2)',paddingTop:16,textAlign:'center',fontSize:13,color:'#ddd'}}>Copyright 2026 © TUPIAZREVIEWAI.COM</div>
    </footer>
  );
}