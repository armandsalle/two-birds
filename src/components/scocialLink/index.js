import React from "react"
import { socialEnter, socialLeave } from "../../animations/cursor"

const SocialLink = ({ to = "#", is = "twitter" }) => {
  const icones = {
    twitter: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.6305 29.0884C19.2869 29.0684 18.9539 29.0177 18.6255 28.9328C17.8959 28.7441 17.2561 28.3922 16.6989 27.8832C16.1506 27.3823 15.7531 26.7816 15.4957 26.0859C15.4378 25.9293 15.4185 25.9106 15.606 25.9412C16.1623 26.032 16.7163 26.0119 17.2666 25.8899C17.3182 25.8785 17.3694 25.8652 17.424 25.8519C17.4045 25.8131 17.3706 25.8191 17.3447 25.8129C16.5948 25.6316 15.9306 25.2876 15.3574 24.7676C14.5422 24.028 14.0604 23.1097 13.8954 22.0225C13.8665 21.8317 13.8496 21.6387 13.8535 21.4447C13.8557 21.335 13.8612 21.3295 13.9547 21.3788C14.4 21.6135 14.872 21.7672 15.3683 21.8445C15.5281 21.8693 15.689 21.8917 15.8713 21.8883C15.7388 21.7833 15.619 21.6933 15.5047 21.5969C14.799 21.0015 14.3214 20.2567 14.0635 19.3697C13.9228 18.8855 13.8668 18.3897 13.8929 17.887C13.9221 17.3264 14.0488 16.7868 14.2783 16.2732C14.3329 16.151 14.393 16.0317 14.4555 15.9132C14.4922 15.8436 14.5189 15.8414 14.5673 15.9009C14.873 16.2772 15.2007 16.6335 15.5493 16.9698C16.3378 17.7302 17.2065 18.3831 18.1587 18.9238C18.8603 19.3222 19.5921 19.6531 20.3559 19.9111C21.1108 20.1662 21.8822 20.3537 22.672 20.4634C23.0156 20.5111 23.3603 20.546 23.7064 20.5676C23.8219 20.5747 23.8263 20.5658 23.8045 20.4555C23.6334 19.5904 23.7005 18.7442 24.0127 17.9198C24.2825 17.2075 24.7118 16.6058 25.2847 16.1066C25.8038 15.6542 26.395 15.3354 27.0591 15.1576C27.5433 15.0279 28.0352 14.9763 28.5383 15.0101C29.3575 15.0651 30.1039 15.3243 30.7843 15.7797C31.0339 15.9468 31.2655 16.1379 31.4714 16.3578C31.5247 16.4147 31.5766 16.4277 31.6525 16.4116C32.3288 16.2686 32.9796 16.0506 33.6073 15.7606C33.8608 15.6434 34.1065 15.5119 34.349 15.3738C34.3641 15.3651 34.378 15.352 34.4161 15.3618C34.0649 16.4112 33.4174 17.2215 32.4979 17.8256C32.9307 17.7808 33.3531 17.6964 33.769 17.5816C34.1866 17.4663 34.594 17.3204 34.9908 17.1465C35.0134 17.1804 34.9884 17.1969 34.9767 17.2143C34.7382 17.5705 34.4705 17.9036 34.1838 18.222C33.7768 18.6741 33.3259 19.0768 32.8379 19.4383C32.7915 19.4727 32.7744 19.5122 32.7774 19.5671C32.7837 19.6859 32.7921 19.8047 32.7923 19.9235C32.7937 20.9809 32.6745 22.0238 32.4264 23.0524C32.1585 24.1634 31.758 25.2236 31.2251 26.2328C30.7556 27.1221 30.1929 27.9482 29.5353 28.7096C28.7768 29.5879 27.9151 30.3467 26.9456 30.9812C26.1348 31.5118 25.2719 31.9376 24.3577 32.2595C23.6167 32.5204 22.8582 32.7098 22.083 32.832C21.6672 32.8975 21.2492 32.9424 20.8286 32.9675C20.4673 32.989 20.1063 33.0041 19.7446 32.9989C18.8436 32.9861 17.9536 32.8807 17.0742 32.6824C15.9502 32.4288 14.8821 32.0254 13.8647 31.485C13.5869 31.3374 13.3148 31.1793 13.05 31.0088C13.0334 30.9982 13.0114 30.993 13 30.9596C15.4561 31.2037 17.6687 30.5895 19.6305 29.0884Z"
          fill="black"
        />
      </svg>
    ),
    instagram: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.4958 15.8917C27.3 15.8917 27.6291 15.9042 28.7375 15.9542C29.7625 16 30.3166 16.1708 30.6875 16.3167C31.1791 16.5083 31.5291 16.7333 31.8958 17.1C32.2625 17.4667 32.4916 17.8167 32.6791 18.3083C32.8208 18.6792 32.9958 19.2333 33.0416 20.2583C33.0916 21.3666 33.1041 21.6958 33.1041 24.5C33.1041 27.3041 33.0916 27.6333 33.0416 28.7416C32.9958 29.7666 32.8249 30.3208 32.6791 30.6916C32.4874 31.1833 32.2625 31.5333 31.8958 31.9C31.5291 32.2666 31.1791 32.4958 30.6875 32.6833C30.3166 32.825 29.7625 33 28.7375 33.0458C27.6291 33.0958 27.3 33.1083 24.4958 33.1083C21.6916 33.1083 21.3625 33.0958 20.2541 33.0458C19.2292 33 18.675 32.8291 18.3042 32.6833C17.8125 32.4916 17.4625 32.2666 17.0958 31.9C16.7292 31.5333 16.5 31.1833 16.3125 30.6916C16.1708 30.3208 15.9958 29.7666 15.95 28.7416C15.9 27.6333 15.8875 27.3041 15.8875 24.5C15.8875 21.6958 15.9 21.3666 15.95 20.2583C15.9958 19.2333 16.1667 18.6792 16.3125 18.3083C16.5042 17.8167 16.7292 17.4667 17.0958 17.1C17.4625 16.7333 17.8125 16.5042 18.3042 16.3167C18.675 16.175 19.2292 16 20.2541 15.9542C21.3625 15.9 21.6916 15.8917 24.4958 15.8917ZM24.4958 14C21.6458 14 21.2875 14.0125 20.1667 14.0625C19.05 14.1125 18.2875 14.2917 17.6208 14.55C16.9292 14.8167 16.3458 15.1792 15.7625 15.7625C15.1792 16.3458 14.8208 16.9333 14.55 17.6208C14.2917 18.2875 14.1125 19.05 14.0625 20.1708C14.0125 21.2875 14 21.6458 14 24.4958C14 27.3458 14.0125 27.7041 14.0625 28.825C14.1125 29.9416 14.2917 30.7041 14.55 31.375C14.8167 32.0666 15.1792 32.65 15.7625 33.2333C16.3458 33.8166 16.9333 34.1749 17.6208 34.4458C18.2875 34.7041 19.05 34.8833 20.1708 34.9333C21.2916 34.9833 21.6458 34.9958 24.5 34.9958C27.3541 34.9958 27.7083 34.9833 28.8291 34.9333C29.9458 34.8833 30.7083 34.7041 31.3791 34.4458C32.0708 34.1791 32.6541 33.8166 33.2374 33.2333C33.8208 32.65 34.1791 32.0625 34.4499 31.375C34.7083 30.7083 34.8874 29.9458 34.9374 28.825C34.9874 27.7041 34.9999 27.35 34.9999 24.4958C34.9999 21.6416 34.9874 21.2875 34.9374 20.1667C34.8874 19.05 34.7083 18.2875 34.4499 17.6167C34.1833 16.925 33.8208 16.3417 33.2374 15.7583C32.6541 15.175 32.0666 14.8167 31.3791 14.5458C30.7125 14.2875 29.95 14.1083 28.8291 14.0583C27.7041 14.0125 27.3458 14 24.4958 14Z"
          fill="black"
        />
        <path
          d="M24.4971 19.104C21.5221 19.104 19.1055 21.5165 19.1055 24.4957C19.1055 27.4748 21.5221 29.8873 24.4971 29.8873C27.4721 29.8873 29.8888 27.4706 29.8888 24.4957C29.8888 21.5207 27.4721 19.104 24.4971 19.104ZM24.4971 27.9956C22.5638 27.9956 20.9971 26.429 20.9971 24.4957C20.9971 22.5623 22.5638 20.9957 24.4971 20.9957C26.4304 20.9957 27.9971 22.5623 27.9971 24.4957C27.9971 26.429 26.4304 27.9956 24.4971 27.9956Z"
          fill="black"
        />
        <path
          d="M30.1021 20.15C30.797 20.15 31.3604 19.5866 31.3604 18.8916C31.3604 18.1967 30.797 17.6333 30.1021 17.6333C29.4071 17.6333 28.8438 18.1967 28.8438 18.8916C28.8438 19.5866 29.4071 20.15 30.1021 20.15Z"
          fill="black"
        />
      </svg>
    ),
    behance: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.0203 27.2398C24.0203 26.3984 23.8299 25.6817 23.4488 25.0914C23.0704 24.499 22.5042 24.0688 21.7579 23.7957C22.2506 23.5447 22.6227 23.2667 22.8747 22.9611C23.3275 22.416 23.5525 21.6985 23.5525 20.8018C23.5525 19.9328 23.3302 19.1852 22.8817 18.5622C22.1343 17.5463 20.8685 17.029 19.0831 17H12V31.6666H18.6053C19.3485 31.6666 20.0386 31.6001 20.6761 31.4684C21.3116 31.3369 21.8643 31.0909 22.3313 30.732C22.7458 30.4217 23.0909 30.0363 23.3688 29.58C23.8056 28.8905 24.0203 28.1099 24.0203 27.2398ZM27.3789 19.0735H33.2851H33.2856V17.6064H27.3789V19.0735ZM15.3821 22.7819H18.4856C19.1234 22.7819 19.639 22.6607 20.0361 22.4183C20.4329 22.1764 20.6309 21.7463 20.6309 21.1288C20.6309 20.4466 20.3687 19.9937 19.8431 19.7758C19.3913 19.6244 18.8133 19.5464 18.1119 19.5464H15.3821V22.7819ZM19.9968 25.4581C20.6183 25.7407 20.9297 26.2674 20.9297 27.0292C20.9297 27.9326 20.6081 28.5411 19.9667 28.8608C19.611 29.0347 19.1182 29.1181 18.4815 29.1181H15.3821V25.2095H18.5302C19.1589 25.2153 19.6493 25.2974 19.9968 25.4581ZM35.4771 24.6424C35.5484 25.1223 35.5807 25.8185 35.5676 26.7285H27.9185C27.9607 27.7843 28.3252 28.5226 29.0164 28.9452C29.4333 29.2101 29.9387 29.3395 30.5306 29.3395C31.1547 29.3395 31.6634 29.1817 32.0549 28.8574C32.2683 28.6855 32.4565 28.4428 32.6192 28.1367H35.4228C35.3494 28.7603 35.0118 29.3927 34.4052 30.0354C33.4653 31.057 32.147 31.5692 30.4541 31.5692C29.0556 31.5692 27.823 31.1372 26.7532 30.2763C25.6869 29.4124 25.1514 28.0114 25.1514 26.0678C25.1514 24.2453 25.6321 22.8503 26.5969 21.8793C27.5653 20.9065 28.815 20.4224 30.3554 20.4224C31.2685 20.4224 32.0915 20.5856 32.8258 20.9137C33.5578 21.2421 34.1628 21.759 34.6392 22.4694C35.0704 23.095 35.3477 23.8184 35.4771 24.6424ZM30.3564 22.687C31.0053 22.687 31.5491 22.8771 31.9843 23.2558C32.4233 23.6334 32.667 24.186 32.7184 24.9161H27.9852C28.0847 24.2301 28.3274 23.6882 28.7175 23.2896C29.1049 22.8902 29.6502 22.687 30.3564 22.687Z"
          fill="black"
        />
      </svg>
    ),
    linkedin: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.2617 33.5879H18.6844V20.3721H14.2617V33.5879Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.5533 26.2055V33.5873H21.1328C21.1328 33.5873 21.1907 21.611 21.1328 20.3715H25.554V22.2451C26.1409 21.3448 27.1897 20.0605 29.5375 20.0605C32.4476 20.0605 34.6296 21.9483 34.6296 26.0095V33.5876H30.2083V26.5166C30.2083 24.7399 29.5677 23.5276 27.9688 23.5276C26.7456 23.5276 26.0195 24.3454 25.7007 25.1351C25.5825 25.4171 25.5533 25.8116 25.5533 26.2055ZM25.5861 22.3301V22.2441C25.5646 22.274 25.5429 22.3046 25.5273 22.3301H25.5861Z"
          fill="black"
        />
        <path
          d="M16.4445 18.5664H16.4743C18.0152 18.5664 18.9747 17.5524 18.9747 16.2822C18.9453 14.9865 18.0149 14 16.5022 14C14.9897 14 14 14.9868 14 16.2822C14 17.5521 14.9614 18.5664 16.4445 18.5664Z"
          fill="black"
        />
      </svg>
    ),
    facebook: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.9998 32.8961C33.9998 33.5057 33.5056 34 32.8961 34H27.8V26.2551H30.3997L30.7889 23.2367H27.8V21.3096C27.8 20.4357 28.0427 19.8402 29.2958 19.8402L30.8941 19.8395V17.1398C30.6177 17.103 29.6689 17.0208 28.5651 17.0208C26.2607 17.0208 24.683 18.4275 24.683 21.0107V23.2367H22.0766V26.2551H24.683V34H15.1038C14.494 34 14 33.5057 14 32.8961V15.1038C14 14.4941 14.4941 14 15.1038 14H32.8961C33.5057 14 33.9998 14.4941 33.9998 15.1038V32.8961Z"
          fill="black"
        />
      </svg>
    ),
    dribble: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.75 14C18.3674 14 14 18.3674 14 23.75C14 29.1325 18.3674 33.5 23.75 33.5C29.122 33.5 33.5 29.1325 33.5 23.75C33.5 18.3674 29.122 14 23.75 14ZM30.19 18.4943C31.3533 19.9113 32.0512 21.7196 32.0724 23.676C31.7974 23.6231 29.048 23.0626 26.2774 23.4116C26.2139 23.2741 26.161 23.1261 26.0976 22.978C25.9284 22.5762 25.738 22.1638 25.5477 21.7725C28.6144 20.5247 30.0103 18.7269 30.19 18.4943ZM23.75 15.4382C25.8649 15.4382 27.8001 16.2313 29.27 17.532C29.122 17.7435 27.8636 19.4249 24.9026 20.5352C23.5385 18.029 22.0263 15.9775 21.7936 15.6602C22.4175 15.5122 23.0732 15.4382 23.75 15.4382ZM20.2074 16.2207C20.4295 16.5168 21.91 18.5789 23.2953 21.0322C19.4037 22.0686 15.9669 22.0474 15.5968 22.0474C16.1361 19.4672 17.881 17.3205 20.2074 16.2207ZM15.417 23.7605C15.417 23.676 15.417 23.5914 15.417 23.5068C15.7766 23.5173 19.8162 23.5702 23.972 22.3224C24.2153 22.7877 24.4373 23.2635 24.6488 23.7394C24.5431 23.7711 24.4268 23.8029 24.321 23.8346C20.0276 25.2199 17.7435 29.0057 17.5531 29.3229C16.2313 27.853 15.417 25.8967 15.417 23.7605ZM23.75 32.0829C21.8254 32.0829 20.0488 31.4273 18.6423 30.3275C18.7904 30.0208 20.4824 26.7638 25.1776 25.1247C25.1987 25.1141 25.2093 25.1141 25.2305 25.1035C26.4043 28.1385 26.8801 30.687 27.007 31.4167C26.0024 31.8503 24.9026 32.0829 23.75 32.0829ZM28.3923 30.6553C28.3077 30.1477 27.8636 27.7155 26.7744 24.7229C29.3864 24.3104 31.6705 24.9872 31.956 25.0824C31.5965 27.3983 30.2641 29.3969 28.3923 30.6553Z"
          fill="black"
        />
      </svg>
    ),
  }
  return (
    <a
      href={to}
      target="_blank"
      rel="noreferrer"
      className="social-link"
      onMouseEnter={socialEnter}
      onMouseLeave={socialLeave}
    >
      {icones[is]}
    </a>
  )
}

export default SocialLink
