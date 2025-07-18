import { ChangeEvent, useState, useEffect } from "react";
import { Advocate } from "@/app/types/advocate";
import SectionContainer from "@/app/components/shared/SectionContainer";
import fetchAdvocates from "@/app/hooks/fetchAdvocates";
import AdvocateTable from "@/app/components/AdvocateTable";
import SearchBar from "@/app/components/shared/SearchBar";
import SolaceUniverseSVG from "@/app/svg/solace-universe";
import debounce from "@/app/hooks/debounce";
import Refresh from "@/app/svg/refresh";

interface AdvocatesPage {
  advocates: Advocate[];
}

const AdvocatesPage = () => {
  const { advocates, isLoading } = fetchAdvocates();
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);

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
    setIsTyping(true);
    setQuery(e.target.value);
    if (e.target.value.length) {
      setSubmittedQuery("");
    }
  };

  const debouncedQuery = debounce(query, 400);

  useEffect(() => {
    const queryToFilter = submittedQuery || debouncedQuery;
    console.log(queryToFilter);
    if (!queryToFilter) {
      setFilteredAdvocates(advocates);
      setIsTyping(false);
      return;
    }

    const filteredAdvocates = advocates.filter((advocate) => {
      return (
        advocate.firstName
          .toLocaleLowerCase()
          .includes(queryToFilter.toLocaleLowerCase()) ||
        advocate.lastName
          .toLocaleLowerCase()
          .includes(queryToFilter.toLocaleLowerCase()) ||
        advocate.city
          .toLocaleLowerCase()
          .includes(queryToFilter.toLocaleLowerCase()) ||
        advocate.degree
          .toLocaleLowerCase()
          .includes(queryToFilter.toLocaleLowerCase()) ||
        advocate.specialties.includes(queryToFilter.toLocaleLowerCase()) ||
        advocate.yearsOfExperience.toString() === queryToFilter
      );
    });

    setFilteredAdvocates(filteredAdvocates);
    setIsTyping(false);
  }, [debouncedQuery, submittedQuery, advocates]);

  return (
    <>
      <SectionContainer className="bg-circle-right">
        <div className="flex flex-row justify-between items-stretch">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-charcoal">
              Advocates Search Table
            </h3>
            {(submittedQuery || debouncedQuery) && (
              <div className="flex flex-row items-center">
                <span>Current Search: </span>
                <span className="ml-1 text-black">
                  {submittedQuery || debouncedQuery}
                </span>
                <button
                  type="button"
                  className="w-2 h-2"
                  onClick={() => {
                    setQuery("");
                    setSubmittedQuery("");
                    setFilteredAdvocates(advocates);
                  }}
                >
                  <Refresh className="w-2 h-2 ml-1" />
                </button>
              </div>
            )}
          </div>
          <SearchBar
            className="basis-1/2"
            query={query}
            onChange={onChange}
            onSubmit={() => {
              // reset the query on enter press, but still perform search
              setSubmittedQuery(query);
              setQuery("");
            }}
          />
        </div>
      </SectionContainer>
      <SectionContainer className="bg-circle-left">
        {isLoading || isTyping ? (
          <div className="loader">
            <span className="loader-text text-solace-dark-green">
              Loading . . .
            </span>
            <SolaceUniverseSVG />
          </div>
        ) : (
          <AdvocateTable headers={ADVOCATE_HEADERS} rows={filteredAdvocates} />
        )}
      </SectionContainer>
    </>
  );
};

export default AdvocatesPage;
