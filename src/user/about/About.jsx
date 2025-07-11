import React from "react";
import { Icon } from "@iconify/react";

import flag from "./assets/imgs/main-logo.png";
import { purposeData } from "./utils/purposeData";
import { useTranslation } from "react-i18next";
import classes from "./About.module.css";

export const About = () => {
  const { t } = useTranslation();
  const currentLang=localStorage.getItem('i18nextLng')

  return (
    <div>
      <div className={classes["container"]}>
        <div data-aos="fade-up" className={classes["main"]}>
          <div className={classes["left"]}>
            <div className={classes["flag"]}>
              <img className={classes["flag_img"]} src={flag} />
            </div>
          </div>
          <div className={classes["right"]}>
            <h1 className={classes["header"]}>{t('headerofAbout')}</h1>
            <p className={classes["about_olmazor"]}>
              {t('aboutDescrHead')}
            </p>
            <div className={classes["socials"]}>
              <div className={classes["all"]}>
                <a target="_blank" href="tel: +998712073142">
                  <div className={classes["phone"]}>
                    <Icon
                      className={classes["icon"]}
                      icon={"solar:phone-linear"}
                    />
                    <p>{t('numberofAbout')}</p>
                  </div>
                </a>
                <a target="_blank" href="mailto: digitalolmazor@gmail.com">
                  <div className={classes["mail"]}>
                    <Icon className={classes["icon"]} icon={"tabler:mail"} />
                    <p>{t('emailOfAbout')}</p>
                  </div>
                </a>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Olmazor+District+Khokimiyat/@41.3505431,69.223995,15z/data=!4m2!3m1!1s0x0:0x8db65df12b48409c?sa=X&ved=2ahUKEwjdideZ38OCAxWpExAIHVZHClwQ_BJ6BAgkEAA"
                >
                  <div className={classes["location"]}>
                    <Icon
                      className={classes["icon"]}
                      icon={"akar-icons:location"}
                    />
                    <p>{t('locationOfAbout')}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className={classes["maqsad"]}>
          <div className={classes["cards"]}>
            <div className={classes["first_"]}>
              {purposeData.map((value, index) => {
                return (
                  <div
                    data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
                    key={value.id}
                    className={classes["card1"]}
                  >
                    <div className={classes["h3_dv"]}>
                      <div className={classes["dv"]}></div>
                      <h3 className={classes["title"]}>{value[currentLang].title}</h3>
                    </div>
                    <p className={classes["descr"]}>{value[currentLang].descr}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
