import { advocates } from "../schema";
import {
  specialties,
  firstNames,
  lastNames,
  cities,
  degrees,
} from "./mockData.js";

type Advocate = typeof advocates.$inferInsert;

const pickRandomFromArray = (arr: any[]) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

function generateRandomPhoneNumber() {
  let phone = "";
  for (let i = 0; i < 10; i++) {
    phone += Math.floor(Math.random() * 10);
  }
  return Number(phone);
}

const generateAdvocateData = (num: number): Advocate[] => {
  const generatedData = [];
  for (let i = 0; i < num; i++) {
    generatedData.push({
      firstName: pickRandomFromArray(firstNames),
      lastName: pickRandomFromArray(lastNames),
      city: pickRandomFromArray(cities),
      degree: pickRandomFromArray(degrees),
      specialties: specialties.slice(...randomSpecialty()),
      yearsOfExperience: Math.floor(Math.random() * 25),
      phoneNumber: generateRandomPhoneNumber(),
    });
  }

  return generatedData;
};

const randomSpecialty = () => {
  const random1 = Math.floor(Math.random() * 24);
  const random2 = Math.floor(Math.random() * (24 - random1)) + random1 + 1;

  return [random1, random2];
};

export { generateAdvocateData, randomSpecialty };
