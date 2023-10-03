"use client";

import { useState } from "react";
import { useRouter } from "./../../../../node_modules/next/navigation";

export default function AddTopic() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !password || !message) {
      alert("requred for name email phone password message fill complet form!");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, password, message }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setname(e.target.value)}
        value={name}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Name"
      />

      <input
        onChange={(e) => setemail(e.target.value)}
        value={email}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic email"
      />

<input
        onChange={(e) => setphone(e.target.value)}
        value={phone}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic phone"
      />

<input
        onChange={(e) => setpassword(e.target.value)}
        value={password}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Password"
      />

<input
        onChange={(e) => setmessage(e.target.value)}
        value={message}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic message"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>
  );
}
