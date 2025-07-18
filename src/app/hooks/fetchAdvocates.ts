import { useEffect, useState } from "react";
import { Advocate } from "../types/advocate";
import { mockAdvocateData } from "@/db/seed/mockData";

const fetchAdvocates = () => {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    try {
      setIsLoading(true);
      fetch("/api/advocates").then((response) => {
        response.json().then((jsonResponse) => {
          setAdvocates(jsonResponse.data);
          setIsLoading(false);
        });
      });
    } catch(e) {
      console.error("Failed to fetch advocates. Using default data.");
      setAdvocates(mockAdvocateData);
      setIsLoading(false);
    }
  }, []);

  return { advocates, isLoading }
}

export default fetchAdvocates;