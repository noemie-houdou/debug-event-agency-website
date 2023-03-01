/* istanbul ignore file */
import PropTypes from "prop-types";
import "./style.scss";

const Logo = ({ size }) => (
  <div className="Logo">
    <svg
      width={size === "large" ? "166" : "101"}
      height={size === "large" ? "57" : "35"}
      viewBox="0 0 166 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M84.08 49.4799C82.4267 49.4799 80.9973 49.1119 79.792 48.3759C78.5867 47.6293 77.6533 46.5786 76.992 45.2239C76.3307 43.8586 76 42.2479 76 40.3919C76 38.5039 76.3253 36.8773 76.976 35.5119C77.6373 34.1359 78.5653 33.0799 79.76 32.3439C80.9653 31.6079 82.3947 31.2399 84.048 31.2399C85.7227 31.2399 87.152 31.6239 88.336 32.3919C89.5307 33.1493 90.4373 34.2479 91.056 35.6879C91.6853 37.1279 91.984 38.8613 91.952 40.8879H90.032V40.2479C89.9787 37.8799 89.4453 36.0773 88.432 34.8399C87.4187 33.6026 85.968 32.9839 84.08 32.9839C82.128 32.9839 80.6187 33.6293 79.552 34.9199C78.496 36.1999 77.968 38.0133 77.968 40.3599C77.968 42.6853 78.496 44.4879 79.552 45.7679C80.6187 47.0479 82.1173 47.6879 84.048 47.6879C85.3813 47.6879 86.544 47.3786 87.536 46.7599C88.5387 46.1306 89.3333 45.2346 89.92 44.0719L91.584 44.8079C90.8907 46.3013 89.888 47.4533 88.576 48.2639C87.264 49.0746 85.7653 49.4799 84.08 49.4799ZM77.264 40.8879V39.2239H90.912V40.8879H77.264Z" fill="url(#paint0_linear_2_222)" />
      <path d="M98.2582 48.9999L91.9862 31.7199H93.8902L99.2342 46.4879L104.562 31.7199H106.482L100.21 48.9999H98.2582Z" fill="url(#paint1_linear_2_222)" />
      <path d="M114.583 49.4799C112.929 49.4799 111.5 49.1119 110.295 48.3759C109.089 47.6293 108.156 46.5786 107.495 45.2239C106.833 43.8586 106.503 42.2479 106.503 40.3919C106.503 38.5039 106.828 36.8773 107.478 35.5119C108.14 34.1359 109.068 33.0799 110.263 32.3439C111.468 31.6079 112.897 31.2399 114.551 31.2399C116.225 31.2399 117.655 31.6239 118.839 32.3919C120.033 33.1493 120.94 34.2479 121.559 35.6879C122.188 37.1279 122.487 38.8613 122.455 40.8879H120.535V40.2479C120.481 37.8799 119.948 36.0773 118.935 34.8399C117.921 33.6026 116.471 32.9839 114.583 32.9839C112.631 32.9839 111.121 33.6293 110.055 34.9199C108.999 36.1999 108.471 38.0133 108.471 40.3599C108.471 42.6853 108.999 44.4879 110.055 45.7679C111.121 47.0479 112.62 47.6879 114.551 47.6879C115.884 47.6879 117.047 47.3786 118.039 46.7599C119.041 46.1306 119.836 45.2346 120.423 44.0719L122.087 44.8079C121.393 46.3013 120.391 47.4533 119.079 48.2639C117.767 49.0746 116.268 49.4799 114.583 49.4799ZM107.767 40.8879V39.2239H121.415V40.8879H107.767Z" fill="url(#paint2_linear_2_222)" />
      <path d="M136.901 48.9999V40.0079C136.901 38.9199 136.789 37.9493 136.565 37.0959C136.352 36.2426 136.021 35.5173 135.573 34.9199C135.136 34.3226 134.581 33.8693 133.909 33.5599C133.248 33.2506 132.464 33.0959 131.557 33.0959C130.618 33.0959 129.802 33.2613 129.109 33.5919C128.426 33.9119 127.861 34.3653 127.413 34.9519C126.976 35.5386 126.645 36.2373 126.421 37.0479C126.208 37.8479 126.101 38.7226 126.101 39.6719L124.645 39.4959C124.645 37.6293 124.96 36.0933 125.589 34.8879C126.229 33.6719 127.088 32.7759 128.165 32.1999C129.242 31.6133 130.453 31.3199 131.797 31.3199C132.746 31.3199 133.594 31.4586 134.341 31.7359C135.098 32.0133 135.754 32.4079 136.309 32.9199C136.864 33.4213 137.322 34.0186 137.685 34.7119C138.048 35.3946 138.314 36.1466 138.485 36.9679C138.666 37.7893 138.757 38.6479 138.757 39.5439V48.9999H136.901ZM124.245 48.9999V31.7199H125.925V35.6079H126.101V48.9999H124.245Z" fill="url(#paint3_linear_2_222)" />
      <path d="M150.789 48.9999C149.872 49.2026 148.965 49.2773 148.069 49.2239C147.173 49.1813 146.373 48.9839 145.669 48.6319C144.976 48.2693 144.453 47.7146 144.101 46.9679C143.813 46.3599 143.653 45.7466 143.621 45.1279C143.589 44.5093 143.573 43.7999 143.573 42.9999V26.9199H145.429V42.9679C145.429 43.6933 145.435 44.2959 145.445 44.7759C145.467 45.2453 145.579 45.6773 145.781 46.0719C146.165 46.8079 146.773 47.2559 147.605 47.4159C148.437 47.5653 149.499 47.5386 150.789 47.3359V48.9999ZM139.701 33.3999V31.7199H150.789V33.3999H139.701Z" fill="url(#paint4_linear_2_222)" />
      <path d="M159.194 49.4479C157.199 49.4479 155.551 49.0266 154.25 48.1839C152.959 47.3413 152.159 46.1679 151.85 44.6639L153.738 44.3439C154.005 45.3679 154.634 46.1839 155.626 46.7919C156.618 47.3999 157.834 47.7039 159.274 47.7039C160.703 47.7039 161.839 47.3999 162.682 46.7919C163.525 46.1839 163.946 45.3519 163.946 44.2959C163.946 43.7199 163.813 43.2506 163.546 42.8879C163.29 42.5146 162.778 42.1733 162.01 41.8639C161.242 41.5546 160.101 41.1919 158.586 40.7759C156.986 40.3493 155.733 39.9226 154.826 39.4959C153.93 39.0693 153.295 38.5839 152.922 38.0399C152.559 37.4959 152.378 36.8293 152.378 36.0399C152.378 35.0906 152.65 34.2586 153.194 33.5439C153.738 32.8186 154.495 32.2533 155.466 31.8479C156.447 31.4426 157.578 31.2399 158.858 31.2399C160.138 31.2399 161.29 31.4533 162.314 31.8799C163.338 32.2959 164.165 32.8826 164.794 33.6399C165.423 34.3866 165.786 35.2559 165.882 36.2479L163.994 36.5999C163.813 35.4906 163.253 34.6159 162.314 33.9759C161.375 33.3253 160.202 32.9946 158.794 32.9839C157.461 32.9626 156.373 33.2293 155.53 33.7839C154.687 34.3279 154.266 35.0479 154.266 35.9439C154.266 36.4559 154.41 36.8933 154.698 37.2559C154.997 37.6079 155.519 37.9333 156.266 38.2319C157.013 38.5306 158.069 38.8506 159.434 39.1919C161.098 39.6186 162.394 40.0559 163.322 40.5039C164.261 40.9519 164.922 41.4799 165.306 42.0879C165.69 42.6853 165.882 43.4266 165.882 44.3119C165.882 45.9119 165.285 47.1706 164.09 48.0879C162.906 48.9946 161.274 49.4479 159.194 49.4479Z" fill="url(#paint5_linear_2_222)" />
      <path d="M3.05286 57L14.2467 29.0444H0V23H21V29.0444L9.85242 57H3.05286Z" fill="url(#paint6_linear_2_222)" />
      <path d="M63.056 55V49.3806H48V44.0681L58.8791 21H65.3687L54.4897 44.0681H63.056V35.2139H68.8142V44.0681H72V49.3806H68.8142V55H63.056Z" fill="url(#paint7_linear_2_222)" />
      <path d="M24 49V44.5654L37.0535 32.9721C38.0706 32.0711 38.777 31.2193 39.1726 30.4169C39.5681 29.6144 39.7659 28.8401 39.7659 28.094C39.7659 27.0804 39.5469 26.1794 39.109 25.391C38.671 24.5886 38.0636 23.955 37.2866 23.4905C36.5237 23.0259 35.6408 22.7936 34.6377 22.7936C33.5782 22.7936 32.6387 23.04 31.8194 23.5327C31.0141 24.0114 30.3855 24.6519 29.9334 25.4544C29.4813 26.2568 29.2694 27.1226 29.2977 28.0518H24.0424C24.0424 26.0245 24.4944 24.2577 25.3986 22.7514C26.3169 21.245 27.5742 20.0765 29.1705 19.2459C30.781 18.4153 32.6387 18 34.7437 18C36.6932 18 38.445 18.4364 39.999 19.3093C41.553 20.168 42.775 21.3647 43.665 22.8992C44.555 24.4196 45 26.1723 45 28.1574C45 29.6074 44.8022 30.8252 44.4067 31.8106C44.0111 32.7961 43.4178 33.7041 42.6266 34.5347C41.8496 35.3653 40.8819 36.2875 39.7235 37.3011L30.4632 45.4734L29.997 44.2064H45V49H24Z" fill="url(#paint8_linear_2_222)" />
      <defs>
        <linearGradient id="paint0_linear_2_222" x1="77.22" y1="41" x2="173.72" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3300FF" />
          <stop offset="1" stopColor="#3300FF" />
        </linearGradient>
        <linearGradient id="paint1_linear_2_222" x1="77.22" y1="41" x2="173.72" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3300FF" />
          <stop offset="1" stopColor="#3300FF" />
        </linearGradient>
        <linearGradient id="paint2_linear_2_222" x1="77.22" y1="41" x2="173.72" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3300FF" />
          <stop offset="1" stopColor="#3300FF" />
        </linearGradient>
        <linearGradient id="paint3_linear_2_222" x1="77.22" y1="41" x2="173.72" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3300FF" />
          <stop offset="1" stopColor="#3300FF" />
        </linearGradient>
        <linearGradient id="paint4_linear_2_222" x1="77.22" y1="41" x2="173.72" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3300FF" />
          <stop offset="1" stopColor="#3300FF" />
        </linearGradient>
        <linearGradient id="paint5_linear_2_222" x1="77.22" y1="41" x2="173.72" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3300FF" />
          <stop offset="1" stopColor="#3300FF" />
        </linearGradient>
        <linearGradient id="paint6_linear_2_222" x1="10.5" y1="23" x2="10.5" y2="57" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9278FE" />
          <stop offset="1" stopColor="#613CFB" />
        </linearGradient>
        <linearGradient id="paint7_linear_2_222" x1="60" y1="21" x2="60" y2="55" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A691FC" />
          <stop offset="1" stopColor="#613CFB" />
        </linearGradient>
        <linearGradient id="paint8_linear_2_222" x1="34.5" y1="18" x2="34.5" y2="49" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A691FC" />
          <stop offset="1" stopColor="#613CFB" />
        </linearGradient>
      </defs>

    </svg>
  </div>
);

Logo.propTypes = {
  size: PropTypes.string,
}
Logo.defaultProps = {
  size: 'small'
}

export default Logo;