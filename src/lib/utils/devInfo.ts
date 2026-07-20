export interface Developer {
  // name: string;
  // role: string;
  // company: string;
  about: string;
  code: string[];
  interests: string[];
  frameWorks: string[];
  toolsUsed: string[];
  ides: string[];
}

export const Hasini: Developer = {
  about: "Hey, I'm Hasini Thakkallapelly, a CSE undergrad from NITT Trichy.",
  code: ["Golang", "Python", "C++", "C", "SQL"],
  interests: [
    "Application-Development",
    "Artificial Intelligence",
    "Backend Development",
    "Finance",
    "Leadership"
  ],
  toolsUsed: ["Docker", "Git", "Excel", "PowerBI", "Postman", "Github"],
  ides: ["VSCode", "Xcode", "PyCharm"],
  frameWorks: ["Flask", "FastAPI", "Gin", "PostGIS", "PostgreSQL", "MySQL", "Cassandra", "ScyllaDB", "CockroachDB",
    "Tensorflow", "numpy", "matplotlib"]
};