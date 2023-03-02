import styles from "./LinksContacts.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import ExternalLink from "../components/ExternalLink";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import soundCloudLogo from "../assets/soundcloud.svg";
import BehanceLogo from "../assets/behance.svg";

const LinksContacts = () => {
  return (
    <div id={styles.linksContainer}>
      <div className={styles.cards}>
        <h3>Social</h3>

        <div className={styles.icons}>
          <ExternalLink
            url={
              "https://twitter.com/j_gergely?fbclid=IwAR0TL8pmxq6FaWOJgz4SPKvfu7SO-0eI2onlDOrfmWwS1Obwdpn0JnUST7U"
            }
          >
            <TwitterIcon sx={{fontSize: "3rem", color: "#1d9bf0"}}/>
          </ExternalLink>
          <ExternalLink url={"https://www.facebook.com/szabo.gergely.925"}>
            <FacebookIcon sx={{fontSize: "3rem", color: "#1d9bf0"}} />
          </ExternalLink>
          <ExternalLink
            url={
              "https://www.instagram.com/szabojgergely/?fbclid=IwAR3qEKzyhhfKcs5c7IwnAoT4X8xkBW254C1SXLcKA8ZL4_U-vibkp-UacEs"
            }
          >
            <InstagramIcon sx={{fontSize: "3rem"}}/>
          </ExternalLink>
        </div>
      </div>
      <div className={styles.cards}>
        <h3>More Artworks</h3>
        <div className={styles.icons}>
          <ExternalLink
            url={
              "https://hu.pinterest.com/szgpostalada/?fbclid=IwAR0RgNU_HBBcrEAI7kwx_3eVBeXnvGYLsYSwz014hhrZiPiUEVk1u1I8s2Y"
            }
          >
            <PinterestIcon sx={{fontSize: "3rem", color: "#bd081c"}}/>
          </ExternalLink>

          <ExternalLink
            url={
              "https://www.behance.net/szgpostalada?fbclid=IwAR2pCb_NBvkpu5aXZMc-_XcLGHsoxnP83sju31q0vRzW6BYzOhNYUcEex1I"
            }
          >
            <img src={BehanceLogo} alt="Behance logo" className={styles.logo} />
          </ExternalLink>
        </div>
      </div>
      <div className={styles.cards}>
        <h3>Music</h3>
        <div className={styles.icons}>
          <ExternalLink url={"https://www.youtube.com/SzaboJGergely"}>
            <YouTubeIcon sx={{fontSize: "3rem", color: "#ff0000"}}/>
          </ExternalLink>
          {/* <ExternalLink
          url={"https://szgdd-dalok.blogspot.hu/?fbclid=IwAR3AV2Hnz03s-ZlJ-JQeVlvfRqJnHwUE-0vN7ZRGBSioRt4QMAYcjhxhJs8"}
          >
            SzGDD-dalok
          </ExternalLink> */}
          <ExternalLink
            url={
              "https://soundcloud.com/szgpostalada?fbclid=IwAR0CUOSZpk7mHpkfCgPRuz_9e3rrYYIAcOM6X2Nf--ILz1V5mk6dg8OVduQ"
            }
          >
            <img
              src={soundCloudLogo}
              alt="SoundCloud logo"
              className={styles.logo}
            />
          </ExternalLink>
        </div>
      </div>
      <div className={styles.cards}>
        <h3>Pojects</h3>
        <div className={styles.textUrls}>
          <ExternalLink
            url={
              "https://vilagokharca2.wixsite.com/regeny?fbclid=IwAR2mycl5M_qOR56-jyxxvwCqcXoMKXsR1kGVzgIYysDWrPvJ4UDn3Q5t_nw"
            }
          >
            Világok harca: a marsi invázió után
          </ExternalLink>
          <ExternalLink
            url={
              "https://www.kickstarter.com/projects/thelastarrival/the-last-arrival-iv-0"
            }
          >
            The Last Arrival
          </ExternalLink>
        </div>
      </div>
      <div className={styles.cards}>
        <h3>Blogs</h3>
        <div className={styles.textUrls}>
          <ExternalLink
            url={
              "https://szabo-j-gergely.blogspot.com/?fbclid=IwAR1EUtsIzL0aDeI00NHaYu0D1CHbyEFjg5tmGx1hcu5on2eVqX8IHP0aQv0"
            }
          >
            Fejezetek Lily és Sophie üzeneteiből
          </ExternalLink>

          <ExternalLink
            url={
              "https://modartel.blogspot.com/?fbclid=IwAR1tdbhT7APylRKnTA4ThAW4sA0rkiczxUXBa1ASkih4F0ENs-g7wSD9W4Y"
            }
          >
            Modellezési betekintő
          </ExternalLink>
        </div>
      </div>
      <div className={styles.cards}>
        <h3>Curriculum</h3>
        <div className={styles.textUrls}>
          <ExternalLink
            url={"https://www.works.io/gergely-j-szabo/curriculum-vitae"}
          >
            Curriculum
          </ExternalLink>
        </div>
      </div>
      <div className={styles.cards}>
        <h3>Contact</h3>
        <div style={{ textAlign: "center" }} className={styles.textUrls}>
          szgpostalada@gmail.com
        </div>
      </div>
    </div>
  );
};

export default LinksContacts;
