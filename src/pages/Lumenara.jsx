import { Link } from "react-router-dom";
import "../styles/lumenara.css";

export default function Lumenara() {
  const randomStart = () => Math.random() * 360;


  const planets = [
    {
      name: "orionis",
      color: "#3498db",
      size: 28,
      distance: 130,
      orbitSpeed: 38,
      img: "Purple Planet (1).png",
      moons: 0,
      orbitScaleY: 0.9,
    },
    {
      name: "theronix",
      color: "#1abc9c",
      size: 36,
      distance: 200,
      orbitSpeed: 45,
      img: "Purple Planet (2).png",
      moons: 2,
      orbitScaleY: 0.92,
    },
    {
      name: "etheron",
      color: "#b37cf7",
      size: 25,
      distance: 260,
      orbitSpeed: 55,
      img: "Purple Planet.png",
      moons: 1,
      orbitScaleY: 0.96,
    },
  ];

  return (
    <div className="lumenara-page starfield">
      <div className="nebula" />

      <h1 className="lumenara-title">LUMENARA SYSTEM</h1>


      <div className="stats">
        <div><div className="stats-label">Galaxy</div><div className="stats-value">Andromeda-IV</div></div>
        <div><div className="stats-label">Diameter</div><div className="stats-value">11,540 km</div></div>
        <div><div className="stats-label">Day Length</div><div className="stats-value">56 Earth hours</div></div>
        <div><div className="stats-label">Temperature</div><div className="stats-value">10°C – 30°C</div></div>
      </div>

      <div className="lumenara-system">

        <div className="center-planet">
          <img src="/assets/Purple Planet (4).png" className="center-img" />
          <div className="center-glow" />
        </div>


        {planets.map((planet, i) => (
          <div
            key={i}
            className="orbit"
            style={{
              width: `calc(${planet.distance * 2}px * var(--scale-factor))`,
              height: `calc(${planet.distance * 2 * planet.orbitScaleY}px * var(--scale-factor))`,
            }}
          >
            <div
              className="planet-wrapper"
              style={{
                "--start-angle": `${randomStart()}deg`,
                "--orbit-speed": `${planet.orbitSpeed}s`,
                "--planet-distance": `calc(${planet.distance}px * var(--scale-factor))`,
                "--orbit-scaleY": planet.orbitScaleY,
              }}
            >
              <Link to={`/${planet.name}`} className="planet-link">
                <img
                  src={`/assets/${planet.img}`}
                  className="planet-portrait"
                  style={{ width: `calc(${planet.size}px * var(--scale-factor))`, height: `calc(${planet.size}px * var(--scale-factor))` }}
                />
                <div
                  className="atmosphere"
                  style={{
                    boxShadow: `0 0 calc(${planet.size / 2}px * var(--scale-factor)) ${planet.color}77`,
                  }}
                />
              </Link>


              {[...Array(planet.moons)].map((_, m) => (
                <div
                  key={m}
                  className="moon-orbit"
                  style={{
                    "--moon-speed": `${5 + Math.random() * 3}s`,
                    "--moon-distance": `calc((${planet.size / 2 + 10 + m * 12}px) * var(--scale-factor))`,
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
