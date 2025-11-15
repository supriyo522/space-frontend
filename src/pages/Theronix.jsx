import { Link } from "react-router-dom";
import "../styles/theronix.css";

export default function Theronix() {
  const randomStart = () => Math.random() * 360;


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
      name: "orionis",
      color: "#3498db",
      size: 25,
      distance: 180,
      orbitSpeed: 50,
      img: "Purple Planet (1).png",
      moons: 0,
      orbitScaleY: 0.9,
    },
    {
      name: "etheron",
      color: "#b37cf7",
      size: 35,
      distance: 240,
      orbitSpeed: 40,
      img: "Purple Planet.png",
      moons: 2,
      orbitScaleY: 0.95,
    },
  ];

  return (
    <div className="theronix-page starfield">
      <div className="nebula" />

      <h1 className="theronix-title">THERONIX SYSTEM</h1>

      <div className="stats">
        <div><div className="stats-label">Galaxy</div><div className="stats-value">Sombrero</div></div>
        <div><div className="stats-label">Diameter</div><div className="stats-value">56,780 km</div></div>
        <div><div className="stats-label">Day Length</div><div className="stats-value">12 Earth hours</div></div>
        <div><div className="stats-label">Temperature</div><div className="stats-value">60°C – 90°C</div></div>
      </div>

      <div className="theronix-system">
 
        <div className="center-planet">
          <img src="/assets/Purple Planet (2).png" className="center-img" />
          <div className="center-glow" />
        </div>


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
