import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  const randomStart = () => Math.random() * 360;

  const planets = [
    { name: "orionis", color: "#4fa3f7", size: 50, distance: 100, orbitSpeed: 25, img: "Purple Planet (1).png", moons: 1, orbitScaleY: 0.85 },
    { name: "etheron", color: "#b37cf7", size: 40, distance: 160, orbitSpeed: 40, img: "Purple Planet.png", moons: 2, orbitScaleY: 0.9 },
    { name: "lumenara", color: "#f5a623", size: 60, distance: 230, orbitSpeed: 60, img: "Purple Planet (4).png", moons: 1, orbitScaleY: 0.8 },
    { name: "theronix", color: "#10b981", size: 45, distance: 310, orbitSpeed: 85, img: "Purple Planet (2).png", moons: 3, orbitScaleY: 0.95 },
  ];

  return (
    <div className="home starfield">
      {/* Nebula background */}
      <div className="nebula"></div>

      <h1 className="home-title">METEORA</h1>
      <p className="home-subtitle">Journey across fictional worlds in deep space.</p>

      <div className="home-system">
        {/* SUN */}
        <div className="sun">
          <div className="sun-core" />
          <div className="sun-glow" />
        </div>

        {/* Planets */}
        {planets.map((planet, i) => (
          <div
            key={i}
            className="orbit"
            style={{
              width: planet.distance * 2 + "px",
              height: planet.distance * 2 * planet.orbitScaleY + "px",
            }}
          >
            <div
              className="planet-wrapper"
              style={{
                "--start-angle": `${randomStart()}deg`,
                "--orbit-speed": `${planet.orbitSpeed}s`,
                "--planet-distance": `${planet.distance}px`,
                "--orbit-scaleY": planet.orbitScaleY,
              }}
            >
              <Link to={`/${planet.name}`} className="planet-link">
                <img
                  src={`/assets/${planet.img}`}
                  style={{ width: planet.size + "px", height: planet.size + "px" }}
                  className="planet-portrait"
                />
                <div
                  className="atmosphere"
                  style={{ boxShadow: `0 0 ${planet.size / 2}px ${planet.color}66` }}
                ></div>
              </Link>

              {/* Moons */}
              {[...Array(planet.moons)].map((_, m) => (
                <div
                  key={m}
                  className="moon-orbit"
                  style={{
                    "--moon-speed": `${6 + Math.random() * 4}s`,
                    "--moon-distance": `${planet.size / 2 + 12 + m * 12}px`,
                  }}
                >
                  <div className="moon"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
