import { useState } from "react";
import avatar from "../../assets/doan.png";

interface Blog {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  slug: string;
  date: string;
  coverImage: string;
  content: string;
}
const BlogDetailContent = () => {
  const [blog, setBlog] = useState<Blog>(
    {
      id: 0,
      title: "Sinh viên Đại học Đông Á – Đảng viên trẻ tích cực với các hoạt động xã hội",
      category: "Hoạt động sinh viên",
      excerpt: "ĐNO – Không chỉ là một đảng viên trẻ gương mẫu, sáng tạo góp phần quan trọng vào sự phát triển của tổ chức cơ sở đảng, anh Lê Đức Cường còn là một thanh niên năng nổ, nhiệt huyết, sáng tạo với nhiều hoạt động, phong trào thiết thực, bổ ích, thu hút đông đảo đoàn viên, thanh niên tham gia.",
      slug: "abc-xyz",
      date: "01/01/2023",
      coverImage: "https://tuoitredaihocdonga.org.vn/wp-content/uploads/2024/10/images1751513_anh_1_copy.jpg",
      content: "\n" +
        "<p class=\"Normal\">Hai tháng rưỡi kể từ khi Tổng thống Joe Biden tuyên bố kết thúc nỗ lực tái tranh cử, Phó tổng thống Kamala Harris đã nhanh chóng giành được đề cử từ đảng Dân chủ, thu về hàng trăm triệu USD tiền quyên góp cho chiến dịch mới và thu hẹp đáng kể cách biệt với đối thủ đảng Cộng hòa Donald Trump trong các cuộc thăm dò dư luận.</p><p class=\"Normal\">Tuy nhiên, đảng Dân chủ vẫn không khỏi lo lắng về cơ hội chiến thắng của bà trước đối thủ Donald Trump. Nhiều người sợ rằng chiến dịch tranh cử của Phó tổng thống đang sa lầy, khi các cố vấn, trợ lý của bà Harris liên tục tranh luận về việc nên triển khai các nguồn lực quý giá vào đâu và như thế nào.</p>\n" +
        "<figure data-size=\"true\" itemprop=\"associatedMedia image\" itemscope=\"\" itemtype=\"http://schema.org/ImageObject\" class=\"tplCaption action_thumb_added\">\n" +
        "            <div class=\"action_thumb flexbox\" style=\"transform-origin: 0px 0px;opacity: 1;transform: scale(1, 1);display: none;z-index:9;\">\n" +
        "                \n" +
        "                <a href=\"javascript:;\" class=\"share_photo\" data-type=\"tw\" data-reference-id=\"6\"><svg class=\"ic ic-twitte\"><use xlink:href=\"#Twitter\"></use></svg></a>\n" +
        "                <a href=\"javascript:;\" class=\"vne_zoom\" style=\"transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);\"><svg class=\"ic ic-zoom\"><use xlink:href=\"#Zoom\"></use></svg></a>\n" +
        "            </div>\n" +
        "<meta itemprop=\"url\" content=\"https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20241007-36JK4V4-v3-HighRe-4183-3271-1728552839.jpg?w=0&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=UP53D0amtshP1H20jkeluQ\">\n" +
        "<meta itemprop=\"width\" content=\"2400\">\n" +
        "<meta itemprop=\"height\" content=\"1600\">\n" +
        "<meta itemprop=\"href\" content=\"\">\n" +
        "<div class=\"fig-picture\" style=\"padding-bottom: 66.666666666667%;position: relative;\" data-src=\"https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20241007-36JK4V4-v3-HighRe-4183-3271-1728552839.jpg?w=0&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=UP53D0amtshP1H20jkeluQ\" data-sub-html=\"<div class=&quot;ss-wrapper&quot;><div class=&quot;ss-content&quot;>\n" +
        "<p class=&quot;Image&quot;>Phó tổng thống Kamala Harris tại căn cứ quân sự Andrews, bang Maryland, hôm 7/10, trước khi lên may bay tới New York. Ảnh: AFP</p>\n" +
        "</div></div>\"><picture>\n" +
        "<!--[if IE 9]><video style=\"display: none;\"><![endif]-->\n" +
        "<source data-srcset=\"https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20241007-36JK4V4-v3-HighRe-4183-3271-1728552839.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=t1mbKLSQ-3rhZr-0qg6b1w 1x, https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20241007-36JK4V4-v3-HighRe-4183-3271-1728552839.jpg?w=1020&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=mbq9AAuvFCArxmhnePZvFA 1.5x, https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20241007-36JK4V4-v3-HighRe-4183-3271-1728552839.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=R8n4cQxNvt97Z23wmdodvg 2x\" srcset=\"https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20241007-36JK4V4-v3-HighRe-4183-3271-1728552839.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=t1mbKLSQ-3rhZr-0qg6b1w 1x, https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20241007-36JK4V4-v3-HighRe-4183-3271-1728552839.jpg?w=1020&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=mbq9AAuvFCArxmhnePZvFA 1.5x, https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20241007-36JK4V4-v3-HighRe-4183-3271-1728552839.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=R8n4cQxNvt97Z23wmdodvg 2x\">\n" +
        "<!--[if IE 9]></video><![endif]-->\n" +
        "<img itemprop=\"contentUrl\" style=\"position: absolute;width:100%;left:0;\" loading=\"lazy\" intrinsicsize=\"680x0\" alt=\"Phó tổng thống Kamala Harris tại căn cứ quân sự Andrews, bang Maryland, hôm 7/10, trước khi lên may bay tới New York. Ảnh: AFP\" class=\"lazy lazied\" src=\"https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20241007-36JK4V4-v3-HighRe-4183-3271-1728552839.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=t1mbKLSQ-3rhZr-0qg6b1w\" data-src=\"https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20241007-36JK4V4-v3-HighRe-4183-3271-1728552839.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=t1mbKLSQ-3rhZr-0qg6b1w\" data-ll-status=\"loaded\">\n" +
        "</picture></div>\n" +
        "<figcaption itemprop=\"description\">\n" +
        "<p class=\"Image\">Phó tổng thống Kamala Harris tại căn cứ quân sự Andrews, bang Maryland, hôm 7/10, trước khi lên may bay tới New York. Ảnh: AFP</p>\n" +
        "</figcaption>\n" +
        "</figure><p class=\"Normal\">Một số dấu hiệu đáng lo ngại với bà Harris trong các cuộc thăm dò đã xuất hiện. Khảo sát gần đây của <em>The Breakthrough</em>, dự án thăm dò chuyên theo dõi cách công chúng tiếp nhận tin tức bầu cử, cho thấy sau thời kỳ \"trăng mật\", sự chú ý của dư luận với bà Harris gần đây đã giảm.</p><p class=\"Normal\">64% người được hỏi cho biết họ thấy, đọc hoặc nghe thông tin về bà Harris, còn tỷ lệ của ông Trump là 68%. Đây là tuần thứ 4 liên tiếp ông Trump dẫn trước bà Harris ở hạng mục này.</p><p class=\"Normal\">Làm phức tạp thêm nỗ lực tập hợp ủng hộ từ cử tri là việc đảng Dân chủ hiện vẫn chưa xác định rõ chiến thuật nên sử dụng ở một số khu vực bầu cử. Nhiều người muốn giành ủng hộ từ những người ôn hòa thuộc đảng Cộng hòa đã quay lưng với cựu tổng thống Donald Trump. Số khác muốn tập trung thu phục các cử tri nam giới và da màu, nhóm nhân khẩu học đang đặt ra mối lo âu lớn với các quan chức chiến dịch của Harris.</p><p class=\"Normal\">Phụ nữ ngoại ô là nhóm nhân khẩu học quan trọng đã chuyển sang ủng hộ đảng Dân chủ sau 4 năm Trump điều hành đất nước, nhưng vẫn chưa rõ liệu nhóm này có đủ để đối trọng với lợi thế của cựu tổng thống trong nhóm cử tri nam hay không.</p><p class=\"Normal\">Những người khác bày tỏ không yên tâm với nhóm cử tri Mỹ gốc Latin, đồng thời lo lắng về những người Mỹ gốc Arab và các cử tri trẻ tuổi đang tức giận trước chính sách của chính quyền Tổng thống Joe Biden với Israel, Gaza hay cuộc xung đột có nguy cơ lan rộng ở Lebanon.</p><p class=\"Normal\">Nỗi lo lắng còn bắt nguồn từ mức độ sít sao của cuộc đua. Hiện tại, tỷ lệ ủng hộ hai ứng viên tại 7 bang chiến trường nhìn chung vẫn ngang bằng.</p><p class=\"Normal\">Để đắc cử, bà Harris sẽ phải thắng ở ba bang chiến trường Pennsylvania, Michigan và Wisconsin, với tổng cộng 44 phiếu đại cử tri, cùng tất cả những bang ủng hộ đảng Dân chủ đã bầu cho ông Biden năm 2020. Trong kịch bản này, bà Harris sẽ hội đủ 270 phiếu đại cử tri cần thiết để thắng cử.</p><p class=\"Normal\">Nhưng các cuộc thăm dò mới công bố hôm 9/10 khả năng sẽ càng làm phe Dân chủ thêm phần lo âu. Theo ba cuộc khảo sát mới từ Đại học Quinnipiac, bà Harris đang ngang bằng ông Trump ở ba bang chiến trường Pennsylvania, Michigan và Wisconsin.</p><p class=\"Normal\">Kể từ tháng trước, lợi thế cách biệt 6 điểm của Harris ở Pennsylvania đã giảm xuống còn 3 điểm khi ứng viên của đảng thứ ba được đưa vào khảo sát. Thậm chí khảo sát được công bố hôm 8/10 của <em>InsiderAdvantage</em>, một trong những đơn vị khảo sát hàng đầu về bầu cử tổng thống ở Mỹ, cho thấy Trump giành được 49% tỷ lệ ủng hộ và bà Harris giành được 47% ở Pennsylvania.</p><p class=\"Normal\">Tại Michigan, lợi thế 5 điểm của Harris cũng bị xóa bỏ, hai ứng viên giờ đây ganh đua quyết liệt. Cuộc đua ở Wisconsin cam go không kém, khi Trump nhận được ủng hộ từ 48% cử tri tiềm năng so với 46% của Harris.</p><p class=\"Normal\">Các cố vấn chiến dịch của Harris vẫn chưa trả lời được câu hỏi bằng cách nào họ có thể thắng cả ba bang chiến trường quan trọng này. \"Tất cả đều là những cánh cửa hẹp\", một quan chức cấp cao đảng Dân chủ quen thuộc với chiến dịch tranh cử của bà Harris cho hay.</p><p class=\"Normal\">Ở hậu trường, các quan chức chiến dịch tranh cử của Harris đang vạch ra chiến lược để gia tăng khoảng cách với Trump và không lặp lại những sai lầm trong quá khứ, phân tích những điểm mà ứng viên tổng thống đảng Dân chủ Hillary Clinton từng không làm được trước Trump vào năm 2016, đồng thời nghiên cứu những gì phát huy hiệu quả trong chiến dịch tranh cử của Tổng thống Biden 4 năm sau đó.</p><p class=\"Normal\">Điều này đồng nghĩa họ có xu hướng tập trung nhiều hơn vào các khu vực vốn nghiêng về phe Cộng hòa và vùng nông thôn đã bỏ phiếu cho Trump vào năm 2020, với hy vọng làm suy yếu lợi thế của đối phương và giảm áp lực lên các thành trì tự do, hầu hết là ở những thành phố lớn.</p><p class=\"Normal\">Hạt Cambria ở Pennsylvania là một trong những khu vực họ đang nhắm đến. Năm 2020, Tổng thống Biden đã làm tốt hơn so với bà Clinton năm 2016 tại Cambria, nhưng vẫn để thua ông Trump ở hạt này với cách biệt hai chữ số.</p><p class=\"Normal\">Tháng trước, Harris đã quay lại Cambria để cố gắng thuyết phục cử tri rời bỏ Trump.</p><p class=\"Normal\">\"Hết cuộc bầu cử này tới cuộc bầu cử khác, chúng tôi đã quá ám ảnh với những phân tích và dữ liệu nhằm đạt được hiệu quả cao nhất, để rồi sau đó, chúng tôi cứ tiếp tục lặp đi lặp lại điều này và cuối cùng dẫn tới việc chỉ tập trung vào một bộ phận cử tri ngày càng thu hẹp\", Dan Kanninen, giám đốc phụ trách các bang chiến trường của chiến dịch Harris, nói. \"Điều đó thực sự đã gây tổn hại cho chúng tôi\".</p><p class=\"Normal\">\"Nhưng tôi nghĩ chúng tôi đã nhận ra rằng với tư cách một đảng nói chung và chiến dịch tranh cử nói riêng, việc bạn phải xuất hiện trước cử tri là điều cơ bản cần làm trong chính trị\", ông cho biết thêm.</p><p class=\"Normal\">Harris cũng đã quyết liệt bác bỏ những lời chỉ trích cho rằng bà quá tự tin, liên tục mô tả bản thân là \"bên yếu thế\". \"Tôi đã vận động tranh cử như một kẻ yếu thế vì tôi thực sự là bên yếu hơn trong cuộc đua này\", bà nói với các nhà tài trợ hồi cuối tháng 9.</p><p class=\"Normal\">Mối lo lắng của đảng Dân chủ khi quản lý một liên minh mong manh và đối mặt với tỷ lệ thăm dò sít sao dường như đã trở thành điều quen thuộc trong các mùa bầu cử gần đây.</p><p class=\"Normal\">Các ứng viên đảng Dân chủ đã thua hai cuộc bầu cử tổng thống có kết quả sít sao nhất trong 25 năm qua, nơi họ giành được đa số phiếu phổ thông nhưng lại không hội đủ phiếu đại cử tri. Chiến thắng của Trump hồi năm 2016 trước Clinton dù ông bị đánh giá thấp hơn đã giáng đòn mạnh vào đảng Dân chủ, tạo ra nỗi lo sợ kéo dài mà đảng này đến nay vẫn chưa thể thoát khỏi, giới quan sát đánh giá.</p><p class=\"Normal\">Theo Patrick Murray, giám đốc Viện Thăm dò Ý kiến của Đại học Monmouth, niềm phấn khích đột ngột trong đảng Dân chủ khi Harris tiếp quản tấm vé tranh cử tổng thống đã đưa cuộc đua trở lại mức cân bằng. Cảm giác u ám và bi quan trước đó nhường chỗ cho hy vọng trong \"tuần trăng mật\" của một chiến dịch tranh cử mới.</p><p class=\"Normal\">Nhưng khi thời gian ngọt ngào đó đi qua, thực tế khắc nghiệt của một cuộc đối đầu căng thẳng được phơi bày, các đảng viên Dân chủ từng rất lạc quan giờ đây cảm thấy lo lắng hơn bao giờ hết.</p>\n" +
        "<figure data-size=\"true\" itemprop=\"associatedMedia image\" itemscope=\"\" itemtype=\"http://schema.org/ImageObject\" class=\"tplCaption action_thumb_added\">\n" +
        "            <div class=\"action_thumb flexbox\" style=\"transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1); z-index: 9; display: none;\">\n" +
        "                \n" +
        "                <a href=\"javascript:;\" class=\"share_photo\" data-type=\"tw\" data-reference-id=\"6\"><svg class=\"ic ic-twitte\"><use xlink:href=\"#Twitter\"></use></svg></a>\n" +
        "                <a href=\"javascript:;\" class=\"vne_zoom\" style=\"transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);\"><svg class=\"ic ic-zoom\"><use xlink:href=\"#Zoom\"></use></svg></a>\n" +
        "            </div>\n" +
        "<meta itemprop=\"url\" content=\"https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20240911-36G23PK-v2-HighRe-8748-1286-1728552839.jpg?w=0&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=cnkspn0Xrza5fRtZs1rz1A\">\n" +
        "<meta itemprop=\"width\" content=\"2400\">\n" +
        "<meta itemprop=\"height\" content=\"1600\">\n" +
        "<meta itemprop=\"href\" content=\"\">\n" +
        "<div class=\"fig-picture\" style=\"padding-bottom: 66.666666666667%;position: relative;\" data-src=\"https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20240911-36G23PK-v2-HighRe-8748-1286-1728552839.jpg?w=0&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=cnkspn0Xrza5fRtZs1rz1A\" data-sub-html=\"<div class=&quot;ss-wrapper&quot;><div class=&quot;ss-content&quot;>\n" +
        "<p class=&quot;Image&quot;>Phó tổng thống Harris trong cuộc tranh luận tối 10/9 với đối thủ đảng Cộng hòa Donald Trump. Ảnh: <em>AFP</em></p>\n" +
        "</div></div>\"><picture>\n" +
        "<!--[if IE 9]><video style=\"display: none;\"><![endif]-->\n" +
        "<source data-srcset=\"https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20240911-36G23PK-v2-HighRe-8748-1286-1728552839.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=LXsV6cOrQlspt2yPZVgTBA 1x, https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20240911-36G23PK-v2-HighRe-8748-1286-1728552839.jpg?w=1020&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=NRmZRdvDElEKOXzWpC1x6w 1.5x, https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20240911-36G23PK-v2-HighRe-8748-1286-1728552839.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=DcxTTL95SZDHHsrOopwrjA 2x\" srcset=\"https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20240911-36G23PK-v2-HighRe-8748-1286-1728552839.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=LXsV6cOrQlspt2yPZVgTBA 1x, https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20240911-36G23PK-v2-HighRe-8748-1286-1728552839.jpg?w=1020&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=NRmZRdvDElEKOXzWpC1x6w 1.5x, https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20240911-36G23PK-v2-HighRe-8748-1286-1728552839.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=DcxTTL95SZDHHsrOopwrjA 2x\">\n" +
        "<!--[if IE 9]></video><![endif]-->\n" +
        "<img itemprop=\"contentUrl\" style=\"position: absolute;width:100%;left:0;\" loading=\"lazy\" intrinsicsize=\"680x0\" alt=\"Phó tổng thống Harris trong cuộc tranh luận tối 10/9 với đối thủ đảng Cộng hòa Donald Trump. Ảnh: AFP\" class=\"lazy lazied\" src=\"https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20240911-36G23PK-v2-HighRe-8748-1286-1728552839.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=LXsV6cOrQlspt2yPZVgTBA\" data-src=\"https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20240911-36G23PK-v2-HighRe-8748-1286-1728552839.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=LXsV6cOrQlspt2yPZVgTBA\" data-ll-status=\"loaded\">\n" +
        "</picture></div>\n" +
        "<figcaption itemprop=\"description\">\n" +
        "<p class=\"Image\">Phó tổng thống Harris trong cuộc tranh luận tối 10/9 với đối thủ đảng Cộng hòa Donald Trump. Ảnh: <em>AFP</em></p>\n" +
        "</figcaption>\n" +
        "</figure><p class=\"Normal\">Murray cho biết thông thường, sau những gì đã thể hiện tại cuộc tranh luận tổng thống hồi tháng 9, bà Harris lẽ ra có thể nới rộng khoảng cách thăm dò trước ông Trump ít nhất 5 điểm phần trăm. \"Nhưng khác biệt thực tế chỉ là một điểm nhỏ nhoi\", chuyên gia này nói.</p><p class=\"Normal\">Trước khi giành tấm vé tranh cử, Harris đã dành nhiều tháng để củng cố nền tảng ủng hộ của nhóm cử tri là đàn ông da màu đối với Tổng thống Biden. Tuy nhiên, một số cố vấn của chiến dịch nói rằng họ vẫn còn nhiều việc phải làm.</p><p class=\"Normal\">Theo một nguồn tin quen thuộc với chiến dịch tranh cử của Harris, điều đảng Dân chủ lo ngại nằm ở số lượng cử tri không đi bầu trong nhóm trên, vốn là những người nhiều khả năng sẽ bỏ phiếu cho Phó tổng thống.</p><p class=\"Normal\">\"Đây vẫn là một cuộc đua gay cấn và không ai trong chúng tôi muốn trải nghiệm lại những gì đã đối mặt vào năm 2016\", người này nói. \"Chúng tôi cần đảm bảo cử tri là đàn ông da đen, đàn ông gốc Tây Ban Nha không từ chối đi bầu. Bởi nếu họ không bỏ phiếu, điều đó cũng tương đương một lá phiếu cho Trump\".</p><p class=\"Normal\">Để nhanh chóng xây dựng lại liên minh đa chủng tộc từng bỏ phiếu cho Tổng thống Biden vào năm 2020, chiến dịch của bà Harris và các đồng minh đang tăng cường tương tác với cử tri da đen. Đây là nhóm mà tỷ lệ ủng hộ ông Biden đã giảm sút đến mức bà Harris hiện vẫn phải vật lộn tìm cách để đưa lợi thế trở lại như 4 năm trước.</p><p class=\"Normal\">Hôm 8/10, Collective PAC, ủy ban hành động chính trị lớn nhất nước dành riêng cho việc hỗ trợ các ứng viên da đen, đã giúp triển khai một chiến dịch mới mang tên \"Bỏ phiếu để sống\", cam kết chi 4 triệu USD để \"huy động cộng đồng da đen\" ủng hộ Phó tổng thống.</p><p class=\"Normal\">Song một nhà hoạt động đảng Dân chủ ở Georgia than thở rằng các nhóm ủng hộ Harris bên ngoài bang này đang chi quá nhiều tiền cho truyền hình và quảng cáo, trong khi kết quả từ các cuộc tiếp xúc trực tiếp với cử tri lại đặc biệt đáng lo ngại.</p><p class=\"Normal\">\"Khi cử tri da đen bị ngập trong thư và quảng cáo phản đối Harris, những cuộc gặp trực tiếp càng trở nên quan trọng hơn\", người này nói.</p><p class=\"Normal\">Trong bối cảnh phe cánh hữu đang điều hướng những thông tin sai lệch về người nhập cư nhắm vào các cộng đồng ít thông tin, nhà hoạt động của đảng Dân chủ tại Georgia khẳng định yêu cầu tiếp xúc trực tiếp cử tri càng trở nên cấp bách hơn bao giờ hết.</p><p class=\"Normal\">\"Đó là những cuộc trò chuyện đòi hỏi một mức độ tinh tế nhất định và không đoạn quảng cáo 30 giây hay 60 giây nào có thể làm được điều đó\", ông giải thích.</p><p class=\"Normal\">Những người đại diện cho chiến dịch tranh cử của Phó tổng thống lưu ý rằng họ cũng phải nỗ lực rất nhiều để củng cố nền tảng ủng hộ trong nhóm cử tri Mỹ gốc Latin trước ngày bầu cử.</p>\n" +
        "<figure data-size=\"true\" itemprop=\"associatedMedia image\" itemscope=\"\" itemtype=\"http://schema.org/ImageObject\" class=\"tplCaption action_thumb_added\">\n" +
        "            <div class=\"action_thumb flexbox\" style=\"transform-origin: 0px 0px;opacity: 1;transform: scale(1, 1);display: none;z-index:9;\">\n" +
        "                \n" +
        "                <a href=\"javascript:;\" class=\"share_photo\" data-type=\"tw\" data-reference-id=\"6\"><svg class=\"ic ic-twitte\"><use xlink:href=\"#Twitter\"></use></svg></a>\n" +
        "                <a href=\"javascript:;\" class=\"vne_zoom\" style=\"transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);\"><svg class=\"ic ic-zoom\"><use xlink:href=\"#Zoom\"></use></svg></a>\n" +
        "            </div>\n" +
        "<meta itemprop=\"url\" content=\"https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20241008-2176523741-v3-Hig-6527-4537-1728552839.jpg?w=0&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=JJAPI5JSw7SZumG33NThVA\">\n" +
        "<meta itemprop=\"width\" content=\"2400\">\n" +
        "<meta itemprop=\"height\" content=\"1600\">\n" +
        "<meta itemprop=\"href\" content=\"\">\n" +
        "<div class=\"fig-picture\" style=\"padding-bottom: 66.666666666667%;position: relative;\" data-src=\"https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20241008-2176523741-v3-Hig-6527-4537-1728552839.jpg?w=0&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=JJAPI5JSw7SZumG33NThVA\" data-sub-html=\"<div class=&quot;ss-wrapper&quot;><div class=&quot;ss-content&quot;>\n" +
        "<p class=&quot;Image&quot;>Ông Trump tại sự kiện vận động tranh cử ở Saginaw, Michigan, hôm 3/10. Ảnh: <em>AFP</em></p>\n" +
        "</div></div>\"><picture>\n" +
        "<!--[if IE 9]><video style=\"display: none;\"><![endif]-->\n" +
        "<source data-srcset=\"https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20241008-2176523741-v3-Hig-6527-4537-1728552839.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=LvUx2ZO6HSRHKZQtyIqVpw 1x, https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20241008-2176523741-v3-Hig-6527-4537-1728552839.jpg?w=1020&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=iVIp2yXyzdqsXvtxJaC0EQ 1.5x, https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20241008-2176523741-v3-Hig-6527-4537-1728552839.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=YxAqpzd_22FqJrhF27ZW6w 2x\" srcset=\"https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20241008-2176523741-v3-Hig-6527-4537-1728552839.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=LvUx2ZO6HSRHKZQtyIqVpw 1x, https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20241008-2176523741-v3-Hig-6527-4537-1728552839.jpg?w=1020&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=iVIp2yXyzdqsXvtxJaC0EQ 1.5x, https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20241008-2176523741-v3-Hig-6527-4537-1728552839.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=YxAqpzd_22FqJrhF27ZW6w 2x\">\n" +
        "<!--[if IE 9]></video><![endif]-->\n" +
        "<img itemprop=\"contentUrl\" style=\"position: absolute;width:100%;left:0;\" loading=\"lazy\" intrinsicsize=\"680x0\" alt=\"Ông Trump tại sự kiện vận động tranh cử ở Saginaw, Michigan, hôm 3/10. Ảnh: AFP\" class=\"lazy lazied\" src=\"https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20241008-2176523741-v3-Hig-6527-4537-1728552839.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=LvUx2ZO6HSRHKZQtyIqVpw\" data-src=\"https://i1-vnexpress.vnecdn.net/2024/10/10/AFP-20241008-2176523741-v3-Hig-6527-4537-1728552839.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=LvUx2ZO6HSRHKZQtyIqVpw\" data-ll-status=\"loaded\">\n" +
        "</picture></div>\n" +
        "<figcaption itemprop=\"description\">\n" +
        "<p class=\"Image\">Ông Trump tại sự kiện vận động tranh cử ở Saginaw, Michigan, hôm 3/10. Ảnh: <em>AFP</em></p>\n" +
        "</figcaption>\n" +
        "</figure><p class=\"Normal\">Suốt nhiều tuần qua, Harris và Trump đã đẩy mạnh chiến dịch tiếp cận cử tri gốc Latin trên không gian mạng. Nhưng một số chiến lược gia chính trị cảnh báo điều này không thể đảm bảo họ sẽ đi bỏ phiếu.</p><p class=\"Normal\">\"Có tình trạng mất kết nối xảy ra\", Chuck Rocha, chiến lược gia kỳ cựu của đảng Dân chủ chuyên về tiếp cận người Mỹ gốc Latin, nhận định. \"Những gì đang diễn ra trên mạng so với thực tế hoàn toàn khác\".</p><p class=\"Normal\">\"Luôn có mối lo ngại rằng chúng tôi cần làm nhiều hơn nữa. Tôi nghĩ chúng tôi luôn muốn làm nhiều hơn nữa\", nghị sĩ Dân chủ Adriano Espaillat bày tỏ.</p><p class=\"Normal\" style=\"text-align:right;\"><strong>Vũ Hoàng</strong> (Theo <em>CNN, AFP, Reuters</em>)</p>\n" +
        "                    <div class=\"width_common box-tinlienquanv2 \">\n" +
        "                        \n" +
        "                        <article class=\"item-news\">\n" +
        "                            <div class=\"thumb-art\">\n" +
        "                                <a href=\"https://vnexpress.net/phong-cach-dieu-hanh-nhu-cong-to-vien-cua-ba-harris-4790056.html\" data-itm-source=\"#vn_source=Detail-TheGioi_PhanTich-4802510&amp;vn_campaign=Box-TinXemThem&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1\" class=\"thumb thumb-5x3\" title=\"Phong cách điều hành 'như công tố viên' của bà Harris\">\n" +
        "                                \n" +
        "        <picture>\n" +
        "            <!--[if IE 9]><video style=\"display: none;\"><![endif]-->\n" +
        "            <source data-srcset=\"https://i1-vnexpress.vnecdn.net/2024/09/07/kamalaharrisAP24150738757498NA-9844-8275-1725682962.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=p-Xnk1imx7AKhM0PHRk7lA 1x, https://i1-vnexpress.vnecdn.net/2024/09/07/kamalaharrisAP24150738757498NA-9844-8275-1725682962.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=uFIbP8X8jHfBDDPWGsjOwQ 2x\" srcset=\"https://i1-vnexpress.vnecdn.net/2024/09/07/kamalaharrisAP24150738757498NA-9844-8275-1725682962.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=p-Xnk1imx7AKhM0PHRk7lA 1x, https://i1-vnexpress.vnecdn.net/2024/09/07/kamalaharrisAP24150738757498NA-9844-8275-1725682962.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=uFIbP8X8jHfBDDPWGsjOwQ 2x\">\n" +
        "            <!--[if IE 9]></video><![endif]-->\n" +
        "            <img loading=\"lazy\" intrinsicsize=\"180x108\" alt=\"Phong cách điều hành 'như công tố viên' của bà Harris\" class=\"lazy lazied\" src=\"https://i1-vnexpress.vnecdn.net/2024/09/07/kamalaharrisAP24150738757498NA-9844-8275-1725682962.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=p-Xnk1imx7AKhM0PHRk7lA\" data-src=\"https://i1-vnexpress.vnecdn.net/2024/09/07/kamalaharrisAP24150738757498NA-9844-8275-1725682962.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=p-Xnk1imx7AKhM0PHRk7lA\" data-ll-status=\"loaded\">\n" +
        "        </picture>\n" +
        "                                \n" +
        "                                </a>\n" +
        "                            </div>\n" +
        "                            <h4 class=\"title-news\"><a href=\"https://vnexpress.net/phong-cach-dieu-hanh-nhu-cong-to-vien-cua-ba-harris-4790056.html\" data-itm-source=\"#vn_source=Detail-TheGioi_PhanTich-4802510&amp;vn_campaign=Box-TinXemThem&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1\" title=\"Phong cách điều hành 'như công tố viên' của bà Harris\">Phong cách điều hành 'như công tố viên' của bà Harris</a></h4>\n" +
        "                            <p class=\"description\">\n" +
        "                                <a data-itm-source=\"#vn_source=Detail-TheGioi_PhanTich-4802510&amp;vn_campaign=Box-TinXemThem&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1\" href=\"https://vnexpress.net/phong-cach-dieu-hanh-nhu-cong-to-vien-cua-ba-harris-4790056.html\" title=\"Phong cách điều hành 'như công tố viên' của bà Harris\">Phong cách làm việc luôn chất vấn mọi thứ như một công tố viên từng khiến cấp dưới khó chịu với Harris, song nhiều người lại coi đây là ưu điểm của bà.</a>\n" +
        "                                <span class=\"meta-news\">\n" +
        "                                    \n" +
        "        <a class=\"count_cmt\" href=\"https://vnexpress.net/phong-cach-dieu-hanh-nhu-cong-to-vien-cua-ba-harris-4790056.html#box_comment_vne\" style=\"white-space: nowrap; display: inline-block;\">\n" +
        "\t        <svg class=\"ic ic-comment\"><use xlink:href=\"#Comment-Reg\"></use></svg>\n" +
        "            <span class=\"font_icon widget-comment-4790056-1\">90</span>\n" +
        "        </a>\n" +
        "        \n" +
        "                                </span>\n" +
        "                            </p>\n" +
        "                        </article>\n" +
        "                        \n" +
        "                        <article class=\"item-news\">\n" +
        "                            <div class=\"thumb-art\">\n" +
        "                                <a href=\"https://vnexpress.net/no-luc-thoat-bong-ong-biden-cua-ba-harris-4789589.html\" data-itm-source=\"#vn_source=Detail-TheGioi_PhanTich-4802510&amp;vn_campaign=Box-TinXemThem&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=1\" class=\"thumb thumb-5x3\" title=\"Nỗ lực thoát bóng ông Biden của bà Harris\">\n" +
        "                                \n" +
        "        <picture>\n" +
        "            <!--[if IE 9]><video style=\"display: none;\"><![endif]-->\n" +
        "            <source data-srcset=\"https://i1-vnexpress.vnecdn.net/2024/09/06/afp-20240904-36fk2u9-v1-highre-8110-4609-1725612700.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=bsR9JV-QwI9QnnSE42b9JQ 1x, https://i1-vnexpress.vnecdn.net/2024/09/06/afp-20240904-36fk2u9-v1-highre-8110-4609-1725612700.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=_5lkYynGVLnV6_VVSsfozg 2x\" srcset=\"https://i1-vnexpress.vnecdn.net/2024/09/06/afp-20240904-36fk2u9-v1-highre-8110-4609-1725612700.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=bsR9JV-QwI9QnnSE42b9JQ 1x, https://i1-vnexpress.vnecdn.net/2024/09/06/afp-20240904-36fk2u9-v1-highre-8110-4609-1725612700.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=_5lkYynGVLnV6_VVSsfozg 2x\">\n" +
        "            <!--[if IE 9]></video><![endif]-->\n" +
        "            <img loading=\"lazy\" intrinsicsize=\"180x108\" alt=\"Nỗ lực thoát bóng ông Biden của bà Harris\" class=\"lazy lazied\" src=\"https://i1-vnexpress.vnecdn.net/2024/09/06/afp-20240904-36fk2u9-v1-highre-8110-4609-1725612700.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=bsR9JV-QwI9QnnSE42b9JQ\" data-src=\"https://i1-vnexpress.vnecdn.net/2024/09/06/afp-20240904-36fk2u9-v1-highre-8110-4609-1725612700.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=bsR9JV-QwI9QnnSE42b9JQ\" data-ll-status=\"loaded\">\n" +
        "        </picture>\n" +
        "                                \n" +
        "                                </a>\n" +
        "                            </div>\n" +
        "                            <h4 class=\"title-news\"><a href=\"https://vnexpress.net/no-luc-thoat-bong-ong-biden-cua-ba-harris-4789589.html\" data-itm-source=\"#vn_source=Detail-TheGioi_PhanTich-4802510&amp;vn_campaign=Box-TinXemThem&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=1\" title=\"Nỗ lực thoát bóng ông Biden của bà Harris\">Nỗ lực thoát bóng ông Biden của bà Harris</a></h4>\n" +
        "                            <p class=\"description\">\n" +
        "                                <a data-itm-source=\"#vn_source=Detail-TheGioi_PhanTich-4802510&amp;vn_campaign=Box-TinXemThem&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=1\" href=\"https://vnexpress.net/no-luc-thoat-bong-ong-biden-cua-ba-harris-4789589.html\" title=\"Nỗ lực thoát bóng ông Biden của bà Harris\">Bà Harris đang nỗ lực vạch ra những điểm mới trong tầm nhìn kinh tế so với Tổng thống Biden, nhằm khiến cử tri cảm thấy bà sẽ mang đến những thay đổi tích cực.</a>\n" +
        "                                <span class=\"meta-news\">\n" +
        "                                    \n" +
        "        <a class=\"count_cmt\" href=\"https://vnexpress.net/no-luc-thoat-bong-ong-biden-cua-ba-harris-4789589.html#box_comment_vne\" style=\"white-space: nowrap; display: inline-block;\">\n" +
        "\t        <svg class=\"ic ic-comment\"><use xlink:href=\"#Comment-Reg\"></use></svg>\n" +
        "            <span class=\"font_icon widget-comment-4789589-1\">70</span>\n" +
        "        </a>\n" +
        "        \n" +
        "                                </span>\n" +
        "                            </p>\n" +
        "                        </article>\n" +
        "                        \n" +
        "                        <article class=\"item-news\">\n" +
        "                            <div class=\"thumb-art\">\n" +
        "                                <a href=\"https://vnexpress.net/cuoc-chien-chinh-tri-trump-harris-giua-mua-mua-bao-4802293.html\" data-itm-source=\"#vn_source=Detail-TheGioi_PhanTich-4802510&amp;vn_campaign=Box-TinXemThem&amp;vn_medium=Item-3&amp;vn_term=Desktop&amp;vn_thumb=1\" class=\"thumb thumb-5x3\" title=\"Cuộc chiến chính trị Trump - Harris giữa mùa mưa bão\">\n" +
        "                                \n" +
        "        <picture>\n" +
        "            <!--[if IE 9]><video style=\"display: none;\"><![endif]-->\n" +
        "            <source data-srcset=\"https://i1-vnexpress.vnecdn.net/2024/10/10/ap24283788285905-jpeg-17285271-1392-8620-1728534847.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=326vIeyfXhdUlxpu76fkNA 1x, https://i1-vnexpress.vnecdn.net/2024/10/10/ap24283788285905-jpeg-17285271-1392-8620-1728534847.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=QxYpy3yvmbG2wCj9x_LY7g 2x\" srcset=\"https://i1-vnexpress.vnecdn.net/2024/10/10/ap24283788285905-jpeg-17285271-1392-8620-1728534847.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=326vIeyfXhdUlxpu76fkNA 1x, https://i1-vnexpress.vnecdn.net/2024/10/10/ap24283788285905-jpeg-17285271-1392-8620-1728534847.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=QxYpy3yvmbG2wCj9x_LY7g 2x\">\n" +
        "            <!--[if IE 9]></video><![endif]-->\n" +
        "            <img loading=\"lazy\" intrinsicsize=\"180x108\" alt=\"Cuộc chiến chính trị Trump - Harris giữa mùa mưa bão\" class=\"lazy lazied\" src=\"https://i1-vnexpress.vnecdn.net/2024/10/10/ap24283788285905-jpeg-17285271-1392-8620-1728534847.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=326vIeyfXhdUlxpu76fkNA\" data-src=\"https://i1-vnexpress.vnecdn.net/2024/10/10/ap24283788285905-jpeg-17285271-1392-8620-1728534847.jpg?w=180&amp;h=108&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=326vIeyfXhdUlxpu76fkNA\" data-ll-status=\"loaded\">\n" +
        "        </picture>\n" +
        "                                \n" +
        "                                </a>\n" +
        "                            </div>\n" +
        "                            <h4 class=\"title-news\"><a href=\"https://vnexpress.net/cuoc-chien-chinh-tri-trump-harris-giua-mua-mua-bao-4802293.html\" data-itm-source=\"#vn_source=Detail-TheGioi_PhanTich-4802510&amp;vn_campaign=Box-TinXemThem&amp;vn_medium=Item-3&amp;vn_term=Desktop&amp;vn_thumb=1\" title=\"Cuộc chiến chính trị Trump - Harris giữa mùa mưa bão\">Cuộc chiến chính trị Trump - Harris giữa mùa mưa bão</a></h4>\n" +
        "                            <p class=\"description\">\n" +
        "                                <a data-itm-source=\"#vn_source=Detail-TheGioi_PhanTich-4802510&amp;vn_campaign=Box-TinXemThem&amp;vn_medium=Item-3&amp;vn_term=Desktop&amp;vn_thumb=1\" href=\"https://vnexpress.net/cuoc-chien-chinh-tri-trump-harris-giua-mua-mua-bao-4802293.html\" title=\"Cuộc chiến chính trị Trump - Harris giữa mùa mưa bão\">Khi những cơn bão liên tiếp tấn công nước Mỹ, hai ứng viên tổng thống cũng coi đó là cơ hội để tăng cường công kích nhau, dù chiến thuật này tiềm ẩn nhiều rủi ro.</a>\n" +
        "                                <span class=\"meta-news\">\n" +
        "                                    \n" +
        "        <a class=\"count_cmt\" href=\"https://vnexpress.net/cuoc-chien-chinh-tri-trump-harris-giua-mua-mua-bao-4802293.html#box_comment_vne\" style=\"white-space: nowrap; display: inline-block;\">\n" +
        "\t        <svg class=\"ic ic-comment\"><use xlink:href=\"#Comment-Reg\"></use></svg>\n" +
        "            <span class=\"font_icon widget-comment-4802293-1\">15</span>\n" +
        "        </a>\n" +
        "        \n" +
        "                                </span>\n" +
        "                            </p>\n" +
        "                        </article>\n" +
        "                        \n" +
        "                    </div>\n" +
        "<!-- Hope -->\n" +
        "<!-- End Hope -->\n",
    }
  )
  return (
    <div className="max-w-5xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8 dark:text-gray-900">
        <div className="space-y-6">
          <h1 className="text-4xl dark:text-yellow-600 font-bold md:tracking-tight md:text-5xl">
            {blog.title}
          </h1>
          <div
            className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
            <div className="flex items-center md:space-x-2">
              <img src={avatar} alt=""
                   className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
              <p className="text-sm">Admin • {blog.date}</p>
            </div>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">4 min read • 1,570 views</p>
          </div>
        </div>
        <div className="dark:text-gray-800 flex flex-col gap-4 ">
          <h3 className={`text-2xl font-semibold dark:text-gray-400`}>{blog.excerpt}</h3>
          <div className={`text-lg text-justify dark:text-gray-400`} dangerouslySetInnerHTML={ { __html: blog.content } }></div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetailContent;
