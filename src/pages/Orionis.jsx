import { Link } from "react-router-dom";
import "../styles/orionis.css";

export default function Orionis() {
  const randomStart = () => Math.random() * 360;

  // Orbiting planets around ORIONIS
  const planets = [
    {
      name: "lumenara",
      color: "#9b59b6",
      size: 30,
      distance: 120,
      orbitSpeed: 35,
      img: "Purple Planet (4).png",
      moons: 1,
      orbitScaleY: 0.85,
    },
    {
      name: "theronix",
      color: "#1abc9c",
      size: 35,
      distance: 190,
      orbitSpeed: 40,
      img: "Purple Planet (2).png",
      moons: 2,
      orbitScaleY: 0.9,
    },
    {
      name: "etheron",
      color: "#b37cf7",
      size: 25,
      distance: 260,
      orbitSpeed: 55,
      img: "Purple Planet.png",
      moons: 0,
      orbitScaleY: 0.95,
    },
  ];

  return (
    <div className="orionis-page starfield">
      <div className="nebula" />

      <h1 className="orionis-title">ORIONIS SYSTEM</h1>

      <div className="stats">
        <div><div className="stats-label">Galaxy</div><div className="stats-value">Virgo A</div></div>
        <div><div className="stats-label">Diameter</div><div className="stats-value">120,780 km</div></div>
        <div><div className="stats-label">Day Length</div><div className="stats-value">4 Earth hours</div></div>
        <div><div className="stats-label">Temperature</div><div className="stats-value">10°C – 40°C</div></div>
      </div>

      <div className="orionis-system">
        {/* CENTER PLANET */}
        <div className="center-planet">
          <img src="/assets/Purple Planet (1).png" className="center-img" />
          <div className="center-glow" />
        </div>

        {/* ORBITING PLANETS */}
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
                  className="planet-portrait"
                  style={{ width: planet.size, height: planet.size }}
                />
                <div
                  className="atmosphere"
                  style={{
                    boxShadow: `0 0 ${planet.size / 2}px ${planet.color}77`,
                  }}
                />
              </Link>

              {/* MOONS */}
              {[...Array(planet.moons)].map((_, m) => (
                <div
                  key={m}
                  className="moon-orbit"
                  style={{
                    "--moon-speed": `${5 + Math.random() * 3}s`,
                    "--moon-distance": `${planet.size / 2 + 10 + m * 12}px`,
                  }}
                >
                  <div className="moon" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
