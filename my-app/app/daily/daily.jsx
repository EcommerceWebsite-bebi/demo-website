import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DailyCta from "../../components/daily/DailyCta";
import DailyGallery from "../../components/daily/DailyGallery";
import DailyHero from "../../components/daily/DailyHero";
import DailyHighlights from "../../components/daily/DailyHighlights";
import DailyQrShare from "../../components/daily/DailyQrShare";
import DailyStory from "../../components/daily/DailyStory";

const heroMeta = [
	"Mood: Bình yên",
	"Outfit: AI Fit 02",
	"Địa điểm: Sài Gòn",
	"Thời tiết: 29°C",
];

const highlights = [
	{
		label: "Mood",
		value: "Bình yên",
		note: "Buổi sáng nhẹ, ấm và sáng",
		icon: "sentiment_satisfied",
	},
	{
		label: "Outfit thử",
		value: "AI Fit 02",
		note: "Kiểu áo oversize",
		icon: "checkroom",
	},
	{
		label: "Lượt xem",
		value: "1,248",
		note: "+18% so với hôm qua",
		icon: "visibility",
	},
	{
		label: "Điểm fit",
		value: "9.2/10",
		note: "Tự động gợi ý size",
		icon: "verified",
	},
];

const timeline = [
	{
		time: "07:30",
		title: "Cà phê sáng và thử áo",
		text: "Thử hoodie màu khói, ánh sáng sáng nên màu lên rất ngọt.",
	},
	{
		time: "11:20",
		title: "Test khả năng phom dáng",
		text: "AI tự động căn chỉnh độ dài tay áo và phần vai.",
	},
	{
		time: "16:00",
		title: "Chọn outfit cuối ngày",
		text: "Layer với áo khoác đen, chia sẻ lên QR cho bạn bè.",
	},
];

const gallery = [
	{ name: "Canva Look 01" },
	{ name: "Canva Look 02" },
	{ name: "Canva Look 03" },
	{ name: "Canva Look 04" },
];

export default function DailyPage() {
	return (
		<div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
			<Header />
			<main className="flex-1 px-margin-x py-16 space-y-16">
				<DailyHero
					title="Nhật Ký • 18 Tháng 05, 2026"
					description="Một ngày thử áo với AI, ghi lại từng khoảnh khắc và chia sẻ bằng QR. Đây là phiên bản nhật ký bạn bè có thể mở ngay trên điện thoại."
					metaItems={heroMeta}
					heroLabel="Canva Hero"
					kicker="Nhật Ký"
				/>
				<DailyHighlights items={highlights} />
				<section className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
					<DailyStory
						entries={timeline}
						title="Câu chuyện hôm nay"
						subtitle="Tất cả ghi chú, khoảnh khắc, và ảnh từ Canva."
					/>
					<DailyGallery
						items={gallery}
						title="Lookbook"
						subtitle="Bộ sưu tập ảnh sau khi scan QR."
					/>
				</section>
				<DailyQrShare
					title="QR chia sẻ nhật ký"
					subtitle="Quét QR để xem nhật ký bản này. Có thể chia sẻ nhanh trên mạng xã hội."
					shareUrl="https://bibebe.co/d/18-05"
				/>
				<DailyCta
					kicker="Tiếp theo"
					title="Tạo nhật ký của bạn"
					description="Dùng Canva để tạo ảnh, QR sẽ tự động hiển thị ngay khi chia sẻ."
					href="/custom"
					actionLabel="Bắt đầu ngay"
				/>
			</main>
			<Footer />
		</div>
	);
}
