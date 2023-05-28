import pic1 from "@/assets/scenePic/pic1.jpg";
import pic2 from "@/assets/scenePic/pic2.jpg";
import pic3 from "@/assets/scenePic/pic3.jpg";
import pic4 from "@/assets/scenePic/pic4.jpg";
import { Carousel } from "antd";
import "./index.less";
export default function HomePage() {
  const carouselData = [pic1, pic2, pic3, pic4];
  return (
    <div className="homepage-container">
      <div className="carousel-container">
        <Carousel autoplay>
          {carouselData.map((item, index) => (
            <div key={index} className="carousel-img">
              <img src={item} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="homepage-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem
        nisl, auctor nec nisl a, egestas cursus mi. Vivamus eu dui consequat
        nisl tempor tempus non sit amet erat. Aenean facilisis ante auctor magna
        fringilla, vel vestibulum quam vehicula. Proin nec lacus nisl. Vivamus
        nunc elit, egestas at ligula eget, fringilla venenatis justo. Nulla
        semper finibus felis eget eleifend. Donec congue metus nec ex luctus
        aliquet. Aliquam metus metus, porta et faucibus vel, suscipit in nunc.
        Morbi pharetra massa ac elit posuere sodales. Nullam imperdiet quis
        neque at suscipit. Aenean dapibus nisi diam, sit amet blandit velit
        luctus sed. Donec a ipsum non sapien efficitur molestie. Sed iaculis
        odio sed turpis lobortis tristique. Sed condimentum nisl in volutpat
        pellentesque. Morbi tincidunt cursus lorem et elementum. Mauris a
        efficitur quam. Etiam consectetur porttitor euismod. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Maecenas eget porttitor eros. Nunc ex erat, viverra a convallis
        quis, suscipit eget nisi. Sed rutrum, diam non vehicula lacinia, ipsum
        erat gravida nisi, eu sollicitudin lacus mauris in enim. Maecenas
        volutpat, nunc id feugiat dapibus, erat justo semper lorem, vel interdum
        turpis sapien eget dolor. Praesent id lacus et ipsum dictum iaculis.
        Phasellus non iaculis diam. Nunc dapibus ipsum et condimentum congue.
        Morbi tincidunt sagittis libero non malesuada. Aenean eu justo dolor.
        Vestibulum congue massa at felis feugiat aliquet. Sed sollicitudin
        dictum risus sed cursus. Aliquam interdum lectus dolor, sed commodo
        lorem accumsan viverra. In eu nisl eget eros euismod faucibus. Fusce at
        consectetur mi, in eleifend elit. Vivamus a bibendum lorem. Aliquam eget
        tellus auctor, facilisis est vel, laoreet lacus. Donec pharetra mauris
        condimentum pellentesque facilisis. Mauris sit amet mauris eu diam
        pulvinar pharetra. Pellentesque at pretium elit, vel semper turpis. Sed
        feugiat nisl elit, ut sodales sapien consectetur eu. Sed maximus augue
        sem, at lobortis tellus suscipit ut. Ut id odio quis erat maximus
        facilisis. Vestibulum et accumsan mauris. Cras ac fermentum tortor, id
        euismod quam. In vel dui eget elit scelerisque lobortis vitae vitae
        neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at
        odio erat. Donec nunc nibh, tempor at arcu nec, sollicitudin porttitor
        turpis. Sed sed arcu eget orci condimentum efficitur. Aliquam sagittis
        risus magna, vitae finibus diam luctus et. Nulla dictum justo suscipit
        pharetra posuere. Aliquam erat volutpat. Nunc sem lectus, luctus a quam
        viverra, semper iaculis neque. Cras gravida eu sem sed venenatis.
        Phasellus tristique velit sed ornare tincidunt. Sed vitae lectus congue
        orci tincidunt volutpat non euismod leo. Aliquam vitae lobortis magna.
        Donec vitae tincidunt enim. In enim arcu, convallis vel tortor quis,
        mollis feugiat ante. Pellentesque pharetra, orci non sollicitudin
        vehicula, elit ipsum lacinia ipsum, id porta erat ante in ipsum.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Ut dignissim nunc lectus, a feugiat elit
        commodo nec.
      </div>
    </div>
  );
}
