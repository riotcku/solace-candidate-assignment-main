"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Advocate } from "./types/advocate";
import SectionContainer from "./components/SectionContainer";

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        console.log(jsonResponse);
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      });
    });
  }, []);

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

  return (
    <main className="text-charcoal">
      <SectionContainer className="px-0! pt-0!">
        <div className="p-2 px-2 md:px-3 bg-solace-light-green rounded-sm">
          <span className="text-xl text-white">Solace Advocates</span>
        </div>
      </SectionContainer>
      <SectionContainer className="bg-circle-right mt-2">
        <div className="flex flex-col">
          <p>Search</p>
          <p>
            Searching for: <span id="search-term"></span>
          </p>
          <input style={{ border: "1px solid black" }} onChange={onChange} />
          <button onClick={onClick}>Reset Search</button>

        </div>
      </SectionContainer>
      <SectionContainer className="bg-circle-left">
        <table>
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Degree</th>
            <th>Specialties</th>
            <th>Years of Experience</th>
            <th>Phone Number</th>
          </thead>
          <tbody>
            {filteredAdvocates.map((advocate) => {
              return (
                <tr>
                  <td>{advocate.firstName}</td>
                  <td>{advocate.lastName}</td>
                  <td>{advocate.city}</td>
                  <td>{advocate.degree}</td>
                  <td>
                    {advocate.specialties.map((s) => (
                      <div>{s}</div>
                    ))}
                  </td>
                  <td>{advocate.yearsOfExperience}</td>
                  <td>{advocate.phoneNumber}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </SectionContainer>
    </main>
  );
}
