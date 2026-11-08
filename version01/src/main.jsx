import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, Asterisk, MoveUpRight } from 'lucide-react';
import './styles.css';

const projects = [
  { n:'01', type:'品牌策略 / 视觉识别', title:'让未来，有迹可循。', name:'NOVA · 新能源品牌', year:'2025', image:'photo-1473341304170-971adc5bafcf', tint:'mint' },
  { n:'02', type:'AI 创意 / 数字体验', title:'想象力的另一种形状。', name:'SYNTHESIS · AI 实验', year:'2025', image:'photo-1634017839464-5c339ebe3cb4', tint:'violet' },
  { n:'03', type:'艺术指导 / 包装设计', title:'日常之外，自有风味。', name:'野序 · 东方植物酒', year:'2024', image:'photo-1516594798947-e65505dbb29d', tint:'orange' }
];
const portfolioTypes = [
  {n:'01',title:'电商设计',en:'E-COMMERCE',desc:'商品视觉、营销页面与转化体验设计。',image:'photo-1542291026-7eec264c27ff'},
  {n:'02',title:'视频动画',en:'MOTION & FILM',desc:'动态视觉、品牌影像与创意短片。',image:'photo-1536240478700-b869070f9279'},
  {n:'03',title:'线下物料',en:'PRINT & SPACE',desc:'从平面印刷到空间触点的完整表达。',image:'photo-1490481651871-ab68de25d43d'},
  {n:'04',title:'Design Guideline',en:'DESIGN SYSTEM',desc:'定义品牌规则，让每一次表达保持一致。',image:'photo-1507238691740-187a5b1d37b8'}
];
const skills=[['01','品牌构建','从定位到识别，让品牌拥有清晰、持久的表达。','IDENTITY'],['02','视觉叙事','以图像、字体与动效，建立直觉而鲜明的体验。','ART DIRECTION'],['03','AI 共创','将生成式工具融入创意流程，探索新的视觉边界。','GENERATIVE'],['04','系统思维','兼顾细节与全局，让创意在真实场景中持续生长。','DESIGN SYSTEM']];
function Photo({id,...props}){return <img src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=85`} {...props}/>}
function App(){return <><header className="nav"><a className="wordmark" href="#top">ZYH<span>®</span></a><nav><a href="#about">简历</a><a href="#work">作品</a><a href="#practice">练习</a><a href="#capabilities">能力</a><a href="#intentions">求职意向</a></nav><a className="nav-cta" href="mailto:hello@lin.design">一起聊聊 <ArrowUpRight size={15}/></a></header>
<main><section className="hero" id="top"><video className="ambient-video" autoPlay muted loop playsInline preload="auto" aria-hidden="true"><source src="/hero-background.mp4" type="video/mp4"/></video><div className="hero-inner"><div className="hero-copy"><div className="hero-brand"><Asterisk size={24}/> LIN DESIGN STUDIO</div><div className="eyebrow"><span className="live-dot"/> 独立设计师 · 上海 / 全球协作 <span className="hero-date">2025 — 现在</span></div><h1>设计，让<br/>想象成为<span>现实。</span></h1><p className="hero-description">视觉设计师 / AI 设计师 / 品牌设计师<br/>连接策略、审美与新技术，创造有温度的视觉体验。</p><div className="hero-actions"><a className="hero-primary" href="#work">查看精选作品 <ArrowUpRight size={16}/></a><a className="hero-secondary" href="mailto:hello@lin.design">联系我 <ArrowUpRight size={16}/></a></div></div><a href="#work" className="hero-feature"><video className="feature-video" autoPlay muted loop playsInline preload="auto" aria-label="精选视觉创意作品"><source src="/hero-background.mp4" type="video/mp4"/></video><span className="feature-shade"/><span className="feature-caption"><span><small>SELECTED WORK · 01</small><b>NOVA / 光的另一种可能</b></span><MoveUpRight size={20}/></span><span className="feature-orbit">VISUAL<br/>IDENTITY<br/>2025</span></a></div></section>
<section className="portfolio section" id="work"><div className="portfolio-heading"><div><h2>作品集分类</h2></div><a href="#work-grid">查看全部 <ArrowUpRight size={15}/></a></div><div className="portfolio-grid" id="work-grid">{portfolioTypes.map(item=><a className="portfolio-card" href="mailto:hello@lin.design" key={item.n}><div className="portfolio-thumb"><Photo id={item.image} alt={item.title}/><span className="portfolio-number">{item.n}</span><span className="portfolio-arrow"><MoveUpRight size={17}/></span></div><div className="portfolio-info"><div><small>{item.en}</small><h3>{item.title}</h3></div><p>{item.desc}</p></div></a>)}</div></section>

<section className="practice-cover section" id="practice"><div className="practice-cover-heading"><h2>一些想法，<span>正在成为练习。</span></h2><p>不设限地试验，保持好奇与生长。</p></div><a className="practice-cover-image" href="#practice-cover-image" id="practice-cover-image"><Photo id="photo-1535223289827-42f1e9919769" alt="生成式视觉练习作品"/><span className="practice-cover-shade"/><span className="practice-cover-index">01&nbsp; / &nbsp;GENERATIVE WORLDS</span><span className="practice-cover-open"><MoveUpRight size={20}/></span><span className="practice-cover-title">让未知，<br/>有迹可循。</span></a><div className="practice-cover-meta"><span>AI 视觉实验&nbsp; / &nbsp;动态影像&nbsp; / &nbsp;形式探索</span><span>2025</span></div></section>
<section className="capabilities section" id="capabilities"><div className="capabilities-intro"><span>工具与媒介</span><h2>把想法，<br/>变成可见的能力。</h2><p>从像素到三维，从动态图像到生成式创作。<br/>用合适的工具，把每一个想法推进一步。</p></div><div className="capability-grid">{[['PS','Photoshop','photo-1545235617-9465d2a55698'],['AE','After Effects','photo-1536240478700-b869070f9279'],['BLENDER','Blender 3D','photo-1634017839464-5c339ebe3cb5'],['AI','Adobe Illustrator','photo-1541462608143-67571c6738dd'],['AIGC','Generative AI','photo-1519608487953-e999c86e7455'],['HOUDINI','Houdini FX','photo-1535223289827-42f1e9919769'],['UE5','Unreal Engine 5','photo-1519608487953-e999c86e7455']].map(([name,sub,image],i)=><article className="capability-card" key={name}><Photo id={image} alt=""/><span className="capability-overlay"/><span className="capability-num">0{i+1}</span><span className="capability-label"><b>{name}</b><small>{sub}</small></span><span className="capability-link"><ArrowUpRight size={16}/></span></article>)}</div></section><section className="intentions section" id="intentions"><div className="intentions-head"><div><span>下一段职业旅程</span><h2>我的求职意向</h2></div><a href="mailto:hello@lin.design">联系我 <ArrowUpRight size={15}/></a></div><div className="intentions-grid"><article className="intent-card"><span className="intent-step">方向 01</span><h3>电商设计师</h3><p>打造有吸引力与转化力的商品视觉和电商体验。</p><span className="intent-arrow"><ArrowUpRight size={16}/></span></article><article className="intent-card"><span className="intent-step">方向 02</span><h3>渲染师</h3><p>以光影、材质与细节，呈现有沉浸感的视觉作品。</p><span className="intent-arrow"><ArrowUpRight size={16}/></span></article><article className="intent-card"><span className="intent-step">方向 03</span><h3>设计 Owner</h3><p>统筹设计方向与落地过程，让创意形成完整体验。</p><span className="intent-arrow"><ArrowUpRight size={16}/></span></article><a className="intent-wide" href="mailto:hello@lin.design"><span><small>OPEN TO OPPORTUNITIES</small><b>HMI 设计师 / 渲染师</b></span><span className="intent-wide-desc">期待参与智能座舱与数字体验项目</span><ArrowUpRight size={19}/></a></div><footer className="intentions-footer"><a className="wordmark" href="#top">ZYH<span>®</span></a><span>视觉 · 品牌 · AI 创意</span><span>© 2025 LIN DESIGN STUDIO</span><a href="#top">回到顶部 ↑</a></footer></section></main></>}

createRoot(document.getElementById('root')).render(<App/>);


























