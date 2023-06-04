import BodyTitle from "@/components/BodyTitle";
import "./index.less";
import { ButtonFloatLeft } from "@/components/Button";
import { label } from "@/components/Label";
import PageContent from "@/components/PageContent";

export default function Location() {
  const locationData = [
    {
      id: "lct1",
      name: "Bảo tàng Lâm Đồng",
      email: "baotangld@gmail.com",
      openTimeAM: "7h30 - 11h-30",
      openTimePM: "13h30 - 17h-30",
      address: "04 Đ. Hùng Vương, Phường 10, Đà Lạt",
      openTimeDesc: "Mở cửa tất cả các ngày trong tuần",
      image:
        "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/06/bao-tang-lamdong-docdao-vntrip-1.jpg",
    },
    {
      id: "lct2",
      name: "Viện bảo tàng lịch sử cung Điện Vua I Đà Lạt",
      email: "cungdienvua1@gmail.com",
      openTimeAM: "7h30 - 11h-30",
      openTimePM: "13h30 - 17h-30",
      openTimeDesc: "Mở cửa từ thứ 2 đến thứ 6",
      address: "Trần Quang Diệu, Phường 10, Đà Lạt",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/20/23/a8/getlstd-property-photo.jpg?w=1200&h=-1&s=1",
    },
    {
      id: "lct3",
      name: "XQ Đà Lạt Sử Quán",
      email: "dlsq@gmail.com",
      openTimeAM: "7h30 - 11h-30",
      openTimePM: "14h30 - 18h-30",
      openTimeDesc: "Mở cửa từ thứ 2 đến thứ 7",
      address: "80A Đường Mai Anh Đào, Phường 8, Đà Lạt",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/c5/d9/16/20190813-101654-largejpg.jpg?w=1200&h=-1&s=1",
    },
    {
      id: "lct4",
      name: "Bảo tàng 3D TrickLand",
      email: "trickland3d@gmail.com",
      openTimeAM: "7h30 - 11h-30",
      openTimePM: "14h30 - 18h-30",
      openTimeDesc: "Mở cửa tất cả các ngày trong tuần",
      address: "03 Đ. Lê Thị Hồng Gấm, Phường 1",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/1a/d2/98/img-20200307-194330-largejpg.jpg?w=800&h=-1&s=1",
    },
  ];
  return (
    <div className="location-container">
      <BodyTitle />
      <ButtonFloatLeft />
      <PageContent
        showDateSubmitted={false}
        title={null}
        dateSubmitted={null}
        content={
          <div className="location-content">
            {locationData &&
              locationData?.length > 0 &&
              locationData.map((item: any) => {
                return (
                  <div className="location-box" key={item.id}>
                    <img src={item.image} />
                    <ul className="location-info">
                      <li>
                        <label.lg>
                          <strong>{item.name}</strong>
                        </label.lg>
                      </li>
                      <li>
                        <label.lg>
                          <strong>{item.address}</strong>
                        </label.lg>
                      </li>
                      <li>
                        <label.lg>
                          <p style={{ color: "#3137B6", fontStyle: "italic" }}>
                            {item.email}
                          </p>
                        </label.lg>
                      </li>
                      <li>
                        <label.lg>
                          <strong>{item.openTimeDesc}</strong>
                        </label.lg>
                      </li>
                      <ul style={{ paddingLeft: 20 }}>
                        <li>
                          <label.lg>
                            <strong>Sáng: </strong>
                            {item.openTimeAM}
                          </label.lg>
                        </li>
                        <li>
                          <label.lg>
                            <strong>Chiều: </strong>
                            {item.openTimePM}
                          </label.lg>
                        </li>
                      </ul>
                    </ul>
                  </div>
                );
              })}
          </div>
        }
      />
    </div>
  );
}
