import db from "..";
import { advocates } from "../schema";
import { specialties, firstNames, lastNames, cities, degrees } from "./mockData.js"

type Advocate = typeof advocates.$inferInsert;

const pickRandomFromArray = (arr: any[]) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function generateRandomPhoneNumber() {
  let phone = '';
  for (let i = 0; i < 10; i++) {
    phone += Math.floor(Math.random() * 10);
  }
  return Number(phone);
}

const generateAdvocateData = (num: number): Advocate[] => {
  const generatedData = []
  for (let i = 0; i < num; i++) {
    generatedData.push({
      firstName: pickRandomFromArray(firstNames),
      lastName: pickRandomFromArray(lastNames),
      city: pickRandomFromArray(cities),
      degree: pickRandomFromArray(degrees),
      specialties: specialties.slice(...randomSpecialty()),
      yearsOfExperience: Math.floor(Math.random() * 25),
      phoneNumber: generateRandomPhoneNumber(),
    })
  }

  return generatedData;
}

const randomSpecialty = () => {
  const random1 = Math.floor(Math.random() * 24);
  const random2 = Math.floor(Math.random() * (24 - random1)) + random1 + 1;

  return [random1, random2];
};

const advocateData = [
  {
    firstName: "John",
    lastName: "Doe",
    city: "New York",
    degree: "MD",
    specialties: specialties.slice(...randomSpecialty()),
    yearsOfExperience: 10,
    phoneNumber: 5551234567,
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    city: "Los Angeles",
    degree: "PhD",
    specialties: specialties.slice(...randomSpecialty()),
    yearsOfExperience: 8,
    phoneNumber: 5559876543,
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    city: "Chicago",
    degree: "MSW",
    specialties: specialties.slice(...randomSpecialty()),
    yearsOfExperience: 5,
    phoneNumber: 5554567890,
  },
  {
    firstName: "Michael",
    lastName: "Brown",
    city: "Houston",
    degree: "MD",
    specialties: specialties.slice(...randomSpecialty()),
    yearsOfExperience: 12,
    phoneNumber: 5556543210,
  },
  {
    firstName: "Emily",
    lastName: "Davis",
    city: "Phoenix",
    degree: "PhD",
    specialties: specialties.slice(...randomSpecialty()),
    yearsOfExperience: 7,
    phoneNumber: 5553210987,
  },
  {
    firstName: "Chris",
    lastName: "Martinez",
    city: "Philadelphia",
    degree: "MSW",
    specialties: specialties.slice(...randomSpecialty()),
    yearsOfExperience: 9,
    phoneNumber: 5557890123,
  },
  {
    firstName: "Jessica",
    lastName: "Taylor",
    city: "San Antonio",
    degree: "MD",
    specialties: specialties.slice(...randomSpecialty()),
    yearsOfExperience: 11,
    phoneNumber: 5554561234,
  },
  {
    firstName: "David",
    lastName: "Harris",
    city: "San Diego",
    degree: "PhD",
    specialties: specialties.slice(...randomSpecialty()),
    yearsOfExperience: 6,
    phoneNumber: 5557896543,
  },
  {
    firstName: "Laura",
    lastName: "Clark",
    city: "Dallas",
    degree: "MSW",
    specialties: specialties.slice(...randomSpecialty()),
    yearsOfExperience: 4,
    phoneNumber: 5550123456,
  },
  {
    firstName: "Daniel",
    lastName: "Lewis",
    city: "San Jose",
    degree: "MD",
    specialties: specialties.slice(...randomSpecialty()),
    yearsOfExperience: 13,
    phoneNumber: 5553217654,
  },
  {
    firstName: "Sarah",
    lastName: "Lee",
    city: "Austin",
    degree: "PhD",
    specialties: specialties.slice(...randomSpecialty()),
    yearsOfExperience: 10,
    phoneNumber: 5551238765,
  },
  {
    firstName: "James",
    lastName: "King",
    city: "Jacksonville",
    degree: "MSW",
    specialties: specialties.slice(...randomSpecialty()),
    yearsOfExperience: 5,
    phoneNumber: 5556540987,
  },
  {
    firstName: "Megan",
    lastName: "Green",
    city: "San Francisco",
    degree: "MD",
    specialties: specialties.slice(...randomSpecialty()),
    yearsOfExperience: 14,
    phoneNumber: 5559873456,
  },
  {
    firstName: "Joshua",
    lastName: "Walker",
    city: "Columbus",
    degree: "PhD",
    specialties: specialties.slice(...randomSpecialty()),
    yearsOfExperience: 9,
    phoneNumber: 5556781234,
  },
  {
    firstName: "Amanda",
    lastName: "Hall",
    city: "Fort Worth",
    degree: "MSW",
    specialties: specialties.slice(...randomSpecialty()),
    yearsOfExperience: 3,
    phoneNumber: 5559872345,
  },
];

export { advocateData, generateAdvocateData };
