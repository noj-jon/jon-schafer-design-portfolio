export function SiteTexture() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(239, 232, 220, 0.78), rgba(239, 232, 220, 0.78)), url('/images/background-texture.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    />
  );
}