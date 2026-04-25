import svgPaths from "./svg-oh7tkd4raa";

export default function Group() {
  return (
    <div className="relative size-full">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.1036 34.9006">
        <g clipPath="url(#clip0_9_47)" id="Group 2">
          <path d={svgPaths.p3172a900} fill="var(--fill-0, #19CACB)" id="Vector" />
          <g filter="url(#filter0_d_9_47)" id="Vector_2">
            <path d={svgPaths.p1946200} fill="url(#paint0_linear_9_47)" />
          </g>
          <path d={svgPaths.p277d6080} fill="url(#paint1_linear_9_47)" id="Vector_3" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="42.9006" id="filter0_d_9_47" width="43.0184" x="-4" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_9_47" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_9_47" mode="normal" result="shape" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_47" x1="3.96989" x2="33.2244" y1="28.3764" y2="4.26426">
            <stop stopColor="#8B3DFF" />
            <stop offset="0.94" stopColor="#19CACB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_9_47" x1="6.8202" x2="14.9799" y1="7.52017" y2="16.9943">
            <stop offset="0.34" stopColor="#3094D1" stopOpacity="0" />
            <stop offset="0.46" stopColor="#3387C8" stopOpacity="0.13" />
            <stop offset="0.68" stopColor="#3B68B0" stopOpacity="0.46" />
            <stop offset="1" stopColor="#4A368B" />
          </linearGradient>
          <clipPath id="clip0_9_47">
            <rect fill="white" height="34.9006" width="35.1036" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}