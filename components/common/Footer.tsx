import MiniLogo from './MiniLogo'

const Footer = () => {
  return (
    <div className="bg-footer-bg">
      <div className="relative items-center pt-10 pb-16 text-slate-200 font-semibold flex-row text-center lg:w-1/2 lg:flex  lg:text-left lg:mx-auto">
        <MiniLogo className="translate-x-1/2 w-1/2 absolute z-10 opacity-20 lg:translate-x-0 lg:w-1/3 lg:static lg:opacity-100" />
        <div className="mx-5 lg:ml-5 lg:mr-0 border-t flex-col text-slate-500 border-slate-200/5  z-20">
          <p>
            Trang web này được xây dựng để phục vụ mục đích học tập (educational
            purposes only). Tất cả nội dung có trên trang web được lấy từ bên
            thứ ba và mình không sở hữu những nội dung đó.
          </p>
          <p className="pt-5">
            Nếu bạn có nhu cầu hợp tác phát triển, vui lòng liên hệ qua email:{' '}
            <a
              href="mailto:xemphim@qeoqeo.com"
              className="text-white border-b border-blue-200 hover:border-b-2 hover:border-blue-400"
            >
              xemphim@qeoqeo.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
