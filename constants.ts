import { CarModel, Testimonial, USPItem, VideoItem } from './types';
import { Wallet, CheckCircle2, Truck, HeartHandshake } from 'lucide-react';

export const CAR_MODELS: CarModel[] = [
  // --- NHÓM 1: SEDAN & HATCHBACK ---
  {
    id: 'morning',
    name: 'KIA MORNING',
    tagline: 'Vua xe đô thị - Nhỏ gọn & Tiết kiệm',
    version: 'GT-Line',
    power: '83 Mã Lực',
    price: '349.000.000 VNĐ',
    installmentPrice: '4.5 Tr/tháng',
    status: 'Sẵn xe giao ngay',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=1000&auto=format&fit=crop',
    group: 'sedan',
    category: 'urban'
  },
  {
    id: 'soluto',
    name: 'KIA SOLUTO',
    tagline: 'Sedan hạng B giá rẻ nhất phân khúc',
    version: 'AT Luxury',
    power: '94 Mã Lực',
    price: '386.000.000 VNĐ',
    installmentPrice: '5.2 Tr/tháng',
    status: 'Đủ màu',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1000&auto=format&fit=crop',
    group: 'sedan',
    category: 'sedan'
  },
  {
    id: 'k3',
    name: 'KIA K3 (NEW)',
    tagline: 'Sedan hạng C bán chạy số 1 VN',
    version: '1.6 Turbo',
    power: '204 Mã Lực',
    price: '549.000.000 VNĐ',
    installmentPrice: '7.5 Tr/tháng',
    status: 'Ưu đãi 50% trước bạ',
    image: 'https://images.unsplash.com/photo-1623506928045-812e97972304?q=80&w=1000&auto=format&fit=crop',
    group: 'sedan',
    category: 'sedan'
  },
  {
    id: 'k5',
    name: 'KIA K5',
    tagline: 'Fastback Sedan thời thượng',
    version: '2.5 GT-Line',
    power: '191 Mã Lực',
    price: '859.000.000 VNĐ',
    installmentPrice: '11 Tr/tháng',
    status: 'Sẵn xe lái thử',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1000&auto=format&fit=crop',
    group: 'sedan',
    category: 'sedan'
  },

  // --- NHÓM 2: SUV & GẦM CAO ---
  {
    id: 'sonet',
    name: 'KIA SONET',
    tagline: 'SUV đô thị cỡ nhỏ - Gầm cao, Linh hoạt',
    version: '1.5 Premium',
    power: '113 Mã Lực',
    price: '519.000.000 VNĐ',
    installmentPrice: '6.5 Tr/tháng',
    status: 'Bán chạy (Gọi check kho)',
    image: 'https://images.unsplash.com/photo-1658428271777-628d052608c0?q=80&w=1000&auto=format&fit=crop',
    group: 'suv',
    category: 'suv'
  },
  {
    id: 'seltos',
    name: 'KIA SELTOS',
    tagline: 'Biểu tượng B-SUV - Đẹp, Khỏe, Nhiều Option',
    version: '1.4 GT-Line',
    power: '138 Mã Lực',
    price: '599.000.000 VNĐ',
    installmentPrice: '8.0 Tr/tháng',
    status: 'Đủ phiên bản (1.5 & Turbo)',
    image: 'https://images.unsplash.com/photo-1626847037657-fd3622613ce3?q=80&w=1000&auto=format&fit=crop',
    group: 'suv',
    category: 'suv'
  },
  {
    id: 'sportage',
    name: 'KIA SPORTAGE',
    tagline: 'Tuyệt phẩm C-SUV - Cảm hứng tương lai',
    version: '2.0D Signature',
    power: '184 Mã Lực',
    price: '799.000.000 VNĐ',
    installmentPrice: '10.5 Tr/tháng',
    status: 'Tặng bảo hiểm thân vỏ',
    image: 'https://images.unsplash.com/photo-1655648839088-75c602052478?q=80&w=1000&auto=format&fit=crop',
    group: 'suv',
    category: 'suv'
  },
  {
    id: 'sorento',
    name: 'KIA SORENTO',
    tagline: 'SUV 7 chỗ Đẳng cấp - Động cơ Smartstream',
    version: 'PHEV Signature',
    power: '261 Mã Lực',
    price: '999.000.000 VNĐ',
    installmentPrice: '13 Tr/tháng',
    status: 'Có xe giao ngay',
    image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?q=80&w=1000&auto=format&fit=crop',
    group: 'suv',
    category: 'suv'
  },

  // --- NHÓM 3: MPV & XE GIA ĐÌNH ---
  {
    id: 'carens',
    name: 'KIA CARENS',
    tagline: 'MPV thế hệ mới - Rộng nhất phân khúc',
    version: '1.5D Signature',
    power: '113 Mã Lực',
    price: '589.000.000 VNĐ',
    installmentPrice: '7.8 Tr/tháng',
    status: 'Sẵn màu Trắng/Đỏ/Xanh',
    image: 'https://images.unsplash.com/photo-1681812891157-8147d3d5268c?q=80&w=1000&auto=format&fit=crop',
    group: 'mpv',
    category: 'family'
  },
  {
    id: 'carnival',
    name: 'KIA CARNIVAL',
    tagline: 'Chuyên cơ mặt đất - Tiện nghi hạng thương gia',
    version: '3.5G Signature',
    power: '268 Mã Lực',
    price: '1.189.000.000 VNĐ',
    installmentPrice: '15 Tr/tháng',
    status: 'Cam kết giao sớm nhất MB',
    image: 'https://images.unsplash.com/photo-1644342571242-a169b0068a0c?q=80&w=1000&auto=format&fit=crop',
    group: 'mpv',
    category: 'family'
  }
];

