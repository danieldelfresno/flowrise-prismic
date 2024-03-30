function HourglassIcon() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none">
        <g stroke="#0891B2" strokeWidth="5" clipPath="url(#a)">
          <path d="M50 30L40 40 30 30c-10-9-14-14-13-18v-1c2-4 9-4 23-4s21 0 23 4v1c1 4-3 9-13 18z"></path>
          <path
            strokeOpacity="0.5"
            d="M30 50l10-10 10 10c10 9 14 14 13 18v1c-2 4-9 4-23 4s-21 0-23-4v-1c-1-4 3-9 13-18z"
          ></path>
        </g>
        <defs>
          <clipPath id="a">
            <rect width="80" height="80" fill="#fff" rx="16.6"></rect>
          </clipPath>
        </defs>
      </svg>
    );
  }
  
  export default HourglassIcon;