import { Link } from "react-router-dom";
import "../styles/etheron.css";

export default function Etheron() {
  const randomStart = () => Math.random() * 360;

  const planets = [
    { name: "lumenara", color: "#9b59b6", size: 30, distance: 120, orbitSpeed: 35, img: "Purple Planet (4).png", moons: 1, orbitScaleY: 0.85 },
    { name: "orionis", color: "#3498db", size: 25, distance: 180, orbitSpeed: 50, img: "Purple Planet (1).png", moons: 0, orbitScaleY: 0.9 },
    { name: "theronix", color: "#1abc9c", size: 35, distance: 240, orbitSpeed: 40, img: "Purple Planet (2).png", moons: 2, orbitScaleY: 0.95 },
  ];

  return (
    <div className="etheron-page starfield">
      {/* Nebula background */}
      <div className="nebula"></div>

      <h1 className="etheron-title">ETHERON SYSTEM</h1>

      {/* STATS SECTION */}
      <div className="stats">
        <div><div className="stats-label">Galaxy</div><div className="stats-value">Andromeda-IV</div></div>
        <div><div className="stats-label">Diameter</div><div className="stats-value">16,440 km</div></div>
        <div><div className="stats-label">Day Length</div><div className="stats-value">26 Earth hours</div></div>
        <div><div className="stats-label">Temperature</div><div className="stats-value">-20°C to 0°C</div></div>
      </div>

      <div className="etheron-system">
        {/* Center Planet: Etheron */}
        <div className="center-planet">
          <img src="/assets/Purple Planet.png" alt="Etheron" className="planet-portrait" />
          <div className="planet-glow"></div>
        </div>

        {/* Orbiting Planets */}
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
