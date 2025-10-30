// components/ui/OrganicBackdrop.tsx
type Props = {
  color: string; // cor base do produto (ex: "#57A295")
  dot: string; // cor das bolinhas (ex: "#1F6F64")
};

export default function OrganicBackdrop({ color, dot }: Props) {
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"
      style={{ background: "red" }}
      //width={1200}
      //height={760}
      // viewBox="0 0 1200 760"
      aria-hidden
    >
      <defs>
        {/* textura/ruído sutil */}
        <filter id="vl-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.06" />
          </feComponentTransfer>
        </filter>

        {/* “nuvem” central onde entra o card/foto */}
        <mask id="vl-hole">
          <rect width="1200" height="760" fill="white" />
          <path
            d="M360,420 C360,330 480,300 560,320 C670,345 820,330 870,395 C915,455 875,515 790,545 C690,580 555,565 470,545 C405,530 360,500 360,420 Z"
            fill="black"
          />
        </mask>

        {/* blob tortinho (estilo rótulo) */}
        <path
          id="vl-blob"
          d="M160,360 C160,200 360,130 530,200 C760,300 1020,270 1050,430 C1080,600 835,670 610,650 C380,630 160,560 160,360 Z"
        />
      </defs>

      {/* mancha colorida */}
      <use href="#vl-blob" fill={color} opacity="0.9" mask="url(#vl-hole)" />
      {/* leve sombra para profundidade */}
      <use
        href="#vl-blob"
        fill="black"
        opacity="0.08"
        transform="translate(0,10)"
      />
      {/* textura por cima */}
      <rect
        width="1200"
        height="760"
        filter="url(#vl-noise)"
        opacity="0.18"
        mask="url(#vl-hole)"
      />

      {/* bolinhas periféricas (faixa ao redor) */}
      {Array.from({ length: 150 }).map((_, i) => {
        const t = (i / 150) * Math.PI * 2;
        const cx =
          600 + Math.cos(t) * (320 + (i % 7) * 6) + (Math.random() * 16 - 8);
        const cy =
          380 + Math.sin(t) * (230 + (i % 5) * 6) + (Math.random() * 12 - 6);
        const r = Math.random() * 5 + 2;
        return (
          <circle key={i} cx={cx} cy={cy} r={r} fill={dot} opacity="0.8" />
        );
      })}
    </div>
  );
}
