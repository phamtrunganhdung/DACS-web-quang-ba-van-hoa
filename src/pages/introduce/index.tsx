import BodyTitle from "@/components/BodyTitle";
import { ButtonFloatLeft, button } from "@/components/Button";
import { label } from "@/components/Label";
import { input } from "@/components/Input";
import PageContent from "@/components/PageContent";
import "./index.less";
import avtDefault from "@/assets/avatarDefault.svg";
import { useEffect, useRef } from "react";
export default function Introduce() {
  const mainContentData: any = [
    {
      key: "1",
      title: "1. Bản sắc văn hóa dân tộc là gì?",
      content: (
        <>
          <p>
            Theo tâm lý học xã hội, xã hội học và nhân học, bản sắc là cách nhận
            thức của một cá thể về: chính cá thể đó, một cá thể khác hoặc một
            nhóm xã hội. Nói cách khác, bản sắc chính là những cá tính khác nhau
            của một cá thể hay một nhóm nhiều cá thể của một nhánh hoặc nhóm xã
            hội đặc trưng.
          </p>
          <p>
            Theo giáo sư Tâm lý học Peter Weinreich, đại học Ulster: “Bản sắc
            của một cá thể là tổng thể của phân giải cá nhân, qua đó cách mà cá
            thể phân giải chính mình ở hiện tại được tiếp tục từ cách cá thể
            phân giải chính mình trong quá khứ, cũng như truyền cảm hứng cho
            tiến trình phân giải chính mình trong tương lai”.
          </p>
          <img src="https://nguoivietnam.vn/wp-content/uploads/2020/11/diversity-hands-15873759093872122553807.jpg"></img>
          <p>
            Bản sắc văn hóa dân tộc Việt Nam là thuật ngữ chỉ sắc thái, vẻ đẹp
            và tính chất đặc biệt, cái riêng để phân biệt với những nước trên
            thế giới, bản sắc văn hóa dân tộc là cái gốc của nền văn hóa, những
            đặc trưng không thể trộn lẫn trong cội nguồn văn hóa dân tộc Việt
            Nam. Bản sắc văn hóa dân tộc Việt Nam là những nét đặc trưng đặc
            biệt làm nên sắc thái, bản lĩnh và dấu ấn riêng của mỗi dân tộc, từ
            những nét đó để phân biệt dân tộc này với dân tộc khác.
          </p>
          <p>
            Bản sắc văn hóa dân tộc trong tiếng Anh là National cultural
            identity. Bản sắc văn hóa cơ bản nó là bản chất, là màu sắc, sắc
            thái, là đặc trưng nhất của một sự vật hiện tượng nào đó. Bản sắc
            văn hóa là nét đặc trưng của nền văn hóa nào đó. Bản sắc văn hóa thể
            hiện nét riêng của mình, thông qua đó có thể so sánh và phân biệt
            với các bản sắc văn hóa khác. Bản sắc văn hóa là một phạm vi nhỏ
            thuộc nền văn hóa rộng lớn của một địa phương, một vùng hay thậm chí
            là một quốc gia. Bản sắc văn hóa là nói về những nét đẹp trong văn
            hóa, những nét tinh hoa mà chỉ vùng, địa điểm hay dân tộc đó mới dó,
            và là nét văn hóa đặc sắc nhất trong nền văn hóa chung để khi nhắc
            đến là nhớ ngay đến địa điểm cụ thể nào đó, hoặc dân tộc nào đó. Bản
            sắc văn hóa là nét tinh hoa được hình thành trong quá trình lịch sử
            phát triển của dân tộc đó. Được con người tạo ra và thể hiện những
            nét riêng của dân tộc và gắn liền với sự phát triển kinh tế và xã
            hội của một quốc gia nào đó, một địa phương nào đó.
          </p>
        </>
      ),
    },
    {
      key: "2",
      title: "2. Biểu hiện của bản sắc văn hóa dân tộc:",
      content: (
        <>
          <p>
            Biểu hiện bản sắc văn hóa dân tộc Việt Nam rất phong phú với tổng
            cộng 54 dân tộc khác nhau, những phong tục tập quán, ngôn ngữ, tín
            ngưỡng, tư tưởng và tôn giáo khác nhau. Cụ thể, bản sắc văn hóa dân
            tộc Việt Nam được biểu hiện với 3 tầng kết cấu khác nhau như sau:
            Biểu hiện 1 Thể hiện qua bản chất văn hóa, nhận thức của con người
            về cảnh vật và yếu tố nhân sinh quan. Biểu hiện này nằm ở tầng thấp
            nhất trong kết cấu của bản sắc văn hóa. Biểu hiện 2 Thể hiện qua
            cách tư duy, lối sống, lý tưởng và tính thẩm mỹ của con người.
          </p>
          <p>
            Biểu hiện này nằm ở tầng giữa trong kết cấu của bản sắc văn hóa.
            Biểu hiện 3 Thể hiện qua phong tục tập quán, ngôn ngữ, trang phục,
            nghi lễ đặc trưng, kiến trúc, ca dao tục ngữ, kho tàng văn học nghệ
            thuật… Đây là biểu hiện nằm ở tầng cao nhất trong kết cấu của bản
            sắc văn hóa.
          </p>
          <p>
            Ý nghĩa của bản sắc văn hóa dân tộc là gì? Bản sắc văn hóa dân tộc
            là gốc rễ hình thành nên nền văn hóa đặc trưng của một dân tộc từ
            lâu đời. Bản sắc văn hóa dân tộc luôn tồn tại vĩnh viễn, trường tồn
            và không thay đổi theo thời gian. Bản sắc văn hóa dân tộc đại diện
            cho một dân tộc, tạo nên những nét đặc trưng về mọi mặt như tín
            ngưỡng, tính cách dân tộc, phong tục tập quán, tính cách… Bản sắc
            văn hóa dân tộc là tài sản vô giá cần được giữ gìn của một dân tộc.
            Bản sắc văn hóa dân tộc là một biểu hiện đa dạng và phong phú.
          </p>
        </>
      ),
    },
    {
      key: "3",
      title: "3. Đặc trưng cơ bản của bản sắc dân tộc Việt Nam:",
      content: (
        <>
          <p>
            Ngoài hiểu rõ về khái niệm bản sắc văn hóa dân tộc là gì, chúng tối
            xin cung cấp thêm thông tin về đặc trưng cơ bản của bản sắc dân tộc
            Việt Nam như sau: Bản sắc dân tộc Việt Nam thể hiện những đặc trưng
            của nền văn hóa. Là gốc hình thành văn hóa từ lâu đời, từ đó ngày
            càng phát triển, tạo nên những nét riêng biệt đến nay. Bản sắc văn
            hóa dân tộc mang tính bền vững với thời gian. Thời gian có thay đổi
            nhưng nét văn hóa dân tộc Việt Nam vẫn sẽ được gìn giữ, không khác
            biệt với bản sắc văn hóa dân tộc ban đầu. Đặc trưng cơ bản có thể
            nhìn nhận từ bên ngoài về bản sắc văn hóa dân tộc là sự tôn kính,
            thờ cúng tổ tiên, tôn trọng tất cả các giá trị cộng đồng và gia
            đình, các ngành nghề thủ công mỹ nghệ, người dân lao động cần cù…
          </p>
          <p>
            Ở Việt Nam có một nền văn hóa dân tộc phong phú trong cộng đồng 54
            dân tộc, có nhiều sinh hoạt cộng đồng, tín ngưỡng, tư tưởng và tôn
            giáo khác nhau. Bản sắc văn hóa dân tộc Việt Nam được hình thành và
            phát triển phụ thuộc vào đặc điểm của từng dân tộc, điều kiện lịch
            sử, điều kiện tự nhiên, môi trường cư trú, chế độ chính trị giao lưu
            với các nền văn hóa khác. Thực tế qua hàng ngàn năm lịch sử chứng
            minh rằng để bản sắc văn hóa dân tộc Việt Nam được gìn giữ tốt đẹp
            chính là nhờ vào tinh thần đoàn kết, sự gắn bó chặt chẽ và gìn giữ
            của mỗi người dân Việt Nam.
          </p>
          <p>
            Giữ gìn bản sắc văn hóa dân tộc là hành động, việc làm của mỗi người
            hướng tới mục tiêu bảo vệ, gìn giữ những nét đặc trưng, tài sản vô
            giá, linh hồn của dân tộc hun đúc qua hàng ngàn năm dựng nước và giữ
            nước, biết bao mồ hôi xương máu máu của dân tộc Việt Nam. Giữ gìn
            bản sắc văn hóa dân tộc là việc làm cần thiết và quan trọng để vận
            dụng và phát triển lâu dài, là cách tốt nhất để toàn thể dân tộc
            hướng tới hành động bảo vệ hệ thống giá trị văn hóa được hình thành
            trong suốt quá trình lịch sử.
          </p>
        </>
      ),
    },
    {
      key: "4",
      title: "4. Một số nội dung của bản sắc văn hóa dân tộc:",
      content: (
        <>
          <p>
            Bản sắc văn hóa dân tộc là những giá trị vật chất, tinh thần tinh
            túy nhất, cô đọng nhất, bền vững nhất, là sắc thái cội nguồn, riêng
            biệt của mỗi dân tộc, làm cho dân tộc này không thể lẫn với dân tộc
            khác. Văn hóa có tính dân tộc vì nó được sáng tạo ra, được bảo tồn
            và lưu truyền trong cộng đồng dân tộc với điều kiện tự nhiên, xã
            hội, lịch sử đặc thù; qua quá trình phát triển, chắt lọc, thử thách
            của thời gian, những đặc điểm dân tộc in dấu ấn vào các sáng tạo văn
            hóa; dần dần lắng đọng, định hình tạo thành bản sắc văn hóa dân tộc.
            Nó tạo nên cốt cách, bản lĩnh, sức sống của một dân tộc, từ cội
            nguồn đó làm nảy sinh và hoàn thiện ý thức dân tộc, ngôn ngữ, văn
            hóa. Các yếu tố đó đã gắn lết, quy tụ các thành viên cộng đồng, tạo
            nên thế và lực của dân tộc.
          </p>
          <p>
            Bản sắc văn hóa dân tộc được hình thành và phát triển phụ thuộc vào
            đặc điểm tộc người, điều kiện lịch sử, tự nhiên, môi trường cư trú,
            thể chế chính trị cũng như sự giao lưu với các nền văn hóa khác. Nói
            đến văn hóa là nói đến dân tộc đã sáng tạo ra nền văn hóa đó. Bản
            sắc văn hóa cũng chính là bản sắc văn hóa của dân tộc ấy. Thực tế
            lịch sử đã chứng minh rằng một khi hệ tư tưởng tiến bộ được vận dụng
            đúng đắn, gắn kết với giá trị của bản sắc văn hóa dân tộc thì nó
            phát huy được sức mạnh của cả dân tộc và thời đại, giai cấp và dân
            tộc gắn bó chặt chẽ với nhau: Hệ tư tưởng trở thành kim chỉ nam cho
            mọi hành động của dân tộc. Ngược lại khi hệ tư tưởng phản động, lạc
            hậu, hoặc là vận dụng không phù hợp các giá trị văn hóa truyền thống
            của dân tộc thì lập tức sẽ gây ra những đổ vỡ khó lường.
          </p>
          <img src="http://dichtieng.today/wp-content/uploads/2016/06/8211388838_84682b08c5_b.jpg" />
          <p>
            Bản sắc văn hóa dân tộc gắn liền với điều kiện tự nhiên, xã hội và
            lịch sử mà bản thân các điều kiện này đều biến chuyển theo thời
            gian, vì vậy bản sắc văn hóa cũng luôn luôn vận động, tuy có tính ổn
            định, bền vững nhưng không phải là bất biến. Song con đường vận
            động, phát triển của bản sắc văn hóa phức tạp hơn nhiều so với các
            lĩnh vực kinh tế, chính trị. Nó không phải đi theo đường thẳng,
            không phải văn hóa thời đại sau bao giờ cũng cao hơn thời đại trước,
            có những yếu tố văn hóa cổ mà văn minh ngày nay chưa thể vượt qua.
            Bản sắc văn hóa dân tộc cũng vận động, biến đổi theo trình độ dân
            trí, qua giao lưu văn hóa thời đại, nhưng vận động, tiếp biến rồi
            cũng xoay quanh cái gốc, trở về cái cội nguồn. Nhiều dân tộc bị áp
            bức bóc lột, bị nô lệ, bị đàn áp bao thế kỷ, trình độ tuy còn lạc
            hậu nhưng vẫn bám trụ và vươn dậy trong thời đại văn minh công nghệ
            tin học để chứng minh sức mạnh tiềm ẩn trong bản sắc văn hóa. Bản
            sắc văn hóa dân tộc được tôi luyện, đúc kết qua các thế hệ nối tiếp
            nhau trong lịch sử, như dòng phù sa bồi tụ những gì tinh túy nhất
            làm nên sức sống trường tồn của dân tộc.
          </p>
          <p>
            Tất cả các quốc gia hiện nay đều chú trọng nghiên cứu di sản văn hóa
            của dân tộc mình, họ ý thức được rằng nếu không đề cao bản sắc văn
            hóa dân tộc thì tính đa đạng của văn hóa thế giới sẽ bị cạn kiệt do
            sự lai căng, pha tạp của các nền văn hóa. Tuy nhiên chúng ta cũng
            nhận thấy trong văn hóa dân tộc có nhiều yếu tố bảo thủ, níu kéo văn
            hóa trở về với quá khứ, làm cho văn hóa dân tộc khó thích nghi với
            thời đại mới. Xu hướng bảo thủ có mặt tích cực là tạo ra khả năng tự
            vệ, rào chắn có hiệu quả các cuộc xâm lăng văn hóa, nhưng bảo thủ sẽ
            dẫn tới loại trừ các yếu tố tích cực, hiện đại của văn hóa từ bên
            ngoài tác động vào.
          </p>
          <p>
            Kết luận: Phải đứng vững trên quan điểm phủ định biện chứng để kế
            thừa có chọn lọc, loại trừ yếu tố lạc hậu, bổ sung yếu tố mới, tiến
            bộ, phù hợp với sự phát triển của cuộc sống. Yếu tố hiện đại giúp
            văn hóa truyền thống thích nghi với sự phát triển, đồng thời nó đáp
            ứng được nhu cầu văn hóa ngày càng tăng lên của dân tộc. Bản sắc văn
            hóa dân tộc phải đứng vững trên đôi chân của mình để tiếp nhận các
            yếu tố hiện đại, làm cho các yếu tố hiện đại gia nhập và trở thành
            yếu tố văn hóa truyền thống.
          </p>
        </>
      ),
    },
  ];
  const commentData: any = [
    {
      key: "comment1",
      user: "Anh Dung",
      date: "03/06/2023",
      img: avtDefault,
      comment: "Văn hóa Việt Nam thật là đa dạng và phong phú !!!",
    },
    {
      key: "comment2",
      user: "Anh Dung",
      date: "03/06/2023",
      img: avtDefault,
      comment: "Văn hóa Việt Nam thật là đa dạng và phong phú !!!",
    },
    {
      key: "comment3",
      user: "Anh Dung",
      date: "03/06/2023",
      img: avtDefault,
      comment: "Văn hóa Việt Nam thật là đa dạng và phong phú !!!",
    },
    {
      key: "comment4",
      user: "Anh Dung",
      date: "03/06/2023",
      img: avtDefault,
      comment: "Văn hóa Việt Nam thật là đa dạng và phong phú !!!",
    },
    {
      key: "comment5",
      user: "Anh Dung",
      date: "03/06/2023",
      img: avtDefault,
      comment: "Văn hóa Việt Nam thật là đa dạng và phong phú !!!",
    },
  ];

  return (
    <div className="introduce-container">
      <BodyTitle />
      <ButtonFloatLeft />
      <PageContent
        showDateSubmitted
        title={"Giới thiệu về  bản sắc văn hóa dân tộc Việt Nam "}
        dateSubmitted={null}
        content={
          <div className="introduce-content">
            <div className="introduce-foreword">
              Trên thế giới, mỗi một quốc gia, mỗi một dân tộc sẽ có những bản
              sắc văn hóa riêng và hình thành nên nét đặc trưng của từng dân
              tộc. Văn hóa dân tộc chính là niềm tự hào và là món ăn tinh thần
              của người dân cả nước. Vậy bản sắc văn hóa dân tộc là gì? Làm thế
              nào để giữ gìn bản sắc văn hóa dân tộc?
            </div>
            {mainContentData && mainContentData?.length > 0 && (
              <ul className="menu-page-content">
                {mainContentData.map((item: any, index: number) => {
                  return (
                    <li
                      key={index}
                      onClick={() => {
                        let elm: any = document.getElementById(
                          `ref-scroll-${item.key}`
                        );
                        if (!elm?.getBoundingClientRect()?.top) return;
                        window.scrollTo(
                          0,
                          elm.getBoundingClientRect().top - 250
                        );
                      }}
                    >
                      <label.lg>
                        <strong>{item?.title || ""}</strong>
                      </label.lg>
                    </li>
                  );
                })}
              </ul>
            )}
            {mainContentData && mainContentData?.length > 0 && (
              <div className="detail-content">
                {mainContentData.map((item: any, index: number) => {
                  return (
                    <div key={index} className="dt-content">
                      <div
                        className="dt-title"
                        id={`${"ref-scroll-" + item.key}`}
                      >
                        <label.xl>{item?.title || ""}</label.xl>
                      </div>
                      <div className="dt-content">{item.content || ""}</div>
                    </div>
                  );
                })}
                <div className="comment-content">
                  <div className="total-coment">
                    <label.lg>
                      <strong>{`Bình luận (${
                        commentData?.length || 0
                      })`}</strong>
                    </label.lg>
                  </div>
                  {commentData &&
                    commentData?.length > 0 &&
                    commentData.map((item: any) => {
                      return (
                        <div className="comment-line" key={item.key}>
                          <img src={item.img} />
                          <div className="text-info">
                            <label.lg>
                              <strong>{item.user}</strong>
                            </label.lg>
                            <label.md>{item.date}</label.md>
                            <label.lg>{item.comment}</label.lg>
                          </div>
                        </div>
                      );
                    })}
                  <div className="submit-comment-form">
                    <label.lg>
                      <strong>Viết bình luận</strong>
                    </label.lg>
                    <div className="form-info">
                      <input.normal placeholder="Họ tên" />
                      <input.normal placeholder="Email" />
                    </div>
                    <input.comment rows="8" />
                    <button.primary title="Gửi bình luận" />
                  </div>
                </div>
              </div>
            )}
          </div>
        }
      />
    </div>
  );
}
