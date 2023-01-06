import Container from "../../UI/Containter";
import '../../../css/technology/technology.css';
import Language from "./languages/Language";
import '../../../css/laptop.css';

const Technology = () => {
    return (
        <div className='technologies'>
        <Container>
            <div className='logo'>
                <svg width="87" height="219" viewBox="0 0 87 219" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 52.2619C0.702963 52.2866 1.40594 51.5639 1.72772 52.6876C2.39603 56.2371 0.039615 59.0886 0.707925 62.6381L1.84157 62.8955C1.34652 65.643 0.722772 68.4994 0.193075 71.4251C0.35809 76.8013 0.628706 82.1544 1.00494 87.4844C1.42078 87.3457 1.80197 87.2814 1.95543 87.8111C2.25741 90.0289 1.86138 93.0982 1.74257 96.2813C1.80692 96.7467 1.87622 97.2169 1.93563 97.6823C2.15767 97.9561 2.47695 98.1334 2.82672 98.1773C2.78711 99.6179 2.6782 100.895 2.55939 102.083C4.79204 117.697 7.42073 133.553 10.0197 150.741C11.0643 154.375 12.1088 158.013 12.589 161.513C13.0246 166.701 12.2821 173.325 12.1534 178.385C16.1632 177.607 18.1285 189.939 22.183 187.479C22.0988 190.85 21.9651 195.894 23.0988 196.172C26.4997 196.959 30.4254 199.553 32.4749 208.508C32.97 212.013 31.5245 217.419 32.2126 218.632C33.3017 220.577 34.6086 214.087 35.7026 216.033C36.9303 189.983 35.4551 164.899 35.4898 138.672C33.7126 129.761 32.9304 69.5291 33.7175 54.0639C33.7175 53.5936 33.6878 53.1233 33.668 52.6579C33.8858 44.2174 33.5838 33.97 32.0542 26.8314C31.1136 23.5542 29.9651 20.2275 28.8562 16.9305C28.1928 18.4701 27.5344 19.9008 26.876 21.1384C26.9651 17.7622 27.0493 14.386 26.3265 13.089C24.6087 5.90589 22.6038 9.97515 19.8909 12.7375C18.6978 14.7177 16.8612 12.0395 15.6434 15.1533C15.7028 12.9108 15.7276 11.7821 15.7919 9.52962C14.6533 9.27219 16.3711 16.4602 14.5098 14.8959C14.9454 12.7326 14.2474 10.3068 14.3068 8.06427C12.7672 8.84149 13.7276 15.8464 12.2128 15.4899C11.8613 14.2771 14.2771 9.17814 12.386 8.7425C12.0098 8.65834 11.9504 10.9058 11.9207 12.0296C11.3415 5.09896 9.53952 1.29702 7.46528 7.6138C7.51974 5.42075 8.3217 2.31681 8.06428 0L8.03458 0C7.97022 1.15841 7.57914 3.15344 7.53954 4.22273L7.64349 0.262373C7.37617 0.470292 7.11874 0.707911 6.85637 0.955433C6.60409 1.93572 6.45314 2.93932 6.40588 3.95045C6.40588 3.07917 6.45044 2.20295 6.47519 1.32672C5.82612 2.02448 5.2335 2.7727 4.70292 3.56432C3.48511 6.67815 1.698 9.66327 1.65345 11.3464C0.757417 24.9899 0.123761 38.663 0 52.2619Z" fill="url(#paint0_linear_450_842)"/>
                <path d="M50.3887 52.2619C51.0916 52.2866 51.7946 51.5639 52.1213 52.6876C52.7847 56.2371 50.4283 59.0886 51.0966 62.6381L52.2352 62.8955C51.7401 65.643 51.1164 68.4994 50.5817 71.4251C50.7468 76.8013 51.019 82.1544 51.3986 87.4844C51.8144 87.3457 52.1956 87.2814 52.3441 87.8111C52.651 90.0289 52.2501 93.0982 52.1312 96.2813C52.2005 96.7467 52.2649 97.2169 52.3292 97.6823C52.5494 97.9558 52.8671 98.1332 53.2154 98.1773C53.1807 99.6179 53.0718 100.895 52.948 102.083C55.1857 117.697 57.8143 133.553 60.4084 150.741C61.4579 154.375 62.5024 158.013 62.9826 161.513C63.4183 166.701 62.6757 173.325 62.542 178.385C66.5568 177.607 68.5172 189.939 72.5766 187.479C72.4875 190.85 72.3538 195.894 73.4924 196.172C76.8934 196.959 80.8141 199.553 82.8636 208.508C83.3587 212.013 81.9132 217.419 82.6013 218.632C83.6904 220.577 85.0022 214.087 86.0666 216.033C87.2993 189.983 85.824 164.899 85.8537 138.672C84.0765 129.761 83.2943 69.5291 84.0815 54.0639C84.0815 53.5936 84.0518 53.1233 84.032 52.6579C84.2547 44.2174 83.9478 33.97 82.4231 26.8314C81.4775 23.5542 80.329 20.2275 79.2201 16.9305C78.5617 18.4701 77.8983 19.9008 77.2399 21.1384C77.3241 17.7622 77.4132 14.386 76.6855 13.089C74.9726 5.90589 72.9627 9.97515 70.2499 12.7375C69.0568 14.7177 67.2252 12.0395 66.0073 15.1533C66.0618 12.9108 66.0915 11.7821 66.1509 9.52962C65.0173 9.27219 66.7301 16.4602 64.8687 14.8959C65.3044 12.7326 64.6113 10.3068 64.6707 8.06427C63.1262 8.84149 64.0866 15.8464 62.5717 15.4899C62.2252 14.2771 64.641 9.17814 62.7499 8.7425C62.3688 8.65834 62.3143 10.9058 62.2846 12.0296C61.7005 5.09896 59.8985 1.29702 57.8292 7.6138C57.8886 5.42075 58.6906 2.31681 58.4282 0L58.3985 0C58.3341 1.15841 57.9431 3.15344 57.9035 4.22273C57.9381 2.91086 57.9728 1.58909 58.0074 0.262373C57.7401 0.470292 57.4777 0.707911 57.2153 0.955433C56.9623 1.9354 56.813 2.93925 56.7698 3.95045C56.7698 3.07917 56.8144 2.20295 56.8342 1.32672C56.1867 2.0246 55.5958 2.77281 55.0669 3.56432C53.8441 6.67815 52.057 9.66327 52.0124 11.3464C51.1511 24.9899 50.5174 38.663 50.3887 52.2619Z" fill="url(#paint1_linear_450_842)"/>
                <defs>
                <linearGradient id="paint0_linear_450_842" x1="18.0958" y1="0" x2="18.0958" y2="219" gradientUnits="userSpaceOnUse">
                <stop offset="0.25" stopColor="#4ACB8F"/>
                <stop offset="1" stopColor="#338DDE"/>
                </linearGradient>
                <linearGradient id="paint1_linear_450_842" x1="68.4737" y1="0" x2="68.4737" y2="219" gradientUnits="userSpaceOnUse">
                <stop offset="0.25" stopColor="#4ACB8F"/>
                <stop offset="1" stopColor="#338DDE"/>
                </linearGradient>
                </defs>
                </svg>
            </div>
            <div className="flex-container-technology">
                <div className="Gilroy-700 technology-title">Creating digital innovations with the latest <span>technologies</span></div>
                <div className="Montserrat-400 technology-text">Our team consists of enthusiastic technologists who love bringing real world solutions to our clients’ problems. Our ideas stem from a deep understanding of our clients’ markets, solutions, and visions.</div>
                <div className="languages"><Language /></div>
            </div>
        </Container>
        </div>
    )
}

export default Technology;
