import { ChangeEvent, useEffect, useState } from "react";
import { Advocate } from "@/app/types/advocate";
import SectionContainer from "@/app/components/SectionContainer";
import fetchAdvocates from "@/app/hooks/fetchAdvocates";
import AdvocateTable from "@/app/components/AdvocateTable";
import SolaceUniverseSVG from "@/app/svg/solace-universe";

interface AdvocatesPage {
  advocates: Advocate[];
}

const AdvocatesPage = () => {
  const { advocates, isLoading } = fetchAdvocates();
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);
  const [query, setQuery] = useState("");

  const ADVOCATE_HEADERS = [
    "First Name",
    "Last Name",
    "City",
    "Degree",
    "Specialties",
    "Years of Experience",
    "Phone Number",
  ];
  
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);

    console.log("filtering advocates...");
    const filteredAdvocates = advocates.filter((advocate) => {
      return (
        advocate.firstName.includes(searchTerm) ||
        advocate.lastName.includes(searchTerm) ||
        advocate.city.includes(searchTerm) ||
        advocate.degree.includes(searchTerm) ||
        advocate.specialties.includes(searchTerm) ||
        advocate.yearsOfExperience.toString() === searchTerm
      );
    });

    setFilteredAdvocates(filteredAdvocates);
  };

  const onClick = () => {
    console.log(advocates);
    setFilteredAdvocates(advocates);
  };

  return (<>
    <SectionContainer className="bg-circle-right">
      <div className="flex flex-col">
        <span>
          Searching for: <span id="search-term"></span>
        </span>
        <input style={{ border: "1px solid black" }} onChange={onChange} disabled={isLoading}/>
        <button onClick={onClick}>Reset Search</button>
      </div>
    </SectionContainer>
    <SectionContainer className="bg-circle-left">
      {isLoading
        ? (<div className="loader">
            <span className="loader-text text-solace-dark-green">
              Loading . . .
            </span>
            <SolaceUniverseSVG />
          </div>) 
        : (<AdvocateTable
          headers={ADVOCATE_HEADERS}
          rows={advocates}
        />)}
    </SectionContainer>
  </>);
}

export default AdvocatesPage;