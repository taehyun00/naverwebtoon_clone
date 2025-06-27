'use client';

import Link from 'next/link';

const tags = [
  '#로맨스', '#판타지', '#액션', '#일상', '#스릴러', '#개그', '#무협/사극', '#드라마',
  '#감성', '#스포츠', '#드라마&영화 원작웹툰', '#먼치킨', '#학원로맨스', '#로판',
  '#게임판타지', '#시리즈', '#서바이벌', '#성장드라마', '#우정', '#판무',
  '#감성', '#과거', '#폭스남', '#하이틴', '#2022 지상최대공모전', '#한골탈태',
  '#스릴러', '#이능력'
];

export default function Footer() {
  return (
    <footer className="text-sm text-gray-800 mt-10">
      <div className="px-1">
        {/* 웹툰 바로가기 */}
        <div className="mb-6">
          <h2 className="text-base font-semibold mb-2">웹툰 바로가기</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
  {tags.map((tag, index) => (
    <span
      key={index}
      className="bg-[#f5f5f5] py-1  rounded text-gray-700 text-xs text-center cursor-pointer hover:bg-gray-200 truncate"
    >
      {tag}
    </span>
  ))}
</div>
        </div>

        {/* 배너 영역 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="flex items-center border rounded p-4 h-28">
            <div className="mr-4">
              <div className="w-10 h-10 bg-gray-300 rounded" />
            </div>
            <div>
              <div className="font-semibold text-base">연재 경력작가</div>
              <div className="text-[#00d56f] text-base">웹툰 자기작 제안</div>
            </div>
          </div>
          <div className="flex items-center border rounded p-4 h-28">
            <div className="mr-4">
              <div className="w-10 h-10 bg-gray-300 rounded" />
            </div>
            <div>
              <div className="font-semibold text-base">웹툰 웹소설</div>
              <div className="text-[#00d56f] text-base">온라인 광고 판권 사업</div>
            </div>
          </div>
          <div className="flex items-center border rounded p-4 h-28">
            <div className="mr-4">
              <div className="w-10 h-10 bg-gray-300 rounded" />
            </div>
            <div>
              <div className="font-semibold text-base">웹툰 채용공고</div>
              <div className="text-[#00d56f] text-base">CAREERS</div>
            </div>
          </div>
        </div>

        {/* 메뉴 링크 */}
        <div className="border-t border-gray-300 pt-4 mb-4 flex flex-wrap gap-x-2 gap-y-1 text-gray-500 text-xs">
          <Link href="#">네이버웹툰 이용약관</Link>
          <span>|</span>
          <Link href="#">전용상품권 이용약관</Link>
          <span>|</span>
          <Link href="#" className="font-bold text-black">개인정보처리방침</Link>
          <span>|</span>
          <Link href="#">청소년보호정책</Link>
          <span>|</span>
          <Link href="#">운영원칙</Link>
          <span>|</span>
          <Link href="#">웹툰 고객센터</Link>
        </div>

        {/* 저작권 정보 */}
        <div className="text-xs text-gray-500 leading-relaxed mb-2">
          광고 문의 | 사업 문의<br />
          © NAVER WEBTOON Limited.
        </div>

        <div className="text-xs text-gray-500 leading-relaxed">
          네이버웹툰(유) 대표이사 김준구 | 사업자등록번호 669-86-01888 | 통신판매업 신고번호 2020-성남분당B-0719 (사업자정보확인)<br />
          주소 경기도 성남시 분당구 불정로 6 그린팩토리, 6-10층 | 고객센터 1588-3820 | 이메일 ccnaver@naver.com<br />
          호스팅 서비스 제공 NAVER Cloud
        </div>

        <div className="text-xs text-gray-400 mt-2">
          모든 콘텐츠의 저작권은 저작권자 또는 제공자에 있으며, 이를 무단으로 이용하는 경우 관련 법령에 따라 법적 책임을 질 수 있습니다.
        </div>
      </div>
    </footer>
  );
}
