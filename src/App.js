import Header from "./Header"
import './App.css';
import VideoCard from "./VideoCard"





const videos = [

  {
 
   id: 1,
 
   title: "SIDMEN AMONG US: BOUNTY",
 
   thumbnailUrl: "https://i.redd.it/4f6n4styv6v61.png",
 
   likes: 163000,
 
   views: 420000,
 
   channelName: "MoreSidemen",
 
   channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKZifGcBF1PG8-Hu8vCjkBfa536948NXy3yhcFMrqg=s176-c-k-c0x00ffffff-no-rj",
 
  },
  {
 
    id: 2,
  
    title: "SIDEMEN DATING",
  
    thumbnailUrl: "https://i.redd.it/eqpudvrs6yx41.jpg",


    likes: 935000,
  
    views: 770000,
  
    channelName: "MoreSidemen",
  
    channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKZifGcBF1PG8-Hu8vCjkBfa536948NXy3yhcFMrqg=s176-c-k-c0x00ffffff-no-rj",
  
   },
  {
 
    id: 3,
  
    title: "THE MOST EXPLOSIVE SIDEMEN",
  
    thumbnailUrl: "https://i.redd.it/zz5lae8uis371.jpg",
    likes: 217000,
  
    views: 8010000,
  
    channelName: "MoreSidemen",
  
    channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKZifGcBF1PG8-Hu8vCjkBfa536948NXy3yhcFMrqg=s176-c-k-c0x00ffffff-no-rj",
  
   },
   {
 
    id: 4,
  
    title: "Im actually having... FUN? In MINECRAFT (hacked) - Part 2",
  
    thumbnailUrl: "https://i.redd.it/sjifjgz9t7671.png",

    likes: 114000,
  
    views: 1500000,
  
    channelName: "PewDiePie",
  
    channelLogoUrl: "https://yt3.googleusercontent.com/5oUY3tashyxfqsjO5SGhjT4dus8FkN9CsAHwXWISFrdPYii1FudD4ICtLfuCw6-THJsJbgoY=s176-c-k-c0x00ffffff-no-rj",
  
   },
   {
 
    id: 5,
  
    title: "Lamborghini Vs World's Largest Shredder",
  
    thumbnailUrl: "https://preview.redd.it/tfts20aryt981.jpg?width=1280&format=pjpg&auto=webp&s=7365adf1fb6c27ff467e15c4deb866f175019397",

    likes: 4500000,
  
    views: 114000000,
  
    channelName: "MrBeast",
  
    channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKY455xp16s2AIHalRjK60zas-DitxAHmRjQsXPE2A=s176-c-k-c0x00ffffff-no-rj",
  
   },
   
   {
 
    id: 6,
  
    title: "I Went Back To 1st Grade For A Day",
  
    thumbnailUrl: "https://i.redd.it/mrbeast-thumbnails-are-just-odd-v0-lovk9igzp9ya1.jpg?s=216143243d46e36b21aa9c9aed47dd3ab4f523e8",

    likes: 3100000,
  
    views: 184000000,
  
    channelName: "MrBeast",
  
    channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKY455xp16s2AIHalRjK60zas-DitxAHmRjQsXPE2A=s176-c-k-c0x00ffffff-no-rj",
  
   },
   {
 
    id: 7,
  
    title: "SIDEMEN $50,000 RACE ACROSS THE UK",
  
    thumbnailUrl: "https://preview.redd.it/can-anyone-help-me-to-identify-the-font-used-in-the-sidemen-v0-5bq50mm80or81.jpg?width=1280&format=pjpg&auto=webp&s=06b0cfa3708bfe82fe27eb002aa9a50a1364e09a",

    likes: 1200000,
  
    views: 17000000,
  
    channelName: "Sidemen",
  
    channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKbAU-BouQTH70l2R1-AedUykgMyZxFhpL2LPyhXeA=s176-c-k-c0x00ffffff-no-rj",
  
   },
   {
 
    id: 8,
  
    title: "I Spent 50 Hours In Solitary Confinement",
  
    thumbnailUrl: "https://i.redd.it/mrbeasts-worst-thumbnail-v0-fd4owsn1vgfa1.jpg?s=5789fc470016126054024281612737a0a61ca874",

    likes: 4800000,
  
    views: 297000000,
  
    channelName: "MrBeast",
  
    channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKY455xp16s2AIHalRjK60zas-DitxAHmRjQsXPE2A=s176-c-k-c0x00ffffff-no-rj",
   },
   {
 
    id: 9,
  
    title: "SIDEMEN CHARITY MATCH 2023[OFFICIAL STREAM]",
  
    thumbnailUrl: "https://i.redd.it/i-have-created-sidemen-charity-match-thumbnail-v0-d4lberd7x3mb1.png?s=6e8c77350035bcb35220f8dd3491c914da8636c7",

    likes: 7870000,
  
    views: 24000000,
  
    channelName: "Sidemen",
  
    channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKbAU-BouQTH70l2R1-AedUykgMyZxFhpL2LPyhXeA=s176-c-k-c0x00ffffff-no-rj",
  
   },
   {
 
    id: 10,
  
    title: "$456,000 Squid Game In Real Life!",
  
    thumbnailUrl: "https://preview.redd.it/w9i9zxev9ey81.jpg?width=1600&format=pjpg&auto=webp&s=c0b7322f6dee7706d29de0e76d211f543acd4a7a",

    likes: 1600000,
  
    views: 507000000,
  
    channelName: "MrBeast",
  
    channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKY455xp16s2AIHalRjK60zas-DitxAHmRjQsXPE2A=s176-c-k-c0x00ffffff-no-rj",
  
   }
]
 
 


function App() {
  return(
  <div>
    
    <Header/>
    <div clasName="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}> 
    {
      
      videos.map((video,i) =>{
        return  <VideoCard videoUrl = {video.thumbnailUrl} 
        videoTitle = {video.title}
        videoViews = {video.views}
        videoLikes = {video.likes} 
        videChannel = {video.channelLogoUrl}
        videoChannelName = {video.channelName}
        />
      
      })
     
    
}
</div>
  </div>
    
  
)}

export default App;
