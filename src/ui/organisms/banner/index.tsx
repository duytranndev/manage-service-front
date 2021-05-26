export default function Banner() {
  return (
    // <></>
    <div className='banner'>
      <h1>CỔNG DỊCH VỤ CÔNG </h1>
      <p>Hỗ trợ nhanh chóng, tiện ích mọi lúc mọi nơi</p>
      <div>
        <a href='/about'>
          <button className='button'>
            <span className='span' />
            WATCH MORE
          </button>
        </a>
        <a href='/contact'>
          <button className='button'>
            <span className='span' />
            CONTACT
          </button>
        </a>
      </div>
    </div>
  )
}
