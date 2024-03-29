import React from "react";
import "../css/Anout.css"; // Import CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="student-images">
        <img
          src={
            " https://img.mako.co.il/2022/05/10/shutterstock_AntonioGuillem_re_autoOrient_i.jpg"
          }
          alt="Student 1"
        />
        <img
          src={
            "https://images.globes.co.il/images/NewGlobes/big_image_800/2019/stu800x392.2019116T134511.jpg"
          }
          alt="Student 2"
        />
        <img
          src={
            " https://globalnetil.com/wp-content/uploads/2021/07/istockphoto-1066324992-612x612-1.jpg"
          }
          alt="Student 3"
        />
        <img
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlYyWm0ZldOZlxh5pCuJLaxb1vOGwEsxND-g&usqp=CAU"
          }
          alt="Student 4"
        />
      </div>
      <p>
        My name is Gal Katzav, and I have a strong passion for exploring
        universities around the world. Since I was young, I've always dreamed of
        studying in a prestigious institution abroad. I am deeply interested in
        the academic ranking of universities globally and constantly follow
        updates in this regard.
      </p>
      <p>
        My fascination with universities stems from my desire to pursue higher
        education in a reputed institution that offers excellent academic
        opportunities and fosters a vibrant international community. I believe
        that studying in such an environment will not only broaden my academic
        horizons but also provide invaluable experiences and connections.
      </p>
      <p>
        Apart from academic pursuits, I am also passionate about cultural
        exchange and learning from diverse perspectives. I see studying abroad
        as an opportunity to immerse myself in different cultures, languages,
        and traditions, enriching my personal and professional growth.
      </p>
      <p>
        Through this website, I aim to share information about universities
        around the world, their unique characteristics, and the opportunities
        they offer to students. My goal is to inspire and empower others who
        share similar aspirations to pursue their dreams of studying in renowned
        institutions globally.
      </p>
    </div>
  );
};

export default About;
