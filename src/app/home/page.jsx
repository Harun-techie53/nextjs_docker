"use client";
import CreateForm from "@/components/createForm";
import "./custom.css";
import { useEffect, useState } from "react";
import axios, { all } from "axios";
import ListItem from "@/components/listItemForm";

export default function HomePage() {
  const [allStudents, setAllStudents ] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const fetchStudentDetails = async () => {
    const {data} = await axios.get("http://localhost:8080/student/all");
    setAllStudents(data);
  };

  useEffect(() => {
    fetchStudentDetails();
  });

  const onInputNameChange = (e) => {
    setName(e.target.value);
  };

  const onInputAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/student/add",
        JSON.stringify({ name, address }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert('Added successfully!!');

      setName('');
      setAddress('');
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="home-page">
      <CreateForm
        name={name}
        address={address}
        onInputNameChange={onInputNameChange}
        onInputAddressChange={onInputAddressChange}
        handleFormSubmit={handleFormSubmit}
      />
      <ListItem allStudents={allStudents} />
    </div>
  );
}
