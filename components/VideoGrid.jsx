import {useState,useEffect} from 'react';
function timeAgo(d){const s=Math.floor((new Date()-new Date(d))/1000);if(s<3600)return Math.floor(s/60)+' phút trước';if(s<86400)return Math.floor(s/3600)+' giờ trước';if(s<2592000)return Math.floor(s/86400)+' ngày trước';if(s<31536000)return Math.floor(s/2592000)+' tháng trước';return Math.floor(s/31536000)+' năm trước';}
export default function VideoGrid({maxResults=24}){
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(true);
  const [active,setActive]=useState(null);
  useEffect(()=>{fetch('/api/youtube?maxResults='+maxResults).then(r=>r.json()).then(d=>{setData(d);setLoading(false);}).catch(()=>setLoading(false));},[maxResults]);
  if(loading)return <div style={{padding:40,textAlign:'center'}}>⏳ Đang tải video...</div>;
  if(!data?.videos?.length)return <div style={{padding:20,color:'#888'}}>Không thể tải video.</div>;
  const {channel,videos}=data;
  return(
    <div>
      <div style={{background:'#111',color:'#fff',padding:'16px 20px',display:'flex',alignItems:'center',justifyContent:'space-between',borderRadius:8,marginBottom:20,flexWrap:'wrap',gap:12}}>
        <div style={{display:'flex',alignItems:'center',gap:14}}>
          <img src={channel.thumbnail} alt={channel.title} style={{width:54,height:54,borderRadius:'50%',border:'2px solid #fff'}}/>
          <div><div style={{fontWeight:700,fontSize:16}}>{channel.title}</div><div style={{fontSize:12,color:'#aaa',marginTop:2}}>{Number(channel.subscriberCount).toLocaleString()} subscribers · {channel.videoCount} videos</div></div>
        </div>
        <a href="https://youtube.com/@TupiazReviewAI1" target="_blank" rel="noreferrer" style={{background:'#ff0000',color:'#fff',padding:'9px 18px',borderRadius:4,fontWeight:700,textDecoration:'none',fontSize:14}}>▶ SUBSCRIBE</a>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(250px,1fr))',gap:16}}>
        {videos.map(v=>(
          <div key={v.id} onClick={()=>setActive(v.id)} style={{cursor:'pointer',borderRadius:8,overflow:'hidden',background:'#fff',boxShadow:'0 2px 8px rgba(0,0,0,0.08)',border:'1px solid #eee'}}>
            <div style={{position:'relative'}}>
              <img src={v.thumbnail} alt={v.title} style={{width:'100%',display:'block',aspectRatio:'16/9',objectFit:'cover'}}/>
              <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(0,0,0,0.15)'}}>
                <div style={{background:'rgba(0,0,0,0.7)',borderRadius:'50%',width:44,height:44,display:'flex',alignItems:'center',justifyContent:'center'}}><span style={{color:'#fff',fontSize:17,marginLeft:3}}>▶</span></div>
              </div>
            </div>
            <div style={{padding:'10px 12px'}}><div style={{fontWeight:600,fontSize:13,lineHeight:1.5,display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical',overflow:'hidden',marginBottom:4}}>{v.title}</div><div style={{fontSize:11,color:'#888'}}>{timeAgo(v.publishedAt)}</div></div>
          </div>
        ))}
      </div>
      {active&&<div onClick={()=>setActive(null)} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.88)',zIndex:9999,display:'flex',alignItems:'center',justifyContent:'center',padding:20}}>
        <div onClick={e=>e.stopPropagation()} style={{width:'100%',maxWidth:900}}>
          <button onClick={()=>setActive(null)} style={{float:'right',background:'#fff',border:'none',borderRadius:'50%',width:34,height:34,cursor:'pointer',fontSize:16,fontWeight:700,marginBottom:10}}>✕</button>
          <iframe width="100%" height="500" src={`https://www.youtube.com/embed/${active}?autoplay=1`} frameBorder="0" allowFullScreen allow="autoplay" style={{borderRadius:8,display:'block',clear:'both'}}/>
        </div>
      </div>}
    </div>
  );
}