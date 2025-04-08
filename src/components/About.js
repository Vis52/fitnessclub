import React from 'react';
import './About.css'; // Import the external CSS file

const about = () => {
  return (
    <div className='jk'>
      <header className="header">
        <h1>Welcome to Our Women's Fitness Center</h1>
      </header>

      <div className="container">
        <section>
          <h2 className="section-title">Empowering Women Through Fitness</h2>
          <p className="paragraph">
            At our fitness center, we are committed to providing a comprehensive fitness experience designed specifically for women. Our mission is to help you achieve your personal fitness goals, whether it’s building strength, improving flexibility, or enhancing overall well-being, in a space that caters to your unique needs.
          </p>
          <p className="paragraph">
            We focus on offering the best in fitness equipment, personalized training programs, and expert guidance that will leave you feeling motivated, empowered, and confident.
          </p>
        </section>

        <section>
          <h2 className="section-title">A Place for Every men</h2>
          <p className="paragraph">
            We believe in offering more than just a place to work out – we provide a supportive and luxurious environment where you can thrive. Our state-of-the-art equipment and innovative fitness programs are tailored to meet the diverse needs of women, and we ensure that you receive individualized attention from our experienced trainers.
          </p>
          <p className="paragraph">
            Our training is aimed at transforming both your body and mindset, helping you feel your absolute best. Whether you're new to fitness or a seasoned athlete, we offer programs that align with your personal fitness journey, ensuring you feel at home every time you step through our doors.
          </p>
        </section>

        <section>
          <h2 className="section-title">Our Vision</h2>
          <p className="paragraph">
            Our founder, G. Khatter, envisioned a fitness space where women could work on their health in an exclusive, private setting that prioritizes both physical and mental well-being. The center is designed to provide a premium and private fitness experience with an emphasis on health, wellness, and results.
          </p>
          <p className="paragraph">
            We offer specialized programs, health food bars for nourishing your body, and a community of like-minded individuals who share your commitment to living a healthy lifestyle.
          </p>
        </section>

        <section>
          <h2 className="section-title">Our Locations</h2>
          <p className="paragraph">
            We are located in key areas across New Delhi, including:
          </p>
          <ul className="locations">
            {/* <li>Pitampura</li> */}
            <li>Rajouri Garden</li>
            <li>Patel Nagar</li>
            <li>Vikas Puri</li>
            <li>Janak Puri</li>
            <li>Model Town</li>
            <li>Dayanand Vihar</li>
            <li>Punjabi Bagh</li>
            <li>Malviya Nagar</li>
            <li>Paschim Vihar</li>
          </ul><p>
          <iframe className='lim' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14005.414667251562!2d77.14586808715822!3d28.6491273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03f1566a6f19%3A0x755a1485b3730872!2sThe%20Wellness%20Club%20Gym%20Xpress%20Patel%20nagar!5e0!3m2!1sen!2sin!4v1743577324828!5m2!1sen!2sin" width="800" height="600" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          {/* <img  className='coy'src={map} alt=''/> */}
        </section>
        <br/>
        <br/>

        <section>
          <h2 className="section-title">Join Us Today</h2>
          <p className="paragraph">
            If you’re looking for a fitness center that offers personalized care and attention to your individual fitness needs, look no further. Join us and take the first step toward a stronger, healthier, and more empowered version of yourself.
          </p>
          <a href="#" className="cta">Join Now</a>
        </section>
      </div>
    </div>
  );
};

export default about;
