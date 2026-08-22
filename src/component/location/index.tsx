import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

/**
 * 오시는 길 정보를 표시하는 컴포넌트입니다.
 * 지도와 대중교통, 자가용 이용 방법을 안내합니다.
 *
 * @returns {JSX.Element} 오시는 길 섹션
 */
export const Location = () => {
  return (
    <>
      {/* 지도 및 주소 섹션 */}
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>

      {/* 대중교통 및 자가용 안내 섹션 */}
      <LazyDiv className="card location">
        {/* 대중교통 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용시
            <br />
            5, 6호선 <b>공덕역 8번 출구</b> (도보 2분)
            <br />
            5호선 <b>마포역 3번 출구</b> (도보 5분)
            <br />
            경의선, 공항철도 <b>공덕역 9번 출구</b> (도보 2분)
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            - 간선(파랑): 160, 260, 463, 600
            <br />
            - 지선(초록): 7013A, 7013B, 7016, 7611, 7613
            <br />
            - 급행(빨강): 8601, 2500, 8600
            <br />
            - 공항(검정): 6015, 6021, 6702
            <style>
              .custom-mark {
                background-color: #9bf6ff;
                color: #240046;
              }
            </style>
            <mark class="custom-mark">공항버스</mark> 6015, 6021, 6702
          </div>
        </div>

        {/* 자가용 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>서울특별시 마포구 마포대로 78 경찰공제회 자람빌딩 이룸웨딩컨벤션</b> 검색
            <br />
            - 주차 요금은 2시간 무료입니다.
            <br />
            (안내데스크에서 주차 등록)
          </div>
          <div />
          <div className="content">
            <b>
              ※ 주차장 층간 진입로가 협소하오니, 운전에 유의바랍니다.
            </b>
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
