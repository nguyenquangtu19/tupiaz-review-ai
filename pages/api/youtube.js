export default async function handler(req,res){
  const {maxResults=24}=req.query;
  const API_KEY=process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID=process.env.YOUTUBE_CHANNEL_ID;
  try{
    const chRes=await fetch(`https://www.googleapis.com/youtube/v3/channels?part=contentDetails,statistics,snippet&id=${CHANNEL_ID}&key=${API_KEY}`);
    const chData=await chRes.json();
    const ch=chData.items[0];
    const uploadsId=ch.contentDetails.relatedPlaylists.uploads;
    const vidRes=await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsId}&maxResults=${maxResults}&key=${API_KEY}`);
    const vidData=await vidRes.json();
    res.status(200).json({
      channel:{title:ch.snippet.title,thumbnail:ch.snippet.thumbnails.default.url,subscriberCount:ch.statistics.subscriberCount,videoCount:ch.statistics.videoCount},
      videos:(vidData.items||[]).map(item=>({id:item.snippet.resourceId.videoId,title:item.snippet.title,thumbnail:item.snippet.thumbnails.medium?.url||item.snippet.thumbnails.default?.url,publishedAt:item.snippet.publishedAt}))
    });
  }catch(err){res.status(500).json({error:err.message});}
}