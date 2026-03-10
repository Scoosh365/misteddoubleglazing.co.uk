export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        className="shrink-0"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        {/* Outer window frame */}
        <rect
          x="3"
          y="3"
          width="34"
          height="34"
          rx="6"
          fill="#0F172A"
          stroke="#38BDF8"
          strokeWidth="2"
        />
        {/* Window panes */}
        <rect
          x="6.5"
          y="6.5"
          width="12"
          height="12"
          fill="#0EA5E9"
          fillOpacity="0.18"
          stroke="#38BDF8"
          strokeWidth="1.4"
        />
        <rect
          x="21.5"
          y="6.5"
          width="12"
          height="12"
          fill="#0EA5E9"
          fillOpacity="0.12"
          stroke="#38BDF8"
          strokeWidth="1.4"
        />
        <rect
          x="6.5"
          y="21.5"
          width="12"
          height="12"
          fill="#E2E8F0"
          fillOpacity="0.8"
          stroke="#CBD5F5"
          strokeWidth="1.4"
        />
        <rect
          x="21.5"
          y="21.5"
          width="12"
          height="12"
          fill="#E2E8F0"
          fillOpacity="0.9"
          stroke="#CBD5F5"
          strokeWidth="1.4"
        />
        {/* Simple glass shine */}
        <line
          x1="8"
          y1="9"
          x2="16"
          y2="7"
          stroke="#E0F2FE"
          strokeWidth="1.2"
        />
      </svg>

      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold tracking-tight text-[#0055A4]">
          misted<span className="text-[#009688]">double</span>glazing
        </span>
      </div>
    </div>
  );
}

export { Logo };

