import React, { useMemo, useState } from 'react';
import * as Icons from 'lucide-react';
import { courseCards, galleryImages, reviewsImages, perks, contactLinks, videos, profileImage, type CourseCard } from './data';

export default function App(): React.ReactElement {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const currentVideo = useMemo(() => (openKey ? videos[openKey] : null), [openKey]);

  return (
    <div className="page">
      <header className="hero section">
        <div style={{padding: '10px'}} className="card hero-card">
          <div className="avatar" style={{ backgroundImage: `url(${profileImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <h1 className="hero-title">李柯竺</h1>
          <p className="hero-sub">用心培养每一个孩子的英语能力与自信</p>

          <div style={{color:'#01b3fb',justifyContent:'left',marginRight:'auto',alignItems:'flex-end'}} className="subhead"></div>
          <div className="capabilities">

            <div style={{color:'#01b3fb',justifyContent:'left',marginRight:'auto',alignItems:'flex-end'}} className="subhead" ><Icons.GraduationCap size={18} /><strong style={{color:'black'}}>专业能力</strong></div>
            <div  ></div>
            <div style={{padding: '5px',fontSize: '10px',justifyContent:'left',color:'#01b3fb'}} className="badge"><Icons.UserRound size={18} /><span>雅思7.5</span></div>
            <div style={{padding: '5px',fontSize: '10px',justifyContent:'left',color:'#01b3fb'}} className="badge"><Icons.BadgeCheck size={18} /><span>剑桥Celta证书</span></div>
            <div style={{padding: '5px',fontSize: '10px',justifyContent:'left',color:'#01b3fb'}} className="badge"><Icons.GraduationCap size={18} /><span>高中英语教师资格证</span></div>
            <div style={{padding: '5px',fontSize: '10px',justifyContent:'left',color:'#01b3fb'}} className="badge"><Icons.ActivitySquare size={18} /><span>Top100 教育技术硕士在读</span></div>
          </div>

          <div className="hero-groups">
            <div className="group">
              <div className="section-title"><Icons.UsersRound size={20} /><h3>教学经验</h3></div>
              <ul className="list green">
                <li>曾任职于新西兰Tier 1语言学校</li>
                <li>曾任职于国内某上市英语培训机构</li>
                <li>目前专注于少儿原版阅读+教材的培训</li>
                <li>并辅以自然拼读和Ket/Pet 培训</li>
              </ul>
            </div>
            <div className="group">
              <div className="section-title"><Icons.TrendingUp size={20} /><h3>教学成果</h3></div>
              <div className="meter">
                <div className="meter-main">Pet 通过率 93%</div>
                <div className="meter-sub">卓越率 5%</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <h2 style={{display: 'flex',justifyContent:'center'}} className='section-title'>精彩课堂</h2>
        <p style={{textAlign:'center',color:'var(--muted)',marginTop:'6px'}}>多样化教学模式，激发学习兴趣</p>
        <div className="grid">
          {courseCards.map((card: CourseCard) => (
            <article key={card.title} className="card">
              <div className="icon" style={{ background: card.color || undefined }}>
                {card.icon && (React.createElement((Icons as any)[card.icon] || Icons.Square, { size: 20 }))}
              </div>
              <h3>{card.title}</h3>
              {card.desc && <p className="muted" style={{fontSize:'12px',textAlign:'left'}}>{card.desc}</p>}
              <ul style={{marginBottom:'5px'}} className="bullets small">
                {card.points.map((p: string) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              {card.videoKey && videos[card.videoKey] && (
                <button className="video-preview wide" onClick={() => setOpenKey(card.videoKey!)} aria-label="play video preview">
                  <video
                    className="video-thumb"
                    src={videos[card.videoKey].src}
                    playsInline
                    preload="metadata"
                    muted
                  />
                  <div className="play"><Icons.PlayCircle /></div>
                </button>
              )}
              {card.cta && (
                <button className="link as-button" onClick={() => setOpenKey(card.videoKey || null)}>{card.cta.label}</button>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 style={{display: 'flex',justifyContent:'center'}}>学生作业展示</h2>
        <p style={{textAlign:'center',color:'var(--muted)',marginTop:'6px'}}>优秀作业成果与学习进步</p>
        <div className="masonry">
          {galleryImages.map((src: string, idx: number) => (
            <img key={idx} className="photo" src={src} alt={`作业${idx + 1}`} />
          ))}
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}} className="video-box card">
          <h3>口语复述作业视频</h3>
          <button className="video-preview wide" onClick={() => setOpenKey('speaking')} aria-label="play speaking video">
            <video className="video-thumb" src={videos.speaking?.src} playsInline preload="metadata" muted />
            <div className="play"><Icons.PlayCircle size={48} /></div>
          </button>

          <button className="link as-button" onClick={() => setOpenKey('speaking')}>观看完整口语视频</button>
        
        </div>
      </section>

      <section className="section">
        <h2 style={{display: 'flex',justifyContent:'center'}}>家长评价</h2>
        <div style={{display:'flex',justifyContent:'center',gap:8,alignItems:'center',marginTop:6}}>
          {Array.from({length:5}).map((_,i)=> (
            <Icons.Star key={i} size={18} color="#f5b301" fill="#f5b301" />
          ))}
          <span className="muted" style={{fontWeight:700,color:'#0f172a'}}>满意度 98%</span>
        </div>
        <div style={{marginTop:'10px'}} className="masonry">
          {reviewsImages.map((src: string, idx: number) => (
            <img key={idx} className="photo" src={src} alt={`家长评价${idx + 1}`} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 style={{display: 'flex',justifyContent:'center'}}>课程信息</h2>
        <p style={{textAlign:'center',color:'var(--muted)',marginTop:'6px'}}>系统化英语学习方案</p>
        <div className="grid">
          {perks.map((perk: any) => (
            <article key={perk.title} className="card info-card">
              <div className="icon" style={{ background: perk.color || undefined }}>
                {perk.icon && (React.createElement((Icons as any)[perk.icon] || Icons.Square, { size: 20 }))}
              </div>
              <div>
                <h3>{perk.title}</h3>
                <p className="muted">{perk.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="cta">
          <h3 style={{textAlign:'center',color:'#fff'}}>教学理念</h3>
          <div className="row"><span className="dot"><Icons.Target size={16}/></span><span>提高孩子真实的英语能力</span></div>
          <div className="row"><span className="dot"><Icons.Lightbulb size={16}/></span><span>激发英语学习兴趣</span></div>
          <div className="row"><span className="dot"><Icons.CheckCircle2 size={16}/></span><span>建立英语学习自信心</span></div>
        </div>
          <div className="card centered qr" style={{marginTop:12}}>
          <h3>联系我们</h3>
          <img src="/images/wechat.png" alt="微信二维码" />
          <p className="muted">扫码添加微信咨询课程详情</p>
        </div>
      </section>


      {currentVideo && (
        <div className="modal" role="dialog" aria-modal="true" onClick={() => setOpenKey(null)}>
          <div className="modal-body" onClick={(e) => e.stopPropagation()}>
            <button className="close" aria-label="close" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpenKey(null); }}>×</button>
            <video
              controls
              autoPlay
              poster={currentVideo.poster}
              className="player"
            >
              <source src={currentVideo.src} />
            </video>
          </div>
        </div>
      )}
    </div>
  );
}


