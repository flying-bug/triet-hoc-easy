// Dữ liệu câu hỏi cho ôn thi Triết học
const quizData = [
    {
        id: 1,
        question: "Triết học là gì?",
        options: [
            "Khoa học về tư duy",
            "Khoa học về thế giới quan và phương pháp luận",
            "Khoa học về xã hội",
            "Khoa học về tự nhiên"
        ],
        correct: 1,
        explanation: "Triết học là khoa học về thế giới quan và phương pháp luận. Nó nghiên cứu những vấn đề cơ bản nhất về mối quan hệ giữa tư duy và tồn tại, giữa ý thức và vật chất."
    },
    {
        id: 2,
        question: "Vấn đề cơ bản của triết học là gì?",
        options: [
            "Mối quan hệ giữa tư duy và tồn tại",
            "Mối quan hệ giữa con người và xã hội",
            "Mối quan hệ giữa tự nhiên và xã hội",
            "Mối quan hệ giữa lý luận và thực tiễn"
        ],
        correct: 0,
        explanation: "Vấn đề cơ bản của triết học là mối quan hệ giữa tư duy và tồn tại, giữa ý thức và vật chất. Đây là vấn đề then chốt quyết định xu hướng phát triển của mọi hệ thống triết học."
    },
    {
        id: 3,
        question: "Chủ nghĩa duy vật cho rằng:",
        options: [
            "Ý thức quyết định vật chất",
            "Vật chất quyết định ý thức",
            "Vật chất và ý thức độc lập với nhau",
            "Vật chất và ý thức là một"
        ],
        correct: 1,
        explanation: "Chủ nghĩa duy vật khẳng định vật chất có tính thứ nhất, quyết định ý thức. Ý thức có tính thứ hai, là sản phẩm của vật chất và phản ánh vật chất."
    },
    {
        id: 4,
        question: "Theo quan điểm duy vật biện chứng, vật chất là:",
        options: [
            "Tập hợp các nguyên tử",
            "Phạm trù triết học chỉ thực tại khách quan",
            "Các sự vật hiện tượng cụ thể",
            "Năng lượng và thông tin"
        ],
        correct: 1,
        explanation: "Vật chất là phạm trù triết học dùng để chỉ thực tại khách quan được con người phản ánh trong cảm giác, tồn tại không phụ thuộc vào cảm giác."
    },
    {
        id: 5,
        question: "Thuộc tính cơ bản của vật chất là:",
        options: [
            "Vận động",
            "Phản ánh",
            "Không gian và thời gian",
            "Tất cả các đáp án trên"
        ],
        correct: 0,
        explanation: "Vận động là thuộc tính cơ bản, cách thức tồn tại của vật chất. Không có vật chất không vận động và không có vận động mà không có vật chất."
    },
    {
        id: 6,
        question: "Nguồn gốc tự nhiên của ý thức là:",
        options: [
            "Bộ óc con người",
            "Thuộc tính phản ánh của vật chất",
            "Hoạt động lao động",
            "Ngôn ngữ"
        ],
        correct: 1,
        explanation: "Nguồn gốc tự nhiên của ý thức là thuộc tính phản ánh của vật chất, qua quá trình tiến hóa lâu dài từ phản ánh vật lý, hóa học đến phản ánh sinh học và cuối cùng là ý thức."
    },
    {
        id: 7,
        question: "Nguồn gốc xã hội trực tiếp của ý thức là:",
        options: [
            "Bộ óc con người",
            "Lao động và ngôn ngữ",
            "Quan hệ xã hội",
            "Giáo dục"
        ],
        correct: 1,
        explanation: "Lao động và ngôn ngữ là hai nhân tố xã hội trực tiếp tạo ra ý thức con người. Lao động tạo ra con người, ngôn ngữ là vỏ vật chất của tư duy."
    },
    {
        id: 8,
        question: "Bản chất của ý thức là:",
        options: [
            "Sản phẩm của bộ óc",
            "Hình ảnh chủ quan của thế giới khách quan",
            "Phản ánh thụ động thế giới",
            "Thuộc tính của mọi vật chất"
        ],
        correct: 1,
        explanation: "Bản chất của ý thức là hình ảnh chủ quan của thế giới khách quan, là sự phản ánh tích cực, sáng tạo hiện thực khách quan của bộ óc con người."
    },
    {
        id: 9,
        question: "Ý thức bao gồm những thành tố nào?",
        options: [
            "Tri thức và tình cảm",
            "Tri thức, tình cảm và ý chí",
            "Nhận thức và thực tiễn",
            "Lý tính và cảm tính"
        ],
        correct: 1,
        explanation: "Ý thức bao gồm ba thành tố cơ bản: tri thức (nhận thức), tình cảm và ý chí. Ba thành tố này tác động qua lại, bổ sung cho nhau."
    },
    {
        id: 10,
        question: "Quy luật thống nhất và đấu tranh của các mặt đối lập khẳng định:",
        options: [
            "Mọi sự vật đều có mâu thuẫn",
            "Mâu thuẫn là động lực phát triển",
            "Cần giải quyết mâu thuẫn đúng cách",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Quy luật thống nhất và đấu tranh của các mặt đối lập khẳng định mọi sự vật đều có mâu thuẫn nội tại, mâu thuẫn là động lực phát triển và cần được giải quyết đúng cách."
    },
    {
        id: 11,
        question: "Quy luật chuyển hóa từ những thay đổi về lượng thành những thay đổi về chất cho biết:",
        options: [
            "Sự phát triển là quá trình liên tục",
            "Sự phát triển có những bước nhảy",
            "Lượng và chất liên hệ với nhau",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Quy luật này cho biết sự phát triển vừa liên tục vừa gián đoạn, lượng và chất liên hệ biện chứng, khi lượng thay đổi đến một giới hạn nhất định sẽ gây ra sự thay đổi về chất."
    },
    {
        id: 12,
        question: "Quy luật phủ định của phủ định thể hiện:",
        options: [
            "Tính chu kỳ của sự phát triển",
            "Tính tiến bộ của sự phát triển",
            "Sự kế thừa trong phát triển",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Quy luật phủ định của phủ định thể hiện tính chu kỳ, tính tiến bộ và tính kế thừa trong quá trình phát triển của sự vật, hiện tượng."
    },
    {
        id: 13,
        question: "Thực tiễn là gì?",
        options: [
            "Hoạt động nhận thức của con người",
            "Hoạt động vật chất, có mục đích của con người",
            "Kinh nghiệm sống của con người",
            "Hoạt động sản xuất vật chất"
        ],
        correct: 1,
        explanation: "Thực tiễn là hoạt động vật chất có mục đích của con người nhằm cải tạo thế giới khách quan để thỏa mãn nhu cầu của mình."
    },
    {
        id: 14,
        question: "Hình thức cơ bản của thực tiễn là:",
        options: [
            "Hoạt động sản xuất vật chất",
            "Hoạt động chính trị - xã hội",
            "Hoạt động thực nghiệm khoa học",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Thực tiễn có ba hình thức cơ bản: hoạt động sản xuất vật chất (cơ bản nhất), hoạt động chính trị - xã hội và hoạt động thực nghiệm khoa học."
    },
    {
        id: 15,
        question: "Vai trò của thực tiễn đối với nhận thức:",
        options: [
            "Là cơ sở của nhận thức",
            "Là động lực của nhận thức",
            "Là tiêu chuẩn kiểm tra chân lý",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Thực tiễn đóng vai trò quyết định đối với nhận thức: là cơ sở, động lực, mục đích và tiêu chuẩn kiểm tra chân lý của nhận thức."
    },
    {
        id: 16,
        question: "Nhận thức là gì?",
        options: [
            "Quá trình phản ánh thế giới vào ý thức",
            "Quá trình tích cực, sáng tạo của chủ thể",
            "Quá trình từ chưa biết đến biết",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Nhận thức là quá trình phản ánh tích cực, sáng tạo thế giới khách quan vào ý thức con người, là quá trình đi từ chưa biết đến biết, từ biết ít đến biết nhiều."
    },
    {
        id: 17,
        question: "Nhận thức cảm tính bao gồm:",
        options: [
            "Cảm giác, tri giác, biểu tượng",
            "Khái niệm, phán đoán, suy lý",
            "Trực giác và linh cảm",
            "Kinh nghiệm và lý luận"
        ],
        correct: 0,
        explanation: "Nhận thức cảm tính bao gồm ba hình thức: cảm giác (phản ánh thuộc tính riêng lẻ), tri giác (phản ánh toàn bộ sự vật) và biểu tượng (hình ảnh của sự vật không có mặt)."
    },
    {
        id: 18,
        question: "Nhận thức lý tính bao gồm:",
        options: [
            "Cảm giác, tri giác, biểu tượng",
            "Khái niệm, phán đoán, suy lý",
            "Trực giác và linh cảm",
            "Quy nạp và diễn dịch"
        ],
        correct: 1,
        explanation: "Nhận thức lý tính bao gồm ba hình thức: khái niệm (phản ánh bản chất), phán đoán (khẳng định hoặc phủ định) và suy lý (từ tiền đề đến kết luận)."
    },
    {
        id: 19,
        question: "Chân lý là gì?",
        options: [
            "Tri thức đúng đắn về thế giới",
            "Sự phù hợp giữa tư duy và tồn tại",
            "Nội dung khách quan của nhận thức",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Chân lý là tri thức đúng đắn phản ánh đúng thế giới khách quan, là sự phù hợp giữa tư duy và tồn tại, có nội dung khách quan."
    },
    {
        id: 20,
        question: "Đặc điểm của chân lý:",
        options: [
            "Tính khách quan",
            "Tính tuyệt đối và tương đối",
            "Tính cụ thể",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Chân lý có ba đặc điểm cơ bản: tính khách quan (nội dung không phụ thuộc chủ thể), tính tuyệt đối và tương đối, tính cụ thể (gắn với điều kiện, hoàn cảnh cụ thể)."
    },
    {
        id: 21,
        question: "Xã hội là gì?",
        options: [
            "Tập hợp nhiều người",
            "Hệ thống quan hệ xã hội",
            "Cơ thể xã hội thống nhất",
            "Môi trường sống của con người"
        ],
        correct: 2,
        explanation: "Xã hội là một cơ thể xã hội thống nhất, bao gồm các yếu tố: con người, quan hệ sản xuất, ý thức xã hội và tổ chức xã hội."
    },
    {
        id: 22,
        question: "Cơ sở của sự tồn tại và phát triển xã hội là:",
        options: [
            "Ý thức xã hội",
            "Quan hệ sản xuất",
            "Sản xuất vật chất",
            "Tổ chức chính trị"
        ],
        correct: 2,
        explanation: "Sản xuất vật chất là cơ sở của sự tồn tại và phát triển xã hội, quyết định mọi mặt khác của đời sống xã hội."
    },
    {
        id: 23,
        question: "Lực lượng sản xuất bao gồm:",
        options: [
            "Con người và tư liệu sản xuất",
            "Tư liệu lao động và đối tượng lao động",
            "Công nhân và nông dân",
            "Khoa học và công nghệ"
        ],
        correct: 0,
        explanation: "Lực lượng sản xuất bao gồm con người (yếu tố chủ thể) và tư liệu sản xuất gồm tư liệu lao động và đối tượng lao động (yếu tố khách thể)."
    },
    {
        id: 24,
        question: "Quan hệ sản xuất là:",
        options: [
            "Quan hệ giữa người với người trong sản xuất",
            "Quan hệ giữa người với tự nhiên",
            "Quan hệ giữa các giai cấp",
            "Quan hệ kinh tế - xã hội"
        ],
        correct: 0,
        explanation: "Quan hệ sản xuất là những quan hệ giữa người với người trong quá trình sản xuất vật chất, bao gồm quan hệ sở hữu, quan hệ trong sản xuất và quan hệ phân phối."
    },
    {
        id: 25,
        question: "Quy luật cơ bản của sự phát triển xã hội:",
        options: [
            "Quy luật phù hợp giữa quan hệ sản xuất và lực lượng sản xuất",
            "Quy luật đấu tranh giai cấp",
            "Quy luật phát triển kinh tế",
            "Quy luật tiến bộ xã hội"
        ],
        correct: 0,
        explanation: "Quy luật cơ bản của sự phát triển xã hội là quy luật phù hợp giữa quan hệ sản xuất và tính chất, trình độ phát triển của lực lượng sản xuất."
    },
    {
        id: 26,
        question: "Ý thức xã hội là:",
        options: [
            "Tổng thể đời sống tinh thần của xã hội",
            "Tư tưởng của giai cấp thống trị",
            "Hệ thống quan điểm chính trị",
            "Văn hóa tinh thần của dân tộc"
        ],
        correct: 0,
        explanation: "Ý thức xã hội là tổng thể đời sống tinh thần của xã hội, bao gồm các hình thái ý thức xã hội và tâm lý xã hội."
    },
    {
        id: 27,
        question: "Các hình thái ý thức xã hội bao gồm:",
        options: [
            "Chính trị, pháp luật, đạo đức",
            "Tôn giáo, nghệ thuật, khoa học",
            "Triết học",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Các hình thái ý thức xã hội bao gồm: chính trị, pháp luật, đạo đức, tôn giáo, nghệ thuật, khoa học và triết học."
    },
    {
        id: 28,
        question: "Vai trò của ý thức xã hội:",
        options: [
            "Phản ánh tồn tại xã hội",
            "Tác động trở lại tồn tại xã hội",
            "Có tính độc lập tương đối",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Ý thức xã hội vừa phản ánh tồn tại xã hội, vừa có tính độc lập tương đối và tác động trở lại tồn tại xã hội một cách tích cực."
    },
    {
        id: 29,
        question: "Con người là:",
        options: [
            "Sản phẩm của tự nhiên",
            "Sản phẩm của xã hội",
            "Sản phẩm của lao động",
            "Thực thể sinh học - xã hội"
        ],
        correct: 3,
        explanation: "Con người là thực thể sinh học - xã hội, vừa có bản chất tự nhiên vừa có bản chất xã hội, trong đó bản chất xã hội là cơ bản."
    },
    {
        id: 30,
        question: "Bản chất con người theo K. Marx:",
        options: [
            "Tổng hòa các quan hệ xã hội",
            "Động vật có lý trí",
            "Sinh vật biết sử dụng công cụ",
            "Sinh vật có ngôn ngữ"
        ],
        correct: 0,
        explanation: "Theo K. Marx, bản chất con người là tổng hòa các quan hệ xã hội. Con người được quy định bởi các quan hệ xã hội mà họ tham gia."
    },
    {
        id: 31,
        question: "Vai trò của cá nhân trong lịch sử:",
        options: [
            "Cá nhân không có vai trò gì",
            "Cá nhân quyết định lịch sử",
            "Cá nhân có vai trò nhất định trong điều kiện cụ thể",
            "Chỉ có anh hùng mới tạo nên lịch sử"
        ],
        correct: 2,
        explanation: "Cá nhân có vai trò nhất định trong lịch sử, nhưng vai trò đó được quy định bởi điều kiện lịch sử cụ thể và không thể tách rời quần chúng nhân dân."
    },
    {
        id: 32,
        question: "Quần chúng nhân dân là:",
        options: [
            "Tất cả mọi người trong xã hội",
            "Lực lượng xã hội đóng vai trò quyết định",
            "Giai cấp công nhân",
            "Những người lao động"
        ],
        correct: 1,
        explanation: "Quần chúng nhân dân là những lực lượng xã hội đóng vai trò quyết định trong việc tạo ra của cải vật chất, tinh thần và thúc đẩy sự phát triển xã hội."
    },
    {
        id: 33,
        question: "Hình thái kinh tế - xã hội là:",
        options: [
            "Giai đoạn phát triển của xã hội",
            "Sự thống nhất giữa cơ sở hạ tầng và kiến trúc thượng tầng",
            "Phương thức sản xuất cụ thể",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Hình thái kinh tế - xã hội là giai đoạn phát triển của xã hội, được quy định bởi phương thức sản xuất, thể hiện sự thống nhất giữa cơ sở hạ tầng và kiến trúc thượng tầng."
    },
    {
        id: 34,
        question: "Cách mạng xã hội là:",
        options: [
            "Thay đổi chế độ chính trị",
            "Chuyển đổi từ hình thái này sang hình thái khác",
            "Đấu tranh của giai cấp bị áp bức",
            "Thay đổi về kinh tế"
        ],
        correct: 1,
        explanation: "Cách mạng xã hội là sự chuyển đổi từ hình thái kinh tế - xã hội này sang hình thái kinh tế - xã hội khác, do mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất gây ra."
    },
    {
        id: 35,
        question: "Tiến bộ xã hội là:",
        options: [
            "Sự phát triển về mọi mặt",
            "Xu hướng phát triển từ thấp đến cao",
            "Sự thay đổi tích cực",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Tiến bộ xã hội là xu hướng phát triển từ thấp đến cao, từ đơn giản đến phức tạp, thể hiện sự thay đổi tích cực về mọi mặt của đời sống xã hội."
    },
    {
        id: 36,
        question: "Triết học Mác - Lênin ra đời vào:",
        options: [
            "Đầu thế kỷ XIX",
            "Giữa thế kỷ XIX",
            "Cuối thế kỷ XIX",
            "Đầu thế kỷ XX"
        ],
        correct: 1,
        explanation: "Triết học Mác - Lênin ra đời vào giữa thế kỷ XIX (những năm 40 của thế kỷ XIX) do K. Marx và F. Engels sáng lập."
    },
    {
        id: 37,
        question: "Nguồn gốc lý luận của triết học Mác - Lênin:",
        options: [
            "Triết học cổ điển Đức",
            "Kinh tế học cổ điển Anh",
            "Chủ nghĩa xã hội không tưởng Pháp",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Triết học Mác - Lênin có ba nguồn gốc lý luận: triết học cổ điển Đức (đặc biệt là Hegel và Feuerbach), kinh tế học cổ điển Anh và chủ nghĩa xã hội không tưởng Pháp."
    },
    {
        id: 38,
        question: "Đặc điểm cơ bản của triết học Mác - Lênin:",
        options: [
            "Tính khoa học",
            "Tính cách mạng",
            "Tính thực tiễn",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Triết học Mác - Lênin có ba đặc điểm cơ bản: tính khoa học (phản ánh đúng quy luật khách quan), tính cách mạng (phục vụ đấu tranh giải phóng) và tính thực tiễn (gắn liền với hoạt động thực tiễn)."
    },
    {
        id: 39,
        question: "Chức năng cơ bản của triết học Mác - Lênin:",
        options: [
            "Chức năng thế giới quan",
            "Chức năng phương pháp luận",
            "Chức năng nhận thức",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Triết học Mác - Lênin có các chức năng: thế giới quan (cung cấp quan điểm tổng quát), phương pháp luận (cung cấp phương pháp nhận thức và cải tạo thế giới), nhận thức và giáo dục."
    },
    {
        id: 40,
        question: "Ý nghĩa của triết học Mác - Lênin:",
        options: [
            "Cơ sở lý luận của chủ nghĩa xã hội khoa học",
            "Vũ khí tinh thần của giai cấp công nhân",
            "Phương pháp luận khoa học",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Triết học Mác - Lênin có ý nghĩa to lớn: là cơ sở lý luận của chủ nghĩa xã hội khoa học, vũ khí tinh thần của giai cấp công nhân và phương pháp luận khoa học cho mọi hoạt động."
    },
    {
        id: 41,
        question: "Phương pháp biện chứng duy vật nghiên cứu:",
        options: [
            "Sự vật trong mối liên hệ",
            "Sự vật trong vận động phát triển",
            "Mâu thuẫn nội tại của sự vật",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Phương pháp biện chứng duy vật yêu cầu nghiên cứu sự vật trong mối liên hệ phổ biến, trong vận động phát triển và thông qua mâu thuẫn nội tại."
    },
    {
        id: 42,
        question: "Nguyên lý về mối liên hệ phổ biến khẳng định:",
        options: [
            "Mọi sự vật đều liên hệ với nhau",
            "Liên hệ có tính khách quan",
            "Liên hệ có nhiều hình thức khác nhau",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Nguyên lý về mối liên hệ phổ biến khẳng định mọi sự vật đều liên hệ với nhau một cách khách quan, có nhiều hình thức và mức độ khác nhau."
    },
    {
        id: 43,
        question: "Nguyên lý về sự phát triển khẳng định:",
        options: [
            "Mọi sự vật đều vận động",
            "Vận động có hướng và có tính chất nhất định",
            "Phát triển là vận động tiến lên",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Nguyên lý về sự phát triển khẳng định mọi sự vật đều vận động, phát triển là vận động có hướng tiến lên, từ thấp đến cao, từ đơn giản đến phức tạp."
    },
    {
        id: 44,
        question: "Các cặp phạm trù cơ bản của phép biện chứng duy vật:",
        options: [
            "Nguyên nhân - kết quả, cái chung - cái riêng",
            "Nội dung - hình thức, bản chất - hiện tượng",
            "Khả năng - hiện thực, tất nhiên - ngẫu nhiên",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Các cặp phạm trù cơ bản bao gồm: nguyên nhân - kết quả, cái chung - cái riêng, nội dung - hình thức, bản chất - hiện tượng, khả năng - hiện thực, tất nhiên - ngẫu nhiên."
    },
    {
        id: 45,
        question: "Ứng dụng triết học Mác - Lênin vào thực tiễn Việt Nam:",
        options: [
            "Xây dựng chủ nghĩa xã hội",
            "Đổi mới toàn diện đất nước",
            "Phát triển kinh tế thị trường định hướng xã hội chủ nghĩa",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Triết học Mác - Lênin được ứng dụng sáng tạo vào thực tiễn Việt Nam trong việc xây dựng chủ nghĩa xã hội, đổi mới toàn diện và phát triển kinh tế thị trường định hướng xã hội chủ nghĩa."
    },
    {
        id: 46,
        question: "Tư tưởng Hồ Chí Minh về triết học:",
        options: [
            "Kế thừa và phát triển triết học Mác - Lênin",
            "Kết hợp với truyền thống văn hóa dân tộc",
            "Ứng dụng vào điều kiện cụ thể Việt Nam",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Tư tưởng Hồ Chí Minh kế thừa và phát triển sáng tạo triết học Mác - Lênin, kết hợp với truyền thống văn hóa dân tộc và ứng dụng vào điều kiện cụ thể của Việt Nam."
    },
    {
        id: 47,
        question: "Đường lối đổi mới của Đảng thể hiện:",
        options: [
            "Tư duy biện chứng duy vật",
            "Xuất phát từ thực tiễn",
            "Kết hợp lý luận với thực tiễn",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Đường lối đổi mới của Đảng thể hiện rõ tư duy biện chứng duy vật, xuất phát từ thực tiễn và kết hợp chặt chẽ lý luận với thực tiễn."
    },
    {
        id: 48,
        question: "Kinh tế thị trường định hướng xã hội chủ nghĩa thể hiện:",
        options: [
            "Sự thống nhất giữa các mặt đối lập",
            "Kết hợp kinh tế thị trường với định hướng xã hội chủ nghĩa",
            "Ứng dụng quy luật thống nhất và đấu tranh của các mặt đối lập",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Kinh tế thị trường định hướng xã hội chủ nghĩa thể hiện sự thống nhất biện chứng giữa cơ chế thị trường và định hướng xã hội chủ nghĩa, ứng dụng quy luật thống nhất và đấu tranh của các mặt đối lập."
    },
    {
        id: 49,
        question: "Xây dựng nhà nước pháp quyền xã hội chủ nghĩa thể hiện:",
        options: [
            "Mối quan hệ giữa nội dung và hình thức",
            "Sự thống nhất giữa dân chủ và pháp chế",
            "Ứng dụng các cặp phạm trù biện chứng",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Xây dựng nhà nước pháp quyền xã hội chủ nghĩa thể hiện mối quan hệ biện chứng giữa nội dung xã hội chủ nghĩa và hình thức pháp quyền, sự thống nhất giữa dân chủ và pháp chế."
    },
    {
        id: 50,
        question: "Ý nghĩa của việc học tập triết học Mác - Lênin:",
        options: [
            "Hình thành thế giới quan khoa học",
            "Nâng cao năng lực tư duy",
            "Định hướng hoạt động thực tiễn",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Học tập triết học Mác - Lênin giúp hình thành thế giới quan khoa học, nâng cao năng lực tư duy biện chứng và định hướng đúng đắn cho hoạt động thực tiễn."
    },
    {
        id: 51,
        question: "Ý thức có nguồn gốc từ đâu?",
        options: [
            "Chỉ từ nguồn gốc tự nhiên",
            "Chỉ từ nguồn gốc xã hội", 
            "Từ cả nguồn gốc tự nhiên và xã hội",
            "Từ bộ óc con người"
        ],
        correct: 2,
        explanation: "Ý thức có cả nguồn gốc tự nhiên (từ thuộc tính phản ánh của vật chất và bộ óc người) và nguồn gốc xã hội (lao động và ngôn ngữ). Nguồn gốc tự nhiên là điều kiện cần, nguồn gốc xã hội là điều kiện đủ."
    },
    {
        id: 52,
        question: "Bản chất của ý thức theo quan điểm duy vật biện chứng là:",
        options: [
            "Sản phẩm của bộ óc",
            "Hình ảnh chủ quan của thế giới khách quan",
            "Phản ánh thụ động thế giới",
            "Thuộc tính của mọi vật chất"
        ],
        correct: 1,
        explanation: "Bản chất của ý thức là hình ảnh chủ quan của thế giới khách quan, là sự phản ánh tích cực, sáng tạo hiện thực khách quan của bộ óc con người."
    },
    {
        id: 53,
        question: "Ý thức bao gồm những thành tố cơ bản nào?",
        options: [
            "Tri thức và tình cảm",
            "Tri thức, tình cảm và ý chí",
            "Nhận thức và hành động",
            "Lý tính và cảm tính"
        ],
        correct: 1,
        explanation: "Ý thức bao gồm ba thành tố cơ bản: tri thức (nhận thức về thế giới), tình cảm (thái độ chủ quan) và ý chí (khả năng điều khiển hành vi). Ba thành tố này tác động qua lại, bổ sung cho nhau."
    },
    {
        id: 54,
        question: "Vai trò của lao động đối với sự hình thành ý thức:",
        options: [
            "Không có vai trò gì",
            "Vai trò thứ yếu",
            "Vai trò quyết định trực tiếp",
            "Chỉ tạo điều kiện"
        ],
        correct: 2,
        explanation: "Lao động có vai trò quyết định trực tiếp trong việc hình thành ý thức. Thông qua hoạt động lao động, con người tác động vào thế giới khách quan và từng bước nhận thức được thế giới."
    },
    {
        id: 55,
        question: "Ngôn ngữ đối với ý thức có ý nghĩa gì?",
        options: [
            "Là vỏ vật chất của tư duy",
            "Là phương tiện giao tiếp",
            "Là công cụ của tư duy",
            "Tất cả các đáp án trên"
        ],
        correct: 3,
        explanation: "Ngôn ngữ vừa là vỏ vật chất của tư duy, vừa là phương tiện giao tiếp, vừa là công cụ của tư duy. Không có ngôn ngữ thì ý thức không thể hình thành và phát triển được."
    }
];

// Hàm trộn ngẫu nhiên mảng
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Hàm lấy câu hỏi ngẫu nhiên
function getRandomQuestions(count = 50) {
    const shuffled = shuffleArray(quizData);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}