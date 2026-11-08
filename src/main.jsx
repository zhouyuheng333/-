import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, Asterisk, MoveUpRight } from 'lucide-react';
import './styles.css';
import Grainient from './Grainient';
import BorderGlow from './BorderGlow';

const projects = [
  { n:'01', type:'品牌策略 / 视觉识别', title:'让未来，有迹可循。', name:'NOVA · 新能源品牌', year:'2025', image:'photo-1473341304170-971adc5bafcf', tint:'mint' },
  { n:'02', type:'AI 创意 / 数字体验', title:'想象力的另一种形状。', name:'SYNTHESIS · AI 实验', year:'2025', image:'photo-1634017839464-5c339ebe3cb4', tint:'violet' },
  { n:'03', type:'艺术指导 / 包装设计', title:'日常之外，自有风味。', name:'野序 · 东方植物酒', year:'2024', image:'photo-1516594798947-e65505dbb29d', tint:'orange' }
];
const portfolioTypes = [
  {n:'01',title:'电商设计',en:'E-COMMERCE',desc:'商品视觉、营销页面与转化体验设计。',image:'/portfolio/ecommerce.jpg'},
  {n:'02',title:'视频动画',en:'MOTION & FILM',desc:'动态视觉、品牌影像与创意短片。',image:'/portfolio/motion-film.jpg'},
  {n:'03',title:'线下物料',en:'PRINT & SPACE',desc:'从平面印刷到空间触点的完整表达。',image:'/portfolio/print-space.png'},
  {n:'04',title:'Design Guideline',en:'DESIGN SYSTEM',desc:'定义品牌规则，让每一次表达保持一致。',image:'/portfolio/design-system.jpg'}
];
const skills=[['01','品牌构建','从定位到识别，让品牌拥有清晰、持久的表达。','IDENTITY'],['02','视觉叙事','以图像、字体与动效，建立直觉而鲜明的体验。','ART DIRECTION'],['03','AI 共创','将生成式工具融入创意流程，探索新的视觉边界。','GENERATIVE'],['04','系统思维','兼顾细节与全局，让创意在真实场景中持续生长。','DESIGN SYSTEM']];
function Photo({id,sizes="(max-width: 520px) 88vw, (max-width: 800px) 44vw, 24vw",loading="lazy",...props}){const image=(width)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=76`;if(id.startsWith('/'))return <img src={id} sizes={sizes} loading={loading} decoding="async" fetchPriority="low" {...props}/>;return <img src={image(800)} srcSet={`${image(480)} 480w, ${image(800)} 800w, ${image(1200)} 1200w`} sizes={sizes} loading={loading} decoding="async" fetchPriority="low" {...props}/>;}
function App(){
  const pageRef = useRef(null);
  useLayoutEffect(() => {
    const scope = pageRef.current;
    if (!scope || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      const opening = gsap.timeline({ defaults: { ease: 'power4.out' } });
      opening.fromTo(scope.closest('#root').querySelector('.nav'), { y: -22, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.05 }, 0)
        .fromTo('.hero-brand, .hero-copy .eyebrow', { y: 22, autoAlpha: 0, filter: 'blur(8px)' }, { y: 0, autoAlpha: 1, filter: 'blur(0px)', duration: 0.9, stagger: 0.12 }, 0.22)
        .fromTo('.hero h1', { clipPath: 'inset(0 0 100% 0)', y: 42, scaleX: 0.92, transformOrigin: 'left center', autoAlpha: 0 }, { clipPath: 'inset(0 0 0% 0)', y: 0, scaleX: 1, autoAlpha: 1, duration: 1.35 }, 0.42)
        .fromTo('.hero-description', { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9 }, 0.92)
        .fromTo('.hero-actions > *', { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.75, stagger: 0.12 }, 1.08)
        .fromTo('.hero-feature', { clipPath: 'inset(0 0 100% 0 round 18px)', scale: 0.96, autoAlpha: 0 }, { clipPath: 'inset(0 0 0% 0 round 18px)', scale: 1, autoAlpha: 1, duration: 1.5, ease: 'power3.inOut' }, 0.3);

      const revealSection = (selector, headingSelector, cardsSelector, opts = {}) => {
        const section = scope.querySelector(selector);
        if (!section) return;
        const heading = section.querySelector(headingSelector);
        if (heading) gsap.fromTo(heading, { y: 72, autoAlpha: 0, clipPath: 'inset(0 0 35% 0)' }, {
          y: 0, autoAlpha: 1, clipPath: 'inset(0 0 0% 0)', duration: 1.2, ease: 'power4.out',
          scrollTrigger: { trigger: section, start: 'top 76%', once: true }
        });
        const cards = section.querySelectorAll(cardsSelector);
        if (cards.length) {
          const cardsTimeline = gsap.timeline({
            scrollTrigger: { trigger: opts.cardsTrigger || section, start: opts.start || 'top 66%', once: true }
          });
          cardsTimeline.fromTo(cards, { y: 76, autoAlpha: 0, scale: 0.965, clipPath: 'inset(0 0 16% 0 round 16px)' }, {
            y: 0, autoAlpha: 1, scale: 1, clipPath: 'inset(0 0 0% 0 round 16px)', duration: 1.05, stagger: 0.16, ease: 'power3.out'
          });
          const images = section.querySelectorAll('.portfolio-thumb img, .capability-card > img');
          if (images.length) cardsTimeline.fromTo(images, { clipPath: 'inset(0 0 18% 0)' }, {
            clipPath: 'inset(0 0 0% 0)', duration: 0.8, stagger: 0.13, ease: 'power3.out'
          }, '-=0.8');
        }
      };

      revealSection('#work', '.portfolio-heading h2', '.portfolio-card-glow', { cardsTrigger: '.portfolio-grid', start: 'top 82%' });
      revealSection('#capabilities', '.capabilities-intro h2', '.capability-glow-card', { cardsTrigger: '.capability-grid', start: 'top 82%' });
      revealSection('#intentions', '.intentions-head h2', '.intent-card, .intent-wide', { cardsTrigger: '.intentions-grid', start: 'top 82%' });

      const practice = scope.querySelector('#practice');
      if (practice) {
        const intro = practice.querySelector('.practice-cover-heading');
        const artwork = practice.querySelector('.practice-cover-image');
        gsap.fromTo(intro, { x: -48, autoAlpha: 0, clipPath: 'inset(0 0 18% 0)' }, { x: 0, autoAlpha: 1, clipPath: 'inset(0 0 0% 0)', duration: 1.2, ease: 'power4.out', scrollTrigger: { trigger: practice, start: 'top 72%', once: true } });
        gsap.fromTo(artwork, { clipPath: 'inset(0 0 100% 0 round 16px)', scale: 0.97, autoAlpha: 0 }, { clipPath: 'inset(0 0 0% 0 round 16px)', scale: 1, autoAlpha: 1, duration: 1.4, ease: 'power3.inOut', scrollTrigger: { trigger: practice, start: 'top 68%', once: true } });
        gsap.to(artwork.querySelector('img'), { yPercent: -7, ease: 'none', scrollTrigger: { trigger: artwork, start: 'top bottom', end: 'bottom top', scrub: 0.8 } });
      }

    }, scope);
    return () => ctx.revert();
  }, []);
  return <><header className="nav"><a className="wordmark" href="#top">ZYH<span>®</span></a><nav><a href="#about">简历</a><a href="#work">作品</a><a href="#practice">练习</a><a href="#capabilities">能力</a><a href="#intentions">求职意向</a></nav><a className="nav-cta" href="mailto:hello@lin.design">一起聊聊 <ArrowUpRight size={15}/></a></header>
<main ref={pageRef}><section className="hero" id="top"><video className="ambient-video" autoPlay muted loop playsInline preload="none" poster="/hero-poster.jpg" aria-hidden="true"><source src="/hero-background.mp4" type="video/mp4"/></video><div className="hero-inner"><div className="hero-copy"><div className="hero-brand"><Asterisk size={24}/> ZYH DESIGN STUDIO</div><div className="eyebrow"><span className="live-dot"/> 视觉设计师 / 渲染师 · 周宇衡 <span className="hero-date">2025 — 现在</span></div><h1>以视觉叙事，<br/>构建可感知的<span>价值。</span></h1><p className="hero-description">南昌大学本科，多年视觉设计经验，拥有团队管理经历；擅长消费电子品牌 KV、电商视觉、3D 渲染<br/>及线下物料设计，通晓海内外品牌 VI 规范，可独立落地全链路视觉项目，善用 AI 提效。</p><div className="hero-actions"><a className="hero-primary" href="#work">查看精选作品 <ArrowUpRight size={16}/></a><a className="hero-secondary" href="mailto:hello@lin.design">联系我 <ArrowUpRight size={16}/></a></div></div><a href="#work" className="hero-feature"><video className="feature-video" autoPlay muted loop playsInline preload="auto" poster="/hero-poster.jpg" fetchPriority="high" aria-label="精选视觉创意作品"><source src="/hero-background.mp4" type="video/mp4"/></video><span className="feature-caption"><MoveUpRight size={20}/></span><span className="feature-orbit">VISUAL<br/>IDENTITY<br/>2026</span></a></div></section>
<section className="portfolio section" id="work"><div className="portfolio-heading"><div><h2>过往项目案例</h2></div><a href="#work-grid">查看全部 <ArrowUpRight size={15}/></a></div><div className="portfolio-grid" id="work-grid">{portfolioTypes.map(item=><BorderGlow key={item.n} className="portfolio-card-glow" edgeSensitivity={34} glowColor="215 85 72" backgroundColor="#17202b" borderRadius={16} glowRadius={22} glowIntensity={0.72} coneSpread={30} animated={false} colors={["#6b8fc8","#8cb8e8","#657da8"]}><a className="portfolio-card" href="mailto:hello@lin.design" key={item.n}><div className="portfolio-thumb"><Photo id={item.image} alt={item.title}/><span className="portfolio-number">{item.n}</span><span className="portfolio-arrow"><MoveUpRight size={17}/></span></div><div className="portfolio-info"><div><small>{item.en}</small><h3>{item.title}</h3></div><p>{item.desc}</p></div></a></BorderGlow>)}</div></section>

<section className="practice-cover section" id="practice"><div className="practice-cover-heading"><h2>练习合集<br/><span>让成长，有迹可循。</span></h2><p>设计师的一些想法，正在成为练习，不设限地试验，保持好奇与生长。</p><a className="practice-all-button hero-primary" href="#practice-cover-image">了解所有练习 <ArrowUpRight size={16}/></a></div><a className="practice-cover-image" href="#practice-cover-image" id="practice-cover-image"><Photo id="photo-1535223289827-42f1e9919769" alt="生成式视觉练习作品" sizes="(max-width: 800px) 90vw, 56vw"/><span className="practice-cover-index">01&nbsp; / &nbsp;GENERATIVE WORLDS</span><span className="practice-cover-open"><MoveUpRight size={20}/></span></a></section>
<section className="capabilities section" id="capabilities"><div className="capabilities-intro"><h2>常用设计工具</h2><p>从平面到三维，从动态到生成式创作，用合适的工具，把每一个想法推进一步。</p></div><div className="capability-grid">{[['PS','Photoshop','photo-1545235617-9465d2a55698'],['AE','After Effects','photo-1536240478700-b869070f9279'],['BLENDER','Blender 3D','photo-1634017839464-5c339ebe3cb5'],['AI','Adobe Illustrator','photo-1541462608143-67571c6738dd'],['AIGC','Generative AI','photo-1519608487953-e999c86e7455'],['HOUDINI','Houdini FX','photo-1535223289827-42f1e9919769'],['UE5','Unreal Engine 5','photo-1519608487953-e999c86e7455']].map(([name,sub,image],i)=><BorderGlow key={name} className="capability-glow-card" edgeSensitivity={34} glowColor="215 85 72" backgroundColor="#17202b" borderRadius={14} glowRadius={22} glowIntensity={0.72} coneSpread={30} animated={false} colors={["#6b8fc8","#8cb8e8","#657da8"]}><article className="capability-card"><Photo id={image} alt=""/><span className="capability-overlay"/><span className="capability-num">0{i+1}</span><span className="capability-label"><b>{name}</b><small>{sub}</small></span><span className="capability-link"><ArrowUpRight size={16}/></span></article></BorderGlow>)}</div></section><section className="intentions section" id="intentions"><div className="intentions-grainient" aria-hidden="true"><Grainient colors={['#42188a','#070404','#12379a']} type="linear" angle={43} flow={1.35} softness={1} scale={1.75} speed={1} silk={0.35} grainAmount={0.08} grainSize={1.2} grainAnimated={false} contrast={1} saturation={1} variation={4} interactive={false} clickSwirl={false} intro={true} dpr={1}/></div><div className="intentions-head"><div><span>下一段职业旅程</span><h2>我的求职意向</h2></div><a href="mailto:hello@lin.design">联系我 <ArrowUpRight size={15}/></a></div><div className="intentions-grid"><article className="intent-card"><span className="intent-step">方向 01</span><h3>电商设计师</h3><p>打造有吸引力与转化力的商品视觉和电商体验。</p><span className="intent-arrow"><ArrowUpRight size={16}/></span></article><article className="intent-card"><span className="intent-step">方向 02</span><h3>渲染师</h3><p>以光影、材质与细节，呈现有沉浸感的视觉作品。</p><span className="intent-arrow"><ArrowUpRight size={16}/></span></article><article className="intent-card"><span className="intent-step">方向 03</span><h3>设计 Owner</h3><p>统筹设计方向与落地过程，让创意形成完整体验。</p><span className="intent-arrow"><ArrowUpRight size={16}/></span></article><a className="intent-wide" href="mailto:hello@lin.design"><span><small>OPEN TO OPPORTUNITIES</small><b>HMI 设计师 / 渲染师</b></span><span className="intent-wide-desc">期待参与智能座舱与数字体验项目</span><ArrowUpRight size={19}/></a></div><footer className="intentions-footer"><a className="wordmark" href="#top">ZYH<span>®</span></a><span>视觉 · 品牌 · AI 创意</span><span>© 2025 ZYH DESIGN STUDIO</span><a href="#top">回到顶部 ↑</a></footer></section></main></>}

createRoot(document.getElementById('root')).render(<App/>);

































