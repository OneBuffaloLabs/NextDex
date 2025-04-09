"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Badge, Col, Row } from "react-bootstrap";
import { LocationClient, NamedAPIResource } from "pokenode-ts";
// Components
import PokeBadge from "@/components/pokemon/PokeBadge";

function RegionsSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<NamedAPIResource[]>([]);

  useEffect(() => {
    (async () => {
      const api = new LocationClient();

      await api
        .listRegions(0, 100)
        .then((data) => {
          setData(data.results);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    })();
  }, []);

  return (
    <Row g={2}>
      <Col>
        <h4 className="text-center mb-3">Regions</h4>
        {isLoading ? (
          <div className="text-center">Loading Regions...</div>
        ) : (
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {data.map((value, index) => (
              <Link
                key={value.name}
                href={`/pokemon/region?name=${value.name}`}
                className="text-decoration-none"
                passHref
              >
                <PokeBadge
                  name={value.name}
                  className={index % 2 === 0 ? "" : "bgGray"}
                  fullWidth={false}
                />
              </Link>
            ))}
          </div>
        )}
      </Col>
    </Row>
  );
}

export default RegionsSection;
