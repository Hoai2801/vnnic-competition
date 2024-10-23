import React, { useEffect, useState } from "react";
import avatar from "../../assets/doan.png";
import "./BlogDetailContent.css"
import { useParams } from "react-router-dom";
import CommentPost from "../../components/comments/CommentPost";
import Post from "../../components/models/Post";

const BlogDetailContent = () => {
  // const [blog, setBlog] = useState<Blog>({
  //   "id": 13,
  //   "title": "Hội nghị toàn quốc quán triệt, triển khai thực hiện Nghị quyết Trung ương 10, khóa XIII",
  //   "category": "Sự kiện",
  //   "content": "<figure class=\"image\"><img style=\"aspect-ratio:800/598;\" src=\"https://image.nhandan.vn/w800/Uploaded/2024/tmlwvopi/2024_10_20/784b7b76bedd07835ecc-6526.jpg.webp\" width=\"800\" height=\"598\"><figcaption>Tổng Bí thư, Chủ tịch nước Tô Lâm phát biểu chỉ đạo hội nghị. (Ảnh: TRẦN HẢI)</figcaption></figure><p>Tới dự điểm cầu Trung ương có <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://nhandan.vn/to-lam-tag15725.html\">Tổng Bí thư, Chủ tịch nước Tô Lâm</a>; Ủy viên Bộ Chính trị, Thủ tướng Chính phủ Phạm Minh Chính; Ủy viên Bộ Chính trị, Chủ tịch Quốc hội Trần Thanh Mẫn; nguyên Ủy viên Bộ Chính trị, nguyên Chủ tịch Quốc hội Nguyễn Thị Kim Ngân; Ủy viên Bộ Chính trị, Thường trực Ban Bí thư Lương Cường; các đồng chí Ủy viên Bộ Chính trị, Ủy viên Ban Bí thư, Ủy viên Ban Chấp hành Trung ương Đảng, Ủy viên dự khuyết Ban Chấp hành Trung ương Đảng; các đồng chí ủy viên Ban cán sự đảng Chính phủ, các đồng chí trong Đảng đoàn Quốc hội, Đảng đoàn Mặt trận Tổ quốc; ủy viên Ban Thường vụ các Đảng ủy trực thuộc Trung ương; lãnh đạo các bộ, ngành và đơn vị sự nghiệp Trung ương, các đồng chí Ban Bí thư Trung ương Đoàn TNCS Hồ Chí Minh... Các đồng chí Ủy viên Bộ Chính trị, Ủy viên Ban Chấp hành Trung ương Đảng, Ủy viên dự khuyết Ban Chấp hành Trung ương Đảng là lãnh đạo chủ chốt các tỉnh ủy, thành ủy, quân khu, quân chủng dự tại điểm cầu của địa phương, đơn vị mình.</p><figure class=\"image\"><img style=\"aspect-ratio:790/589;\" src=\"https://image.nhandan.vn/w790/Uploaded/2024/tmlwvopi/2024_10_20/499c584396e82fb676f9-4274.jpg.webp\" width=\"790\" height=\"589\"><figcaption><i>Thủ tướng Phạm Minh Chính, Ủy viên Bộ Chính trị, truyền đạt những nội dung mới trong Dự thảo Báo cáo đánh giá 5 năm thực hiện Chiến lược phát triển kinh tế-xã hội. (Ảnh: TRẦN HẢI)</i></figcaption></figure><p>Tại Hội nghị, đồng chí Nguyễn Xuân Thắng, Ủy viên Bộ Chính trị, Giám đốc Học viện Chính trị quốc gia Hồ Chí Minh, Chủ tịch Hội đồng Lý luận Trung ương truyền đạt “Những nội dung trọng tâm, cốt lõi, điểm mới trong Dự thảo Báo cáo Chính trị tại Đại hội XIV của Đảng và Dự thảo Báo cáo tổng kết một số vấn đề lý luận và thực tiễn về công tác đổi mới theo định hướng xã hội chủ nghĩa trong 40 năm qua ở Việt Nam”.</p><p>Đồng chí Phạm Minh Chính, Ủy viên Bộ Chính trị, Thủ tướng Chính phủ truyền đạt “Những nội dung trọng tâm, cốt lõi, điểm mới trong Dự thảo Báo cáo đánh giá 5 năm thực hiện Chiến lược phát triển kinh tế-xã hội 10 năm 2021-2030; phương hướng, nhiệm vụ phát triển kinh tế-xã hội 5 năm 2026-2030 và về tình hình kinh tế-xã hội, ngân sách nhà nước năm 2024, kế hoạch năm 2025; kế hoạch tài chính-ngân sách nhà nước 3 năm 2025-2027; về chủ trương đầu tư đường sắt tốc độ cao trên trục bắc-nam; về chủ trương thành lập thành phố Huế trực thuộc Trung ương”.</p><p>Đồng chí Lê Minh Hưng, Ủy viên Bộ Chính trị, Bí thư Trung ương Đảng, Trưởng Ban Tổ chức Trung ương truyền đạt “Những nội dung trọng tâm, cốt lõi, điểm mới trong Dự thảo Báo cáo tổng kết công tác xây dựng Đảng và thi hành Điều lệ Đảng nhiệm kỳ Đại hội XIII; một số nội dung cơ bản về sửa đổi Quy chế bầu cử trong Đảng; về tổng kết công tác nhân sự Đại hội XIII và xây dựng phương hướng công tác nhân sự Đại hội XIV của Đảng”.</p><figure class=\"image\"><img style=\"aspect-ratio:790/617;\" src=\"https://image.nhandan.vn/w790/Uploaded/2024/tmlwvopi/2024_10_20/7069ffd1647fdd21846e-5150.jpg.webp\" width=\"790\" height=\"617\"><figcaption><i>Đồng chí Nguyễn Xuân Thắng, Ủy viên Bộ Chính trị, Giám đốc Học viện Chính trị Quốc gia Hồ Chí Minh, Chủ tịch Hội đồng Lý luận Trung ương truyền đạt nội dung trọng tâm, cốt lõi, điểm mới trong Dự thảo Báo cáo Chính trị tại Đại hội XIV của Đảng. (Ảnh: TRẦN HẢI)</i></figcaption></figure><p>Phát biểu kết luận Hội nghị, Tổng Bí thư, Chủ tịch nước Tô Lâm nêu rõ, với những thành tựu vĩ đại sau gần 80 năm lập nước, với thế và lực đã tích lũy được, với thời cơ, vận hội mới, chúng ta đã hội tụ đủ điều kiện và đang đứng trước cơ hội lịch sử để đưa đất nước bước vào kỷ nguyên mới, kỷ nguyên vươn mình của dân tộc, kỷ nguyên phát triển, giàu mạnh, thực hiện thành công tâm nguyện của Chủ tịch Hồ Chí Minh và ước vọng của toàn dân tộc, xây dựng thành công nước Việt Nam dân giàu, nước mạnh, xã hội dân chủ, công bằng, văn minh, sánh vai với các cường quốc năm châu.</p><p>Để đạt được mục tiêu này, Hội nghị Trung ương 10 đã thống nhất quyết tâm chính trị, những đột phá chiến lược, phương hướng, giải pháp chiến lược với tư duy, nhận thức mới; đã thống nhất chủ trương đối với nhiều công việc hệ trọng để tăng tốc, bứt phá về đích thực hiện thắng lợi Nghị quyết Đại hội XIII của Đảng và chuẩn bị tốt nhất cho Đại hội đảng bộ các cấp tiến tới Đại hội XIV của Đảng.</p><p>Trên cơ sở thống nhất của Trung ương, Tổng Bí thư, Chủ tịch nước nhấn mạnh, việc đưa Nghị quyết của Đảng tới từng chi bộ, từng đảng viên, ngấm sâu và hòa vào thực tiễn cuộc sống đặt ra rất khẩn trương, cấp bách, đòi hỏi toàn Đảng, toàn dân, toàn quân ta phải tạo thành khối thống nhất về ý chí và hành động, đồng tâm hiệp lực, chung sức đồng lòng, nỗ lực cao với những bước đi bài bản, chính xác, tranh thủ tối đa thời cơ, thuận lợi, huy động cao nhất mọi nguồn lực thực hiện thắng lợi các chủ trương, phương hướng chiến lược mà Trung ương Đảng thống nhất hoạch định. Qua Hội nghị cũng nhằm trao đổi, thảo luận, tạo thống nhất cao về nhận thức, là tiền đề để thống nhất về hành động trong toàn hệ thống chính trị theo mục tiêu đã định.</p><figure class=\"image\"><img style=\"aspect-ratio:790/617;\" src=\"https://image.nhandan.vn/w790/Uploaded/2024/tmlwvopi/2024_10_20/9a3d521698bd21e378ac-1092.jpg.webp\" width=\"790\" height=\"617\"><figcaption><i>Đồng chí Lê Minh Hưng, Ủy viên Bộ Chính trị, Bí thư Trung ương Đảng, Trưởng Ban Tổ chức Trung ương thông tin về Dự thảo Báo cáo tổng kết công tác xây dựng Đảng và thi hành Điều lệ Đảng nhiệm kỳ Đại hội XIII. (Ảnh: TRẦN HẢI)</i></figcaption></figure><p>Về một số nội dung trọng tâm tập trung quán triệt, triển khai, Tổng Bí thư, Chủ tịch nước chỉ rõ, thống nhất nhận thức trong toàn Đảng về quyết tâm chính trị thực hiện thắng lợi Nghị quyết Đại hội XIII của Đảng, hoàn thành mọi mục tiêu, chỉ tiêu đã đề ra. Đây là yêu cầu của Trung ương, là chỉ tiêu pháp lệnh, cần nỗ lực cao nhất, tập trung mọi biện pháp, nguồn lực để thực hiện cho được. Cấp ủy, tổ chức đảng, đảng viên, nhất là người đứng đầu phải gương mẫu, đi đầu và chịu trách nhiệm thực hiện. Mỗi cấp ủy, tổ chức cơ sở đảng phải khẩn trương rà soát các mục tiêu, chỉ tiêu đã đề ra trong Nghị quyết đại hội đảng bộ các cấp nhiệm kỳ 2020-2025, nhất là các chỉ tiêu về phát triển kinh tế, văn hóa, xã hội, môi trường, xây dựng con người xã hội chủ nghĩa để tập trung hoàn thành sớm nhất với chất lượng cao nhất. Chính phủ, người đứng đầu các ban, bộ, ngành, địa phương phải thực sự quyết tâm, quyết làm, có các giải pháp quyết liệt, dứt điểm, tăng tốc để thực hiện thành công nhiệm vụ phát triển kinh tế-xã hội năm 2025 được Trung ương thông qua; đạt cho được các chỉ tiêu, nhất là chỉ tiêu tăng trưởng GDP.</p><p>Tổng Bí thư, Chủ tịch nước Tô Lâm yêu cầu, tập trung triển khai ngay một số đột phá chiến lược đã được Trung ương thống nhất đưa vào Dự thảo Văn kiện Đại hội XIV. Đối với đột phá về thể chế phát triển, tháo gỡ điểm nghẽn, rào cản, ngay sau Hội nghị Trung ương 10 khóa XIII, Quốc hội, Chính phủ đã gương mẫu, đi đầu, làm ngay, làm rất quyết liệt với tinh thần đổi mới, cải cách, hết lòng vì sự nghiệp chung. Thủ tướng Chính phủ, Chủ tịch Quốc hội đã chủ trì nhiều phiên họp rà soát nội dung các luật trình Quốc hội xem xét cho ý kiến, thông qua tại kỳ họp thứ 8, Quốc hội khóa XV. Trong đề xuất sửa đổi các quy định pháp luật, đã cải cách thủ tục hành chính triệt để, phân cấp, phân quyền tối đa theo tinh thần Trung ương 10 đã thống nhất “địa phương quyết, địa phương làm, địa phương chịu trách nhiệm”.</p><figure class=\"table\"><table class=\"picture\"><tbody><tr><td class=\"pic\"><figure class=\"image\"><img class=\"cms-photo lazyloaded\" style=\"aspect-ratio:790/505;\" src=\"https://image.nhandan.vn/w790/Uploaded/2024/tmlwvopi/2024_10_20/48244162d3cc6a9233dd-3362.jpg.webp\" alt=\"Hội nghị toàn quốc quán triệt, triển khai thực hiện Nghị quyết Trung ương 10, khóa XIII ảnh 4\" data-image-id=\"441323\" data-width=\"1280\" data-height=\"818\" data-photo-original-src=\"\" cms-photo-caption=\"Đại biểu tham dự hội nghị. (Ảnh: TRẦN HẢI)\" data-src=\"https://image.nhandan.vn/w790/Uploaded/2024/tmlwvopi/2024_10_20/48244162d3cc6a9233dd-3362.jpg.webp\" width=\"790\" height=\"505\"><figcaption><i>Đại biểu tham dự hội nghị. (Ảnh: TRẦN HẢI)</i></figcaption></figure></td></tr></tbody></table></figure><p>Tổng Bí thư, Chủ tịch nước Tô Lâm đề nghị, phải lan tỏa mạnh mẽ trong toàn hệ thống chính trị; yêu cầu các bộ, ngành, cấp ủy, chính quyền các cấp trong phạm vi chức năng, nhiệm vụ phải tập trung rà soát, sửa đổi, bổ sung các quy định, quy chế, quy trình với tinh thần tháo gỡ triệt để điểm nghẽn, rào cản, cải cách triệt để thủ tục hành chính, mở rộng không gian cho phát triển, lấy người dân, doanh nghiệp làm trung tâm, tất cả vì sự phát triển kinh tế-xã hội, bảo đảm quốc phòng, an ninh của đất nước, không ngừng nâng cao đời sống của nhân dân. Cùng với các giải pháp cụ thể phù hợp thực tiễn để huy động, khơi thông mọi nguồn lực bên trong, bên ngoài, nguồn lực trong dân. Các địa phương đánh giá thấu đáo khả năng tự chủ, tự cường để đề xuất cụ thể việc phân cấp, phân quyền, bảo đảm đáp ứng cao nhất yêu cầu của thực tiễn phát triển.</p><p>Ngay sau Hội nghị này, cấp ủy các cấp có kế hoạch cụ thể, tập trung lãnh đạo thực hiện. Việc đánh giá cụ thể kết quả thực hiện của cả hệ thống chính trị với sản phẩm đo đếm được sẽ là một trong những nội dung của kỳ họp Trung ương tiếp theo. Bộ Chính trị sẽ sớm nghiên cứu, ban hành Nghị quyết về chuyển đổi số quốc gia. Các bộ, ngành, địa phương ưu tiên nguồn lực, trí lực, chuẩn bị nhân lực, tập trung thực hiện nhiệm vụ chuyển đổi số, phát triển khoa học và công nghệ đồng bộ, thông suốt; tập trung hoàn thành mục tiêu xây dựng kết cấu hạ tầng kinh tế-xã hội, trước mắt là hạ tầng chiến lược về giao thông, hạ tầng năng lượng, hạ tầng số; sơ kết đánh giá việc thực hiện Nghị quyết số 18 Hội nghị lần thứ sáu Ban Chấp hành Trung ương khóa XII “một số vấn đề về tiếp tục đổi mới, sắp xếp tổ chức bộ máy của hệ thống chính trị tinh gọn, hoạt động hiệu lực, hiệu quả” trong toàn hệ thống chính trị trình Hội nghị Trung ương 11 khóa XIII...</p><figure class=\"image\"><img style=\"aspect-ratio:790/513;\" src=\"https://image.nhandan.vn/w790/Uploaded/2024/tmlwvopi/2024_10_20/f5903f09aca715f94cb6-4373.jpg.webp\" width=\"790\" height=\"513\"><figcaption><i>Quang cảnh hội nghị. (Ảnh: TRẦN HẢI)</i></figcaption></figure><p>Về các công việc chuẩn bị đại hội đảng bộ các cấp tiến tới Đại hội lần thứ XIV của Đảng, Tổng Bí thư, Chủ tịch nước nhấn mạnh, tập trung xây dựng, bảo đảm chất lượng dự thảo văn kiện đại hội đảng bộ các cấp và dự thảo văn kiện đại hội XIV của Đảng. Mỗi địa phương cần cụ thể hóa, xác định rõ định hướng, giải pháp xây dựng mô hình xã hội chủ nghĩa gắn với con người xã hội chủ nghĩa ở từng địa phương, Hải Phòng, Đà Nẵng đi đầu thực hiện, tạo cơ sở rút kinh nghiệm, nhân rộng trong cả nước. Cụ thể phương hướng phát triển lực lượng sản xuất mới của từng ngành, từng địa phương, trọng tâm là nguồn nhân lực chất lượng cao và dữ liệu-tư liệu sản xuất mới, hạ tầng giao thông, chuyển đổi xanh. Làm rõ nguồn lực, giải pháp, trách nhiệm hoàn thành xây dựng lực lượng vũ trang cách mạng, chính quy, tinh nhuệ, hiện đại; xác định cụ thể mục tiêu, nhiệm vụ đối ngoại, nhất là đối ngoại Đảng, đối ngoại nhân dân, xây dựng nền tảng ý dân, lòng dân vững chắc. Xác định những mục tiêu, chỉ tiêu cụ thể thể hiện rõ khả năng tự lực, tự cường, chủ động, sáng tạo của từng địa phương trên cơ sở thực tiễn.</p><p>Cấp ủy các cấp có kế hoạch cụ thể, tập trung nghiên cứu để thảo luận, đóng góp ý kiến xây dựng Dự thảo Văn kiện Đại hội XIV của Đảng. Trọng tâm là: Vấn đề quản trị quốc gia và quản trị địa phương; tính cấp bách, nội hàm quản trị địa phương để nâng cao năng lực tự lực, tự cường. Mối quan hệ giữa tư duy quản lý và tư duy phát triển từ thực tiễn công tác bộ, ngành, địa phương. Cách thức thực hiện các chương trình mục tiêu quốc gia để bảo đảm hiệu quả, chống lãng phí. Đổi mới tư duy, quan điểm, quy trình xây dựng Luật, cơ quan làm luật. Vấn đề đúng vai, thuộc bài trong thực hiện “Đảng lãnh đạo, Nhà nước quản lý, Nhân dân làm chủ”; chính sách an sinh xã hội đi đôi với phát triển xã hội.</p><p>Đại hội đảng bộ các cấp tập trung chuẩn bị tốt nhất nhân sự, chú trọng đào tạo, bồi dưỡng, thử thách đối với các đồng chí là nhân sự được quy hoạch tham gia cấp ủy, ban thường vụ cấp ủy các cấp, bảo đảm lựa chọn ra được cấp ủy, nhất là người đứng đầu có năng lực lãnh đạo, có sức chiến đấu cao, dám nghĩ, dám làm, dám chịu trách nhiệm, dám đổi mới sáng tạo vì sự nghiệp chung, có năng lực lãnh đạo thực hiện thắng lợi các chủ trương của Đảng, đưa nghị quyết của Đảng vào thực tiễn cuộc sống trên từng lĩnh vực, địa bàn.</p><figure class=\"image\"><img style=\"aspect-ratio:790/602;\" src=\"https://image.nhandan.vn/w790/Uploaded/2024/tmlwvopi/2024_10_20/dcd2451393b82ae673a9-1431.jpg.webp\" width=\"790\" height=\"602\"><figcaption><i>Đồng chí Nguyễn Trọng Nghĩa, Ủy viên Bộ Chính trị, Bí thư Trung ương Đảng, Trưởng Ban Tuyên giáo Trung ương phát biểu tổng kết hội nghị. (Ảnh: TRẦN HẢI)</i></figcaption></figure><p>Tổng Bí thư, Chủ tịch nước Tô Lâm lưu ý, Nghị quyết đã đúng, trúng thì tổ chức thực hiện là khâu đặc biệt quan trọng, có ý nghĩa then chốt đưa Nghị quyết vào cuộc sống, biến chủ trương của Đảng thành hành động cách mạng, tạo ra của cải vật chất, sản phẩm tinh thần, đưa đất nước phát triển mạnh mẽ, vượt bậc. Qua triển khai Nghị quyết trong cuộc sống để phát hiện, bổ sung, ngày càng hoàn thiện bước đi, tìm ra con đường ngắn nhất đưa đất nước bước vào kỷ nguyên mới, kỷ nguyên vươn mình của dân tộc, sớm xây dựng thành công chủ nghĩa xã hội, sánh vai với các cường quốc năm châu. Bên cạnh đó, người đứng đầu có vai trò đặc biệt quan trọng trong lãnh đạo, quản lý toàn diện các hoạt động của các cơ quan, đơn vị, địa phương. Công việc trước mắt rất bộn bề, khẩn trương, thời gian từ nay đến hết nhiệm kỳ đại hội XIII của Đảng không còn nhiều, còn nhiều mục tiêu phải phấn đấu về đích, trong khi chuẩn bị các công việc cho Đại hội XIV là rất hệ trọng.</p><p>Tổng Bí thư, Chủ tịch nước Tô Lâm tin tưởng, sau Hội nghị, với những tư duy, nhận thức mới đã thấu suốt, với khí thế, quyết tâm cao, thống nhất về tư tưởng và hành động, sẽ khơi thông mọi nguồn lực, huy động cao nhất sức người, sức của, tiếp tục tạo dựng những nền tảng mới cho sự phát triển đột phá của đất nước trong những năm tiếp theo.</p><p>Nguồn: https://nhandan.vn/hoi-nghi-toan-quoc-quan-triet-trien-khai-thuc-hien-nghi-quyet-trung-uong-10-khoa-xiii-post837671.html</p><p>&nbsp;</p>",
  //   "excerpt": "Ngày 20/10, tại Thủ đô Hà Nội, Bộ Chính trị, Ban Bí thư Trung ương Đảng tổ chức Hội nghị toàn quốc quán triệt, triển khai thực hiện Nghị quyết Hội nghị lần thứ mười Ban Chấp hành Trung ương Đảng khóa XIII. Hội nghị được tổ chức bằng hình thức trực tiếp, kết hợp trực tuyến với điểm cầu Trung ương; điểm cầu các đảng ủy trực thuộc Trung ương; điểm cầu các cơ quan tham mưu, giúp việc của Đảng ở Trung ương, Ban cán sự đảng các bộ, ngành, đơn vị, Đảng đoàn Mặt trận Tổ quốc Việt Nam, các tổ chức chính trị-xã hội; điểm cầu các tỉnh ủy, thành ủy trực thuộc Trung ương…",
  //   "slug": "hoi-nghi-toan-quoc-quan-triet-trien-khai-thuc-hien-nghi-quyet-trung-uong-10-khoa-xiii-1729418803565",
  //   "date": "2024-10-20",
  //   "coverImage": "1729418803561_Screenshot from 2024-10-17 13-53-21.png"
  // });

  const [blog, setBlog] = useState<Post>();
  const slug = useParams()?.slug;

  useEffect(() => {
    fetch("http://localhost:8080/blog/" + slug)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      });
  })

  return (
    <>
      <div className="mx-auto max-w-5xl space-y-12 px-2 py-4">
        <article className="space-y-8 dark:text-gray-900">
          <div className="space-y-6">
            <h1 className="text-2xl font-bold dark:text-yellow-500 sm:text-4xl md:text-5xl md:tracking-tight">
              {blog?.title}
            </h1>
            <div className="flex w-full flex-col items-start justify-between dark:text-gray-500 md:flex-row md:items-center">
              <div className="flex items-center md:space-x-2">
                <img
                  src={avatar}
                  alt=""
                  className="h-4 w-4 rounded-full border dark:border-gray-300 dark:bg-gray-500"
                />
                <p className="text-sm">Admin • {blog?.date}</p>
              </div>
              <p className="mt-3 flex-shrink-0 text-sm md:mt-0">
                4 min read • 1,570 views
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 dark:text-gray-800">
            <h3 className={`text-xl font-semibold text-justify dark:text-white sm:text-xl`} >
              {blog?.excerpt }
            </h3>
            <div
              className={`text-justify text-lg dark:text-white`}
              dangerouslySetInnerHTML={{ __html: blog?.content }}
            ></div>
          </div>
        </article>
        <CommentPost />
      </div>
    </>
  );
};

export default BlogDetailContent;
