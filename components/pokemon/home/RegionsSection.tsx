"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Badge, Col, Row } from "react-bootstrap";
import { LocationClient, NamedAPIResource } from "pokenode-ts";
//Helpers
import { formatName } from "@/helpers/formatName";

function RegionsSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [regions, setRegions] = useState<NamedAPIResource[]>([]);

  useEffect(() => {
    (async () => {
      const api = new LocationClient();

      await api
        .listRegions(0, 100)
        .then((data) => {
          console.log("data", data);
          setRegions(data.results);
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
      <h4 className="text-center mb-3">Regions</h4>
      {isLoading ? (
        <Col className="text-center">Loading Regions...</Col>
      ) : (
        regions.map((value, index) => (
          <Col key={value.name} className="mb-2 px-1">
            <Link
              href={`/pokemon/region?name=${value.name}`}
              style={{ textDecoration: "none" }}
            >
              <Badge
                className="w-100 d-flex align-items-center justify-content-center"
                bg={index % 2 === 0 ? "danger" : "secondary"}
                style={{
                  color: "#fff",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
                  padding: ".6em .5em",
                  maxWidth: "120px",
                }}
              >
                <span>{formatName(value.name)}</span>
              </Badge>
            </Link>
          </Col>
        ))
      )}
    </Row>
  );
}

export default RegionsSection;
