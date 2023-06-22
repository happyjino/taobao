import { useEffect } from "react";
import TopBar from "../component/TopBar";

const Home = () => {

  useEffect(()=>{
    let ins = document.createElement('ins');
    let scr = document.createElement('script');
    ins.className = 'kakao_ad_area';
    ins.style = "display:none; width:100%;";
    scr.async = 'true';
    scr.type = "text/javascript";
    scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    ins.setAttribute('data-ad-width','160');
    ins.setAttribute('data-ad-height','600');
    ins.setAttribute('data-ad-unit','DAN-H6lF6kPLLCXN0yti');
    document.querySelector('.adfit').appendChild(ins);
    document.querySelector('.adfit').appendChild(scr);
  }, [])
  
  return (
    <div className="home">
      <TopBar />
      <a className="taobao-link" href="https://world.taobao.com" target="_blank">
        타오바오 바로가기
      </a>
      <div className="content">
        <p>- 계속 업데이트 할 예정!</p>
        <p>- 여러 기능도 추가해보겠습니다!!</p>
        <p>- 아직은 PC 위주에요 ㅠㅠ</p>
        <p>- QR코드는 어플에서 검색창 옆의 QR코드 스캔을 이용하면 편리해요~</p>
        <p>- 쇼핑몰 옆의 설명은 임의로 적었어요</p>
        <p>- 맞지 않는 정보나 원하는 기능, 문의사항은 아래 메일로 주세요</p>
        <p>hahainfo99@gmail.com</p>
      </div>
      <div className="adfit" />
      
    </div>
  )
}

export default Home;