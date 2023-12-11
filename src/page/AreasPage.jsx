import { useEffect, useState } from "react";

const AreasPage = () => {
  const [areas, setAreas] = useState(null);

  useEffect(() => {
    (async () => {
      const areasResponse = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
      const areasResponseData = await areasResponse.json();

      setAreas(areasResponseData.meals);
    })();
  }, []);

  return (
    <section>
      {areas ? (
        <div>
          {areas.map((area) => {
            return (
              <article>
                <h2>{area.strArea}</h2>
              </article>
            );
          })}
        </div>
      ) : (
        <p>En cours de chargement</p>
      )}
    </section>
  );
};

export default AreasPage;
