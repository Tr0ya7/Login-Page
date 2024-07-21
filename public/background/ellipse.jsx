const Ellipse = (props) => (
    <svg className={ props.className } viewBox="0 0 474 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_2_236)">
            <circle cx="139" cy="698" r="113" fill="#4461F2" />
        </g>
        <g opacity="0.45" filter="url(#filter1_f_2_236)">
            <circle cx="-30" cy="430" r="113" fill="#DDA82A" />
        </g>
        <defs>
            <filter id="filter0_f_2_236" x="-291" y="268" width="860" height="860" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <fe floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="158.5" result="effect1_foregroundBlur_2_236" />
            </filter>
            <filter id="filter1_f_2_236" x="-460" y="0" width="860" height="860" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="158.5" result="effect1_foregroundBlur_2_236" />
            </filter>
        </defs>
    </svg>
)

export default Ellipse