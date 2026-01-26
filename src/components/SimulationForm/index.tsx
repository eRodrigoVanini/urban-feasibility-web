import { useEffect, useState } from "react";

import style from "./SimulationForm.module.css";
import Select from "./Select";
import SubmitButton from "./SubmitButton";
import Input from "./Input";

type SimulationFormProps = {
  btnText: string;
};

type City = {
  id: string | number;
  name: string;
};

type Zone = {
  id: string | number;
  name: string;
};

type UseType = {
  id: string | number;
  name: string;
};

export function SimulationForm({ btnText }: SimulationFormProps) {
  const [cities, setCities] = useState<City[]>([]);
  const [zones, setZones] = useState<Zone[]>([]);
  const [useTypes, setUseTypes] = useState<UseType[]>([]);

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedZone, setSelectedZone] = useState("");
  const [selectedUseType, setSelectedUseType] = useState("");
  const [lotArea, setLotArea] = useState("");

  // Carregar cidades ao montar o componente
  useEffect(() => {
    try {
      fetch("http://localhost:3000/cities", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setCities(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  // Carregar zonas quando a cidade mudar
  useEffect(() => {
    if (selectedCity) {
      try {
        fetch(`http://localhost:3000/zones`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setZones(data);
            setSelectedZone(""); // Limpa a zona selecionada
            setUseTypes([]); // Limpa os tipos de uso
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      setZones([]);
      setUseTypes([]);
    }
  }, [selectedCity]);

  // Carregar tipos de uso quando a zona mudar
  useEffect(() => {
    if (selectedZone) {
      try {
        fetch(`http://localhost:3000/useTypes`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setUseTypes(data);
            setSelectedUseType(""); // Limpa o tipo de uso selecionado
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      setUseTypes([]);
    }
  }, [selectedZone]);

  return (
    <div className={style.simulationCard}>
      <form>
        <div className={style.formHeader}>
          <h3>Simular Viabilidade</h3>
        </div>

        <Select
          name="citySelect"
          text="Selecione o Município"
          options={cities}
          handleOnChange={(e) => setSelectedCity(e.target.value)}
          value={selectedCity}
        />

        <Select
          name="zoneSelect"
          text="Selecione a Zona"
          options={zones}
          handleOnChange={(e) => setSelectedZone(e.target.value)}
          value={selectedZone}
          disabled={!selectedCity}
        />

        <Select
          name="useTypeSelect"
          text="Selecione o Tipo de Uso"
          options={useTypes}
          handleOnChange={(e) => setSelectedUseType(e.target.value)}
          value={selectedUseType}
          disabled={!selectedZone}
        />

        <Input
          text="Área do Lote (m²)"
          name="lotArea"
          value={lotArea}
          handleOnChange={(e) => setLotArea(e.target.value)}
        />

        <SubmitButton text={btnText} />
      </form>
    </div>
  );
}
