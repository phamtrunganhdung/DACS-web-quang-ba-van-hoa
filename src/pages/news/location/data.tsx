import { IRightBoxContent } from "@/components/RightBox";
import moment from "moment";

export const locationData: any = [
  {
    id: "lct1",
    name: "Bảo tàng Lâm Đồng",
    email: "baotangld@gmail.com",
    openTimeAM: "7h30 - 11h30",
    openTimePM: "13h30 - 17h30",
    address: "04 Đ. Hùng Vương, Phường 10, Đà Lạt",
    openTimeDesc: "Mở cửa tất cả các ngày trong tuần",
    image:
      "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/06/bao-tang-lamdong-docdao-vntrip-1.jpg",
  },
  {
    id: "lct2",
    name: "Viện bảo tàng lịch sử cung Điện Vua I Đà Lạt",
    email: "dinh1@gmail.com",
    openTimeAM: "7h30 - 11h30",
    openTimePM: "13h30 - 17h30",
    openTimeDesc: "Mở cửa từ thứ 2 đến thứ 6",
    address: "Trần Quang Diệu, Phường 10, Đà Lạt",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/20/23/a8/getlstd-property-photo.jpg?w=1200&h=-1&s=1",
  },
  {
    id: "lct3",
    name: "XQ Đà Lạt Sử Quán",
    email: "dlsq@gmail.com",
    openTimeAM: "7h00 - 11h30",
    openTimePM: "14h30 - 17h00",
    openTimeDesc: "Mở cửa từ thứ 2 đến thứ 7",
    address: "80A Đường Mai Anh Đào, Phường 8, Đà Lạt",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/c5/d9/16/20190813-101654-largejpg.jpg?w=1200&h=-1&s=1",
  },
  {
    id: "lct4",
    name: "Bảo tàng 3D TrickLand",
    email: "trickland3d@gmail.com",
    openTimeAM: "7h30 - 11h30",
    openTimePM: "14h30 - 18h30",
    openTimeDesc: "Mở cửa tất cả các ngày trong tuần",
    address: "03 Đ. Lê Thị Hồng Gấm, Phường 1",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/1a/d2/98/img-20200307-194330-largejpg.jpg?w=800&h=-1&s=1",
  },
];
export const artifactsData: any = [
  {
    id: "lct1",
    name: "Bảo tàng Lâm Đồng",
    lstArtifacts: [
      {
        id: "atf1",
        name: "Bộ sưu tập đàn đá",
        img: "https://www.baotanglamdong.com.vn/cache/c/3c88df7208cfc56b2ee91cfffed33979.JPG",
        content: (
          <>
            <p>
              Ngay sau khi đất nước độc lập, thống nhất, công tác bảo tồn, bảo
              tàng ở Lâm Đồng đã được lãnh đạo tỉnh quan tâm. Tháng 8 năm 1975,
              bộ phận Bảo tồn - Bảo tàng được thành lập, trực thuộc Thành ủy Đà
              Lạt, với nhiệm vụ sưu tầm, gìn giữ và bảo quản những hiện vật, tư
              liệu có giá trị lịch sử, văn hóa của tỉnh. Trải qua 46 năm hình
              thành và phát triển, Bảo tàng Lâm Đồng luôn hoàn thành tốt nhiệm
              vụ chính trị và nhiều lần được nhận bằng khen của Bộ Văn hóa -
              Thông tin (nay là Bộ Văn hóa - Thể thao và Du lịch), của Ủy ban
              nhân dân tỉnh Lâm Đồng.
            </p>
          </>
        ),
      },
      {
        id: "atf2",
        name: "Thiên nhiên Lâm Đồng",
        img: "https://www.baotanglamdong.com.vn/images/phocagallery/thiennhien_6.jpg",
        content: (
          <>
            <p>
              Lâm Đồng là tỉnh miền núi nam Tây Nguyên với diện tích 9.764,79
              km2, trong đó diện tích rừng chiếm 618.815 ha, với mật độ che phủ
              63% diện tích toàn tỉnh. Hiện nay, Lâm Đồng có hai khu rừng quốc
              gia: vườn quốc gia Bidup Núi Bà và một phần vườn quốc gia Cát
              Tiên.
            </p>
          </>
        ),
      },
      {
        id: "atf3",
        name: "Văn hóa các dân tộc Mạ, Cơho, Churu",
        img: "https://www.baotanglamdong.com.vn/images/hinhanhbaiviet/dantoc2.jpg",
        content: (
          <>
            <p>
              Lâm đồng là tỉnh có nhiều thành phần dân tộc. Theo thống kê gần
              đây, Lâm Đồng có tới 42 dân tộc. Trong đó người Mạ, Cơho và Churu
              là ba dân tộc sinh sống lâu đời trên mảnh đất này. Vì vậy, việc
              giới thiệu đặc trưng văn hóa các dân tộc bản địa: Mạ, Cơho và
              Churu là một trong những nội dung trưng bày chính của Bảo Tàng Lâm
              Đồng.
            </p>
          </>
        ),
      },
      {
        id: "atf4",
        name: "Phong trào đấu tranh cách mạng tỉnh Lâm Đồng",
        img: "https://www.baotanglamdong.com.vn/images/hinhanhbaiviet/1-KhangChien.jpg",
        content: (
          <>
            <p>
              Nằm cuối dãy Trường Sơn - Nam Tây Nguyên trên độ cao khống chế đối
              với các vùng lân cận, Lâm Đồng có vị trí chiến lược rất quan trọng
              về quân sự. Lâm Đồng là đầu mối giao thông quan trọng nối liền Nam
              Bộ với Tây Nguyên, nối liền đồng bằng với miền Tây cực Nam Trung
              Bộ.
            </p>
          </>
        ),
      },
      {
        id: "atf5",
        name: "Bộ sưu tập cổ vật cung đình triều Nguyễn tại Bảo tàng Lâm Đồng",
        img: "https://www.baotanglamdong.com.vn/images/hinhanhbaiviet/Long_bst_co_vat_cung_dinh_trieu_nguyen_04.JPG",
        content: (
          <>
            <p>
              Được sự quan tâm, chỉ đạo của Ủy ban nhân dân tỉnh, Sở Văn hóa,
              Thể thao và Du lịch Lâm Đồng, Bảo tàng Lâm Đồng đã tiếp nhận 124
              hiện vật từ Kho bạc Nhà nước do Sở Tài chính Lâm Đồng bàn giao.
              Các hiện vật từng được vua quan, hoàng tộc triều Nguyễn sử dụng,
              trong đó có một số hiện vật của vua Tự Đức, vua Khải Định, đặc
              biệt là những hiện vật của vua Bảo Đại và Nam Phương Hoàng hậu.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "lct2",
    name: "Viện bảo tàng lịch sử cung Điện Vua I Đà Lạt",
  },
  {
    id: "lct3",
    name: "XQ Đà Lạt Sử Quán",
  },
  {
    id: "lct4",
    name: "Bảo tàng 3D TrickLand",
  },
];

export const detailsData: any = [
  {
    id: "lct1",
    content: (
      <>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Lam_Dong_Museum_01.JPG/1280px-Lam_Dong_Museum_01.JPG" />
        <p>
          Bảo tàng Lâm Đồng là nơi trưng bày các hiện vật truyền thống và lịch
          sử của địa phương, đặc biệt là những hiện vật thể hiện truyền thống
          văn hóa của vùng đất Lâm Đồng, là bảo tàng tổng hợp (khảo cứu địa
          phương), hiện đang lưu giữ trên 15.000 hiện vật với nhiều sưu tập hiện
          vật độc đáo và quý hiếm. Nội dung trưng bày của Bảo tàng bao gồm các
          phần chính như:
        </p>
        <ul>
          <li>Thiên nhiên Lâm Đồng.</li>
          <li>Đà Lạt xưa và nay.</li>
          <li>Những phát hiện về khảo cổ học ở Lâm Đồng.</li>
          <li>
            Những nét văn hóa đặc trưng của các dân tộc bản địa (dân tộc Mạ,
            Cơho, Churu).
          </li>
          <li>
            Quân và dân Lâm Đồng trong hai cuộc kháng chiến chống giặc ngoại
            xâm.
          </li>
          <li>
            Nhân dân Lâm Đồng trong công cuộc xây dựng và bảo vệ Tổ quốc XHCN.
          </li>
        </ul>
        <p>
          Ngoài những nội dung trên, Bảo tàng Lâm Đồng còn giới thiệu hai nhà
          sàn dân tộc Mạ và Cơho được phục dựng nguyên gốc và bên trong bài trí
          theo không gian sinh hoạt truyền thống. Du khách khi đến đây sẽ có cảm
          giác như đang được sống trong ngôi nhà của người Mạ, Cơho, nghe cô
          thuyết minh duyên dáng người Cơho giới thiệu về phong tục tập quán và
          nếp sinh hoạt trong ngôi nhà truyền thống của dân tộc mình.
        </p>
        <img src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/06/duong-di-trong-bao-tang-vntrip-e1529567102703.jpg"></img>
        <i>Lối đi với hàng cây xanh mát trong viện bảo tàng</i>
        <p>
          Đến với Bảo tàng Lâm Đồng, du khách còn được hòa mình vào thiên nhiên
          thơ mộng, trữ tình của Đà Lạt, tham gia các trò chơi dân gian như ném
          còn, nhún đu, bịt mắt đánh chiêng hoặc thao tác các nghề truyền thống
          như làm gốm, in tranh Đông Hồ… Đồng thời thưởng lãm hoa nghệ thuật,
          mang tên “Ngàn hoa Đà Lạt” với các loài hoa đặc trưng của Đà Lạt như:
          Hoa hồng, Cẩm tú cầu, Hoa lan, Hoa ly v.v... được bảo quản bởi công
          nghệ Nhật Bản, có thể lưu giữ vẻ đẹp thuần khiết từ 3 đến 5 năm.
        </p>
        <p>
          Bảo tàng Lâm Đồng đã và đang trở thành một địa điểm ấn tượng và hấp
          dẫn cho du khách khi đến du lịch tại Đà Lạt - Lâm Đồng, và là nơi thu
          hút học sinh, sinh viên đến nghiên cứu và học tập.
        </p>
        <p>
          Bạn sẽ được nhìn thấy tận mắt các bộ đàn bằng đá Di Linh, B’Lao nổi
          tiếng với niên đại 3.000 đến 3.500 năm, những di tích kiến trúc Cát
          Tiên, P’Roh, những di chỉ khảo cổ khai quật từ ngôi mộ táng của dân
          tộc bản địa như Đại Lào, Đại Làng, Đạ Đờn…
        </p>
        <img src="https://dulichmedia.dalat.vn//Images/LDG/baotanglamdong/B%E1%BA%A3o%20t%C3%A0ng%20L%C3%A2m%20%C4%90%E1%BB%93ng/img_1569_636781310677328176.jpg" />
        <i>Tham quan bảo tàng Lâm Đồng</i>
        <img src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/06/hinh-nhan-vntrip-e1529567276839.jpg" />
        <i>Hình nhân những người dân tộc trong bảo tàng</i>
        <img src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/06/doi-song-dan-toc-vntrip-e1529620893700.jpg" />
        <img src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/06/do-dung-dan-toc-vntrip-e1529620975743.jpg" />
        <i>Khu trưng bày vật dụng đời sống dân tộc</i>
        <p>
          Bảo tàng được chuyên trang du lịch nổi tiếng Lonely Planet xếp hạng
          15/36 điều nên làm (“things to do”) khi tới thăm Đà Lạt nên thậm chí
          còn được nhiều du khách quốc tế biết đến hơn là du khách nội địa. Để
          chuyến ghé thăm bảo tàng trở nên thuận tiện hơn bạn có thể tìm cho
          mình một khách sạn ở Đà Lạt gần hoặc nằm đường Hùng Vương như vậy sẽ
          tiết kiệm được rất nhiều thời gian đi lại.
        </p>
        <img src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/06/khao-co-hoc-cat-tien-vntrip-e1529620822271.jpg"></img>
        <i>Khu trưng bày khảo cổ học Cát Tiên</i>
        <p>
          Bảo tàng từng tạm ngưng hoạt động từ 10/1990 đến 12/1996, tòa nhà
          trưng bày chính được chính thức đưa vào hoạt động từ cuối năm 2010.
        </p>

        <p>
          Bảo tàng Lâm Đồng là bảo tàng tổng hợp và trưng bày những hiện vật
          lịch sử và văn hóa truyền thống của vùng đất cao nguyên Lâm Đồng. Đừng
          bỏ lỡ cơ hội thăm quan bảo tàng này vì bạn sẽ được thỏa thích khám phá
          những điều bí ẩn của lịch sử Tây Nguyên, có khi là từ hơn 3000 năm
          trước!
        </p>
      </>
    ),
  },
  {
    id: "lct2",
    content: (
      <>
        <p>
          <i>
            <strong>Dinh 1 Đà Lạt</strong> hay còn được du khách biết đến với
            tên gọi là Dinh Bảo Đại 1. Đà Lạt là một thành phố có khí hậu quanh
            năm mát mẻ, dễ chịu. Nơi đây không khác gì một thiêng đường trong mơ
            mà ai ai cũng ao ước được sống ở đây. Chính vì thế mà vua Bảo Đại đã
            chọn xây dựng nên 3 dinh thự xa hoa tráng lệ tại mảnh đất Tây Nguyên
            Lâm Viên này.
          </i>
        </p>
        <img src="https://du-lich-da-lat.com/wp-content/uploads/2019/09/dinh-1-da-lat.jpg"></img>
        <i>Dinh 1 Đà Lạt</i>
        <p>
          Hiện nay ở Đà Lạt có tới 3 Dinh Thự của vua Bảo Đại, đó chính là Dinh
          1, dinh 2, dinh 3. Nếu ai yêu thích lịch sử và muốn tìm hiểu văn hóa
          dân tộc. Thì chắc hẳn bạn không thể nào không đến đây tham quan và tìm
          hiểu được đúng không nào. Đây cũng là nơi lý tưởng nhất để các cặp đôi
          đang yêu nhau săn lùng cho mình những bộ ảnh cưới đẹp lung linh.
        </p>
        <img src="https://du-lich-da-lat.com/wp-content/uploads/2019/09/dinh-1-bao-dai.jpg"></img>
        <i>Dinh 1 Đà Lạt</i>
        <p>
          Dinh 1 Đà Lạt là một trong những địa điểm du lịch mà du khách không
          thể nào bỏ qua khi đến với Đà Lạt. Nơi đây được bình chọn là một trong
          top 10 địa điểm du lịch mà bạn không thể nào bỏ qua khi đến với Đà
          Lạt. Dinh Bảo Đại 1 là cái tên luôn được nằm trong danh sách tham quan
          của hầu hết các tour du lịch khi đến với Đà Lạt. Vậy nơi đây có gì thú
          vị mà thu hút đông du khách đến như vậy. Các bạn hãy theo chân chúng
          tôi tìm hiểu nhé.
        </p>
        <ul>
          <li>Địa chỉ: Phường 10, Thành phố Đà Lạt, Lâm Đồng, Việt Nam</li>
          <li>Giờ mở cửa: 07:30–17:30</li>
          <li>Mức giá: người lớn 40.000 VNĐ/vé và trẻ em 20.000 VNĐ/vé</li>
          <li>Số điện thoại: 093 370 91 77</li>
          <li>Đánh giá: 4.3/5</li>
          <li>Fanpage: https://www.facebook.com/dinh1dalat/?locale=vi_VN</li>
          <li>Cách trung tâm thành phố: 4,8 km</li>
        </ul>
        <p>
          Nếu bạn là một người yêu văn hóa và thích tìm hiểu về kiến trúc. Thì
          Dinh Bảo Đại 1 là địa điểm mà bạn không thể nào bỏ sót được nhé. Dinh
          mang một lối kiến trúc độc đáo và bắt mắt theo lối kiến trúc pháp cổ
          điển. Khi đặt chân đến Dinh i Đà Lạt du khách sẽ cảm nhận được những
          giây phút bình yên, lạ thường nhất. Xung quanh dinh được bao bọc bởi
          những hàng cây thông xanh bát ngát, cao to, mát mẻ.
        </p>
        <p>
          Về sau khi vua Bảo Đại cho sửa sang lại Dinh 1 thì ông đã phát hiện ra
          một địa đạo đường hầm khá lớn. Đường hầm này dài tới 4km. Điều đặc
          biệt là đường hầm này thông tới Dinh 2 bằng các nhánh rẻ của đường hầm
          số 11, 16, 18, 26…
        </p>
        <strong>PHÁT HIỆN ĐỊA ĐẠO DÀI 4KM NẰM TRONG DINH 1</strong>
        <p>
          Đường hầm này được người Nhật cho đào vào lúc đảo chánh Pháp. Họ cho
          đào đường hầm này với ý đồ bắt sống những sĩ quan người Pháp trong
          dinh Toàn Quyền và các biệt thự xung quanh Dinh lúc bấy giờ. Khi pháp
          hiện được đường hầm này thì vua Bảo Đại đã đưa ra chỉ thị phải giấu
          kín bí mật về việc phát hiện ra đường hầm này.
        </p>
        <p>
          Mãi chi đến năm 1965 vào thời chính quyền Ngô Đình Diệm mới dùng lại
          đường hầm này làm lối đi riêng cho Tổng Thống. Cho đến hết thời chính
          quyền Ngô Đình Diệm thì Dinh 1 vẫn được dùng làm nơi đón tiếp và nghỉ
          mát của các nguyên thủ Quốc Gia của chế độ cũ lúc bấy giờ. Sau khi
          được giải phóng thì nơi đây được sự dụng với nhiều mục đích khác nhau.
          Chính vì thế mà nó bị xuống cấp trầm trọng.
        </p>
        <img src="https://du-lich-da-lat.com/wp-content/uploads/2019/09/gio-mo-cua-dinh-1-da-lat.jpg"></img>
        <i>Dinh 1</i>
        <p>
          Quá trình phục hồi lại Dinh 1 tốn khá nhiều thời gian cũng như khó
          khăn, tiền bạc. Cuối cùng thì Dinh 1 đã sống sót và hồi sinh trở lại.
          Đẹp lung linh không khác gì một người đẹp đang ngủ quên giữa rừng xanh
          được đánh thức trở lại. Khi đặt chân đến Dinh 1 Bảo Đại bạn sẽ vô cùng
          ấn tượng với 2 hàng cây tràm cổ thụ với thân trắng to, cao vút. Phía
          dưới là con đường đi được trải nhựa vô cùng hoành tráng. Hai hàng cây
          tràm cổ thụ được chủ nhân đầu tiên của căn biệt thự này trồng. Họ muốn
          tạo cho nơi đây một cảm giác lãng mạng, êm đềm và một bầu không khí
          trong lành.
        </p>
      </>
    ),
  },
  {
    id: "lct3",
    content: (
      <>
        <p>
          <strong>XQ sử quán Đà Lạt</strong> – Đối với những du khách dành sự
          yêu thích cho bộ môn thêu tranh nghệ thuật. XQ sử quán là một cái tên
          không còn xa lạ. Qua bàn tay khéo léo của các nghệ nhân tại XQ sử quán
          đã thổi hồn vào những bức tranh thêu. Đem đến một sức sống với và làm
          nổi bật vẻ đẹp tinh túy của nghệ thuật.
        </p>
        <img src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/12/da-lat-xq-su-quan.jpg"></img>
        <p>
          XQ sử quán là địa điểm du lịch Đà Lạt nổi tiếng nằm đối diện với khu
          du lịch đồi Mộng Mơ. Điểm du lịch này đã để lại nhiều ấn tượng cho
          khách tham quan. XQ sử quán mang lối kiến trúc đậm dấu ấn của cố đô
          Huế cổ kính. Và chứa đựng bên trong là những tác phẩm tranh thêu tuyệt
          mỹ. Đây là một không gian nghệ thuật để bạn đến. Và tìm hiểu những nét
          văn hóa của nghề thêu truyền thống.
        </p>
        <h2>Thông tin về XQ Sử Quán</h2>
        <ul>
          <li>
            Địa chỉ: tọa lạc tại số 80 Mai Anh Đào, phường 8, thành phố Đà Lạt,
            tỉnh Lâm Đồng.
          </li>
          <li>Giờ mở cửa: 7:00 -17:00</li>
          <li>Giá vé: 20.000 VNĐ</li>
          <li>Số điện thoại: 02633831343</li>
          <li>Đánh giá: 4.4/5</li>
          <li>Fanpage: https://www.facebook.com/xqdalatsuquan/</li>
          <li>Cách trung tâm thành phố: 5km</li>
        </ul>
        <p>
          Làng nghề tranh thêu XQ sử quán Đà Lạt tọa lạc tại địa chỉ 80A Đường
          Mai Anh Đào, Phường 8, Thành phố Đà Lạt, Tỉnh Lâm Đồng. Làng nghề nằm
          cách trung tâm thành phố khoảng 4km theo hướng trục đường Phù Đổng
          Thiên Vương. Nằm khá gần với khu du lịch thung lũng tình yêu và đồi
          Mộng Mơ. Nên bạn có thể kết hợp tham quan 3 địa điểm nổi tiếng này.
        </p>
        <img src="https://ksdalat.com/wp-content/uploads/2018/05/tranh-theu-xq-su-quan-da-lat.jpg"></img>
        <p>
          XQ là viết tắt chữ cái đầu của hai vợ chồng nghệ nhân Hoàng Lệ Xuân và
          Võ Văn Quân. Hai nghệ nhân này là người vạch ra hướng đi mới cho nghề
          tranh thêu. Bằng cách kết hợp giữa hội họa với những tinh hoa của nghề
          thêu. Nghệ nhân Hoàng Thị Xuân xuất thân trong một gia đình gốc Huế.
          Từ nhỏ nghệ nhân Xuân đã được thừa hưởng những tinh hoa trong nghề
          thêu cung đình xưa. Với sự kết hợp trong sự sáng tạo và tài năng của
          hai nghệ nhân. Đã mang đến một sắc màu mới cho tranh thêu Việt Nam.
        </p>
        <p>
          Từ năm 1990 – 1992, hai nghệ nhân Hoàng Lệ Xuân và Võ Văn Quân. Đã bắt
          đầu sáng tạo những tác phẩm tranh thêu với chủ đề ” Về một quê hương
          về một đời người“.
        </p>
        <img src="https://dulichkhampha24.com/wp-content/uploads/2019/11/xq-da-lat-su-quan-1.jpg"></img>
        <p>
          Đến cuối năm 1992, họ lên Đà Lạt để mở lớp đào tạo nghệ nhân thêu. Từ
          đó đưa nghệ thuật tranh thêu đến gần hơn với mọi người. Đầu năm 1994,
          hai vợ chồng nghệ nhân thành lập tổ hợp tác thêu lụa XQ Đà Lạt. Với số
          nghệ nhân ban đầu là 20 người.
        </p>
        <p>
          Ngày 30/01/1996, công ty trách nhiệm hữu hạn XQ Đà Lạt được thành lập
          và chính thức đi vào hoạt động. Cho đến nay, tranh thêu XQ sử quán đã
          có phòng trưng bày ở nhiều nơi. Như trên đất nước hình chữ S như: Hà
          Nội, Huế, Đà Nẵng, Nha Trang, Sài Gòn,… Công ty đã tạo việc làm cho
          hơn 3.000 người lao động. Và con số đó vẫn không ngừng tăng lên.
        </p>
        <p>
          XQ Đà Lạt đã góp phần không nhỏ trong việc đưa những hình ảnh đẹp của
          Việt Nam. Đến với du khách trong và ngoài nước. Với những nỗ lực không
          ngừng, anh Võ Văn Quân là một trong ba người đầu tiên nhận được giải
          thưởng “The Guide Award”. Đây là một phần thưởng vô giá cho sự cống
          hiến vào nghệ thuật của anh.
        </p>
      </>
    ),
  },
];
export const rightBoxData: IRightBoxContent[] = [
  {
    key: "lct1",
    date: moment().format("DD/MM/YYYY"),
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Lam_Dong_Museum_01.JPG/1280px-Lam_Dong_Museum_01.JPG",
    title: "Bảo tàng Lâm Đồng",
    content: (
      <div>
        Bảo tàng Lâm Đồng là nơi trưng bày các hiện vật truyền thống và lịch sử
        của địa phương, đặc biệt là những hiện vật thể hiện truyền thống văn hóa
        của vùng đất Lâm Đồng, là bảo tàng tổng hợp (khảo cứu địa phương), hiện
        đang lưu giữ trên 15.000 hiện vật với nhiều sưu tập hiện vật độc đáo và
        quý hiếm.
      </div>
    ),
  },
  {
    key: "lct2",
    date: moment().format("DD/MM/YYYY"),
    img: "https://du-lich-da-lat.com/wp-content/uploads/2019/09/dinh-1-da-lat.jpg",
    title: "Dinh Bảo Đại I",
    content: (
      <div>
        Dinh 1 Đà Lạt hay còn được du khách biết đến với tên gọi là Dinh Bảo Đại
        1. Đà Lạt là một thành phố có khí hậu quanh năm mát mẻ, dễ chịu. Nơi đây
        không khác gì một thiêng đường trong mơ mà ai ai cũng ao ước được sống ở
        đây. Chính vì thế mà vua Bảo Đại đã chọn xây dựng nên 3 dinh thự xa hoa
        tráng lệ tại mảnh đất Tây Nguyên Lâm Viên này.
      </div>
    ),
  },
  {
    key: "lct3",
    date: moment().format("DD/MM/YYYY"),
    img: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/12/da-lat-xq-su-quan.jpg",
    title: "XQ Đà Lạt Sử Quán",
    content: (
      <div>
        XQ sử quán là địa điểm du lịch Đà Lạt nổi tiếng nằm đối diện với khu du
        lịch đồi Mộng Mơ. Điểm du lịch này đã để lại nhiều ấn tượng cho khách
        tham quan. XQ sử quán mang lối kiến trúc đậm dấu ấn của cố đô Huế cổ
        kính. Và chứa đựng bên trong là những tác phẩm tranh thêu tuyệt mỹ. Đây
        là một không gian nghệ thuật để bạn đến. Và tìm hiểu những nét văn hóa
        của nghề thêu truyền thống.
      </div>
    ),
  },
];

export const artifactsDetailsData: any = [
  {
    id: "atf1",
    name: "Bộ sưu tập đàn đá",
    content: (
      <>
        <i>
          Ngay sau khi đất nước độc lập, thống nhất, công tác bảo tồn, bảo tàng
          ở Lâm Đồng đã được lãnh đạo tỉnh quan tâm. Tháng 8 năm 1975, bộ phận
          Bảo tồn - Bảo tàng được thành lập, trực thuộc Thành ủy Đà Lạt, với
          nhiệm vụ sưu tầm, gìn giữ và bảo quản những hiện vật, tư liệu có giá
          trị lịch sử, văn hóa của tỉnh. Trải qua 46 năm hình thành và phát
          triển, Bảo tàng Lâm Đồng luôn hoàn thành tốt nhiệm vụ chính trị và
          nhiều lần được nhận bằng khen của Bộ Văn hóa - Thông tin (nay là Bộ
          Văn hóa - Thể thao và Du lịch), của Ủy ban nhân dân tỉnh Lâm Đồng.
        </i>
        <img src="https://www.baotanglamdong.com.vn/cache/c/3c88df7208cfc56b2ee91cfffed33979.JPG" />
        <i>
          Một phần bộ sưu tập đàn đá độc đáo được sưu tầm và trưng bày tại Bảo
          tàng Lâm Đồng.
        </i>
        <p>
          Nói đến công tác nghiên cứu, sưu tầm hiện vật bảo tàng là nói đến việc
          “nghiên cứu, phát hiện, lựa chọn và thu thập các hiện vật gốc mang ý
          nghĩa, giá trị bảo tàng phản ánh về lịch sử tự nhiên, lịch sử xã hội,
          về con người và môi trường tồn tại theo phương pháp khoa học tùy theo
          nội dung và loại hình của bảo tàng và là công tác bổ sung thường xuyên
          cho kho cơ sở của bảo tàng” (theo Giáo trình sưu tầm hiện vật bảo tàng
          - 2011).
        </p>
        <p>
          Kết quả của công tác sưu tầm là hiện vật, hình ảnh và tư liệu, trong
          đó hiện vật chính là cơ sở cho mọi hoạt động của bảo tàng. Hiện nay,
          có khá nhiều định nghĩa về hiện vật bảo tàng, nhưng nhìn chung đều
          thống nhất rằng: hiện vật bảo tàng là bằng chứng vật chất về thiên
          nhiên, con người và môi trường sống của con người, có giá trị lịch sử,
          văn hóa, khoa học, thẩm mỹ, được bảo tàng sưu tầm, nghiên cứu, xác
          minh, hoàn thiện hồ sơ khoa học và hồ sơ pháp lý cho hiện vật. Như
          vậy, hiện vật bảo tàng là một khái niệm rộng, bao gồm nhiều loại hình,
          chất liệu và hình thức (hiện vật thể khối, tài liệu chữ viết, tác phẩm
          nghệ thuật, phim ảnh, băng ghi âm…).
        </p>
        <p>
          Hiện vật chính là ngôn ngữ của bảo tàng, là cơ sở cho mọi hoạt động
          của bảo tàng, không có hiện vật thì không có bảo tàng và các hoạt động
          liên quan đến bảo tàng. Hiện vật là trung tâm, vừa là mục tiêu, vừa là
          điểm xuất phát của bảo tàng. Vì vậy, để có hiện vật phù hợp với loại
          hình và yêu cầu cụ thể thì bảo tàng phải tiến hành công tác nghiên
          cứu, sưu tầm, tức là phải sử dụng tổng hợp tất cả các biện pháp để có
          được hiện vật, thông qua nhiều kênh, nhiều phương pháp sưu tầm khác
          nhau, như sưu tầm trực tiếp thông qua việc tổ chức các đợt khảo sát,
          điền dã, nghiên cứu, khai quật khảo cổ…; sưu tầm gián tiếp qua các nhà
          sưu tập như tiếp nhận các hiện vật hiến tặng, mua, trao đổi; tiếp nhận
          các hiện vật tịch thu và bàn giao từ các cơ quan chức năng.v.v…
        </p>
        <img src="https://www.baotanglamdong.com.vn/cache/6/66c90c581991572967cbb7cd7adb67eb.JPG"></img>
        <i>
          Cán bộ Bảo tàng Lâm Đồng tiến hành sưu tầm hiện vật trong vùng đồng
          bào Mạ.
        </i>
        <p>
          Trong giai đoạn chuẩn bị đợt trưng bày, triển lãm, nhiệm vụ trọng tâm
          của công tác sưu tầm là đáp ứng yêu cầu hiện vật cho trưng bày, triển
          lãm dù là cố định, chuyên đề hay lưu động. Sau khi trưng bày mở cửa,
          nhiệm vụ tiếp theo của công tác sưu tầm là hoàn chỉnh thủ tục hồ sơ
          pháp lý, khoa học cho hiện vật để lưu trữ, bổ sung cho kho hiện vật
          bảo tàng. Hiện vật bảo tàng càng phong phú, đa dạng và được nghiên
          cứu, xác định khoa học một cách toàn diện, kỹ lưỡng, chính xác sẽ tạo
          điều kiện thuận lợi và phục vụ tốt cho công tác trưng bày, triển lãm,
          công tác tuyên truyền, giáo dục và quảng bá hình ảnh bảo tàng đến với
          công chúng.
        </p>
        <p>
          Xác định tầm quan trọng của hiện vật trong hoạt động của bảo tàng,
          ngay từ những ngày đầu thành lập (tháng 8/1975), Bảo tàng Lâm Đồng
          luôn quan tâm đến công tác sưu tầm để làm giàu cho kho cơ sở. Tổng số
          hiện vật tại Bảo tàng Lâm Đồng tính đến ngày 30/12/2020 có trên 12.400
          hiện vật (với trên 17.700 đơn vị hiện vật).
        </p>
        <p>
          Hiện nay, để thuận lợi trong công tác quản lý, kho hiện vật Bảo tàng
          Lâm Đồng được phân làm ba mảng kho riêng biệt, bao gồm: Kho khảo cổ
          trên 9.000 hiện vật (trên 14.000 đơn vị hiện vật); Kho dân tộc trên
          1.000 hiện vật (trên 1.000 đơn vị hiện vật); Kho tổng hợp trên 1.900
          hiện vật (trên 1.600 đơn vị hiện vật).
        </p>
        <p>
          Sau khi tiếp nhận quản lý và phát huy giá trị Di tích Nhà lao thiếu
          nhi Đà Lạt (năm 2016) và Di tích Khảo cổ Cát Tiên (năm 2018), Bảo tàng
          Lâm Đồng hiện nay có ba địa điểm hành chính, các hiện vật tiếp tục
          được quản lý thống nhất và phát huy thường xuyên. Trong đó: Hiện vật
          bảo tàng trên 12.000 hiện vật (trên 17.000 đơn vị hiện vật); Hiện vật
          thuộc Di tích quốc gia Nhà lao thiếu nhi Đà lạt 49 hiện vật (51 đơn vị
          hiện vật); Hiện vật thuộc Di tích quốc gia đặc biệt Khảo cổ Cát Tiên
          308 hiện vật (345 đơn vị hiện vật).
        </p>
        <p>
          Các hiện vật của Bảo tàng Lâm Đồng hiện nay rất đa dạng, được quản lý
          an toàn và phân loại khoa học như: kim loại, da, đá, mộc, thủy tinh,
          hóa chất, giấy, phim ảnh, xương, gốm.v.v… Riêng kho tổng hợp với gần
          2.000 hiện vật bao gồm các mảng, như kháng chiến, mẹ Việt Nam anh
          hùng, thiên nhiên, Đà Lạt xưa, lịch sử văn hóa; hiện vật về xây dựng
          và bảo vệ Tổ quốc… Ngoài ra, còn có các phim tư liệu về danh lam thắng
          cảnh, điểm tham quan du lịch, các bộ sưu tập hiện vật thuộc Bảo tàng
          Lâm Đồng, đặc biệt là các di sản văn hóa phi vật thể của các dân tộc
          bản địa trên địa bàn tỉnh…, là nguồn di sản sinh động, quý giá phục vụ
          nghiên cứu và phát huy giá trị di sản văn hóa.
        </p>
        <p>
          Để phát huy vai trò, vị trí của công tác sưu tầm, góp phần đổi mới
          chất lượng công tác trưng bày, triển lãm trong thời gian tới, Bảo tàng
          Lâm Đồng cần quan tâm một số vấn đề sau đây: Xác định công tác nghiên
          cứu, sưu tầm là một trong những nhiệm vụ quan trọng, không thể thiếu
          trong nghị quyết nhiệm kỳ và kế hoạch thường niên của Bảo tàng Lâm
          Đồng. Căn cứ chủ trương, nghị quyết, bộ phận chuyên môn có trách nhiệm
          tham mưu kế hoạch ngắn hạn, trung hạn, thậm chí dài hạn để có những
          điều chỉnh sưu tầm kịp thời, từ đó thực hiện các đề cương chi tiết cho
          từng nhiệm vụ, mục tiêu mà kế hoạch đặt ra.
        </p>
        <p>
          Quan tâm đầu tư kinh phí hàng năm cho công tác sưu tầm. Nghiên cứu ban
          hành các quy định, quy chế về hạn mức tự quyết kinh phí cho tổ sưu tầm
          hiện vật khi đi thực địa để thuận tiện trong quá trình sưu tầm, tránh
          rườm rà về quy trình, thủ tục tài chính mà vẫn đảm bảo yêu cầu, quy
          định pháp luật hiện hành.
        </p>
        <p>
          Kiện toàn công tác nhân sự, đặc biệt là quy hoạch, tuyển dụng hoặc
          luân chuyển, điều động những vị trí việc làm có chuyên môn đào tạo phù
          hợp, đúng chuyên ngành, đáp ứng yêu cầu đặt ra. Tiếp tục quan tâm chất
          lượng nhân lực bộ phận sưu tầm và quản lý hiện vật, cử viên chức tham
          gia các khóa tập huấn, bồi dưỡng chuyên môn, nghiệp vụ.
        </p>
        <p>
          Phòng Sưu tầm - Quản lý hiện vật cần chủ động nắm bắt tình hình thời
          sự, chính trị, kinh tế - văn hóa - xã hội, thường xuyên giữ mối quan
          hệ chặt chẽ với các cơ quan, địa phương để kịp thời phát hiện và tham
          mưu các kế hoạch sưu tầm đạt kết quả tốt nhất. Đồng thời, xác định
          công tác sưu tầm là hết sức quan trọng, phải được tổ chức thường
          xuyên, liên tục để làm giàu kho hiện vật bảo tàng.
        </p>
      </>
    ),
  },
];
export const rightBoxDataATF: IRightBoxContent[] = [
  {
    key: "atf2",
    date: moment().format("DD/MM/YYYY"),
    img: "https://www.baotanglamdong.com.vn/images/phocagallery/thiennhien_6.jpg",
    title: "Thiên nhiên Lâm Đồng",
    content: (
      <div>
        Lâm Đồng là tỉnh miền núi nam Tây Nguyên với diện tích 9.764,79 km2,
        trong đó diện tích rừng chiếm 618.815 ha, với mật độ che phủ 63% diện
        tích toàn tỉnh. Hiện nay, Lâm Đồng có hai khu rừng quốc gia: vườn quốc
        gia Bidup Núi Bà và một phần vườn quốc gia Cát Tiên.
      </div>
    ),
  },
  {
    key: "atf3",
    date: moment().format("DD/MM/YYYY"),
    img: "https://www.baotanglamdong.com.vn/images/hinhanhbaiviet/dantoc2.jpg",
    title: "Văn hóa các dân tộc Mạ, Cơho, Churu",
    content: (
      <div>
        Lâm đồng là tỉnh có nhiều thành phần dân tộc. Theo thống kê gần đây, Lâm
        Đồng có tới 42 dân tộc. Trong đó người Mạ, Cơho và Churu là ba dân tộc
        sinh sống lâu đời trên mảnh đất này. Vì vậy, việc giới thiệu đặc trưng
        văn hóa các dân tộc bản địa: Mạ, Cơho và Churu là một trong những nội
        dung trưng bày chính của Bảo Tàng Lâm Đồng.
      </div>
    ),
  },
  {
    key: "atf4",
    date: moment().format("DD/MM/YYYY"),
    img: "https://www.baotanglamdong.com.vn/images/hinhanhbaiviet/1-KhangChien.jpg",
    title: "Phong trào đấu tranh cách mạng tỉnh Lâm Đồng",
    content: (
      <div>
        Nằm cuối dãy Trường Sơn - Nam Tây Nguyên trên độ cao khống chế đối với
        các vùng lân cận, Lâm Đồng có vị trí chiến lược rất quan trọng về quân
        sự. Lâm Đồng là đầu mối giao thông quan trọng nối liền Nam Bộ với Tây
        Nguyên, nối liền đồng bằng với miền Tây cực Nam Trung Bộ.
      </div>
    ),
  },
];
