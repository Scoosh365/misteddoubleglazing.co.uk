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
        {/* Simple four-pane window without outer border */}
        <rect
          x="6"
          y="6"
          width="12"
          height="12"
          rx="2"
          ry="2"
          fill="#0EA5E9"
          fillOpacity="0.45"
        />
        <rect
          x="22"
          y="6"
          width="12"
          height="12"
          rx="2"
          ry="2"
          fill="#0EA5E9"
          fillOpacity="0.3"
        />
        <rect
          x="6"
          y="22"
          width="12"
          height="12"
          rx="2"
          ry="2"
          fill="#E2E8F0"
          fillOpacity="0.9"
        />
        <rect
          x="22"
          y="22"
          width="12"
          height="12"
          rx="2"
          ry="2"
          fill="#E2E8F0"
          fillOpacity="0.8"
        />
      </svg>

      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold tracking-tight text-[#38BDF8]">
          misted<span className="text-[#22C55E]">double</span>glazing
        </span>
      </div>
    </div>
  );
}

export { Logo };

