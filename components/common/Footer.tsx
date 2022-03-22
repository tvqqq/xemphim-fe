import MiniLogo from './MiniLogo'

const Footer = () => {
  return (
    <div className="bg-footer-bg">
      <div className="relative flex items-center pt-10 pb-16 text-slate-200 font-semibold w-1/2 mx-auto">
        <MiniLogo className="w-1/2" />
        <div className="ml-5 border-t flex-col text-slate-500 border-slate-200/5">
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
