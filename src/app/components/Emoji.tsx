export default function Emoji() {
  return (
    <>
      <span role="img" aria-label="wave" className="animate-emoji">
        👋🏼
      </span>
      <style>
        {`
            @keyframes waveMotion {
              0% { transform: rotate(0deg); }
              25% { transform: rotate(20deg); }   /* Lambai ke kanan */
              50% { transform: rotate(0deg); }   /* Balik ke tengah */
              75% { transform: rotate(-20deg); } /* Lambai ke kiri */
              100% { transform: rotate(0deg); }  /* Balik lagi ke tengah */
            }
  
            .animate-emoji {
              display: inline-block;
              animation: waveMotion 0.5s ease-in-out infinite;
            }
          `}
      </style>
    </>
  );
}