export const USP_ITEMS: USPItem[] = [
  {
    id: 1,
    icon: Wallet,
    title: 'GIÁ ĐÁY THỊ TRƯỜNG',
    description: 'Cập nhật khuyến mãi 2 giờ/lần. Luôn có "deal" độc quyền.'
  },
  {
    id: 2,
    icon: CheckCircle2,
    title: 'KHO XE LỚN NHẤT',
    description: 'Sẵn xe, đủ màu, giao ngay. Không phải chờ đợi.'
  },
  {
    id: 3,
    icon: Truck,
    title: 'DỊCH VỤ 3S CHUẨN',
    description: 'Bảo hành, bảo dưỡng chính hãng tiêu chuẩn toàn cầu.'
  },
  {
    id: 4,
    icon: HeartHandshake,
    title: 'HỖ TRỢ TẬN TÂM',
    description: 'Đội ngũ tư vấn chuyên nghiệp, hỗ trợ thủ tục A-Z.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/customer1/400/300',
    customerName: 'Anh Hùng (Gia Lâm)',
    quote: 'Cảm ơn đội ngũ KIA Long Biên đã hỗ trợ anh lấy xe kịp giờ đẹp. Dịch vụ rất chuyên nghiệp!'
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/customer2/400/300',
    customerName: 'Chị Lan (Long Biên)',
    quote: 'Showroom rộng đẹp, nhân viên nhiệt tình. Thủ tục nhanh gọn.'
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/customer3/400/300',
    customerName: 'Gia đình anh Minh (Hà Đông)',
    quote: 'Giá tốt nhất Hà Nội, xe giao đúng hẹn. Rất hài lòng với KIA Long Biên.'
  }
];

export const VIDEOS: VideoItem[] = [
  {
    id: 1,
    title: 'Cầm 600Tr chọn Seltos hay Sonet?',
    thumbnail: 'https://images.unsplash.com/photo-1626847037657-fd3622613ce3?q=80&w=500&auto=format&fit=crop',
    views: '125K'
  },
  {
    id: 2,
    title: 'Giao xe Carnival cho Chủ Tịch',
    thumbnail: 'https://images.unsplash.com/photo-1644342571242-a169b0068a0c?q=80&w=500&auto=format&fit=crop',
    views: '89K'
  },
  {
    id: 3,
    title: 'Mẹo lái thử xe để biết độ êm',
    thumbnail: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=500&auto=format&fit=crop',
    views: '210K'
  }
];

export const CONTACT_INFO = {
  name: 'KIA LONG BIÊN',
  role: 'Đại Lý Chính Hãng 3S',
  phone: '0869.932.031',
  address: '105A Đ. Lý Sơn, Ngọc Thụy, Long Biên, Hà Nội, Vietnam',
  copyright: '© 2026 KIA Long Biên - Đại Lý Chính Hãng'
};