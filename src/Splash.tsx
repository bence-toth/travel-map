import "./Splash.css";

interface SplashProps {
  onHideSplash: () => void;
}

const Splash = ({ onHideSplash }: SplashProps) => (
  <div className="splash">
    <section>
      <h1>Dear Zsófi,</h1>
      <p>
        I just wanted to let you know how much I appreciate you and how
        important you are to me. You are such a wonderful partner and I am so
        grateful to have you in my life.
      </p>
      <p>
        We have been through a lot together over the past almost two years, and
        I can’t imagine going on this journey without you by my side. You are my
        anchor and my compass, and I am so thankful for everything.
      </p>
      <p>
        I wanted to give you a special gift this Christmas to show you how much
        you mean to me. I know we have both enjoyed traveling together and
        exploring new places, so I built this app just for you in which you can
        see all the countries we have visited together. I hope it will remind
        you of all the amazing memories we have shared and will help us plan
        even more adventures in the future.
      </p>
      <p>
        Thank you for being the most amazing partner anyone could ever ask for.
        I love you more than words can say.
      </p>
    </section>
    <div className="splash-button-wrapper">
      <button onClick={onHideSplash}>Let’s get started</button>
    </div>
  </div>
);

export default Splash;
