import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { 
  FileSignature, 
  Landmark, 
  Car, 
  Key, 
  User, 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Calculator,
  Phone,
  ArrowRight
} from 'lucide-react';

const InstallmentView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToCalculator = () => {
    const element = document.getElementById('calc-table');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 animate-fade-in font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center bg-[#050505] overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560250056-07ba64664001?q=80&w=2000&auto=format&fit=crop" 
            alt="Happy family receiving new KIA car" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-green-400 text-xs font-bold uppercase tracking-wider">Hỗ trợ tài chính 24/7</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black font-montserrat text-white uppercase leading-tight mb-6">
              Sở Hữu Xe KIA Mơ Ước <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-kia-red to-red-500">Chỉ Với 150 Triệu Đồng</span>
            </h1>
            
            <div className="space-y-4 mb-10 text-gray-300 text-lg font-medium border-l-4 border-kia-red pl-6">
              <p>✓ Hỗ trợ vay <span className="text-white font-bold">85%</span> giá trị xe.</p>
              <p>✓ Lãi suất ưu đãi chỉ từ <span className="text-white font-bold">0.6%/tháng</span>.</p>
              <p>✓ Duyệt hồ sơ trong <span className="text-white font-bold">5 phút</span> "Một chạm".</p>
            </div>

            <button 
              onClick={scrollToCalculator}
              className="bg-kia-red text-white font-bold px-8 py-4 rounded-lg hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(187,22,43,0.4)] flex items-center gap-2 uppercase tracking-wide"
            >
              <Calculator className="w-5 h-5" />
              Tính Số Tiền Trả Hàng Tháng
            </button>
          </div>
        </div>
      </section>

      {/* 2. PROCESS SECTION (TIMELINE) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black font-montserrat text-kia-black uppercase mb-4">
              4 Bước <span className="text-kia-red">Sở Hữu Xe</span>
            </h2>
            <p className="text-gray-500">Quy trình đơn giản hóa, minh bạch và nhanh chóng.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gray-100 -z-0 transform -translate-y-1/2"></div>

            {[
              { 
                icon: FileSignature, 
                step: "01", 
                title: "Ký Hợp Đồng & Cọc", 
                desc: "Chọn xe ưng ý, ký hợp đồng và đặt cọc thiện chí (10-20tr) để giữ xe và khuyến mãi." 
              },
              { 
                icon: Landmark, 
                step: "02", 
                title: "Thẩm Định & Thông Báo", 
                desc: "Ngân hàng thẩm định (Online/Offline). Cam kết bao đậu hồ sơ. Ra thông báo cho vay sau 4-24h." 
              },
              { 
                icon: Car, 
                step: "03", 
                title: "Đóng Đối Ứng & Đăng Ký", 
                desc: "Đóng số tiền đối ứng (Tiền xe - Tiền vay). Đại lý nộp thuế, đăng ký biển số trọn gói." 
              },
              { 
                icon: Key, 
                step: "04", 
                title: "Giải Ngân & Nhận Xe", 
                desc: "Ký giải ngân tại ngân hàng. Tiền về tài khoản công ty, Quý khách nhận xe mang về nhà." 
              }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:border-kia-red group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-10 h-10 text-gray-400 group-hover:text-kia-red transition-colors" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-xs border-2 border-white">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-lg font-black font-montserrat text-gray-900 mb-3 uppercase">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CHECKLIST SECTION */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left: Personal */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  <User className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black font-montserrat text-gray-900 uppercase">Khách Hàng Cá Nhân</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm"><strong>Pháp lý:</strong> CCCD gắn chip (Vợ & Chồng nếu đã kết hôn) + Giấy đăng ký kết hôn (hoặc giấy xác nhận độc thân).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm"><strong>Nguồn thu:</strong> Hợp đồng lao động + Sao kê lương 3-6 tháng gần nhất.</span>
                </li>
              </ul>
              
              <div className="mt-8 bg-red-50 p-4 rounded-lg border border-red-100">
                <p className="text-red-800 text-sm font-medium flex items-start gap-2">
                  <span className="text-xl">🔥</span>
                  <span>
                    Hồ sơ khó? Kinh doanh tự do? Không chứng minh được thu nhập? Nợ chú ý? <br/>
                    <strong className="text-red-600 uppercase">Đừng lo, {CONTACT_INFO.name} xử lý được hết. Gọi ngay!</strong>
                  </span>
                </p>
              </div>
            </div>

            {/* Right: Business */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black font-montserrat text-gray-900 uppercase">Khách Hàng Doanh Nghiệp</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm"><strong>Pháp lý:</strong> Giấy phép kinh doanh + CCCD chủ doanh nghiệp.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm"><strong>Tài chính:</strong> Báo cáo tài chính 6 tháng gần nhất + Tờ khai thuế.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm"><strong>Hoạt động:</strong> Doanh nghiệp thành lập trên 6 tháng, không nợ xấu nhóm 3-4-5.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CALCULATION TABLE */}
      <section id="calc-table" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black font-montserrat text-kia-black uppercase mb-2">Bạn Cần Chuẩn Bị Bao Nhiêu Tiền?</h2>
            <p className="text-gray-500 italic">(Ví dụ tính toán tạm tính cho khoản vay 80% trong 7 năm)</p>
          </div>

          <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="p-4 md:p-6 font-bold uppercase tracking-wider text-sm">Dòng Xe</th>
                  <th className="p-4 md:p-6 font-bold uppercase tracking-wider text-sm">Tổng Trả Trước <br/><span className="text-[10px] opacity-70 font-normal normal-case">(Xe + Đăng ký)</span></th>
                  <th className="p-4 md:p-6 font-bold uppercase tracking-wider text-sm text-right">Gốc + Lãi / Tháng <br/><span className="text-[10px] opacity-70 font-normal normal-case">(Tạm tính)</span></th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  { name: "KIA Morning", prepaid: "~ 110.000.000 VNĐ", month: "~ 5.200.000 VNĐ" },
                  { name: "KIA K3", prepaid: "~ 180.000.000 VNĐ", month: "~ 7.800.000 VNĐ" },
                  { name: "KIA Sonet", prepaid: "~ 160.000.000 VNĐ", month: "~ 7.200.000 VNĐ" },
                  { name: "KIA Seltos", prepaid: "~ 195.000.000 VNĐ", month: "~ 8.500.000 VNĐ" },
                  { name: "KIA Carnival", prepaid: "~ 450.000.000 VNĐ", month: "~ 16.000.000 VNĐ" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="p-4 md:p-6 font-bold text-gray-900">{row.name}</td>
                    <td className="p-4 md:p-6 font-bold text-kia-red">{row.prepaid}</td>
                    <td className="p-4 md:p-6 font-bold text-blue-700 text-right">{row.month}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-400 italic text-center">* Lưu ý: Số tiền trả hàng tháng sẽ giảm dần theo dư nợ giảm dần.</p>
        </div>
      </section>

      {/* 5. PARTNERS & FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          
          {/* Partners Grid */}
          <div className="mb-20">
            <h2 className="text-2xl font-black font-montserrat text-center uppercase mb-10">
              Đối Tác Tài Chính Chiến Lược
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {["Shinhan Bank", "VIB", "TPBank", "VPBank", "Techcombank", "Woori Bank"].map((bank, idx) => (
                <div key={idx} className="bg-white h-24 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center p-4 hover:shadow-md transition-shadow grayscale hover:grayscale-0">
                  <span className="font-black text-gray-400 text-center uppercase text-sm">{bank}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-600 font-medium">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500"/> Lãi suất cạnh tranh</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500"/> Không ép mua bảo hiểm</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500"/> Vay 3 - 8 năm</span>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black font-montserrat text-center uppercase mb-10">Câu Hỏi Thường Gặp</h2>
            <div className="space-y-4">
              {[
                { 
                  q: "Tôi làm nghề tự do (bán hàng Online, tài xế), không có bảng lương có vay được không?", 
                  a: "Hoàn toàn ĐƯỢC. Chúng tôi có các ngân hàng chuyên hỗ trợ nguồn thu thực tế (chụp ảnh cơ sở kinh doanh, xác nhận qua app...) mà không cần sao kê lương."
                },
                { 
                  q: "Nợ xấu có mua xe được không?", 
                  a: `Tùy thuộc vào mức độ nợ xấu (Nhóm 1, 2 hay cao hơn) và thời điểm bị nợ. Hãy gọi riêng cho ${CONTACT_INFO.name} qua số ${CONTACT_INFO.phone} để được check CIC và tư vấn phương án "lách" hồ sơ kín đáo nhất.`
                },
                { 
                  q: "Tôi ở tỉnh mua xe tại Hà Nội có trả góp được không?", 
                  a: "Được. Chúng tôi hỗ trợ trả góp trên toàn quốc. Ngân hàng tại địa phương của Quý khách sẽ qua thẩm định và giải ngân."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-gray-900 pr-4">{item.q}</span>
                    {openFaq === idx ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </button>
                  {openFaq === idx && (
                    <div className="p-6 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-gray-50/50">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. BOTTOM FORM */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-[30px] overflow-hidden shadow-2xl">
            <div className="flex flex-col lg:flex-row">
              
              {/* Left Visual */}
              <div className="lg:w-1/2 p-12 bg-[#101010] flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full"></div>
                <ShieldCheck className="w-24 h-24 text-green-500 mb-6 relative z-10" />
                <h3 className="text-3xl font-black font-montserrat text-white uppercase mb-4 relative z-10">Thẩm Định Hồ Sơ <br/>Online Miễn Phí</h3>
                <p className="text-gray-400 max-w-sm relative z-10">Điền thông tin sơ bộ, chúng tôi sẽ kiểm tra hạn mức vay tối đa của bạn sau 5 phút. Thông tin được bảo mật tuyệt đối 100%.</p>
              </div>

              {/* Right Form */}
              <div className="lg:w-1/2 p-8 md:p-12 bg-white">
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                   <div>
                     <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Họ tên</label>
                     <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-kia-red font-bold text-gray-900" placeholder="Nguyễn Văn A" />
                   </div>
                   <div>
                     <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Số điện thoại</label>
                     <input type="tel" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-kia-red font-bold text-gray-900" placeholder="09xx..." />
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                     <div>
                       <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Thu nhập (Ước lượng)</label>
                       <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-kia-red font-bold text-gray-900" placeholder="VD: 20 Triệu" />
                     </div>
                     <div>
                       <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Số tiền muốn vay</label>
                       <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-kia-red font-bold text-gray-900" placeholder="VD: 400 Triệu" />
                     </div>
                   </div>
                   
                   <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg uppercase tracking-wide hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 flex items-center justify-center gap-2 mt-4">
                     Kiểm Tra Hồ Sơ Ngay
                     <ArrowRight className="w-5 h-5" />
                   </button>
                   <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                     <ShieldCheck className="w-3 h-3" /> Cam kết bảo mật thông tin
                   </p>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default InstallmentView;